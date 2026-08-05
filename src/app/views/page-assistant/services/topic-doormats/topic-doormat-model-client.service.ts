import { Injectable, inject } from '@angular/core';
import { ChatMessage, OpenRouterService } from '../openrouter.service';
import { TopicDoormatSummary } from './topic-doormat.types';

export interface TopicDoormatModelClientRequest {
  messages: ChatMessage[];
  requestedModel?: string;
  doormatSummaries: TopicDoormatSummary[];
  isParseableResponseText: (text: string) => boolean;
  debug: (event: string, details: Record<string, unknown>) => void;
}

export interface TopicDoormatIssueFieldRepairRequest {
  model: string;
  messages: ChatMessage[];
  doormatSummaries: TopicDoormatSummary[];
  debug: (event: string, details: Record<string, unknown>) => void;
}

export interface TopicDoormatModelClientResult {
  text: string;
  model: string;
  modelRotation: string[];
}

@Injectable({ providedIn: 'root' })
export class TopicDoormatModelClientService {
  private readonly openRouter = inject(OpenRouterService);
  private readonly topicDoormatForceParseFailureStorageKey =
    'pageAssistant.topicDoormatForceParseFailure';
  private readonly topicDoormatModelAttemptTimeoutMs = 60000;

  async requestIssueJson(
    request: TopicDoormatModelClientRequest,
  ): Promise<TopicDoormatModelClientResult> {
    const modelRotation = this.buildModelRotation(
      request.requestedModel,
    );
    const recognizedRequestedModel =
      !!request.requestedModel &&
      this.openRouter.models.includes(request.requestedModel);
    this.logTopicDoormatModelEvent('model rotation resolved', {
      phase: 'issue-analysis',
      requestedModel: request.requestedModel || '',
      recognizedRequestedModel,
      firstModel: modelRotation[0] || '',
      selectedModelWillRunFirst:
        recognizedRequestedModel && modelRotation[0] === request.requestedModel,
      modelRotation,
      timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
    });
    request.debug('model rotation resolved', {
      phase: 'issue-analysis',
      requestedModel: request.requestedModel || '',
      recognizedRequestedModel,
      firstModel: modelRotation[0] || '',
      selectedModelWillRunFirst:
        recognizedRequestedModel && modelRotation[0] === request.requestedModel,
      modelRotation,
      timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
    });
    const { text, model } = await this.callTopicDoormatIssuesWithFallback(
      request.messages,
      modelRotation,
      request.requestedModel,
      request.doormatSummaries,
      request.isParseableResponseText,
      request.debug,
    );

    return { text, model, modelRotation };
  }

  async requestIssueFieldRepair(
    request: TopicDoormatIssueFieldRepairRequest,
  ): Promise<string> {
    if (!request.model) return '';
    try {
      request.debug('model issue field repair request prepared', {
        phase: 'issue-field-repair',
        model: request.model,
        timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
        request: this.buildRequestMetrics(
          request.messages,
          request.doormatSummaries,
        ),
      });
      const resp = await this.openRouter.call(request.model, request.messages, {
        temperature: 0,
        title: 'Content Assistant - Topic Doormat Issue Field Repair',
        throwOnError: true,
        timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
      });
      return resp?.choices?.[0]?.message?.content?.trim() || '';
    } catch (err) {
      request.debug('model issue field repair request failed', {
        model: request.model,
        error: err instanceof Error ? err.message : String(err),
      });
      return '';
    }
  }

  buildModelRotation(requested?: string): string[] {
    const freeModels = this.openRouter.freeModels;
    if (requested && this.openRouter.models.includes(requested)) {
      return [
        requested,
        ...freeModels.filter((candidate) => candidate !== requested),
      ];
    }
    return freeModels;
  }

  private async callTopicDoormatIssuesWithFallback(
      messages: ChatMessage[],
      models: string[],
      requestedModel: string | undefined,
      doormatSummaries: TopicDoormatSummary[],
      isParseableResponseText: (text: string) => boolean,
      debug: (event: string, details: Record<string, unknown>) => void,
  ): Promise<{ text: string; model: string }> {
    let lastError: unknown;
    let lastModel = models[0] ?? '';

    for (let index = 0; index < models.length; index += 1) {
      const model = models[index];
      lastModel = model;
      const modelStart = performance.now();
      const attemptMetadata = this.buildTopicDoormatAttemptMetadata(
        index,
        models,
        model,
        requestedModel,
      );
      try {
        debug('model attempt started', {
          ...attemptMetadata,
          timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
          request: this.buildRequestMetrics(messages, doormatSummaries),
        });
        this.logTopicDoormatModelEvent('model attempt started', {
          ...attemptMetadata,
          timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
          doormatCount: doormatSummaries.length,
          messageCharacters: messages.reduce(
            (total, message) => total + message.content.length,
            0,
          ),
        });
        const resp = await this.openRouter.call(model, messages, {
          temperature: 0,
          title: 'Content Assistant - Topic Doormat Issues',
          throwOnError: true,
          timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
        });
        const text = resp?.choices?.[0]?.message?.content?.trim() || '';
        if (text) {
          const forcedParseFailureMode =
            this.getTopicDoormatForceParseFailureMode();
          if (forcedParseFailureMode === 'local-only') {
            debug('forced parse failure enabled', {
              mode: forcedParseFailureMode,
              model,
              responseCharacters: text.length,
            });
            return { text: '', model };
          }
          const textToValidate =
            forcedParseFailureMode === 'repair'
              ? '{"doormats": ['
              : text;
          if (forcedParseFailureMode === 'repair') {
            debug('forced parse failure enabled', {
              mode: forcedParseFailureMode,
              model,
              responseCharacters: text.length,
            });
          }
          if (isParseableResponseText(textToValidate)) {
            debug('model attempt succeeded', {
              ...attemptMetadata,
              elapsedMs: Math.round(performance.now() - modelStart),
              responseCharacters: text.length,
            });
            this.logTopicDoormatModelEvent('model attempt succeeded', {
              ...attemptMetadata,
              elapsedMs: Math.round(performance.now() - modelStart),
              responseCharacters: text.length,
            });
            return { text, model };
          }

          debug('model attempt returned invalid json', {
            ...attemptMetadata,
            elapsedMs: Math.round(performance.now() - modelStart),
            responseCharacters: text.length,
          });
          this.logTopicDoormatModelEvent('model attempt returned invalid json', {
            ...attemptMetadata,
            elapsedMs: Math.round(performance.now() - modelStart),
            responseCharacters: text.length,
          });

          const repairedText = await this.repairTopicDoormatIssueJson(
            model,
            text,
            doormatSummaries,
            debug,
            requestedModel,
          );
          if (repairedText && isParseableResponseText(repairedText)) {
            debug('model json repair succeeded', {
              ...attemptMetadata,
              phase: 'json-repair',
              elapsedMs: Math.round(performance.now() - modelStart),
              originalResponseCharacters: text.length,
              repairedResponseCharacters: repairedText.length,
            });
            this.logTopicDoormatModelEvent('model json repair succeeded', {
              ...attemptMetadata,
              phase: 'json-repair',
              elapsedMs: Math.round(performance.now() - modelStart),
              repairedResponseCharacters: repairedText.length,
            });
            return { text: repairedText, model };
          }

          debug('model json repair failed', {
            ...attemptMetadata,
            phase: 'json-repair',
            elapsedMs: Math.round(performance.now() - modelStart),
          });
          lastError = new Error(`Invalid Topic doormat JSON from ${model}`);
          continue;
        }
        debug('model attempt returned empty content', {
          ...attemptMetadata,
          elapsedMs: Math.round(performance.now() - modelStart),
        });
        this.logTopicDoormatModelEvent('model attempt returned empty content', {
          ...attemptMetadata,
          elapsedMs: Math.round(performance.now() - modelStart),
        });
      } catch (err) {
        lastError = err;
        debug('model attempt failed', {
          ...attemptMetadata,
          elapsedMs: Math.round(performance.now() - modelStart),
          error: err instanceof Error ? err.message : String(err),
        });
        this.logTopicDoormatModelEvent('model attempt failed', {
          ...attemptMetadata,
          elapsedMs: Math.round(performance.now() - modelStart),
          error: err instanceof Error ? err.message : String(err),
        });
      }
    }

    debug('model attempts exhausted', {
      phase: 'issue-analysis',
      models,
      requestedModel: requestedModel || '',
      lastModel,
      error: lastError instanceof Error ? lastError.message : String(lastError),
    });
    this.logTopicDoormatModelEvent('model attempts exhausted', {
      phase: 'issue-analysis',
      models,
      requestedModel: requestedModel || '',
      lastModel,
      error: lastError instanceof Error ? lastError.message : String(lastError),
    });
    return { text: '', model: lastModel };
  }

  private async repairTopicDoormatIssueJson(
    model: string,
    invalidText: string,
    doormatSummaries: TopicDoormatSummary[],
    debug: (event: string, details: Record<string, unknown>) => void,
    requestedModel?: string,
  ): Promise<string> {
    try {
      const repairMessages: ChatMessage[] = [
        {
          role: 'system',
          content:
            'Convert the supplied response to valid JSON that matches the Topic doormat issue schema. Fix format only. Do not add, remove, reinterpret, or re-analyze issues. Return JSON only.',
        },
        {
          role: 'user',
          content: JSON.stringify({
            requiredShape:
              '{ "section_issues": [], "doormats": [{ "doormat_index": number, "link_text": string, "href": string, "description": string, "detected_link_text_style": string, "detected_description_style": string, "destination_link_relationship": string, "destination_link_relationship_basis": string, "destination_link_relationship_reason": string, "destination_content_assessment": { "important_element_ids": [], "covered_element_ids": [], "missing_important_element_ids": [] }, "issues": [] }] }',
            validDoormatIndexes: doormatSummaries.map((summary) => summary.index),
            responseToRepair: invalidText,
          }),
        },
      ];
      debug('model json repair request prepared', {
        phase: 'json-repair',
        model,
        requestedModel: requestedModel || '',
        repairModelRole:
          requestedModel && model === requestedModel
            ? 'selected-model'
            : 'fallback-model',
        timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
        request: this.buildRequestMetrics(repairMessages, doormatSummaries),
        invalidResponseCharacters: invalidText.length,
      });
      this.logTopicDoormatModelEvent('model json repair request prepared', {
        phase: 'json-repair',
        model,
        requestedModel: requestedModel || '',
        repairModelRole:
          requestedModel && model === requestedModel
            ? 'selected-model'
            : 'fallback-model',
        timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
        invalidResponseCharacters: invalidText.length,
      });
      const resp = await this.openRouter.call(model, repairMessages, {
        temperature: 0,
        title: 'Content Assistant - Topic Doormat JSON Repair',
        throwOnError: true,
        timeoutMs: this.topicDoormatModelAttemptTimeoutMs,
      });
      return resp?.choices?.[0]?.message?.content?.trim() || '';
    } catch (err) {
      debug('model json repair request failed', {
        phase: 'json-repair',
        model,
        requestedModel: requestedModel || '',
        repairModelRole:
          requestedModel && model === requestedModel
            ? 'selected-model'
            : 'fallback-model',
        error: err instanceof Error ? err.message : String(err),
      });
      this.logTopicDoormatModelEvent('model json repair request failed', {
        phase: 'json-repair',
        model,
        requestedModel: requestedModel || '',
        repairModelRole:
          requestedModel && model === requestedModel
            ? 'selected-model'
            : 'fallback-model',
        error: err instanceof Error ? err.message : String(err),
      });
      return '';
    }
  }

  private logTopicDoormatModelEvent(
    event: string,
    details: Record<string, unknown>,
  ): void {
    console.info(`[TopicDoormatIssues] ${event}`, details);
  }

  private buildTopicDoormatAttemptMetadata(
    index: number,
    models: string[],
    model: string,
    requestedModel?: string,
  ): Record<string, unknown> {
    const isSelectedModel = !!requestedModel && model === requestedModel;
    return {
      phase: 'issue-analysis',
      attempt: index + 1,
      totalAttempts: models.length,
      model,
      requestedModel: requestedModel || '',
      attemptRole: isSelectedModel ? 'selected-model' : 'fallback-model',
      isFallbackAttempt: !isSelectedModel,
      firstModel: models[0] || '',
    };
  }

  private getTopicDoormatForceParseFailureMode():
    | ''
    | 'repair'
    | 'local-only' {
    try {
      const value = (
        localStorage.getItem(this.topicDoormatForceParseFailureStorageKey) || ''
      )
        .trim()
        .toLowerCase();
      if (value === 'repair') return 'repair';
      if (value === 'local-only' || value === 'true') return 'local-only';
      return '';
    } catch {
      return '';
    }
  }

  private buildRequestMetrics(
    messages: ChatMessage[],
    doormatSummaries: TopicDoormatSummary[],
  ): Record<string, unknown> {
    const messageCharacterCounts = messages.map(
      (message) => message.content.length,
    );
    const roleCharacterCounts = messages.reduce<Record<string, number>>(
      (counts, message) => {
        counts[message.role] = (counts[message.role] ?? 0) + message.content.length;
        return counts;
      },
      {},
    );
    const destinationContextCharacterCount = doormatSummaries.reduce(
      (total, summary) =>
        total +
        (summary.destinationPageTitle?.length ?? 0) +
        (summary.destinationPageHeading?.length ?? 0) +
        (summary.destinationIntroParagraphs ?? []).join('\n').length +
        (summary.destinationSectionHeadings ?? []).join('\n').length,
      0,
    );

    return {
      messageCount: messages.length,
      totalCharacters: messageCharacterCounts.reduce(
        (total, count) => total + count,
        0,
      ),
      messageCharacterCounts,
      roleCharacterCounts,
      doormatCount: doormatSummaries.length,
      destinationContextAvailableCount: doormatSummaries.filter(
        (summary) => summary.destinationContextStatus === 'available',
      ).length,
      destinationContextCharacterCount,
    };
  }
}
