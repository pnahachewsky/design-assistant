import {
  HtmlNormalizationService
} from "./chunk-UGAIOELQ.js";
import {
  SignInService
} from "./chunk-6HPKKU65.js";
import {
  FetchService
} from "./chunk-T4JA4XFT.js";
import {
  environment
} from "./chunk-WQJJFENA.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-MB4XCYRB.js";
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

export {
  ExportGitHubService
};
//# sourceMappingURL=chunk-4TFN37JP.js.map
