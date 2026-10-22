import {
  HtmlNormalizationService
} from "./chunk-6U2RHGUD.js";
import {
  SignInService
} from "./chunk-NJENQTX6.js";
import {
  FetchService
} from "./chunk-M6FDN6OY.js";
import {
  CheckIcon
} from "./chunk-JR3PODJQ.js";
import {
  BaseEditableHolder,
  BaseIcon,
  Bind,
  BindModule,
  NG_VALUE_ACCESSOR,
  NgControl,
  PARENT_INSTANCE
} from "./chunk-QN4TTD5X.js";
import {
  BaseStyle,
  CommonModule,
  NgClass,
  NgIf,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  environment,
  k,
  q
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  ViewChild,
  ViewEncapsulation,
  booleanAttribute,
  computed,
  forwardRef,
  inject,
  input,
  numberAttribute,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdomElement,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction3,
  ɵɵqueryRefresh,
  ɵɵstyleMap,
  ɵɵtemplate,
  ɵɵviewQuery
} from "./chunk-KRHY6Z2H.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/services/github/export-github.service.ts
var ExportGitHubService = class _ExportGitHubService {
  fetchService = inject(FetchService);
  htmlNormalizationService = inject(HtmlNormalizationService);
  signInService = inject(SignInService);
  templateOrg = environment.templateOrg;
  formatDocumentAsJekyll(doc, url, owner, repo, breadcrumbs) {
    return __async(this, null, function* () {
      let layout = "default";
      const title = doc.querySelector('meta[name="dcterms.title"]')?.content.trim() || doc.title.trim() || "";
      const description = doc.querySelector('meta[name="description"]')?.content.trim() || "";
      const subject = doc.querySelector('meta[name="dcterms.subject"]')?.content.trim() || "";
      const keywords = doc.querySelector('meta[name="keywords"]')?.content.trim() || "";
      const pageLang = doc.querySelector('meta[name="dcterms.language"]')?.content?.slice(0, 2) || "en";
      const issued = doc.querySelector('meta[name="dcterms.issued"]')?.content || "";
      const modified = doc.querySelector('meta[name="dcterms.modified"]')?.content || "";
      const robots = doc.querySelector('meta[name="robots"]')?.content || "";
      const robotsYaml = robots ? '\r\nrobots: "' + robots + '"' : "";
      const limitedWidth = doc.querySelector(".cnt-wdth-lmtd") ? "\r\npageclass: cnt-wdth-lmtd" : "";
      const isThemePage = doc.querySelector(".page-type-theme") ? "\r\npageclass: page-type-theme\r\nnomenu: true" : "";
      const altLangPage = Array.from(doc.querySelectorAll('link[rel="alternate"]')).find((link) => link.getAttribute("hreflang") !== pageLang)?.href || "";
      let crumbsYaml;
      if (breadcrumbs) {
        crumbsYaml = breadcrumbs.length > 0 ? breadcrumbs.map((crumb) => `  - title: "${crumb.title}"\r
    link: "${crumb.link}"`).join("\r\n") : "  []";
      } else {
        const crumbs = Array.from(doc.querySelectorAll("ol.breadcrumb li")).slice(1).map((li) => {
          const a = li.querySelector("a");
          if (!a)
            return null;
          const rawHref = a.getAttribute("href") || "";
          return {
            title: a.textContent?.trim() || "",
            link: rawHref.startsWith("http") ? a.href : `https://www.canada.ca${a.getAttribute("href")}`
          };
        }).filter(Boolean);
        crumbsYaml = crumbs.length > 0 ? crumbs.map((crumb) => `  - title: "${crumb.title}"\r
    link: "${crumb.link}"`).join("\r\n") : "  []";
      }
      const auth = pageLang === "en" ? `auth:\r
  type: "contextual"\r
  label: "Sign in"\r
  labelExtended: "CRA sign in"\r
  link: "https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html"` : `auth:\r
  type: "contextual"\r
  label: "Se connecter"\r
  labelExtended: "Se connecter \xE0 l'ARC"\r
  link: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-ouverture-session-arc.html"`;
      const fra = pageLang === "en" ? "" : `\r
lang: fr\r
feedbackPath: https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-fr.html\r
privacyUrl: https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html\r
termsURL: https://www.canada.ca/fr/transparence/avis.html\r
sitemenuPath: https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-fr.html\r
contextualFooter:\r
  title: "Agence du revenu du Canada (ARC)"\r
  links:\r
    - text: "Contacter l'ARC"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/coordonnees.html"\r
    - text: "Mettre \xE0 jour vos renseignements"\r
      url: "https://www.canada.ca/fr/agence-revenu/services/mettre-a-jour-renseignements-arc.html"\r
    - text: "\xC0 propos de l'ARC"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/a-propos-agence-revenu-canada-arc.html"`;
      const mainEl = doc.querySelector("main");
      let pageContent = "";
      const styles = Array.from(doc.querySelectorAll("style")).map((s) => `<style>${s.textContent}</style>`).join("\r\n");
      const seenScripts = /* @__PURE__ */ new Set();
      const defVarPattern = /^\s*var\s+(defTop|defPreFooter|defFooter)\b/;
      const scripts = Array.from(doc.querySelectorAll("body script:not([src])")).map((script) => script.textContent ?? "").filter((text) => text.replace(/\s+/g, "") !== "_satellite.pageBottom();").filter((text) => !defVarPattern.test(text)).filter((text) => {
        const normalized = text.replace(/\s+/g, "");
        if (seenScripts.has(normalized))
          return false;
        seenScripts.add(normalized);
        return true;
      }).map((text) => `<script>${text}<\/script>`).join("\r\n");
      if (mainEl) {
        mainEl.querySelectorAll("section.pagedetails").forEach((section) => section.remove());
        mainEl.querySelectorAll("div.pagedetails").forEach((div) => div.remove());
        mainEl.querySelectorAll("script").forEach((script) => script.remove());
        mainEl.querySelectorAll('div[id="def-preFooter"]').forEach((div) => div.remove());
        mainEl.querySelectorAll('div[class^="mws"]').forEach((div) => {
          while (div.firstChild) {
            div.parentNode?.insertBefore(div.firstChild, div);
          }
          div.remove();
        });
        mainEl.querySelectorAll("*").forEach((el) => {
          for (const attr of Array.from(el.attributes)) {
            if (attr?.value.includes('"/')) {
              attr.value = attr.value.replace(/"\//g, '"https://www.canada.ca/');
            }
            if (attr?.value.startsWith("/")) {
              attr.value = `https://www.canada.ca${attr.value}`;
            }
          }
        });
        const h1s = doc.querySelectorAll("h1");
        const hasSubway = doc.querySelector(".gc-subway");
        const hasLeadAboveH1 = h1s[0]?.previousElementSibling?.matches("p.lead") || !!h1s[0]?.previousElementSibling?.querySelector?.("p.lead");
        const hasHgroup = doc.querySelector("hgroup");
        if (hasSubway || h1s.length > 1 || h1s[0] && h1s[0].textContent?.trim().replace("&nbsp;", " ") !== title || h1s[0]?.closest(".well") || hasLeadAboveH1 || hasHgroup) {
          layout = "without-h1";
        } else if (!mainEl.classList.contains("container")) {
          layout = "no-container";
        } else {
          h1s[0]?.remove();
        }
        pageContent = mainEl.innerHTML.replace(/[ \t]+$/gm, "").replace(/\n{2,}/g, "\n").split("\n").map((line) => line.replace(/(\S)( {2,})/g, (m, first) => first + " ")).join("\n");
      }
      pageContent = yield this.htmlNormalizationService.formatHtml(pageContent);
      const frontMatter = `---\r
layout: ${layout}\r
title: "${title}"\r
description: "${description}"\r
subject: "${subject}"\r
keywords: "${keywords}"\r
${auth}${fra}${robotsYaml}${limitedWidth}${isThemePage}\r
altLangPage: "${altLangPage}"\r
dateModified: ${modified}\r
dateIssued: ${issued}\r
breadcrumbs: # By default the Canada.ca crumbs is already set\r
${crumbsYaml || "  []"}\r
feedbackData:\r
  section: "${title}"\r
notedlinks:\r
  - title: "${title}"\r
    link: "${url}"\r
  - title: "Repository sitemap"\r
    link: "https://${owner}.github.io/${repo}/index.html"\r
---\r
\r
${styles}\r
${pageContent}\r
${scripts}`;
      return frontMatter;
    });
  }
  formatNewPageAsJekyll(node, breadcrumbs, owner, repo, lang = "en", version = "prototype") {
    const url = node.data.live?.[lang].url;
    const altLangPage = lang === "en" ? node.data.live?.fr.url || "" : node.data.live?.en.url || "";
    const title = node.data[version][lang].h1 || "";
    const description = node.data[version][lang].desciption || "";
    const keywords = node.data[version][lang].keywords || "";
    const dateModified = (/* @__PURE__ */ new Date()).toISOString().split("T")[0];
    const limitedWidth = "\r\npageclass: cnt-wdth-lmtd";
    const crumbsYaml = breadcrumbs.length > 0 ? breadcrumbs.map((crumb) => `  - title: "${crumb.title}"\r
    link: "${crumb.link}"`).join("\r\n") : "  []";
    const auth = lang === "en" ? `auth:\r
  type: "contextual"\r
  label: "Sign in"\r
  labelExtended: "CRA sign in"\r
  link: "https://www.canada.ca/en/revenue-agency/services/e-services/cra-login-services.html"` : `auth:\r
  type: "contextual"\r
  label: "Se connecter"\r
  labelExtended: "Se connecter \xE0 l'ARC"\r
  link: "https://www.canada.ca/fr/agence-revenu/services/services-electroniques/services-ouverture-session-arc.html"`;
    const fra = lang === "en" ? "" : `\r
lang: fr\r
feedbackPath: https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-fr.html\r
privacyUrl: https://www.canada.ca/fr/agence-revenu/organisation/avis-confidentialite.html\r
termsURL: https://www.canada.ca/fr/transparence/avis.html\r
sitemenuPath: https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-fr.html\r
contextualFooter:\r
  title: "Agence du revenu du Canada (ARC)"\r
  links:\r
    - text: "Contacter l'ARCA"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/coordonnees.html"\r
    - text: "Mettre \xE0 jour vos renseignements"\r
      url: "https://www.canada.ca/fr/agence-revenu/services/mettre-a-jour-renseignements-arc.html"\r
    - text: "\xC0 propos de l'ARC"\r
      url: "https://www.canada.ca/fr/agence-revenu/organisation/a-propos-agence-revenu-canada-arc.html"`;
    const frontMatter = `---\r
layout: default\r
title: "${title}"\r
description: "${description}"\r
subject: ""\r
keywords: "${keywords}"\r
${auth}${fra}${limitedWidth}\r
altLangPage: "${altLangPage}"\r
dateModified: ${dateModified}\r
dateIssued: ${dateModified}\r
breadcrumbs: # By default the Canada.ca crumbs is already set\r
${crumbsYaml}\r
feedbackData:\r
  section: "${title}"\r
notedlinks:\r
  - title: "${title}"\r
    link: "${url}"\r
  - title: "Repository sitemap"\r
    link: "https://${owner}.github.io/${repo}/index.html"\r
---\r
\r
<!-- Add your content here -->`;
    return frontMatter;
  }
  createConfigYaml(owner, repo, branch, token, existingFiles) {
    return __async(this, null, function* () {
      const orgUrl = owner === "cra-proto" ? "https://cra-test-arc.canada.ca" : `https://${owner}.github.io`;
      const templateUrl = this.templateOrg === "cra-proto" ? "https://cra-test-arc.canada.ca" : `https://${owner}.github.io`;
      const content = `---
# standard jekyll configuration
content_editable: true
baseurl: /${repo}
url: ${orgUrl}
repository: ${owner}/${repo}
website: https://www.canada.ca/en.html

# Remote theme, use the latest version
remote_theme: wet-boew/gcweb-jekyll

# Files excluded from Jekyll builds
exclude:
 - README.md
 - Gemfile
 - Gemfile.lock
 - gcweb-jekyll.gemspec

# Site settings
assets: https://wet-boew.github.io/themes-dist
creator:
  en: "Canada Revenue Agency"
  fr: "Agence du revenu du Canada"

# Custom settings
developerOptions: false
devOptionsLocStore: "gitCRATemplateDevOptions"
exitByURL: false
exitPage:
  en: "/${repo}/source/exit-intent-e.html"
  fr: "/${repo}/source/exit-intent-f.html"
externalOrigin: "https://www.canada.ca"
modifiedLinkList: "/${repo}/source/data/exclude-redirect-links.json"
relativeExternalLinks: false
robots: "noindex, nofollow"
testBanner: true

# Page front matter defaults
defaults:
  - scope:
      path: "" # Ensure it's applied to all pages
      type: pages
    values:
      layout: default
      lang: en
      share: true
      sitemenu: true
      sitesearch: true
      feedback: true
      feedbackData:
        theme: "Taxes"
      feedbackPath: https://www.canada.ca/etc/designs/canada/wet-boew/assets/feedback/page-feedback-en.html
      privacyUrl: https://www.canada.ca/en/revenue-agency/corporate/privacy-notice.html
      termsURL: https://www.canada.ca/en/transparency/terms.html
      sitemenuPath: https://www.canada.ca/content/dam/canada/sitemenu/sitemenu-v2-en.html
      contextualFooter:
        title: "Canada Revenue Agency (CRA)"
        links:
          - text: "Contact the CRA"
            url: "https://www.canada.ca/en/revenue-agency/corporate/contact-information.html"
          - text: "Update your information"
            url: "https://www.canada.ca/en/revenue-agency/services/update-information-cra.html"
          - text: "About the CRA"
            url: "https://www.canada.ca/en/revenue-agency/corporate/about-canada-revenue-agency-cra.html"
      css:
        - https://use.fontawesome.com/releases/v5.15.4/css/all.css
        - https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/m%C3%A9li-m%C3%A9lo/2025-12-mille-iles.css
        - ${templateUrl}/core-prototype/source/css/testing-banner.css
      script:
        - https://wet-boew.github.io/themes-dist/GCWeb/GCWeb/m%C3%A9li-m%C3%A9lo/2025-12-mille-iles.js
        - ${templateUrl}/core-prototype/source/scripts/external-link-detour.js
        `;
      try {
        console.log(`Creating _config.yml for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, "_config.yml", "_config.yml", content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create _config.yml for ${repo}:`, error);
      }
    });
  }
  // Create index.html (sitemap)
  createSitemap(owner, repo, branch, token, existingFiles) {
    return __async(this, null, function* () {
      const date = /* @__PURE__ */ new Date();
      const today = date.toISOString().split("T")[0];
      const content = `---
testBanner: false
title: "${repo} repository sitemap"
dateModified: ${today}
dateIssued: ${today}
nositesearch: true
nomenu: true
breadcrumbs: false
feedback: false
share: false
noFooterContextual: true
noFooterCorporate: true
noFooterMain: true
---

<div class="mrgn-tp-md">
    <div class="row">
        <ul class="toc lst-spcd col-md-12">
            <li class="col-md-4 col-sm-6"><a class="list-group-item active" data-exit="false" href="{{ site.github.repository_url }}">GitHub repository</a></li>
        </ul>
    </div>
</div>
{% comment %} Separate English and French pages {% endcomment %}
{% assign englishPages = site.pages | where_exp: "p", "p.url contains '/en/'" | sort: "url" %}
{% assign frenchPages = site.pages | where_exp: "p", "p.url contains '/fr/'" | sort: "url" %}

{% if frenchPages.size > 0 %}
    {% comment %} Two-column layout {% endcomment %}
    {% comment %} Track which French pages we've already paired {% endcomment %}
    {% assign pairedFrenchUrls = "" | split: "" %}
    
    <table class="table table-striped">
        <thead>
            <tr>
                <th>English</th>
                <th>Fran\xE7ais</th>
            </tr>
        </thead>
        <tbody>
        {% for enPage in englishPages %}
            <tr>
                <td><a href="{{ site.baseurl }}{{ enPage.url }}">{{ enPage.title | default: enPage.url }}</a></td>
                <td>
                {% assign foundFrench = false %}
                {% if enPage.altLangPage %}
                    {% comment %} Look up French page by English altLangPage {% endcomment %}
                    {% for frPage in frenchPages %}
                        {% if enPage.altLangPage contains frPage.url %}
                            <a href="{{ site.baseurl }}{{ frPage.url }}">{{ frPage.title | default: frPage.url }}</a>
                            {% assign pairedFrenchUrls = pairedFrenchUrls | push: frPage.url %}
                            {% assign foundFrench = true %}
                            {% break %}
                        {% endif %}
                    {% endfor %}
                {% endif %}
                {% unless foundFrench %}<i class="fa fa-minus"></i>{% endunless %}
                </td>
            </tr>
        {% endfor %}
        
        {% comment %} Add unpaired French pages {% endcomment %}
        {% for frPage in frenchPages %}
            {% unless pairedFrenchUrls contains frPage.url %}
                <tr>
                    <td><i class="fa fa-minus"></i></td>
                    <td><a href="{{ site.baseurl }}{{ frPage.url }}">{{ frPage.title | default: frPage.url }}</a></td>
                </tr>
            {% endunless %}
        {% endfor %}
        </tbody>
    </table>
{% else %}
    {% comment %} Single-column layout (English only) {% endcomment %}
    <ul>
    {% for enPage in englishPages %}
        <li><a href="{{ site.baseurl }}{{ enPage.url }}">{{ enPage.title | default: enPage.url }}</a></li>
    {% endfor %}
    </ul>
{% endif %}`;
      try {
        console.log(`Creating sitemap for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, "index.html", "index.html", content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create sitemap for ${repo}:`, error);
      }
    });
  }
  // Create robots.txt file
  createRobotsTxt(owner, repo, branch, token, existingFiles) {
    return __async(this, null, function* () {
      const content = `User-agent: *
Disallow: /
`;
      try {
        console.log(`Creating robots.txt for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, "robots.txt", "robots.txt", content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create robots.txt for ${repo}:`, error);
      }
    });
  }
  //Set up README.md <-- add mermaid chart to this
  createInitialReadme(owner, repo, branch, token, projectName, existingFiles, treeNodes) {
    return __async(this, null, function* () {
      const filename = "README.md";
      const date = /* @__PURE__ */ new Date();
      const today = date.toISOString().split("T")[0];
      date.setDate(date.getDate() - 14);
      const startDate = date.toISOString().split("T")[0];
      date.setDate(date.getDate() + 98);
      const endDate = date.toISOString().split("T")[0];
      const orgUrl = owner === "cra-proto" ? "https://cra-test-arc.canada.ca" : `https://${owner}.github.io`;
      const mermaidChart = treeNodes ? this.generateMermaidChart(treeNodes) : "flowchart TD;\n    A[No pages in project]";
      const content = `# ${projectName}

*description of the project*

**Timeframe** ${startDate} - ${endDate}

## Overview

This repository was created via the **Design Assistant**.  
It contains the template files and in-scope pages needed to get started.

GitHub Pages: [${orgUrl}/${repo}](${orgUrl}/${repo})

---
## Update procedures

Add information on how to manage your repo here.

---
## Design phase roadmap:

- [x] Initial content inventory and repo setup
- [ ] Prototype: co-design navigation and content
- [ ] SME review and accuracy check
- [ ] Validation usability testing (including accessibility review)
- [ ] Refine prototype (if required)
- [ ] Spot check usability (if required)

**Updated:**  ${today}

## Information Architecture
\`\`\`mermaid
${mermaidChart}
\`\`\`
`;
      try {
        console.log(`Creating initial README.md for ${repo}`);
        yield this.exportToGitHub(owner, repo, branch, filename, filename, content, token, existingFiles, true, false);
      } catch (error) {
        console.error(`Failed to create README.md for ${repo}:`, error);
      }
    });
  }
  filesToCopy = [
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/header/header.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/headers-includes/sitesearch.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/resources-inc/footer.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/i18n.liquid`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/_includes/metadata.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-e.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-f.html`,
    `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/404.html`
  ];
  copyCoreFiles(owner, repo, branch, token, existingFiles, templateFilesToExport) {
    return __async(this, null, function* () {
      const templateTree = yield this.getRepoTree(this.templateOrg, "core-prototype", "main", token);
      const includesFiles = Array.from(templateTree.keys()).filter((path) => path.startsWith("_includes/")).map((path) => `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/${path}`);
      const allFilesToCopy = [
        ...includesFiles,
        `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-e.html`,
        `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/source/exit-intent-f.html`,
        `https://raw.githubusercontent.com/${this.templateOrg}/core-prototype/main/404.html`
      ];
      for (const file of allFilesToCopy) {
        try {
          const urlParts = new URL(file).pathname.split("/");
          const destPath = urlParts.slice(4).join("/");
          const includesAllowed = templateFilesToExport.includes("_includes/*") && destPath.startsWith("_includes/");
          if (!templateFilesToExport.includes(destPath) && !includesAllowed) {
            console.log(`Skipping ${destPath} - not in export list`);
            continue;
          }
          const response = yield this.fetchService.fetchWithRetry(file, "GET");
          if (!response.ok)
            throw new Error(`Failed to fetch: ${file}`);
          const content = yield response.text();
          yield this.exportToGitHub(owner, repo, branch, destPath, destPath.split("/").pop() || destPath, content, token, existingFiles, true, true);
        } catch (error) {
          console.error(`Error copying core file ${file}:`, error);
        }
      }
    });
  }
  //Check if repo exists
  repoExists(owner, repo) {
    return __async(this, null, function* () {
      const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}`, {
        headers: { Accept: "application/vnd.github+json" }
      });
      return response.ok;
    });
  }
  createRepo(owner, repo, branch, token, projectName) {
    return __async(this, null, function* () {
      console.log(`Repo ${owner}/${repo} not found. Creating...`);
      const type = yield this.signInService.getOwnerType(owner);
      const url = type === "Organization" ? `https://api.github.com/orgs/${owner}/repos` : `https://api.github.com/user/repos`;
      const createdDate = (/* @__PURE__ */ new Date()).toLocaleDateString("en-CA", { month: "short", year: "numeric" });
      const indexPage = owner === "cra-proto" ? `https://cra-test-arc.canada.ca/${repo}` : owner === "gc-proto" ? `https://test.canada.ca/${repo}` : `https://${owner}.github.io/${repo}/`;
      const response = yield fetch(url, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json"
        },
        body: JSON.stringify({
          name: repo,
          private: false,
          auto_init: true,
          default_branch: branch,
          description: `${projectName} (${createdDate}) - initialized via AIDA`,
          homepage: indexPage,
          has_issues: false,
          has_wiki: false,
          has_projects: false,
          has_downloads: false,
          has_discussions: false,
          license_template: "mit"
        })
      });
      if (!response.ok) {
        throw new Error(`Failed to create repo: ${response.status}`);
      }
      console.log(`New repo "${repo}" created.`);
      return response.json();
    });
  }
  enablePages(owner, repo, branch, token) {
    return __async(this, null, function* () {
      const checkResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json"
        }
      });
      if (checkResponse.ok) {
        console.log(`GitHub Pages already enabled on ${owner}/${repo}`);
        return checkResponse.json();
      }
      const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/pages`, {
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json"
        },
        body: JSON.stringify({
          source: {
            branch,
            path: "/"
          }
        })
      });
      if (!response.ok) {
        const errorBody = yield response.text();
        throw new Error(`Failed to enable Pages: ${response.status} - ${errorBody}`);
      }
      console.log(`GitHub Pages enabled on ${branch} branch.`);
      return response.json();
    });
  }
  setupRepo(owner, repo, branch, token, projectName, templateFilesToExport, treeNodes) {
    return __async(this, null, function* () {
      try {
        const exists = yield this.repoExists(owner, repo);
        if (!exists) {
          yield this.createRepo(owner, repo, branch, token, projectName);
          yield new Promise((resolve) => setTimeout(resolve, 2e3));
        } else {
          console.log(`Repo ${owner}/${repo} already exists. Skipping creation.`);
        }
        yield this.enablePages(owner, repo, branch, token);
        const existingFiles = yield this.getRepoTree(owner, repo, branch, token);
        if (templateFilesToExport.includes("README.md")) {
          yield this.createInitialReadme(owner, repo, branch, token, projectName, existingFiles, treeNodes);
        }
        if (templateFilesToExport.includes("_config.yml")) {
          yield this.createConfigYaml(owner, repo, branch, token, existingFiles);
        }
        if (templateFilesToExport.includes("index.html")) {
          yield this.createSitemap(owner, repo, branch, token, existingFiles);
        }
        if (templateFilesToExport.includes("robots.txt")) {
          yield this.createRobotsTxt(owner, repo, branch, token, existingFiles);
        }
        yield this.copyCoreFiles(owner, repo, branch, token, existingFiles, templateFilesToExport);
        return { success: true };
      } catch (error) {
        const errorMessage = error instanceof Error ? error.message : "Unknown error occurred";
        const statusMatch = errorMessage.match(/(\d{3})/);
        const status = statusMatch ? parseInt(statusMatch[1]) : 500;
        return {
          success: false,
          error: {
            status,
            message: errorMessage
          }
        };
      }
    });
  }
  //Check for existing files in a repo
  getRepoTree(owner, repo, branch, token) {
    return __async(this, null, function* () {
      const treeUrl = `https://api.github.com/repos/${owner}/${repo}/git/trees/${branch}?recursive=1`;
      const headers = {};
      if (token)
        headers["Authorization"] = `token ${token}`;
      const response = yield fetch(treeUrl, { headers });
      if (!response.ok) {
        console.warn(`Failed to fetch repo tree: ${response.status}`);
        return /* @__PURE__ */ new Map();
      }
      const data = yield response.json();
      const fileMap = /* @__PURE__ */ new Map();
      if (Array.isArray(data.tree)) {
        for (const item of data.tree) {
          if (item.type === "blob") {
            fileMap.set(item.path, item.sha);
          }
        }
      }
      return fileMap;
    });
  }
  b64EncodeUnicode(str) {
    const utf8Bytes = new TextEncoder().encode(str);
    let binary = "";
    utf8Bytes.forEach((b) => binary += String.fromCharCode(b));
    return btoa(binary);
  }
  exportToGitHub(owner, repo, branch, path, filename, content, token, existingFiles, overwrite = false, copyFromCore = false) {
    return __async(this, null, function* () {
      const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;
      if (!overwrite && existingFiles?.has(path)) {
        console.log(`Skipping ${path} (already exists, overwrite=false)`);
        return { skipped: true, path, reason: "exists" };
      }
      let sha;
      if (overwrite && existingFiles?.has(path)) {
        sha = existingFiles.get(path);
      }
      const body = {
        message: copyFromCore ? `Copy ${filename} from core-prototype (via Design Assistant)` : sha ? `Update ${filename} (via Design Assistant)` : `Add ${filename} (via Design Assistant)`,
        content: this.b64EncodeUnicode(content),
        branch
      };
      if (sha) {
        body.sha = sha;
      }
      const response = yield fetch(url, {
        method: "PUT",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify(body)
      });
      if (!response.ok) {
        const error = yield response.json().catch(() => ({}));
        throw new Error(`GitHub API error: ${response.status} ${error.message || ""}`);
      }
      return response.json();
    });
  }
  generateMermaidChart(treeNodes, version = "prototype") {
    if (!treeNodes || treeNodes.length === 0) {
      return "flowchart TD;\n    A[No pages in project]";
    }
    const firstUrl = treeNodes[0].data?.url || "";
    const lang = firstUrl.includes("/fr/") || firstUrl.includes("/fr.html") ? "fr" : "en";
    let nodeCounter = 1;
    const nodeDefinitions = [];
    const relationships = [];
    const clickHandlers = [];
    const inScopeNodes = [];
    const isRotNodes = [];
    const isNewNodes = [];
    const isMovedNodes = [];
    const traverse = (node, parentId) => {
      const nodeId = `node${nodeCounter++}`;
      const h1 = node.data[version][lang].h1 || "Untitled";
      const url = node.data[version][lang].url || "";
      const inScope = node.data?.status?.inScope || false;
      const isRot = node.data?.status?.isRot || false;
      const isNew = node.data?.status?.isNew || false;
      const isMoved = node.data?.status?.isMoved || false;
      const isOrphan = node.data[version][lang].isOrphan || false;
      nodeDefinitions.push(`    ${nodeId}(${this.sanitizeMermaidLabel(h1)})`);
      if (parentId) {
        const arrow = isOrphan ? "--x" : "-->";
        relationships.push(`    ${parentId} ${arrow} ${nodeId}`);
      }
      if (url) {
        clickHandlers.push(`    click ${nodeId} "${url}" _blank`);
      }
      if (isRot) {
        isRotNodes.push(nodeId);
      } else if (isNew) {
        isNewNodes.push(nodeId);
      } else if (isMoved) {
        isMovedNodes.push(nodeId);
      }
      if (inScope) {
        inScopeNodes.push(nodeId);
      }
      if (node.children && node.children.length > 0) {
        node.children.forEach((child) => traverse(child, nodeId));
      }
    };
    treeNodes.forEach((rootNode) => traverse(rootNode));
    let chart = "flowchart TD;\n";
    chart += nodeDefinitions.join("\n") + "\n";
    chart += relationships.join("\n") + "\n";
    chart += clickHandlers.join("\n");
    if (inScopeNodes.length > 0) {
      chart += "\n    classDef inscope stroke:#7636ab,stroke-width:3px";
      chart += `
    class ${inScopeNodes.join(",")} inscope`;
    }
    if (isRotNodes.length > 0) {
      chart += "\n    classDef isrot fill:#c50028,color:#fff";
      chart += `
    class ${isRotNodes.join(",")} isrot`;
    }
    if (isNewNodes.length > 0) {
      chart += "\n    classDef isnew fill:#00706f,color:#fff";
      chart += `
    class ${isNewNodes.join(",")} isnew`;
    }
    if (isMovedNodes.length > 0) {
      chart += "\n    classDef ismoved fill:#eab308,color:#000";
      chart += `
    class ${isMovedNodes.join(",")} ismoved`;
    }
    return chart;
  }
  // Helper method to sanitize labels for mermaid (escape special characters)
  sanitizeMermaidLabel(label) {
    return label.replace(/"/g, "#quot;").replace(/\(/g, "#40;").replace(/\)/g, "#41;").replace(/\[/g, "#91;").replace(/\]/g, "#93;").trim();
  }
  // Get last modified date
  getLastModified(url, owner, repo, branch, token) {
    return __async(this, null, function* () {
      try {
        const headers = {};
        if (token)
          headers["Authorization"] = `token ${token}`;
        const filePath = new URL(url).pathname;
        const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/commits?path=${filePath}&sha=${branch}&per_page=1`, { headers });
        const commits = yield response.json();
        return commits[0]?.commit?.committer?.date ?? void 0;
      } catch (e) {
        return void 0;
      }
    });
  }
  // Pull request method for prompt updates
  createPullRequestForPrompts(category, path, filename, content) {
    return __async(this, null, function* () {
      const owner = this.templateOrg;
      const repo = "ai-design-assistant";
      const baseBranch = "dev";
      const token = this.signInService.token();
      if (!token) {
        throw new Error("GitHub token not found. Please configure your Personal Access Token.");
      }
      const now = /* @__PURE__ */ new Date();
      const dateStr = now.toISOString().split("T")[0];
      const timeStr = now.toTimeString().slice(0, 5).replace(":", "");
      const branchName = `prompts/update-${category}-${dateStr}-${timeStr}`;
      const refResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/git/ref/heads/${baseBranch}`, { headers: { Authorization: `token ${token}` } });
      if (!refResponse.ok) {
        throw new Error(`Failed to get ${baseBranch} branch SHA: ${refResponse.status}`);
      }
      const refData = yield refResponse.json();
      const baseSha = refData.object.sha;
      const createBranchResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/git/refs`, {
        method: "POST",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ref: `refs/heads/${branchName}`,
          sha: baseSha
        })
      });
      if (!createBranchResponse.ok) {
        const error = yield createBranchResponse.json().catch(() => ({}));
        throw new Error(`Failed to create branch: ${createBranchResponse.status} ${error.message || ""}`);
      }
      yield this.exportToGitHub(owner, repo, branchName, path, filename, content, token, /* @__PURE__ */ new Map(), true, false);
      const prResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}/pulls`, {
        method: "POST",
        headers: {
          Authorization: `token ${token}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: `Update ${category} prompts`,
          head: branchName,
          base: baseBranch,
          body: `Update  to ${category} prompts via Design Assistant.

**File:** \`${path}\`
**Branch:** \`${branchName}\`
**UserID:** \`${this.signInService.user()?.id}\`
**Username:** \`${this.signInService.user()?.login}\``
        })
      });
      if (!prResponse.ok) {
        const error = yield prResponse.json().catch(() => ({}));
        throw new Error(`Failed to create PR: ${prResponse.status} ${error.message || ""}`);
      }
      const prData = yield prResponse.json();
      return {
        prUrl: prData.html_url,
        branchName
      };
    });
  }
  static \u0275fac = function ExportGitHubService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExportGitHubService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ExportGitHubService, factory: _ExportGitHubService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ExportGitHubService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-minus.mjs
var _c0 = ["data-p-icon", "minus"];
var MinusIcon = class _MinusIcon extends BaseIcon {
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275MinusIcon_BaseFactory;
    return function MinusIcon_Factory(__ngFactoryType__) {
      return (\u0275MinusIcon_BaseFactory || (\u0275MinusIcon_BaseFactory = \u0275\u0275getInheritedFactory(_MinusIcon)))(__ngFactoryType__ || _MinusIcon);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _MinusIcon,
    selectors: [["", "data-p-icon", "minus"]],
    features: [\u0275\u0275InheritDefinitionFeature],
    attrs: _c0,
    decls: 1,
    vars: 0,
    consts: [["d", "M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z", "fill", "currentColor"]],
    template: function MinusIcon_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275namespaceSVG();
        \u0275\u0275domElement(0, "path", 0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MinusIcon, [{
    type: Component,
    args: [{
      selector: '[data-p-icon="minus"]',
      standalone: true,
      template: `
        <svg:path
            d="M13.2222 7.77778H0.777778C0.571498 7.77778 0.373667 7.69584 0.227806 7.54998C0.0819442 7.40412 0 7.20629 0 7.00001C0 6.79373 0.0819442 6.5959 0.227806 6.45003C0.373667 6.30417 0.571498 6.22223 0.777778 6.22223H13.2222C13.4285 6.22223 13.6263 6.30417 13.7722 6.45003C13.9181 6.5959 14 6.79373 14 7.00001C14 7.20629 13.9181 7.40412 13.7722 7.54998C13.6263 7.69584 13.4285 7.77778 13.2222 7.77778Z"
            fill="currentColor"
        />
    `
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/checkbox/index.mjs
var style = "\n    .p-checkbox {\n        position: relative;\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n    }\n\n    .p-checkbox-input {\n        cursor: pointer;\n        appearance: none;\n        position: absolute;\n        inset-block-start: 0;\n        inset-inline-start: 0;\n        width: 100%;\n        height: 100%;\n        padding: 0;\n        margin: 0;\n        opacity: 0;\n        z-index: 1;\n        outline: 0 none;\n        border: 1px solid transparent;\n        border-radius: dt('checkbox.border.radius');\n    }\n\n    .p-checkbox-box {\n        display: flex;\n        justify-content: center;\n        align-items: center;\n        border-radius: dt('checkbox.border.radius');\n        border: 1px solid dt('checkbox.border.color');\n        background: dt('checkbox.background');\n        width: dt('checkbox.width');\n        height: dt('checkbox.height');\n        transition:\n            background dt('checkbox.transition.duration'),\n            color dt('checkbox.transition.duration'),\n            border-color dt('checkbox.transition.duration'),\n            box-shadow dt('checkbox.transition.duration'),\n            outline-color dt('checkbox.transition.duration');\n        outline-color: transparent;\n        box-shadow: dt('checkbox.shadow');\n    }\n\n    .p-checkbox-icon {\n        transition-duration: dt('checkbox.transition.duration');\n        color: dt('checkbox.icon.color');\n        font-size: dt('checkbox.icon.size');\n        width: dt('checkbox.icon.size');\n        height: dt('checkbox.icon.size');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        border-color: dt('checkbox.hover.border.color');\n    }\n\n    .p-checkbox-checked .p-checkbox-box {\n        border-color: dt('checkbox.checked.border.color');\n        background: dt('checkbox.checked.background');\n    }\n\n    .p-checkbox-checked .p-checkbox-icon {\n        color: dt('checkbox.icon.checked.color');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n        border-color: dt('checkbox.checked.hover.border.color');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-icon {\n        color: dt('checkbox.icon.checked.hover.color');\n    }\n\n    .p-checkbox:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.focus.border.color');\n        box-shadow: dt('checkbox.focus.ring.shadow');\n        outline: dt('checkbox.focus.ring.width') dt('checkbox.focus.ring.style') dt('checkbox.focus.ring.color');\n        outline-offset: dt('checkbox.focus.ring.offset');\n    }\n\n    .p-checkbox-checked:not(.p-disabled):has(.p-checkbox-input:focus-visible) .p-checkbox-box {\n        border-color: dt('checkbox.checked.focus.border.color');\n    }\n\n    .p-checkbox.p-invalid > .p-checkbox-box {\n        border-color: dt('checkbox.invalid.border.color');\n    }\n\n    .p-checkbox.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.filled.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled .p-checkbox-box {\n        background: dt('checkbox.checked.background');\n    }\n\n    .p-checkbox-checked.p-variant-filled:not(.p-disabled):has(.p-checkbox-input:hover) .p-checkbox-box {\n        background: dt('checkbox.checked.hover.background');\n    }\n\n    .p-checkbox.p-disabled {\n        opacity: 1;\n    }\n\n    .p-checkbox.p-disabled .p-checkbox-box {\n        background: dt('checkbox.disabled.background');\n        border-color: dt('checkbox.checked.disabled.border.color');\n    }\n\n    .p-checkbox.p-disabled .p-checkbox-box .p-checkbox-icon {\n        color: dt('checkbox.icon.disabled.color');\n    }\n\n    .p-checkbox-sm,\n    .p-checkbox-sm .p-checkbox-box {\n        width: dt('checkbox.sm.width');\n        height: dt('checkbox.sm.height');\n    }\n\n    .p-checkbox-sm .p-checkbox-icon {\n        font-size: dt('checkbox.icon.sm.size');\n        width: dt('checkbox.icon.sm.size');\n        height: dt('checkbox.icon.sm.size');\n    }\n\n    .p-checkbox-lg,\n    .p-checkbox-lg .p-checkbox-box {\n        width: dt('checkbox.lg.width');\n        height: dt('checkbox.lg.height');\n    }\n\n    .p-checkbox-lg .p-checkbox-icon {\n        font-size: dt('checkbox.icon.lg.size');\n        width: dt('checkbox.icon.lg.size');\n        height: dt('checkbox.icon.lg.size');\n    }\n";

// node_modules/primeng/fesm2022/primeng-checkbox.mjs
var _c02 = ["icon"];
var _c1 = ["input"];
var _c2 = (a0, a1, a2) => ({
  checked: a0,
  class: a1,
  dataP: a2
});
function Checkbox_ng_container_3_ng_container_1_span_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 8);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("ngClass", ctx_r0.checkboxIcon)("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Checkbox_ng_container_3_ng_container_1__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 9);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Checkbox_ng_container_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_3_ng_container_1_span_1_Template, 1, 5, "span", 6)(2, Checkbox_ng_container_3_ng_container_1__svg_svg_2_Template, 1, 4, "svg", 7);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checkboxIcon);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", !ctx_r0.checkboxIcon);
  }
}
function Checkbox_ng_container_3__svg_svg_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275namespaceSVG();
    \u0275\u0275element(0, "svg", 10);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275classMap(ctx_r0.cx("icon"));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
    \u0275\u0275attribute("data-p", ctx_r0.dataP);
  }
}
function Checkbox_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainerStart(0);
    \u0275\u0275template(1, Checkbox_ng_container_3_ng_container_1_Template, 3, 2, "ng-container", 3)(2, Checkbox_ng_container_3__svg_svg_2_Template, 1, 4, "svg", 5);
    \u0275\u0275elementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0.checked);
    \u0275\u0275advance();
    \u0275\u0275property("ngIf", ctx_r0._indeterminate());
  }
}
function Checkbox_4_ng_template_0_Template(rf, ctx) {
}
function Checkbox_4_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, Checkbox_4_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG */
    p-checkBox.ng-invalid.ng-dirty .p-checkbox-box,
    p-check-box.ng-invalid.ng-dirty .p-checkbox-box,
    p-checkbox.ng-invalid.ng-dirty .p-checkbox-box {
        border-color: dt('checkbox.invalid.border.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-checkbox p-component", {
    "p-checkbox-checked p-highlight": instance.checked,
    "p-disabled": instance.$disabled(),
    "p-invalid": instance.invalid(),
    "p-variant-filled": instance.$variant() === "filled",
    "p-checkbox-sm p-inputfield-sm": instance.size() === "small",
    "p-checkbox-lg p-inputfield-lg": instance.size() === "large"
  }],
  box: "p-checkbox-box",
  input: "p-checkbox-input",
  icon: "p-checkbox-icon"
};
var CheckboxStyle = class _CheckboxStyle extends BaseStyle {
  name = "checkbox";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275CheckboxStyle_BaseFactory;
    return function CheckboxStyle_Factory(__ngFactoryType__) {
      return (\u0275CheckboxStyle_BaseFactory || (\u0275CheckboxStyle_BaseFactory = \u0275\u0275getInheritedFactory(_CheckboxStyle)))(__ngFactoryType__ || _CheckboxStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _CheckboxStyle,
    factory: _CheckboxStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxStyle, [{
    type: Injectable
  }], null, null);
})();
var CheckboxClasses;
(function(CheckboxClasses2) {
  CheckboxClasses2["root"] = "p-checkbox";
  CheckboxClasses2["box"] = "p-checkbox-box";
  CheckboxClasses2["input"] = "p-checkbox-input";
  CheckboxClasses2["icon"] = "p-checkbox-icon";
})(CheckboxClasses || (CheckboxClasses = {}));
var CHECKBOX_INSTANCE = new InjectionToken("CHECKBOX_INSTANCE");
var CHECKBOX_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => Checkbox),
  multi: true
};
var Checkbox = class _Checkbox extends BaseEditableHolder {
  componentName = "Checkbox";
  hostName = "";
  /**
   * Value of the checkbox.
   * @group Props
   */
  value;
  /**
   * Allows to select a boolean value instead of multiple values.
   * @group Props
   */
  binary;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Used to define a string that labels the input element.
   * @group Props
   */
  ariaLabel;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Inline style of the input element.
   * @group Props
   */
  inputStyle;
  /**
   * Style class of the component.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Style class of the input element.
   * @group Props
   */
  inputClass;
  /**
   * When present, it specifies input state as indeterminate.
   * @group Props
   */
  indeterminate = false;
  /**
   * Form control value.
   * @group Props
   */
  formControl;
  /**
   * Icon class of the checkbox icon.
   * @group Props
   */
  checkboxIcon;
  /**
   * When present, it specifies that the component cannot be edited.
   * @group Props
   */
  readonly;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Value in checked state.
   * @group Props
   */
  trueValue = true;
  /**
   * Value in unchecked state.
   * @group Props
   */
  falseValue = false;
  /**
   * Specifies the input variant of the component.
   * @defaultValue undefined
   * @group Props
   */
  variant = input(...ngDevMode ? [void 0, {
    debugName: "variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Specifies the size of the component.
   * @defaultValue undefined
   * @group Props
   */
  size = input(...ngDevMode ? [void 0, {
    debugName: "size"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Callback to invoke on value change.
   * @param {CheckboxChangeEvent} event - Custom value change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Callback to invoke when the receives focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onFocus = new EventEmitter();
  /**
   * Callback to invoke when the loses focus.
   * @param {Event} event - Browser event.
   * @group Emits
   */
  onBlur = new EventEmitter();
  inputViewChild;
  get checked() {
    return this._indeterminate() ? false : this.binary ? this.modelValue() === this.trueValue : q(this.value, this.modelValue());
  }
  _indeterminate = signal(void 0, ...ngDevMode ? [{
    debugName: "_indeterminate"
  }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Custom checkbox icon template.
   * @group Templates
   */
  checkboxIconTemplate;
  templates;
  _checkboxIconTemplate;
  focused = false;
  _componentStyle = inject(CheckboxStyle);
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  $pcCheckbox = inject(CHECKBOX_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  $variant = computed(() => this.variant() || this.config.inputStyle() || this.config.inputVariant(), ...ngDevMode ? [{
    debugName: "$variant"
  }] : (
    /* istanbul ignore next */
    []
  ));
  onAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._checkboxIconTemplate = item.template;
          break;
        case "checkboxicon":
          this._checkboxIconTemplate = item.template;
          break;
      }
    });
  }
  onChanges(changes) {
    if (changes.indeterminate) {
      this._indeterminate.set(changes.indeterminate.currentValue);
    }
  }
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  updateModel(event) {
    let newModelValue;
    const selfControl = this.injector.get(NgControl, null, {
      optional: true,
      self: true
    });
    const currentModelValue = selfControl && !this.formControl ? selfControl.value : this.modelValue();
    if (!this.binary) {
      if (this.checked || this._indeterminate()) newModelValue = currentModelValue.filter((val) => !k(val, this.value));
      else newModelValue = currentModelValue ? [...currentModelValue, this.value] : [this.value];
      this.onModelChange(newModelValue);
      this.writeModelValue(newModelValue);
      if (this.formControl) {
        this.formControl.setValue(newModelValue);
      }
    } else {
      newModelValue = this._indeterminate() ? this.trueValue : this.checked ? this.falseValue : this.trueValue;
      this.writeModelValue(newModelValue);
      this.onModelChange(newModelValue);
    }
    if (this._indeterminate()) {
      this._indeterminate.set(false);
    }
    this.onChange.emit({
      checked: newModelValue,
      originalEvent: event
    });
  }
  handleChange(event) {
    if (!this.readonly) {
      this.updateModel(event);
    }
  }
  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }
  onInputBlur(event) {
    this.focused = false;
    this.onBlur.emit(event);
    this.onModelTouched();
  }
  focus() {
    this.inputViewChild?.nativeElement.focus();
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    setModelValue(value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      invalid: this.invalid(),
      checked: this.checked,
      disabled: this.$disabled(),
      filled: this.$variant() === "filled",
      [this.size()]: this.size()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275Checkbox_BaseFactory;
    return function Checkbox_Factory(__ngFactoryType__) {
      return (\u0275Checkbox_BaseFactory || (\u0275Checkbox_BaseFactory = \u0275\u0275getInheritedFactory(_Checkbox)))(__ngFactoryType__ || _Checkbox);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _Checkbox,
    selectors: [["p-checkbox"], ["p-checkBox"], ["p-check-box"]],
    contentQueries: function Checkbox_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.checkboxIconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function Checkbox_Query(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275viewQuery(_c1, 5);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.inputViewChild = _t.first);
      }
    },
    hostVars: 6,
    hostBindings: function Checkbox_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("data-p-highlight", ctx.checked)("data-p-checked", ctx.checked)("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      hostName: "hostName",
      value: "value",
      binary: [2, "binary", "binary", booleanAttribute],
      ariaLabelledBy: "ariaLabelledBy",
      ariaLabel: "ariaLabel",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      inputId: "inputId",
      inputStyle: "inputStyle",
      styleClass: "styleClass",
      inputClass: "inputClass",
      indeterminate: [2, "indeterminate", "indeterminate", booleanAttribute],
      formControl: "formControl",
      checkboxIcon: "checkboxIcon",
      readonly: [2, "readonly", "readonly", booleanAttribute],
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      trueValue: "trueValue",
      falseValue: "falseValue",
      variant: [1, "variant"],
      size: [1, "size"]
    },
    outputs: {
      onChange: "onChange",
      onFocus: "onFocus",
      onBlur: "onBlur"
    },
    features: [\u0275\u0275ProvidersFeature([CHECKBOX_VALUE_ACCESSOR, CheckboxStyle, {
      provide: CHECKBOX_INSTANCE,
      useExisting: _Checkbox
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _Checkbox
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 5,
    vars: 26,
    consts: [["input", ""], ["type", "checkbox", 3, "focus", "blur", "change", "checked", "pBind"], [3, "pBind"], [4, "ngIf"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], ["data-p-icon", "minus", 3, "class", "pBind", 4, "ngIf"], [3, "class", "ngClass", "pBind", 4, "ngIf"], ["data-p-icon", "check", 3, "class", "pBind", 4, "ngIf"], [3, "ngClass", "pBind"], ["data-p-icon", "check", 3, "pBind"], ["data-p-icon", "minus", 3, "pBind"]],
    template: function Checkbox_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "input", 1, 0);
        \u0275\u0275listener("focus", function Checkbox_Template_input_focus_0_listener($event) {
          return ctx.onInputFocus($event);
        })("blur", function Checkbox_Template_input_blur_0_listener($event) {
          return ctx.onInputBlur($event);
        })("change", function Checkbox_Template_input_change_0_listener($event) {
          return ctx.handleChange($event);
        });
        \u0275\u0275elementEnd();
        \u0275\u0275elementStart(2, "div", 2);
        \u0275\u0275template(3, Checkbox_ng_container_3_Template, 3, 2, "ng-container", 3)(4, Checkbox_4_Template, 1, 0, null, 4);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275styleMap(ctx.inputStyle);
        \u0275\u0275classMap(ctx.cn(ctx.cx("input"), ctx.inputClass));
        \u0275\u0275property("checked", ctx.checked)("pBind", ctx.ptm("input"));
        \u0275\u0275attribute("id", ctx.inputId)("value", ctx.value)("name", ctx.name())("tabindex", ctx.tabindex)("required", ctx.required() ? "" : void 0)("readonly", ctx.readonly ? "" : void 0)("disabled", ctx.$disabled() ? "" : void 0)("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel);
        \u0275\u0275advance(2);
        \u0275\u0275classMap(ctx.cx("box"));
        \u0275\u0275property("pBind", ctx.ptm("box"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275property("ngIf", !ctx.checkboxIconTemplate && !ctx._checkboxIconTemplate);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.checkboxIconTemplate || ctx._checkboxIconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction3(22, _c2, ctx.checked, ctx.cx("icon"), ctx.dataP));
      }
    },
    dependencies: [CommonModule, NgClass, NgIf, NgTemplateOutlet, SharedModule, CheckIcon, MinusIcon, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Checkbox, [{
    type: Component,
    args: [{
      selector: "p-checkbox, p-checkBox, p-check-box",
      standalone: true,
      imports: [CommonModule, SharedModule, CheckIcon, MinusIcon, BindModule],
      template: `
        <input
            #input
            [attr.id]="inputId"
            type="checkbox"
            [attr.value]="value"
            [attr.name]="name()"
            [checked]="checked"
            [attr.tabindex]="tabindex"
            [attr.required]="required() ? '' : undefined"
            [attr.readonly]="readonly ? '' : undefined"
            [attr.disabled]="$disabled() ? '' : undefined"
            [attr.aria-labelledby]="ariaLabelledBy"
            [attr.aria-label]="ariaLabel"
            [style]="inputStyle"
            [class]="cn(cx('input'), inputClass)"
            [pBind]="ptm('input')"
            (focus)="onInputFocus($event)"
            (blur)="onInputBlur($event)"
            (change)="handleChange($event)"
        />
        <div [class]="cx('box')" [pBind]="ptm('box')" [attr.data-p]="dataP">
            <ng-container *ngIf="!checkboxIconTemplate && !_checkboxIconTemplate">
                <ng-container *ngIf="checked">
                    <span *ngIf="checkboxIcon" [class]="cx('icon')" [ngClass]="checkboxIcon" [pBind]="ptm('icon')" [attr.data-p]="dataP"></span>
                    <svg data-p-icon="check" *ngIf="!checkboxIcon" [class]="cx('icon')" [pBind]="ptm('icon')" [attr.data-p]="dataP" />
                </ng-container>
                <svg data-p-icon="minus" *ngIf="_indeterminate()" [class]="cx('icon')" [pBind]="ptm('icon')" [attr.data-p]="dataP" />
            </ng-container>
            <ng-template *ngTemplateOutlet="checkboxIconTemplate || _checkboxIconTemplate; context: { checked: checked, class: cx('icon'), dataP: dataP }"></ng-template>
        </div>
    `,
      providers: [CHECKBOX_VALUE_ACCESSOR, CheckboxStyle, {
        provide: CHECKBOX_INSTANCE,
        useExisting: Checkbox
      }, {
        provide: PARENT_INSTANCE,
        useExisting: Checkbox
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.data-p-highlight]": "checked",
        "[attr.data-p-checked]": "checked",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    hostName: [{
      type: Input
    }],
    value: [{
      type: Input
    }],
    binary: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    inputId: [{
      type: Input
    }],
    inputStyle: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputClass: [{
      type: Input
    }],
    indeterminate: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    formControl: [{
      type: Input
    }],
    checkboxIcon: [{
      type: Input
    }],
    readonly: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    trueValue: [{
      type: Input
    }],
    falseValue: [{
      type: Input
    }],
    variant: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "variant",
        required: false
      }]
    }],
    size: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "size",
        required: false
      }]
    }],
    onChange: [{
      type: Output
    }],
    onFocus: [{
      type: Output
    }],
    onBlur: [{
      type: Output
    }],
    inputViewChild: [{
      type: ViewChild,
      args: ["input"]
    }],
    checkboxIconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var CheckboxModule = class _CheckboxModule {
  static \u0275fac = function CheckboxModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CheckboxModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _CheckboxModule,
    imports: [Checkbox, SharedModule],
    exports: [Checkbox, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [Checkbox, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CheckboxModule, [{
    type: NgModule,
    args: [{
      imports: [Checkbox, SharedModule],
      exports: [Checkbox, SharedModule]
    }]
  }], null, null);
})();

export {
  MinusIcon,
  ExportGitHubService,
  Checkbox,
  CheckboxModule
};
//# sourceMappingURL=chunk-REIT3HFO.js.map
