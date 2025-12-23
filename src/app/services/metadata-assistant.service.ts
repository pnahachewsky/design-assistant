import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from, of, throwError } from 'rxjs';
import { catchError, map, retry, timeout, switchMap, delay } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import { ApiKeyService } from './api-key.service';
import { FileParseService } from './file-parse.service';

export interface DocumentMetadata {
  description: string;
  keywords: string;
}

export interface EvaluationResult {
  suggestedDescription: string;
  suggestedKeywords: string;
  rationale: string;
  rationaleEnglish: string;
}

export interface MetadataResult {
  url: string;
  scrapedContent: string;
  metaDescription: string;
  metaKeywords: string;
  frenchTranslatedDescription?: string;
  frenchTranslatedKeywords?: string;
  englishTranslatedDescription?: string;
  englishTranslatedKeywords?: string;
  documentMetadata?: DocumentMetadata;
  evaluationResult?: EvaluationResult;
  language: 'en' | 'fr';
  modelUsed?: string;
  fallbackUsed?: boolean;
}

export interface ProcessingOptions {
  urls: string[];
  model: string;
  translateToFrench: boolean;
  translationModel?: string;  // Selected translation model (uses default if not provided)
  fallbackModels?: string[];
}

// Allowed hosts that support CORS - same as page assistant
const ALLOWED_HOSTS = new Set([
  'proto-cra.github.io',
  'cra-design.github.io',
  'cra-proto.github.io',
  'gc-proto.github.io',
  'test.canada.ca',
  'www.canada.ca'
]);

@Injectable({
  providedIn: 'root'
})
export class MetadataAssistantService {
  private readonly OPENROUTER_URL = 'https://openrouter.ai/api/v1/chat/completions';
  private readonly SCRAPING_TIMEOUT = 30000; // 30 seconds
  private readonly API_TIMEOUT = 60000; // 60 seconds
  private readonly TRANSLATION_TIMEOUT = 90000; // 90 seconds with retry

  // Default fallback models in order of preference
  private readonly DEFAULT_FALLBACK_MODELS = [
    'openai/gpt-4o-mini',                  // Cost-effective, excellent performance
    'google/gemini-2.0-flash-exp:free',    // Fast free option
    'meta-llama/llama-3.3-70b-instruct:free',
    'google/gemma-3-27b-it:free'
  ];

  // Translation models with fallback for rate limit handling
  // Ordered by translation quality: Claude 3.5 Sonnet (best), GPT-4o mini (cost-effective), then free models
  private readonly TRANSLATION_MODELS = [
    'anthropic/claude-3.5-sonnet',        // Best for translation - WMT24 winner, 78% "good" rating
    'openai/gpt-4o-mini',                  // Cost-effective paid model - excellent French support
    'google/gemini-2.0-flash-exp:free',    // Free, fast, good multilingual
    'meta-llama/llama-3.3-70b-instruct:free', // Free fallback
    'google/gemma-3-27b-it:free',          // Free fallback
    'openai/gpt-oss-20b:free'              // Free fallback
  ];

  private http = inject(HttpClient);
  private apiKeyService = inject(ApiKeyService);
  private fileParseService = inject(FileParseService);
  private translate = inject(TranslateService);

  processUrls(options: ProcessingOptions): Observable<MetadataResult[]> {
    const results: MetadataResult[] = [];
    const fallbackModels = options.fallbackModels || this.DEFAULT_FALLBACK_MODELS;

    return from(options.urls).pipe(
      switchMap(url => this.processUrl(url, options.model, options.translateToFrench, fallbackModels, options.translationModel)),
      map(result => {
        results.push(result);
        return results;
      }),
      catchError(error => {
        console.error('Error processing URLs:', error);
        return throwError(() => error);
      })
    );
  }

  private processUrl(url: string, model: string, translateToFrench: boolean, fallbackModels: string[], translationModel?: string): Observable<MetadataResult> {
    return this.scrapeUrl(url).pipe(
      switchMap(scrapedContent => {
        if (!scrapedContent || scrapedContent.length < 50) {
          return throwError(() => new Error(this.translate.instant('metadata.errors.contentTooShort')));
        }

        const language = this.detectLanguage(scrapedContent);

        return this.generateMetadataWithFallback(scrapedContent, model, language, fallbackModels).pipe(
          switchMap(metadata => {
            const result: MetadataResult = {
              url,
              scrapedContent,
              metaDescription: metadata.description,
              metaKeywords: metadata.keywords,
              language,
              modelUsed: metadata.modelUsed,
              fallbackUsed: metadata.fallbackUsed
            };

            if (translateToFrench && language === 'en') {
              return this.translateMetadata(metadata, translationModel).pipe(
                map(translated => ({
                  ...result,
                  frenchTranslatedDescription: translated.description,
                  frenchTranslatedKeywords: translated.keywords
                }))
              );
            }

            return of(result);
          })
        );
      })
    );
  }

  private scrapeUrl(url: string): Observable<string> {
    // Validate URL against allowed hosts (same as page assistant)
    try {
      const parsedUrl = new URL(url);
      if (!ALLOWED_HOSTS.has(parsedUrl.host)) {
        return throwError(() => new Error(
          this.translate.instant('metadata.errors.hostNotAllowed', { host: parsedUrl.host })
        ));
      }
    } catch {
      return throwError(() => new Error(this.translate.instant('metadata.urlInput.errors.invalidFormat')));
    }

    // Fetch with cache busting like page assistant
    return from(fetch(`${url}?_=${Date.now()}`, {
      method: 'GET',
      mode: 'cors',
      cache: 'no-cache'
    })).pipe(
      timeout(this.SCRAPING_TIMEOUT),
      switchMap(response => {
        if (!response.ok) {
          throw new Error(this.translate.instant('metadata.errors.failedToFetch', { status: response.status }));
        }
        return from(response.text());
      }),
      map(html => this.extractTextContent(html)),
      catchError((error) => {
        console.error('Error scraping URL:', error);
        if (error.message?.includes('Host not allowed')) {
          return throwError(() => error);
        }
        return throwError(() => new Error(
          this.translate.instant('metadata.errors.failedToScrape', { error: error.message || this.translate.instant('image.error.unknown') })
        ));
      })
    );
  }

  private extractTextContent(html: string): string {
    // Parse HTML using DOMParser
    const parser = new DOMParser();
    const doc = parser.parseFromString(html, 'text/html');

    // Find main element - matching Python's _find_main_element logic
    let mainElement = this.findMainElement(doc);

    if (!mainElement) {
      console.warn('No main element found in page, attempting fallback to body content');
      // Fallback: try to extract content from body
      mainElement = doc.body;
      if (!mainElement) {
        console.error('No body element found in page');
        return '';
      }
    }

    // Clone to avoid modifying original
    const contentElement = mainElement.cloneNode(true) as HTMLElement;

    // Remove unwanted elements - matching Python's unwanted_sections
    const unwantedClasses = [
      'provisional most-requested-bullets well well-sm brdr-0',
      'pagedetails container',
      'lnkbx',
      'pagedetails',
      'gc-prtts',
      'alert alert-info',
      'footer',
      'nav',
      'header',
      'aside'
    ];

    // Remove by class name (Python lines 128-131)
    unwantedClasses.forEach(className => {
      contentElement.querySelectorAll(`.${className.replace(/ /g, '.')}`).forEach(el => el.remove());
    });

    // Remove by tag name (Python lines 134-137)
    ['footer', 'nav', 'header', 'aside'].forEach(tagName => {
      contentElement.querySelectorAll(tagName).forEach(el => el.remove());
    });

    // Remove "On this page" navigation and mark the section
    contentElement.querySelectorAll('h2.h3').forEach(h2 => {
      const text = h2.textContent || '';
      if (text.includes('On this page:') || text.includes('Sur cette page :')) {
        const nextSibling = h2.nextElementSibling;
        if (nextSibling && nextSibling.tagName === 'UL') {
          // Mark all li elements in this UL as part of "On this page" section
          nextSibling.querySelectorAll('li').forEach(li => {
            li.setAttribute('data-on-this-page', 'true');
          });
          nextSibling.remove();
        }
        h2.remove();
      }
    });

    // Also mark any li elements that are direct children of "On this page" type navigation
    contentElement.querySelectorAll('h2').forEach(h2 => {
      const text = h2.textContent || '';
      if (text.includes('On this page') || text.includes('Sur cette page')) {
        let nextElement = h2.nextElementSibling;
        while (nextElement && nextElement.tagName === 'UL') {
          nextElement.querySelectorAll('li').forEach(li => {
            li.setAttribute('data-on-this-page', 'true');
          });
          nextElement = nextElement.nextElementSibling;
        }
      }
    });

    // Extract text from allowed elements - now including li tags
    const allowedTags = ['h1', 'h2', 'h3', 'h4', 'p', 'li'];
    const textContent: string[] = [];

    allowedTags.forEach(tag => {
      contentElement.querySelectorAll(tag).forEach(element => {
        // Skip chat elements (Python lines 153-154)
        if (tag === 'h2') {
          const text = element.textContent || '';
          if (text.includes('Chat with Charlie') || text.includes('Clavardez avec Charlie')) {
            return;
          }
        }

        // Skip li elements that are part of "On this page" navigation
        if (tag === 'li' && element.hasAttribute('data-on-this-page')) {
          return;
        }

        const text = element.textContent?.trim();
        if (text && text.length > 0) {  // Only add non-empty text
          textContent.push(text);
        }
      });
    });

    // Join with space and truncate to 2500 characters
    const fullText = textContent.join(' ');

    // Log extraction details for debugging
    console.log(`Extracted ${fullText.length} characters of content`);
    if (fullText.length < 100) {
      console.warn(`Very short content extracted: '${fullText}'`);
    } else if (fullText.length > 2500) {
      console.log(`Content truncated from ${fullText.length} to 2500 characters`);
    }

    return fullText.substring(0, 2500);
  }

  private findMainElement(doc: Document): Element | null {
    // Matching Python's main_selectors (lines 83-88)
    const mainSelectors = [
      'main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"]',
      'main[property="mainContentOfPage"][resource="#wb-main"][typeof="WebPageElement"].col-md-9.col-md-push-3',
      'main[role="main"][property="mainContentOfPage"].container',
      'main[role="main"][property="mainContentOfPage"]'
    ];

    // Try each selector (Python lines 90-99)
    for (const selector of mainSelectors) {
      const element = doc.querySelector(selector);
      if (element) {
        // Check for container div inside (Python lines 94-98)
        const isLastSelector = selector === mainSelectors[mainSelectors.length - 1];
        if (isLastSelector) {
          const containerDiv = element.querySelector('div.container');
          if (containerDiv) {
            console.log('Found main element with container div inside');
            return containerDiv;
          }
        }
        return element;
      }
    }

    // Generic fallback (Python lines 101-109)
    const mainElement = doc.querySelector('main[role="main"]');
    if (mainElement) {
      console.log('Found main element using generic selector');
      const containerDiv = mainElement.querySelector('div.container');
      if (containerDiv) {
        console.log('Found container div inside main element');
        return containerDiv;
      }
      return mainElement;
    }

    // Additional fallback: try just a plain <main> tag
    const plainMain = doc.querySelector('main');
    if (plainMain) {
      console.log('Found plain main element');
      const containerDiv = plainMain.querySelector('div.container');
      if (containerDiv) {
        console.log('Found container div inside plain main element');
        return containerDiv;
      }
      return plainMain;
    }

    // Last resort: try to find any element with role="main"
    const roleMain = doc.querySelector('[role="main"]');
    if (roleMain) {
      console.log('Found element with role="main"');
      return roleMain;
    }

    return null;
  }

  private detectLanguage(content: string): 'en' | 'fr' {
    // Simple language detection based on common French words
    const frenchIndicators = [
      'le', 'la', 'les', 'de', 'du', 'des', 'un', 'une',
      'et', 'ou', 'mais', 'pour', 'avec', 'sans', 'sur',
      'dans', 'par', 'que', 'qui', 'quoi', 'dont', 'où'
    ];

    const words = content.toLowerCase().split(/\s+/);
    const frenchWordCount = words.filter(word => frenchIndicators.includes(word)).length;
    const frenchRatio = frenchWordCount / Math.max(words.length, 1);

    return frenchRatio > 0.05 ? 'fr' : 'en';
  }

  private generateMetadataWithFallback(content: string, primaryModel: string, language: 'en' | 'fr', fallbackModels: string[]): Observable<{ description: string, keywords: string, modelUsed: string, fallbackUsed: boolean }> {
    // Try primary model first, then fallbacks
    const modelsToTry = [primaryModel, ...fallbackModels.filter(m => m !== primaryModel)];

    return this.tryModelsInSequence(content, modelsToTry, language, 0, primaryModel);
  }

  private tryModelsInSequence(content: string, models: string[], language: 'en' | 'fr', attemptIndex: number, primaryModel: string): Observable<{ description: string, keywords: string, modelUsed: string, fallbackUsed: boolean }> {
    if (attemptIndex >= models.length) {
      return throwError(() => new Error(this.translate.instant('metadata.errors.allModelsFailed')));
    }

    const currentModel = models[attemptIndex];
    const fallbackUsed = attemptIndex > 0;
    console.log(`Attempting metadata generation with model: ${currentModel} (attempt ${attemptIndex + 1}/${models.length})`);

    return this.generateMetadata(content, currentModel, language).pipe(
      map(result => ({
        ...result,
        modelUsed: currentModel,
        fallbackUsed
      })),
      catchError(error => {
        console.warn(`Model ${currentModel} failed:`, error.message);

        // Check if it's a rate limit error
        if (this.isRateLimitError(error)) {
          console.log(`Rate limit detected for ${currentModel}, trying next model...`);
          return this.tryModelsInSequence(content, models, language, attemptIndex + 1, primaryModel);
        }

        // For other errors, still try fallback if available
        if (attemptIndex < models.length - 1) {
          console.log(`Error with ${currentModel}, trying next model...`);
          return this.tryModelsInSequence(content, models, language, attemptIndex + 1, primaryModel);
        }

        // Re-throw the error if no more models to try
        return throwError(() => error);
      })
    );
  }

  private isRateLimitError(error: unknown): boolean {
    if (!error) return false;

    const errorAny = error as { status?: number; error?: { error?: { code?: number; message?: string } }; message?: string };
    const errorMessage = errorAny.error?.error?.message || errorAny.message || '';
    const errorLower = typeof errorMessage === 'string' ? errorMessage.toLowerCase() : '';

    return errorLower.includes('rate limit') ||
      errorLower.includes('quota exceeded') ||
      errorLower.includes('too many requests') ||
      errorLower.includes('429') ||
      errorLower.includes('key limit exceeded') ||
      errorAny.status === 403 ||
      errorAny.status === 429;
  }

  private generateMetadata(content: string, model: string, language: 'en' | 'fr'): Observable<{ description: string, keywords: string }> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error(this.translate.instant('metadata.errors.noApiKey')));
    }

    // Generate description
    const descriptionPrompt = language === 'en'
      ? `As a Canada Revenue Agency search engine optimization expert, analyze the following content carefully and provide a concise, complete summary suitable for a meta description in English. The summary MUST be highly relevant to the specific content provided and capture its main topic and purpose. Use topic-specific terms found in the content, write in full sentences, and ensure the summary ends concisely within 275 characters.

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY the meta description text itself
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO step-by-step analysis
  ✗ NO explanations of your approach
  ✗ NO preambles like "Here is..." or "The description is..."
  ✗ NO commentary about the content
  ✗ NO labels like "Summary:", "Meta description:", "Answer:", etc.
  ✗ NO train of thought or internal monologue
  ✗ NO markdown formatting, asterisks, or bold text
- Simply output the meta description sentence(s) and nothing else
- The first character of your response should be the first character of the meta description

${content}

Meta description (output text only):`
      : `En tant qu'expert en référencement de l'Agence du revenu du Canada, analysez attentivement le contenu suivant et fournissez un résumé concis et complet adapté à une méta-description en français. Le résumé DOIT être parfaitement adapté au contenu spécifique fourni. Utilisez des termes spécifiques au sujet, écrivez en phrases complètes, et assurez-vous que le résumé se termine de manière concise dans les 275 caractères.

⚠️ EXIGENCES CRITIQUES DE FORMAT DE SORTIE - LISEZ ATTENTIVEMENT:
- Votre réponse COMPLÈTE doit être UNIQUEMENT le texte de la méta-description
- N'incluez AUCUN des éléments suivants:
  ✗ AUCUN raisonnement ou processus de réflexion
  ✗ AUCUNE analyse étape par étape
  ✗ AUCUNE explication de votre approche
  ✗ AUCUN préambule comme "Voici..." ou "La description est..."
  ✗ AUCUN commentaire sur le contenu
  ✗ AUCUNE étiquette comme "Résumé:", "Méta-description:", "Réponse:", etc.
  ✗ AUCUNE chaîne de pensée ou monologue interne
  ✗ AUCUN formatage markdown, astérisques ou texte en gras
- Sortez simplement la ou les phrases de méta-description et rien d'autre
- Le premier caractère de votre réponse doit être le premier caractère de la méta-description

${content}

Méta-description (texte uniquement):`;

    const keywordsPrompt = language === 'en'
      ? `As a Canada Revenue Agency search engine optimization expert, carefully analyze the following content and identify 10 meaningful, topic-specific meta keywords that are DIRECTLY EXTRACTED from or strongly implied by the content.

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY a comma-separated list of keywords
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO analysis or explanations
  ✗ NO preambles like "Here are..." or "The keywords are..."
  ✗ NO labels like "Keywords:", "Answer:", etc.
  ✗ NO numbering or bullet points
  ✗ NO train of thought
  ✗ NO markdown formatting or asterisks
- Exclude 'Canada Revenue Agency' from the keywords
- Simply output: keyword1, keyword2, keyword3, etc.
- The first character of your response should be the first letter of the first keyword

${content}

Keywords (comma-separated list only):`
      : `En tant qu'expert en optimisation pour les moteurs de recherche de l'Agence du revenu du Canada, analysez attentivement le contenu suivant et identifiez 10 mots-clés méta significatifs qui sont DIRECTEMENT EXTRAITS du contenu.

⚠️ EXIGENCES CRITIQUES DE FORMAT DE SORTIE - LISEZ ATTENTIVEMENT:
- Votre réponse COMPLÈTE doit être UNIQUEMENT une liste de mots-clés séparés par des virgules
- N'incluez AUCUN des éléments suivants:
  ✗ AUCUN raisonnement ou processus de réflexion
  ✗ AUCUNE analyse ou explication
  ✗ AUCUN préambule comme "Voici..." ou "Les mots-clés sont..."
  ✗ AUCUNE étiquette comme "Mots-clés:", "Réponse:", etc.
  ✗ AUCUNE numérotation ou puces
  ✗ AUCUNE chaîne de pensée
  ✗ AUCUN formatage markdown ou astérisques
- Excluez 'Agence du revenu du Canada' des mots-clés
- Sortez simplement: mot-clé1, mot-clé2, mot-clé3, etc.
- Le premier caractère de votre réponse doit être la première lettre du premier mot-clé

${content}

Mots-clés (liste séparée par des virgules uniquement):`;

    return this.callOpenRouter(descriptionPrompt, model, 200).pipe(
      switchMap(description => {
        return this.callOpenRouter(keywordsPrompt, model, 100).pipe(
          map(keywords => ({
            description: this.cleanMetadataResponse(description),
            keywords: this.cleanKeywordsResponse(keywords)
          }))
        );
      })
    );
  }

  private translateMetadata(
    metadata: { description: string, keywords: string },
    selectedModel?: string
  ): Observable<{ description: string, keywords: string }> {
    // If a specific translation model is selected, use it directly without fallback
    if (selectedModel) {
      console.log(`Using user-selected translation model: ${selectedModel}`);
      return this.translateWithModel(metadata, selectedModel);
    }
    // Otherwise use the fallback array
    return this.translateWithFallback(metadata, 0);
  }

  private translateWithModel(
    metadata: { description: string, keywords: string },
    model: string
  ): Observable<{ description: string, keywords: string }> {
    const descriptionPrompt = `You are a professional translator specializing in Canadian government content. Translate the following English meta description to French, maintaining the formal tone used by the Canada Revenue Agency (CRA).

Important CRA-specific terminology:
- "Canada Revenue Agency" → "Agence du revenu du Canada"
- "income tax" → "impôt sur le revenu"
- "benefits" → "prestations"
- "tax return" → "déclaration de revenus"
- "GST/HST" → "TPS/TVH"
- "business number" → "numéro d'entreprise"
- "tax credit" → "crédit d'impôt"
- "deduction" → "déduction"
- "tax-free savings account (TFSA)" → "compte d'épargne libre d'impôt (CELI)"
- "registered retirement savings plan (RRSP)" → "régime enregistré d'épargne-retraite (REER)"

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY the French translation
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO explanations of translation choices
  ✗ NO preambles like "Here is..." or "The translation is..."
  ✗ NO labels like "French translation:", "Answer:", etc.
  ✗ NO commentary about the text
  ✗ NO train of thought
  ✗ NO markdown formatting or asterisks
- Simply output the translated French text and nothing else
- The first character of your response should be the first character of the French translation

${metadata.description}

French translation (text only):`;

    const keywordsPrompt = `Translate each of these English keywords to French.

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY a comma-separated list of French keywords
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO analysis or explanations
  ✗ NO preambles like "Here are..." or "The keywords are..."
  ✗ NO labels like "French keywords:", "Answer:", etc.
  ✗ NO train of thought
  ✗ NO markdown formatting or asterisks
- Simply output: mot-clé1, mot-clé2, mot-clé3, etc.
- The first character of your response should be the first letter of the first keyword

${metadata.keywords}

French keywords (comma-separated list only):`;

    return this.callOpenRouter(descriptionPrompt, model, 200, this.TRANSLATION_TIMEOUT).pipe(
      retry({ count: 1, delay: 2000 }), // Retry once after 2 seconds for cold starts
      switchMap(description => {
        return this.callOpenRouter(keywordsPrompt, model, 100, this.TRANSLATION_TIMEOUT).pipe(
          retry({ count: 1, delay: 2000 }),
          map(keywords => ({
            description: this.cleanMetadataResponse(description),
            keywords: this.cleanKeywordsResponse(keywords)
          }))
        );
      })
    );
  }

  private translateWithFallback(metadata: { description: string, keywords: string }, attemptIndex: number): Observable<{ description: string, keywords: string }> {
    if (attemptIndex >= this.TRANSLATION_MODELS.length) {
      return throwError(() => new Error(this.translate.instant('metadata.error.allTranslationModelsFailed')));
    }

    const translationModel = this.TRANSLATION_MODELS[attemptIndex];
    console.log(`Attempting translation with model: ${translationModel} (attempt ${attemptIndex + 1}/${this.TRANSLATION_MODELS.length})`);

    const descriptionPrompt = `You are a professional translator specializing in Canadian government content. Translate the following English meta description to French, maintaining the formal tone used by the Canada Revenue Agency (CRA).

Important CRA-specific terminology:
- "Canada Revenue Agency" → "Agence du revenu du Canada"
- "income tax" → "impôt sur le revenu"
- "benefits" → "prestations"
- "tax return" → "déclaration de revenus"
- "GST/HST" → "TPS/TVH"
- "business number" → "numéro d'entreprise"
- "tax credit" → "crédit d'impôt"
- "deduction" → "déduction"
- "tax-free savings account (TFSA)" → "compte d'épargne libre d'impôt (CELI)"
- "registered retirement savings plan (RRSP)" → "régime enregistré d'épargne-retraite (REER)"

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY the French translation
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO explanations of translation choices
  ✗ NO preambles like "Here is..." or "The translation is..."
  ✗ NO labels like "French translation:", "Answer:", etc.
  ✗ NO commentary about the text
  ✗ NO train of thought
  ✗ NO markdown formatting or asterisks
- Simply output the translated French text and nothing else
- The first character of your response should be the first character of the French translation

${metadata.description}

French translation (text only):`;

    const keywordsPrompt = `Translate each of these English keywords to French.

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY a comma-separated list of French keywords
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO analysis or explanations
  ✗ NO preambles like "Here are..." or "The keywords are..."
  ✗ NO labels like "French keywords:", "Answer:", etc.
  ✗ NO train of thought
  ✗ NO markdown formatting or asterisks
- Simply output: mot-clé1, mot-clé2, mot-clé3, etc.
- The first character of your response should be the first letter of the first keyword

${metadata.keywords}

French keywords (comma-separated list only):`;

    return this.callOpenRouter(descriptionPrompt, translationModel, 200, this.TRANSLATION_TIMEOUT).pipe(
      retry({ count: 1, delay: 2000 }), // Retry once after 2 seconds for cold starts
      switchMap(description => {
        return this.callOpenRouter(keywordsPrompt, translationModel, 100, this.TRANSLATION_TIMEOUT).pipe(
          retry({ count: 1, delay: 2000 }),
          map(keywords => ({
            description: this.cleanMetadataResponse(description),
            keywords: this.cleanKeywordsResponse(keywords)
          }))
        );
      }),
      catchError(error => {
        console.warn(`Translation model ${translationModel} failed:`, error);

        // Check if it's a rate limit error
        if (this.isRateLimitError(error)) {
          console.log(`Rate limit detected for ${translationModel}, trying next model...`);
          return this.translateWithFallback(metadata, attemptIndex + 1);
        }

        // For other errors, still try fallback if available
        if (attemptIndex < this.TRANSLATION_MODELS.length - 1) {
          console.log(`Error with ${translationModel}, trying next model...`);
          return this.translateWithFallback(metadata, attemptIndex + 1);
        }

        // If no more models to try, throw the error
        return throwError(() => error);
      })
    );
  }

  private callOpenRouter(prompt: string, model: string, maxTokens: number, timeoutMs: number = this.API_TIMEOUT): Observable<string> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error(this.translate.instant('metadata.errors.noApiKey')));
    }

    const headers = new HttpHeaders({
      'Authorization': `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
      'HTTP-Referer': 'https://content-assistant.app',
      'X-Title': 'Content Assistant'
    });

    // System message to disable reasoning and enforce direct output
    const systemMessage = {
      role: 'system',
      content: 'You are a precise metadata generator. Output ONLY the requested content with absolutely NO reasoning, NO explanations, NO thinking process, NO preamble, and NO additional commentary. Your response must contain ONLY the final answer.'
    };

    const payload: {
      model: string;
      messages: { role: string; content: string }[];
      max_tokens: number;
      temperature: number;
      stop?: string[];
      provider?: {
        order?: string[];
        allow_fallbacks?: boolean;
        require_parameters?: boolean;
      };
    } = {
      model: model,
      messages: [systemMessage, { role: 'user', content: prompt }],
      max_tokens: maxTokens,
      temperature: 0.1, // Lower temperature for more deterministic output
      stop: ['Reasoning:', 'Thoughts:', 'Thinking:', 'Analysis:', 'Explanation:', 'Step by step:', 'Let me think', 'First,', 'To answer'], // Stop tokens to prevent reasoning
    };

    return this.http.post<{ choices?: { message?: { content?: string; reasoning?: string } }[]; error?: { message?: string; code?: number } }>(this.OPENROUTER_URL, payload, { headers }).pipe(
      timeout(timeoutMs),
      map(response => {
        // Check if the response has an error message
        if (response.error?.message) {
          console.error('API returned error:', response.error.message);
          throw new Error(response.error.message);
        }

        if (response.choices && response.choices[0]?.message) {
          const message = response.choices[0].message;

          // ONLY use content field - ignore reasoning field entirely
          let result = message.content || '';

          if (result && result.trim()) {
            // Aggressively strip any reasoning-like content that leaked through
            result = this.stripReasoningFromResponse(result.trim());
            return result;
          }
        }

        console.error('Invalid API response structure:', JSON.stringify(response));
        throw new Error(this.translate.instant('metadata.errors.invalidApiResponse'));
      }),
      catchError(error => {
        console.error('OpenRouter API error:', error);

        // Preserve the original error structure for better fallback detection
        const httpError = error as { status?: number; error?: { error?: { code?: number; message?: string } }; message?: string };

        // Handle rate limit errors (429)
        if (httpError.status === 429 || (httpError.error?.error?.code === 429)) {
          return throwError(() => {
            const rateLimitError = new Error(this.translate.instant('metadata.error.rateLimitExceeded')) as Error & { status: number; originalError: unknown };
            rateLimitError.status = 429;
            rateLimitError.originalError = error;
            return rateLimitError;
          });
        }

        // Handle service unavailable errors (503)
        if (httpError.status === 503) {
          return throwError(() => {
            const serviceError = new Error(this.translate.instant('metadata.errors.serviceUnavailable')) as Error & { status: number; originalError: unknown };
            serviceError.status = 503;
            serviceError.originalError = error;
            return serviceError;
          });
        }

        // Handle bad gateway errors (502)
        if (httpError.status === 502) {
          return throwError(() => {
            const gatewayError = new Error(this.translate.instant('metadata.errors.gatewayError')) as Error & { status: number; originalError: unknown };
            gatewayError.status = 502;
            gatewayError.originalError = error;
            return gatewayError;
          });
        }

        // For other errors, preserve status if available
        const errorMessage = httpError.error?.error?.message || httpError.message || this.translate.instant('metadata.errors.failedToGenerate');
        const newError = new Error(errorMessage) as Error & { status?: number; originalError: unknown };
        newError.status = httpError.status;
        newError.originalError = error;
        return throwError(() => newError);
      })
    );
  }

  private stripReasoningFromResponse(response: string): string {
    let cleaned = response.trim();

    // Remove any reasoning blocks that start with common reasoning indicators
    const reasoningPatterns = [
      /^(?:Reasoning|Thoughts?|Thinking|Analysis|Explanation|Step by step|Let me think|First,|To answer|Here's my reasoning):\s*/i,
      /^(?:Certainly|Sure|Of course|Absolutely)[,!]?\s+(?:let me|I'll|I will)\s+/i,
      /^(?:I|I'll|I will|Let me)\s+(?:analyze|think|consider|explain|provide|generate)\s+/i,
      /\*\*(?:Reasoning|Thoughts?|Analysis|Explanation):\*\*[\s\S]*$/i,
      /---\s*(?:Reasoning|Analysis|Explanation)[\s\S]*$/i
    ];

    for (const pattern of reasoningPatterns) {
      cleaned = cleaned.replace(pattern, '');
    }

    // Remove content between reasoning delimiters
    cleaned = cleaned.replace(/\[(?:Reasoning|Thoughts?|Analysis)\][\s\S]*?\[\/(?:Reasoning|Thoughts?|Analysis)\]/gi, '');

    // Remove markdown-style reasoning sections
    cleaned = cleaned.replace(/#{1,6}\s+(?:Reasoning|Analysis|Explanation|Thoughts?)[\s\S]*?(?=\n#{1,6}|\n\n|$)/gi, '');

    // If response contains common reasoning introducers, take only the part after them
    const splitPatterns = [
      /(?:^|\n)(?:Final answer|Answer|Result|Output):\s*/i,
      /(?:^|\n)(?:Meta )?(?:description|keywords):\s*/i
    ];

    for (const pattern of splitPatterns) {
      const match = cleaned.match(pattern);
      if (match && match.index !== undefined) {
        cleaned = cleaned.substring(match.index + match[0].length);
        break;
      }
    }

    return cleaned.trim();
  }

  private cleanMetadataResponse(response: string): string {
    // First strip any reasoning content
    let cleaned = this.stripReasoningFromResponse(response);

    // Remove quotes if present
    if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
      cleaned = cleaned.slice(1, -1);
    }

    // Remove common prefixes
    const prefixes = [
      'Here is a summary:', 'Summary:', 'Meta description:',
      'Voici un résumé:', 'Résumé:', 'Méta-description:',
      'French translation:', 'Translation:', 'Final answer:',
      'Answer:', 'Result:', 'Output:'
    ];

    for (const prefix of prefixes) {
      if (cleaned.toLowerCase().startsWith(prefix.toLowerCase())) {
        cleaned = cleaned.substring(prefix.length).trim();
      }
    }

    // Remove any remaining asterisks, markdown formatting
    cleaned = cleaned.replace(/\*\*/g, '');

    // Truncate to 275 characters if needed
    if (cleaned.length > 275) {
      const lastPeriod = cleaned.lastIndexOf('.', 275);
      if (lastPeriod > 200) {
        cleaned = cleaned.substring(0, lastPeriod + 1);
      } else {
        cleaned = cleaned.substring(0, 275);
      }
    }

    return cleaned;
  }

  private cleanKeywordsResponse(response: string): string {
    // First strip any reasoning content
    let cleaned = this.stripReasoningFromResponse(response);

    // Remove quotes if present
    if (cleaned.startsWith('"') && cleaned.endsWith('"')) {
      cleaned = cleaned.slice(1, -1);
    }

    // Remove common prefixes
    const prefixes = [
      'Keywords:', 'Here are the keywords:', 'Meta keywords:',
      'Mots-clés:', 'Voici les mots-clés:', 'French keywords:',
      'Final answer:', 'Answer:', 'Result:', 'Output:'
    ];

    for (const prefix of prefixes) {
      if (cleaned.toLowerCase().startsWith(prefix.toLowerCase())) {
        cleaned = cleaned.substring(prefix.length).trim();
      }
    }

    // Remove any remaining asterisks, markdown formatting
    cleaned = cleaned.replace(/\*\*/g, '');

    // Clean up the keywords list
    const keywords = cleaned.split(',').map(k => k.trim()).filter(k => k.length > 0);
    return keywords.join(', ');
  }

  // Document processing methods
  processDocument(file: File): Observable<DocumentMetadata> {
    return from(this.extractDocumentText(file)).pipe(
      switchMap(content => {
        if (!content || content.length < 50) {
          return throwError(() => new Error(this.translate.instant('metadata.errors.documentContentTooShort')));
        }
        return this.generateMetadataFromDocument(content);
      })
    );
  }

  // New document processing methods for enhanced document upload
  processEnglishDocument(file: File, model: string, translationModel?: string): Observable<{
    englishMetadata: DocumentMetadata;
    frenchTranslation: DocumentMetadata;
  }> {
    return from(this.extractDocumentText(file)).pipe(
      switchMap(content => {
        if (!content || content.length < 50) {
          return throwError(() => new Error(this.translate.instant('metadata.errors.documentContentTooShort')));
        }

        // Generate English metadata
        return this.generateMetadata(content, model, 'en').pipe(
          switchMap(englishMetadata => {
            // Translate to French with CRA terminology
            return this.translateMetadata(englishMetadata, translationModel).pipe(
              map(frenchTranslation => ({
                englishMetadata,
                frenchTranslation
              }))
            );
          })
        );
      })
    );
  }

  processFrenchDocument(file: File): Observable<DocumentMetadata> {
    return from(this.extractDocumentText(file)).pipe(
      switchMap(content => {
        if (!content || content.length < 50) {
          return throwError(() => new Error(this.translate.instant('metadata.errors.documentContentTooShort')));
        }
        // Generate French metadata directly
        return this.generateMetadataFromDocument(content);
      })
    );
  }

  processFrenchDocumentWithEnglishTranslation(file: File, model: string, translationModel?: string): Observable<{
    frenchMetadata: DocumentMetadata;
    englishTranslation: DocumentMetadata;
  }> {
    return from(this.extractDocumentText(file)).pipe(
      switchMap(content => {
        if (!content || content.length < 50) {
          return throwError(() => new Error(this.translate.instant('metadata.errors.documentContentTooShort')));
        }

        // Generate French metadata
        return this.generateMetadata(content, model, 'fr').pipe(
          switchMap(frenchMetadata => {
            // Translate to English
            return this.translateMetadataToEnglish(frenchMetadata, translationModel).pipe(
              map(englishTranslation => ({
                frenchMetadata,
                englishTranslation
              }))
            );
          })
        );
      })
    );
  }

  private translateMetadataToEnglish(
    metadata: { description: string, keywords: string },
    selectedModel?: string
  ): Observable<{ description: string, keywords: string }> {
    const model = selectedModel || 'anthropic/claude-3.5-sonnet';
    console.log(`Translating French to English using model: ${model}`);

    const descriptionPrompt = `You are a professional translator specializing in Canadian government content. Translate the following French meta description to English, maintaining the formal tone used by the Canada Revenue Agency (CRA).

Important CRA-specific terminology:
- "Agence du revenu du Canada" → "Canada Revenue Agency"
- "impôt sur le revenu" → "income tax"
- "prestations" → "benefits"
- "déclaration de revenus" → "tax return"
- "TPS/TVH" → "GST/HST"
- "numéro d'entreprise" → "business number"
- "crédit d'impôt" → "tax credit"
- "déduction" → "deduction"
- "compte d'épargne libre d'impôt (CELI)" → "tax-free savings account (TFSA)"
- "régime enregistré d'épargne-retraite (REER)" → "registered retirement savings plan (RRSP)"

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY the English translation
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO explanations of translation choices
  ✗ NO preambles like "Here is..." or "The translation is..."
  ✗ NO labels like "English translation:", "Answer:", etc.
  ✗ NO commentary about the text
  ✗ NO train of thought
  ✗ NO markdown formatting or asterisks
- Simply output the translated English text and nothing else
- The first character of your response should be the first character of the English translation

${metadata.description}

English translation (text only):`;

    const keywordsPrompt = `Translate each of these French keywords to English.

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS - READ CAREFULLY:
- Your ENTIRE response must be ONLY a comma-separated list of English keywords
- Do NOT include ANY of the following:
  ✗ NO reasoning or thinking process
  ✗ NO analysis or explanations
  ✗ NO preambles like "Here are..." or "The keywords are..."
  ✗ NO labels like "English keywords:", "Answer:", etc.
  ✗ NO train of thought
  ✗ NO markdown formatting or asterisks
- Simply output: keyword1, keyword2, keyword3, etc.
- The first character of your response should be the first letter of the first keyword

${metadata.keywords}

English keywords (comma-separated list only):`;

    return this.callOpenRouter(descriptionPrompt, model, 200, this.TRANSLATION_TIMEOUT).pipe(
      retry({ count: 1, delay: 2000 }),
      switchMap(description => {
        return this.callOpenRouter(keywordsPrompt, model, 100, this.TRANSLATION_TIMEOUT).pipe(
          retry({ count: 1, delay: 2000 }),
          map(keywords => ({
            description: this.cleanMetadataResponse(description),
            keywords: this.cleanKeywordsResponse(keywords)
          }))
        );
      })
    );
  }

  processBothDocuments(
    englishFile: File,
    frenchFile: File,
    model: string
  ): Observable<{
    englishMetadata: DocumentMetadata;
    autoTranslatedFrench: DocumentMetadata;
    frenchDocMetadata: DocumentMetadata;
    comparison: EvaluationResult;
  }> {
    // Process English document first
    return this.processEnglishDocument(englishFile, model).pipe(
      switchMap(englishResult => {
        // Process French document
        return this.processFrenchDocument(frenchFile).pipe(
          switchMap(frenchDocMetadata => {
            // Compare the auto-translated French with French document metadata
            return this.evaluateMetadata(englishResult.frenchTranslation, frenchDocMetadata).pipe(
              map(comparison => ({
                englishMetadata: englishResult.englishMetadata,
                autoTranslatedFrench: englishResult.frenchTranslation,
                frenchDocMetadata,
                comparison
              }))
            );
          })
        );
      })
    );
  }

  // New method for document tab - extracts text, detects language, generates metadata
  processDocumentForMetadata(file: File, model: string): Observable<{ language: 'en' | 'fr', text: string, metadata: MetadataResult }> {
    return from(this.extractDocumentText(file)).pipe(
      switchMap(content => {
        if (!content || content.length < 50) {
          return throwError(() => new Error(this.translate.instant('metadata.errors.documentContentTooShort')));
        }

        // Detect language
        const language = this.detectLanguage(content);

        // Generate metadata based on detected language
        if (language === 'fr') {
          // For French documents, generate French metadata
          return this.generateMetadataFromDocument(content).pipe(
            map(metadata => ({
              language,
              text: content,
              metadata: {
                url: file.name,
                scrapedContent: content.substring(0, 500) + '...', // Show preview
                metaDescription: metadata.description,
                metaKeywords: metadata.keywords,
                language: 'fr' as const,
                modelUsed: 'anthropic/claude-3.5-sonnet',
                fallbackUsed: false
              }
            }))
          );
        } else {
          // For English documents, generate English metadata
          return this.generateMetadata(content, model, language).pipe(
            map(metadata => ({
              language,
              text: content,
              metadata: {
                url: file.name,
                scrapedContent: content.substring(0, 500) + '...', // Show preview
                metaDescription: metadata.description,
                metaKeywords: metadata.keywords,
                language: 'en' as const,
                modelUsed: model,
                fallbackUsed: false
              }
            }))
          );
        }
      })
    );
  }

  private async extractDocumentText(file: File): Promise<string> {
    const arrayBuffer = await file.arrayBuffer();
    return this.fileParseService.extractDocxParagraphs(arrayBuffer);
  }

  private generateMetadataFromDocument(content: string): Observable<DocumentMetadata> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error(this.translate.instant('metadata.errors.noApiKey')));
    }

    // Use same prompts as French metadata generation but for French content
    const descriptionPrompt = `En tant qu'expert en référencement de l'Agence du revenu du Canada, analysez attentivement le contenu suivant et fournissez un résumé concis et complet adapté à une méta-description en français. Le résumé DOIT être parfaitement adapté au contenu spécifique fourni. Utilisez des termes spécifiques au sujet, écrivez en phrases complètes, et assurez-vous que le résumé se termine de manière concise dans les 275 caractères.

⚠️ EXIGENCES CRITIQUES DE FORMAT DE SORTIE - LISEZ ATTENTIVEMENT:
- Votre réponse COMPLÈTE doit être UNIQUEMENT le texte de la méta-description
- N'incluez AUCUN des éléments suivants:
  ✗ AUCUN raisonnement ou processus de réflexion
  ✗ AUCUNE analyse étape par étape
  ✗ AUCUNE explication de votre approche
  ✗ AUCUN préambule comme "Voici..." ou "La description est..."
  ✗ AUCUN commentaire sur le contenu
  ✗ AUCUNE étiquette comme "Résumé:", "Méta-description:", "Réponse:", etc.
  ✗ AUCUNE chaîne de pensée ou monologue interne
  ✗ AUCUN formatage markdown, astérisques ou texte en gras
- Sortez simplement la ou les phrases de méta-description et rien d'autre
- Le premier caractère de votre réponse doit être le premier caractère de la méta-description

${content}

Méta-description (texte uniquement):`;

    const keywordsPrompt = `En tant qu'expert en optimisation pour les moteurs de recherche de l'Agence du revenu du Canada, analysez attentivement le contenu suivant et identifiez 10 mots-clés méta significatifs qui sont DIRECTEMENT EXTRAITS du contenu.

⚠️ EXIGENCES CRITIQUES DE FORMAT DE SORTIE - LISEZ ATTENTIVEMENT:
- Votre réponse COMPLÈTE doit être UNIQUEMENT une liste de mots-clés séparés par des virgules
- N'incluez AUCUN des éléments suivants:
  ✗ AUCUN raisonnement ou processus de réflexion
  ✗ AUCUNE analyse ou explication
  ✗ AUCUN préambule comme "Voici..." ou "Les mots-clés sont..."
  ✗ AUCUNE étiquette comme "Mots-clés:", "Réponse:", etc.
  ✗ AUCUNE numérotation ou puces
  ✗ AUCUNE chaîne de pensée
  ✗ AUCUN formatage markdown ou astérisques
- Excluez 'Agence du revenu du Canada' des mots-clés
- Sortez simplement: mot-clé1, mot-clé2, mot-clé3, etc.
- Le premier caractère de votre réponse doit être la première lettre du premier mot-clé

${content}

Mots-clés (liste séparée par des virgules uniquement):`;

    // Use Claude 3.5 Sonnet for French metadata generation - best translation model
    const model = 'anthropic/claude-3.5-sonnet';

    return this.callOpenRouter(descriptionPrompt, model, 200).pipe(
      retry({
        count: 2,
        delay: (error: Error & { status?: number }, retryCount) => {
          // Retry on 503 (service unavailable) and 502 (bad gateway) with exponential backoff
          if (error.status === 503 || error.status === 502) {
            const delayMs = 3000 * Math.pow(2, retryCount - 1); // 3s, 6s
            console.log(`Retrying after ${delayMs}ms due to ${error.status} error...`);
            return of(error).pipe(delay(delayMs));
          }
          // Don't retry for other errors
          throw error;
        }
      }),
      switchMap(description => {
        return this.callOpenRouter(keywordsPrompt, model, 100).pipe(
          retry({
            count: 2,
            delay: (error: Error & { status?: number }, retryCount) => {
              if (error.status === 503 || error.status === 502) {
                const delayMs = 3000 * Math.pow(2, retryCount - 1);
                console.log(`Retrying keywords after ${delayMs}ms due to ${error.status} error...`);
                return of(error).pipe(delay(delayMs));
              }
              throw error;
            }
          }),
          map(keywords => ({
            description: this.cleanMetadataResponse(description),
            keywords: this.cleanKeywordsResponse(keywords)
          }))
        );
      })
    );
  }

  evaluateMetadata(
    translatedMetadata: { description: string, keywords: string },
    documentMetadata: DocumentMetadata
  ): Observable<EvaluationResult> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error(this.translate.instant('metadata.errors.noApiKey')));
    }

    const evaluationPrompt = `Vous êtes un expert en optimisation pour les moteurs de recherche (SEO) pour l'Agence du revenu du Canada. Vous devez évaluer deux versions de métadonnées en français et suggérer la meilleure version finale.

VERSION 1 - Traduit de l'anglais:
Description: ${translatedMetadata.description}
Mots-clés: ${translatedMetadata.keywords}

VERSION 2 - Généré à partir du document français:
Description: ${documentMetadata.description}
Mots-clés: ${documentMetadata.keywords}

Tâche:
1. Comparez les deux versions et identifiez les forces de chacune
2. Créez une méta-description finale optimale (maximum 275 caractères)
3. Créez une liste de mots-clés méta finaux optimale (format: liste séparée par des virgules)
4. Expliquez brièvement quelle version vous avez privilégiée et pourquoi (basé sur: clarté, précision terminologique, complétude, pertinence du contenu)

⚠️ EXIGENCES CRITIQUES DE FORMAT DE SORTIE:
- Votre réponse COMPLÈTE doit contenir EXACTEMENT trois lignes
- La PREMIÈRE ligne DOIT commencer par "DESCRIPTION:"
- La DEUXIÈME ligne DOIT commencer par "KEYWORDS:"
- La TROISIÈME ligne DOIT commencer par "RATIONALE:"
- N'incluez AUCUN texte avant la première ligne "DESCRIPTION:"
- N'incluez AUCUN raisonnement, AUCUNE pensée, AUCUNE analyse
- N'incluez AUCUN texte après RATIONALE

Format EXACT requis (copiez cette structure):

DESCRIPTION: [la méta-description finale suggérée, maximum 275 caractères]
KEYWORDS: [les mots-clés finaux suggérés, séparés par des virgules]
RATIONALE: [expliquez quelle version vous avez privilégiée et pourquoi, basé sur: clarté, précision terminologique, complétude, ou combinaison]`;

    const model = 'anthropic/claude-3.5-sonnet'; // Best model for French evaluation

    return this.callOpenRouter(evaluationPrompt, model, 500, this.TRANSLATION_TIMEOUT).pipe(
      retry({ count: 1, delay: 2000 }),
      map(response => {
        console.log('===== RAW EVALUATION RESPONSE START =====');
        console.log(response);
        console.log('===== RAW EVALUATION RESPONSE END =====');
        return this.parseEvaluationResponse(response);
      }),
      switchMap(result => {
        // Translate the French rationale to English
        const translationPrompt = `Translate the following text from French to English. Maintain the professional tone.

⚠️ CRITICAL: Output ONLY the English translation, with no labels, preambles, or explanations.

${result.rationale}

English translation:`;

        return this.callOpenRouter(translationPrompt, model, 300, this.TRANSLATION_TIMEOUT).pipe(
          retry({ count: 1, delay: 2000 }),
          map(englishRationale => ({
            ...result,
            rationaleEnglish: this.cleanMetadataResponse(englishRationale)
          })),
          catchError(error => {
            // If translation fails, use French rationale for both
            console.warn('Failed to translate rationale to English:', error);
            return of({
              ...result,
              rationaleEnglish: result.rationale
            });
          })
        );
      }),
      catchError(error => {
        console.error('Error evaluating metadata:', error);
        return throwError(() => error);
      })
    );
  }

  evaluateMetadataEnglish(
    translatedMetadata: { description: string, keywords: string },
    documentMetadata: DocumentMetadata
  ): Observable<EvaluationResult> {
    const apiKey = this.apiKeyService.getCurrentKey();
    if (!apiKey) {
      return throwError(() => new Error(this.translate.instant('metadata.errors.noApiKey')));
    }

    const evaluationPrompt = `You are a search engine optimization (SEO) expert for the Canada Revenue Agency. You must evaluate two versions of English metadata and suggest the best final version.

VERSION 1 - Translated from French:
Description: ${translatedMetadata.description}
Keywords: ${translatedMetadata.keywords}

VERSION 2 - Generated from English document:
Description: ${documentMetadata.description}
Keywords: ${documentMetadata.keywords}

Task:
1. Compare the two versions and identify the strengths of each
2. Create an optimal final meta description (maximum 275 characters)
3. Create an optimal final meta keywords list (format: comma-separated list)
4. Briefly explain which version you preferred and why (based on: clarity, terminological precision, completeness, content relevance)

⚠️ CRITICAL OUTPUT FORMAT REQUIREMENTS:
- Your COMPLETE response must contain EXACTLY three lines
- The FIRST line MUST start with "DESCRIPTION:"
- The SECOND line MUST start with "KEYWORDS:"
- The THIRD line MUST start with "RATIONALE:"
- Include NO text before the first "DESCRIPTION:" line
- Include NO reasoning, NO thoughts, NO analysis
- Include NO text after RATIONALE

EXACT required format (copy this structure):

DESCRIPTION: [the suggested final meta description, maximum 275 characters]
KEYWORDS: [the suggested final keywords, comma-separated]
RATIONALE: [explain which version you preferred and why, based on: clarity, terminological precision, completeness, or combination]`;

    const model = 'anthropic/claude-3.5-sonnet'; // Best model for English evaluation

    return this.callOpenRouter(evaluationPrompt, model, 500, this.TRANSLATION_TIMEOUT).pipe(
      retry({ count: 1, delay: 2000 }),
      map(response => {
        console.log('===== RAW EVALUATION RESPONSE (ENGLISH) START =====');
        console.log(response);
        console.log('===== RAW EVALUATION RESPONSE (ENGLISH) END =====');
        const parsed = this.parseEvaluationResponse(response);
        // For English evaluation, rationale is already in English
        return {
          ...parsed,
          rationaleEnglish: parsed.rationale
        };
      }),
      catchError(error => {
        console.error('Error evaluating metadata (English):', error);
        return throwError(() => error);
      })
    );
  }

  private parseEvaluationResponse(response: string): EvaluationResult {
    const text = response.trim();
    console.log('=== PARSING EVALUATION RESPONSE ===');

    let suggestedDescription = '';
    let suggestedKeywords = '';
    let rationale = '';

    // DON'T strip reasoning - the LLM might not include DESCRIPTION: label
    const cleanedText = text;

    // Check if DESCRIPTION: label exists
    const hasDescriptionLabel = cleanedText.search(/DESCRIPTION:/i) !== -1;
    console.log('Has DESCRIPTION: label?', hasDescriptionLabel);

    if (!hasDescriptionLabel) {
      // If no DESCRIPTION: label, everything before KEYWORDS: is the description
      console.log('No DESCRIPTION: label found, treating content before KEYWORDS: as description');
    }

    console.log('Text to parse (first 500 chars):', cleanedText.substring(0, 500));

    // Strategy 1: Try extracting based on labels
    // Handle case where DESCRIPTION: label might be missing
    if (hasDescriptionLabel) {
      const descriptionMatch = cleanedText.match(/DESCRIPTION:\s*(.+?)(?=\s*KEYWORDS:)/is);
      if (descriptionMatch && descriptionMatch[1]) {
        suggestedDescription = descriptionMatch[1].trim();
        console.log('Strategy 1 - Extracted description (with label):', suggestedDescription);
      }
    } else {
      // No DESCRIPTION: label, so extract everything before KEYWORDS:
      const descriptionMatch = cleanedText.match(/^(.+?)(?=\s*KEYWORDS:)/is);
      if (descriptionMatch && descriptionMatch[1]) {
        suggestedDescription = descriptionMatch[1].trim();
        console.log('Strategy 1 - Extracted description (no label, before KEYWORDS:):', suggestedDescription);
      }
    }

    // Keywords always has a label
    const keywordsMatch = cleanedText.match(/KEYWORDS:\s*(.+?)(?=\s*RATIONALE:)/is);
    if (keywordsMatch && keywordsMatch[1]) {
      suggestedKeywords = keywordsMatch[1].trim();
      console.log('Strategy 1 - Extracted keywords:', suggestedKeywords);
    }

    // Rationale always has a label
    const rationaleMatch = cleanedText.match(/RATIONALE:\s*(.+?)$/is);
    if (rationaleMatch && rationaleMatch[1]) {
      rationale = rationaleMatch[1].trim();
      console.log('Strategy 1 - Extracted rationale:', rationale);
    }

    // Strategy 2: If Strategy 1 failed, try line-by-line for single-line format
    if (!suggestedDescription || !suggestedKeywords || !rationale) {
      console.log('Strategy 1 incomplete, trying Strategy 2 (line-by-line)');
      const lines = cleanedText.split('\n');
      let beforeKeywords = true;
      const descriptionLines: string[] = [];

      for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const trimmedLine = line.trim();

        if (trimmedLine.startsWith('KEYWORDS:')) {
          beforeKeywords = false;
          if (!suggestedKeywords) {
            suggestedKeywords = trimmedLine.substring('KEYWORDS:'.length).trim();
            console.log('Strategy 2 - Line-by-line extracted keywords:', suggestedKeywords);
          }
        } else if (trimmedLine.startsWith('RATIONALE:')) {
          if (!rationale) {
            // For rationale, collect this line and all subsequent lines
            rationale = trimmedLine.substring('RATIONALE:'.length).trim();
            for (let j = i + 1; j < lines.length; j++) {
              const nextLine = lines[j].trim();
              if (nextLine && !nextLine.startsWith('DESCRIPTION:') && !nextLine.startsWith('KEYWORDS:')) {
                rationale += ' ' + nextLine;
              }
            }
            console.log('Strategy 2 - Line-by-line extracted rationale:', rationale);
          }
        } else if (trimmedLine.startsWith('DESCRIPTION:')) {
          if (!suggestedDescription) {
            suggestedDescription = trimmedLine.substring('DESCRIPTION:'.length).trim();
            console.log('Strategy 2 - Line-by-line extracted description:', suggestedDescription);
          }
        } else if (beforeKeywords && !suggestedDescription && trimmedLine) {
          // If we haven't hit KEYWORDS: yet and no description found, collect lines
          descriptionLines.push(trimmedLine);
        }
      }

      // If description still not found but we collected lines before KEYWORDS:
      if (!suggestedDescription && descriptionLines.length > 0) {
        suggestedDescription = descriptionLines.join(' ');
        console.log('Strategy 2 - Extracted description from lines before KEYWORDS:', suggestedDescription);
      }
    }

    // Clean up the extracted values (remove quotes, extra whitespace, etc.)
    if (suggestedDescription) {
      suggestedDescription = this.cleanMetadataResponse(suggestedDescription);
    }
    if (suggestedKeywords) {
      suggestedKeywords = this.cleanKeywordsResponse(suggestedKeywords);
    }
    if (rationale) {
      // Basic cleanup for rationale
      rationale = rationale.trim().replace(/^["']|["']$/g, '');
    }

    // Final validation and logging
    console.log('=== FINAL PARSED VALUES ===');
    console.log('Description:', suggestedDescription || 'EMPTY');
    console.log('Keywords:', suggestedKeywords || 'EMPTY');
    console.log('Rationale:', rationale || 'EMPTY');

    if (!suggestedDescription) console.error('❌ Failed to extract description from response');
    if (!suggestedKeywords) console.error('❌ Failed to extract keywords from response');
    if (!rationale) console.error('❌ Failed to extract rationale from response');

    return {
      suggestedDescription: suggestedDescription || this.translate.instant('metadata.results.noDescriptionProvided'),
      suggestedKeywords: suggestedKeywords || this.translate.instant('metadata.results.noKeywordsProvided'),
      rationale: rationale || this.translate.instant('metadata.results.noRationaleProvided'),
      rationaleEnglish: '' // Will be filled in by evaluateMetadata
    };
  }
}
