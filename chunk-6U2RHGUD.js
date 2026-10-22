import {
  FetchService
} from "./chunk-M6FDN6OY.js";
import {
  Injectable,
  inject,
  setClassMetadata,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/services/html-normalization.service.ts
var HtmlNormalizationService = class _HtmlNormalizationService {
  fetchService = inject(FetchService);
  // Cache prettier after initial load
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  prettierModulesPromise = null;
  getPrettierModules() {
    this.prettierModulesPromise ??= Promise.all([import("./chunk-322W6BJL.js"), import("./chunk-CJWJMCQJ.js")]).then(([{ default: prettier }, parserHtml]) => ({ prettier, parserHtml }));
    return this.prettierModulesPromise;
  }
  // Format HTML with prettier
  formatHtml(html) {
    return __async(this, null, function* () {
      if (!navigator.languages?.length) {
        Object.assign(navigator, { languages: ["en"] });
      }
      try {
        const { prettier, parserHtml } = yield this.getPrettierModules();
        return yield prettier.format(html, {
          parser: "html",
          plugins: [parserHtml],
          printWidth: Infinity,
          tabWidth: 4,
          useTabs: false,
          htmlWhitespaceSensitivity: "css",
          arrowParens: "always",
          bracketSameLine: false,
          bracketSpacing: false,
          embeddedLanguageFormatting: "auto",
          endOfLine: "crlf",
          jsxSingleQuote: false,
          objectWrap: "collapse",
          proseWrap: "never",
          quoteProps: "consistent",
          singleAttributePerLine: false,
          singleQuote: false,
          trailingComma: "none",
          vueIndentScriptAndStyle: true
        });
      } catch (error) {
        console.error("Prettier formatting error:", error);
        return html;
      }
    });
  }
  // Normalize HTML content provided via URL or string
  normalizeHTML(page, mode = "url") {
    return __async(this, null, function* () {
      let doc;
      if (mode === "url") {
        doc = yield this.fetchService.fetchContent(`${page}?_=${Date.now()}`, "both");
      } else if (mode === "proxy") {
        doc = this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(page));
      } else {
        doc = this.fetchService.stringToDoc(page);
      }
      if (!doc)
        return;
      const origin = mode === "url" ? new URL(page).origin : "https://www.canada.ca";
      const foundFlags = { hidden: false, modal: false, dynamic: false };
      this.updateRelativeURLs(doc, "https://www.canada.ca");
      this.cleanupUnnecessaryElements(doc);
      const foundAjax1 = yield this.processSamePageAjaxReplacements(doc);
      const foundAjax2 = yield this.processAjaxReplacements(doc, origin);
      const foundJson = yield this.processJsonReplacements(doc, origin);
      foundFlags.dynamic = foundAjax1 || foundAjax2 || foundJson;
      foundFlags.modal ||= this.processModalDialogs(doc);
      foundFlags.hidden ||= this.displayInvisibleElements(doc);
      this.addToc(doc);
      this.sortAttributes(doc);
      const lang = doc.documentElement.lang?.startsWith("fr") ? "fr" : "en";
      this.addDateLabel(doc, lang);
      const main = doc.querySelector("main");
      if (!main) {
        console.warn("No <main> tag found. Using full <body> content instead.");
      }
      const content = main ? main.outerHTML : doc.body.innerHTML.trim();
      return {
        html: yield this.formatHtml(content),
        found: foundFlags,
        url: mode !== "string" ? page : void 0
      };
    });
  }
  // HTML processing functions
  // 1. Resolve relative URLs
  updateRelativeURLs(doc, baseUrl) {
    const anchors = doc.querySelectorAll("a");
    const images = doc.querySelectorAll("img");
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute("href");
      if (href) {
        if (href.startsWith("/")) {
          anchor.setAttribute("href", `${baseUrl}${href}`);
          anchor.setAttribute("target", "_blank");
        } else if (/^(http|https):\/\//.test(href)) {
          anchor.setAttribute("target", "_blank");
        }
      }
    });
    images.forEach((img) => {
      const src = img.getAttribute("src");
      if (src?.startsWith("/")) {
        img.setAttribute("src", `${baseUrl}${src}`);
      }
    });
  }
  // 2. Remove irrelevent stuff
  cleanupUnnecessaryElements(doc) {
    const noisySelectors = ["section#chat-bottom-bar", "#gc-pft", ".wb-disable-allow", "body > header", "footer", "charlie"];
    noisySelectors.forEach((selector) => {
      doc.querySelectorAll(selector).forEach((el) => el.remove());
    });
  }
  fetchUrl(url, type) {
    return __async(this, null, function* () {
      try {
        const response = yield fetch(url);
        if (!response.ok) {
          console.warn(`AJAX fetch failed (${response.status}) for ${url}`);
          return type === "json" ? {} : "";
        }
        return type === "json" ? response.json() : response.text();
      } catch (error) {
        console.error(`Error fetching URL: ${url}`, error);
        return type === "json" ? {} : "";
      }
    });
  }
  // 3b. Resolve AJAX-loaded content from anchors on same page
  processSamePageAjaxReplacements(doc) {
    return __async(this, null, function* () {
      const root = doc.querySelector("main") ?? doc;
      const elements = root.querySelectorAll('[data-ajax-replace^="#"], [data-ajax-after^="#"], [data-ajax-append^="#"], [data-ajax-before^="#"], [data-ajax-prepend^="#"]');
      if (!elements.length)
        return false;
      for (const element of elements) {
        const tag = element.tagName.toLowerCase();
        for (const attr of Array.from(element.attributes)) {
          if (!attr.name.startsWith("data-ajax-") || !attr.value.startsWith("#"))
            continue;
          const anchorId = attr.value.slice(1);
          const source = doc.querySelector(`#${anchorId}`);
          if (!source) {
            console.warn(`Same-page anchor #${anchorId} not found in document.`);
            continue;
          }
          const content = source.outerHTML;
          element.outerHTML = `
                <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
                    <${tag}>${content}</${tag}>
                </div>
            `;
        }
      }
      return true;
    });
  }
  // 3b. Resolve AJAX-loaded content from other pages
  processAjaxReplacements(doc, origin) {
    return __async(this, null, function* () {
      let found = false;
      const processElements = () => __async(this, null, function* () {
        const root = doc.querySelector("main") ?? doc;
        const ajaxElements = root.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]');
        if (!ajaxElements.length)
          return;
        else {
          found = true;
        }
        for (const element of ajaxElements) {
          const tag = element.tagName.toLowerCase();
          const attributes = element.attributes;
          for (const attr of Array.from(attributes)) {
            const attrName = attr.name;
            const ajaxUrl = attr.value;
            if (!attrName.startsWith("data-ajax-") || !ajaxUrl.startsWith("/")) {
              continue;
            }
            const [url, anchor] = ajaxUrl.split("#");
            let fullUrl = `${origin}${url}`;
            let fetchedHtml = yield this.fetchUrl(fullUrl, "text");
            if (!fetchedHtml && origin !== "https://www.canada.ca") {
              fullUrl = `https://www.canada.ca${url}`;
              fetchedHtml = yield this.fetchUrl(fullUrl, "text");
            }
            if (!fetchedHtml)
              continue;
            const ajaxDoc = new DOMParser().parseFromString(fetchedHtml, "text/html");
            let content;
            if (anchor) {
              const anchorElement = ajaxDoc.querySelector(`#${anchor}`);
              if (!anchorElement) {
                console.warn(`Anchor #${anchor} not found in ${fullUrl}. Skipping replacement.`);
                continue;
              }
              content = anchorElement ? anchorElement.outerHTML : "";
            } else {
              const isFullDoc = /<html[\s>]/i.test(fetchedHtml) && /<body[\s>]/i.test(fetchedHtml);
              if (isFullDoc) {
                console.warn(`Skipping full document injection from: ${fullUrl}`);
                continue;
              }
              content = ajaxDoc.body ? ajaxDoc.body.innerHTML : ajaxDoc.documentElement.innerHTML;
            }
            if (!content)
              continue;
            const styledContent = `
          <div style="border: 3px dashed #fbc02f; padding: 8px; border-radius: 4px;">
            <${tag}>${content}</${tag}>
          </div>
        `;
            element.outerHTML = styledContent;
          }
        }
      });
      let previousCount;
      let currentCount = 0;
      do {
        previousCount = currentCount;
        yield processElements();
        currentCount = doc.querySelectorAll('[data-ajax-replace^="/"], [data-ajax-after^="/"], [data-ajax-append^="/"], [data-ajax-before^="/"], [data-ajax-prepend^="/"]').length;
      } while (currentCount && currentCount !== previousCount);
      return found;
    });
  }
  // 3c. Resolve JSON-loaded content
  processJsonReplacements(doc, origin) {
    return __async(this, null, function* () {
      let found = false;
      const parseJsonUrl = (url) => {
        const [baseUrl, jsonKey = ""] = url.split("#");
        return { url: baseUrl, jsonKey: jsonKey.slice(1) };
      };
      const parseJsonConfig = (config) => {
        try {
          const parsed = JSON.parse(config.replace(/&quot;/g, '"'));
          return parsed && typeof parsed === "object" && !Array.isArray(parsed) ? parsed : null;
        } catch (error) {
          console.error("Error parsing JSON config:", error);
          return null;
        }
      };
      const resolveJsonPath = (obj, path) => {
        return path.split("/").reduce((acc, key) => {
          if (acc && typeof acc === "object" && key in acc) {
            return acc[key];
          }
          return void 0;
        }, obj);
      };
      const root = doc.querySelector("main") ?? doc;
      const jsonElements = root.querySelectorAll("[data-wb-jsonmanager]");
      if (!jsonElements.length)
        return found;
      const jsonDataMap = /* @__PURE__ */ new Map();
      yield Promise.all(Array.from(jsonElements).map((element) => __async(this, null, function* () {
        const jsonConfigAttr = element.getAttribute("data-wb-jsonmanager");
        if (!jsonConfigAttr)
          return;
        const jsonConfig = parseJsonConfig(jsonConfigAttr);
        if (!jsonConfig?.["url"] || !jsonConfig?.["name"])
          return;
        try {
          const rawUrl = jsonConfig["url"];
          if (typeof rawUrl !== "string") {
            console.warn(`Skipping JSON manager "${jsonConfig["name"]}" - url is not a string:`, rawUrl);
            return;
          }
          const { url, jsonKey } = parseJsonUrl(rawUrl);
          let fullUrl = `${origin}${url}`;
          let jsonData = yield this.fetchUrl(fullUrl, "json");
          if (!jsonData && origin !== "https://www.canada.ca") {
            fullUrl = `https://www.canada.ca${url}`;
            jsonData = yield this.fetchUrl(fullUrl, "json");
          }
          if (!jsonData)
            return;
          const content = resolveJsonPath(jsonData, jsonKey);
          jsonDataMap.set(jsonConfig["name"], content);
        } catch (error) {
          console.error(`Error fetching JSON for ${jsonConfig["name"]}:`, error);
        }
      })));
      const replaceElements = doc.querySelectorAll("[data-json-replace]");
      replaceElements.forEach((element) => {
        const replacePath = element.getAttribute("data-json-replace") || "";
        const match = replacePath.match(/^#\[(.*?)\](.*)$/);
        if (!match)
          return;
        const jsonName = match[1];
        const jsonPath = match[2].substring(1);
        if (!jsonDataMap.has(jsonName)) {
          console.warn(`No JSON data found for: ${jsonName}`);
          return;
        }
        const jsonData = jsonDataMap.get(jsonName);
        const content = resolveJsonPath(jsonData, jsonPath);
        const styledContent = `
      <div style="
        border: 3px dashed #fbc02f;
        padding: 8px;
        border-radius: 4px;
      "> 
        ${content} 
      </div>
    `;
        element.outerHTML = styledContent;
        found = true;
      });
      return found;
    });
  }
  // 4. Reveal hidden stuff
  displayInvisibleElements(doc) {
    let found = false;
    const invisibleSelectors = [".wb-inv", ".hidden", ".nojs-show"];
    invisibleSelectors.forEach((selector) => {
      doc.querySelectorAll(selector).forEach((el) => {
        el.classList.remove(...selector.split(".").filter(Boolean));
        el.style.border = "2px solid #6F9FFF";
      });
    });
    if (invisibleSelectors.length > 0) {
      found = true;
    }
    return found;
  }
  // 5. Show modals
  processModalDialogs(doc) {
    let found = false;
    const modals = doc.querySelectorAll(".modal-dialog.modal-content");
    modals.forEach((modal) => {
      console.log([...modal.childNodes]);
      modal.classList.remove("mfp-hide");
      const wrapper = doc.createElement("div");
      wrapper.setAttribute("style", "border: 2px dashed #666; border-radius: 4px;");
      while (modal.firstChild) {
        wrapper.appendChild(modal.firstChild);
      }
      modal.appendChild(wrapper);
    });
    if (modals.length > 0) {
      found = true;
    }
    return found;
  }
  // 6. Add ToC anchors
  addToc(doc) {
    const tocSection = doc.querySelector(".section.mwsinpagetoc");
    if (!tocSection)
      return;
    const tocLinks = Array.from(tocSection.querySelectorAll("a")).map((link) => {
      const href = link.getAttribute("href");
      const text = link.textContent?.trim();
      if (href?.startsWith("#") && text) {
        return {
          id: href.slice(1),
          // Remove the '#'
          text
        };
      }
      return null;
    }).filter((link) => link !== null);
    if (!tocLinks.length)
      return;
    const headings = doc.querySelectorAll("h2, h3, h4, h5, h6");
    headings.forEach((heading) => {
      const headingText = heading.textContent?.trim();
      if (!headingText)
        return;
      const matchedLink = tocLinks.find((link) => link.text === headingText);
      if (matchedLink) {
        heading.setAttribute("id", matchedLink.id);
      }
    });
  }
  // 7. Sort attributes
  sortAttributes(doc) {
    doc.querySelectorAll("*").forEach((el) => {
      if (!el.hasAttributes())
        return;
      const sortedAttrs = Array.from(el.attributes).sort((a, b) => a.name.localeCompare(b.name));
      const clone = el.cloneNode(false);
      sortedAttrs.forEach((attr) => clone.setAttribute(attr.name, attr.value));
      if (el.innerHTML) {
        clone.innerHTML = el.innerHTML;
      }
      el.replaceWith(clone);
    });
  }
  // 8. Date modified
  addDateLabel(doc, lang) {
    const dateModifiedLabel = lang === "fr" ? "Date de modification :" : "Date modified:";
    doc.querySelectorAll("gcds-date-modified").forEach((el) => {
      const date = el.textContent?.trim();
      if (!date)
        return;
      el.textContent = `${dateModifiedLabel} ${date}`;
    });
  }
  // Clean up AI response
  aiCleanup(html) {
    html = html.replace(/<p>```html<\/p>/, "```html\n").replace(/<p>```<\/p>/, "\n```");
    const match = html.match(/```(?:html)?\r?\n([\s\S]*?)\r?\n```/);
    if (match) {
      html = match[1];
    }
    html = html.replace(/^<p>/, "").replace(/<\/p>$/, "").trim();
    const doc = new DOMParser().parseFromString(html, "text/html");
    doc.querySelectorAll("p").forEach((p) => {
      const children = p.children;
      if (children.length === 1 && children[0].matches("div, section, ul, ol, table, h1, h2, h3, h4, h5, h6")) {
        p.replaceWith(...p.childNodes);
      }
    });
    doc.querySelectorAll("p").forEach((p) => {
      if (p.innerHTML.trim() === "") {
        p.remove();
      }
    });
    doc.querySelectorAll("think").forEach((think) => {
      think.remove();
    });
    return doc.body.outerHTML;
  }
  // Clean up HTML for export with CDTS template
  cleanContentForCdts(doc, doubleH1) {
    return __async(this, null, function* () {
      const mainEl = doc.querySelector("main");
      if (!mainEl)
        return { content: "", styles: "", scripts: "" };
      mainEl.querySelectorAll("section.pagedetails, div.pagedetails").forEach((el) => el.remove());
      const h1 = mainEl.querySelectorAll("h1");
      const leadAboveH1 = h1[0]?.previousElementSibling?.matches("p.lead") ? h1[0].previousElementSibling : null;
      leadAboveH1?.remove();
      h1.forEach((heading) => {
        if (heading.classList.contains("gc-document-nav")) {
          if (doubleH1) {
            heading.textContent = doubleH1;
          }
        } else {
          heading.remove();
        }
      });
      mainEl.querySelectorAll('div[class^="mws"]').forEach((div) => {
        while (div.firstChild) {
          div.parentNode?.insertBefore(div.firstChild, div);
        }
        div.remove();
      });
      mainEl.querySelectorAll("*").forEach((el) => {
        for (const attr of Array.from(el.attributes)) {
          if (attr.value.includes('"/')) {
            attr.value = attr.value.replace(/"\//g, '"https://www.canada.ca/');
          }
          if (attr.value.startsWith("/")) {
            attr.value = `https://www.canada.ca${attr.value}`;
          }
        }
      });
      const styles = Array.from(doc.querySelectorAll("style")).map((s) => `<style>${s.textContent}</style>`).join("\n");
      const scripts = Array.from(doc.querySelectorAll("body script:not([src])")).map((s) => `<script>${s.textContent}<\/script>`).join("\n");
      const raw = mainEl.innerHTML.replace(/[ \t]+$/gm, "").replace(/\n{2,}/g, "\n");
      const formatted = yield this.formatHtml(raw);
      return {
        content: formatted,
        styles,
        scripts
      };
    });
  }
  static \u0275fac = function HtmlNormalizationService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HtmlNormalizationService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _HtmlNormalizationService, factory: _HtmlNormalizationService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HtmlNormalizationService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  HtmlNormalizationService
};
//# sourceMappingURL=chunk-6U2RHGUD.js.map
