import {
  StyleTreeNodeService
} from "./chunk-OIQTDMBR.js";
import {
  AirtableService,
  ProjectStateService,
  UpdService,
  VanityService
} from "./chunk-YI6R4JH4.js";
import {
  ProjectStorageService
} from "./chunk-ZGIXLYRM.js";
import {
  FetchService,
  PageTemplate
} from "./chunk-WBPH5YUM.js";
import {
  MessageService
} from "./chunk-7YP54JN5.js";
import {
  Injectable,
  TranslateService,
  computed,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/components/add-pages/by-children/get-child-urls.service.ts
var GetChildPagesService = class _GetChildPagesService {
  fetchService = inject(FetchService);
  //Variables
  depth = 0;
  //Progress tracking
  searchProgress = signal(null, ...ngDevMode ? [{ debugName: "searchProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  //Pages to skip children when building IA chart
  skipFormsAndPubs = /* @__PURE__ */ new Set([
    "https://www.canada.ca/en/revenue-agency/services/forms-publications/forms.html",
    "https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/formulaires.html",
    "https://www.canada.ca/en/revenue-agency/services/forms-publications/publications.html",
    "https://www.canada.ca/fr/agence-revenu/services/formulaires-publications/publications.html"
  ]);
  PAGE_LIMIT = 10;
  findChildren(startingLinks, depth) {
    return __async(this, null, function* () {
      if (depth < 1)
        return [];
      const addToProject = [];
      const linkCache = [];
      this.searchProgress.set({ depth: 0, processedUrls: 0, totalUrls: startingLinks.size });
      yield new Promise((resolve) => setTimeout(resolve, 100));
      const allLinks = [];
      for (const url of startingLinks) {
        const limited = this.skipFormsAndPubs.has(url);
        try {
          const doc = yield this.fetchService.fetchContent(url, "prod", 3, 50, false);
          const links = this.fetchService.getLinks(doc, url);
          const limitedLinks = limited ? links.slice(0, this.PAGE_LIMIT) : links;
          allLinks.push(...limitedLinks);
        } catch (error) {
          console.warn(`Failed to fetch project URL ${url}: ${error}`);
        }
        this.searchProgress.update((progress) => __spreadProps(__spreadValues({}, progress), {
          processedUrls: progress.processedUrls + 1
        }));
        yield new Promise((resolve) => setTimeout(resolve, 100));
      }
      yield new Promise((resolve) => setTimeout(resolve, 1e3));
      let currentDepthUrls = [...new Set(allLinks)];
      console.log(currentDepthUrls);
      for (let currentDepth = 1; currentDepth <= depth; currentDepth++) {
        const nextDepthUrls = [];
        this.searchProgress.set({ depth: currentDepth, processedUrls: 0, totalUrls: currentDepthUrls.length });
        yield new Promise((resolve) => setTimeout(resolve, 100));
        for (const url of currentDepthUrls) {
          const limited = this.skipFormsAndPubs.has(url);
          try {
            const { doc, finalUrl } = yield this.fetchService.fetchContentAndStatus(url, "prod", 3, 50, false);
            const breadcrumbs = this.fetchService.getBreadcrumb(doc, finalUrl);
            const links = this.fetchService.getLinks(doc, finalUrl);
            const limitedLinks = limited ? links.slice(0, this.PAGE_LIMIT) : links;
            let foundAncestor = false;
            for (let i = 1; i <= depth && i <= breadcrumbs.length; i++) {
              const checkPosition = breadcrumbs.length - i;
              if (startingLinks.has(breadcrumbs[checkPosition].url)) {
                addToProject.push({ url: finalUrl, depthFromInScope: i });
                foundAncestor = true;
                if (i < depth) {
                  nextDepthUrls.push(...limitedLinks);
                }
                break;
              }
            }
            if (foundAncestor)
              continue;
            for (const parent of addToProject) {
              const maxDistanceFromParent = depth - parent.depthFromInScope;
              for (let i = 1; i <= maxDistanceFromParent && i <= breadcrumbs.length; i++) {
                const checkPosition = breadcrumbs.length - i;
                if (checkPosition >= 0 && breadcrumbs[checkPosition].url === parent.url) {
                  const pageDepth = parent.depthFromInScope + i;
                  addToProject.push({ url: finalUrl, depthFromInScope: pageDepth });
                  foundAncestor = true;
                  if (pageDepth < depth) {
                    nextDepthUrls.push(...limitedLinks);
                  }
                  break;
                }
              }
              if (foundAncestor)
                break;
            }
            if (!foundAncestor) {
              linkCache.push({ url, breadcrumbs });
            }
          } catch (error) {
            console.warn(`Skipping ${url}: ${error}`);
          } finally {
            this.searchProgress.update((progress) => __spreadProps(__spreadValues({}, progress), {
              processedUrls: progress.processedUrls + 1
            }));
            yield new Promise((resolve) => setTimeout(resolve, 100));
          }
        }
        currentDepthUrls = [...new Set(nextDepthUrls)].filter((link) => !startingLinks.has(link) && !addToProject.some((p) => p.url === link) && !linkCache.some((p) => p.url === link));
        yield new Promise((resolve) => setTimeout(resolve, 1e3));
      }
      for (const cached of linkCache) {
        for (const parent of addToProject) {
          const maxDistanceFromParent = depth - parent.depthFromInScope;
          let foundAncestor = false;
          for (let i = 1; i <= maxDistanceFromParent && i <= cached.breadcrumbs.length; i++) {
            const checkPosition = cached.breadcrumbs.length - i;
            if (checkPosition >= 0 && cached.breadcrumbs[checkPosition].url === parent.url) {
              const pageDepth = parent.depthFromInScope + i;
              addToProject.push({ url: cached.url, depthFromInScope: pageDepth });
              foundAncestor = true;
              break;
            }
          }
          if (foundAncestor)
            break;
        }
      }
      this.searchProgress.set(null);
      return [...new Set(addToProject.map((p) => p.url))].filter((url) => !startingLinks.has(url));
    });
  }
  static \u0275fac = function GetChildPagesService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GetChildPagesService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GetChildPagesService, factory: _GetChildPagesService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GetChildPagesService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

// src/app/components/add-pages/by-url/add-urls.service.ts
var AddUrlsService = class _AddUrlsService {
  messageService = inject(MessageService);
  translate = inject(TranslateService);
  fetchService = inject(FetchService);
  projectState = inject(ProjectStateService);
  updService = inject(UpdService);
  airtableService = inject(AirtableService);
  vanityService = inject(VanityService);
  projectStorageService = inject(ProjectStorageService);
  styleTreeNodeService = inject(StyleTreeNodeService);
  getChildUrlsService = inject(GetChildPagesService);
  /********************************************************************************************************************
   *  STEPS                                                                                                           *
   *  0. Parse raw url input                                                                                          *
   *  1. Validate URLs (store invalid for later review)                                                               *
   *  2. Add URLs, for each, fetch breadcrumb & cache content to add after parent pages                               *
   *     - If breadcrumb url is not in project yet, fetch content and add it in TreeNode structure (baseline & live)  *
   *     - If breadcrumb url is already in project, skip it                                                           *
   *     - add cached page to TreeNode structure (baseline & live)                                                    *
   ********************************************************************************************************************/
  /** Current state of the add URL workflow */
  urlState = signal({
    rawUrls: "",
    urlsToValidate: [],
    urlsToReview: [],
    urlsToAdd: [],
    isValidating: false,
    isAdding: false
  }, ...ngDevMode ? [{ debugName: "urlState" }] : (
    /* istanbul ignore next */
    []
  ));
  // Skip duplicate, invalid, & opposite language URLs
  duplicatesSkipped = signal([], ...ngDevMode ? [{ debugName: "duplicatesSkipped" }] : (
    /* istanbul ignore next */
    []
  ));
  invalidUrlsSkipped = signal([], ...ngDevMode ? [{ debugName: "invalidUrlsSkipped" }] : (
    /* istanbul ignore next */
    []
  ));
  oppositeLangSkipped = signal([], ...ngDevMode ? [{ debugName: "oppositeLangSkipped" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Updates a partial signal from the {@link urlState} */
  setUrlState(partial) {
    this.urlState.update((curr) => __spreadValues(__spreadValues({}, curr), partial));
  }
  /** Updates urlsToReview from the {@link urlState} */
  updateReviewStatus(hrefs, status) {
    const hrefSet = new Set(hrefs);
    const urlsToReview = this.urlState().urlsToReview.map((url) => hrefSet.has(url.href) ? __spreadProps(__spreadValues({}, url), { status }) : url);
    this.setUrlState({ urlsToReview });
  }
  projectLang = this.projectState.detectPrimaryLanguage();
  /**** STEP 0 ********************************************************************************************************/
  /** Parse raw URL input into UrlItem array */
  parseUrls(rawUrls, existingUrls, currentLang) {
    const seen = new Set(existingUrls);
    const duplicates = [];
    const invalidUrls = [];
    const oppositeLangUrls = [];
    const normalizedUrls = rawUrls.split(/\r?\n/).map((line) => line.trim().toLowerCase()).filter(Boolean).map((line) => ({
      original: line,
      normalized: this.normalizeUrl(line),
      lang: this.detectUrlLanguage(this.normalizeUrl(line))
    }));
    this.projectLang = this.detectProjectLanguage(existingUrls, normalizedUrls, currentLang);
    const parsedUrls = normalizedUrls.filter(({ normalized, lang, original }) => {
      if (!lang || !normalized.includes("canada.ca")) {
        invalidUrls.push(original);
        return false;
      }
      if (lang !== this.projectLang) {
        oppositeLangUrls.push(normalized);
        return false;
      }
      if (seen.has(normalized)) {
        duplicates.push(normalized);
        return false;
      }
      seen.add(normalized);
      return true;
    }).map(({ normalized }) => ({ href: normalized, status: "checking" }));
    this.duplicatesSkipped.set(duplicates);
    this.invalidUrlsSkipped.set(invalidUrls);
    this.oppositeLangSkipped.set(oppositeLangUrls);
    return { parsedUrls, duplicates, invalidUrls, oppositeLangUrls };
  }
  // Step 0: Normalize incomplete URLs
  normalizeUrl(input) {
    let url = input;
    if (url.match("/content/canadasite")) {
      url = url.replace("/content/canadasite", "");
    }
    if (!url.startsWith("http")) {
      if (url.startsWith("/en") || url.startsWith("/fr")) {
        url = "https://www.canada.ca" + url;
      } else if (url.startsWith("en") || url.startsWith("fr")) {
        url = "https://www.canada.ca/" + url;
      } else if (url.startsWith("www")) {
        url = "https://" + url;
      } else if (url.startsWith("canada.ca")) {
        url = "https://www." + url;
      }
    } else if (url.startsWith("https://canada-preview.adobecqms.net/")) {
      url = url.replace("https://canada-preview.adobecqms.net/", "https://www.canada.ca/");
    }
    if (!url.endsWith(".html") && !url.endsWith("/")) {
      if (url.endsWith("/en") || url.endsWith("/fr")) {
        url = url + ".html";
      }
      if ((url.includes("/en/") || url.includes("/fr/")) && !url.match(/\.[a-z]{2,4}$/i)) {
        url = url + ".html";
      }
    }
    return url;
  }
  // Step 0: Detect url language
  detectUrlLanguage(url) {
    if (url.includes("/en/") || url.endsWith("/en.html")) {
      return "en";
    }
    if (url.includes("/fr/") || url.endsWith("/fr.html")) {
      return "fr";
    }
    return null;
  }
  // Step 0: Detect project language
  detectProjectLanguage(existingUrls, normalizedUrls, currentLang) {
    if (existingUrls.size > 0) {
      const firstUrl = Array.from(existingUrls)[0];
      const existingLang = this.detectUrlLanguage(firstUrl);
      if (existingLang)
        return existingLang;
    }
    const pastedLanguages = normalizedUrls.map((u) => u.lang).filter((lang) => lang !== null);
    if (pastedLanguages.length > 0) {
      const uniqueLangs = new Set(pastedLanguages);
      if (uniqueLangs.size === 1) {
        return pastedLanguages[0];
      }
    }
    return currentLang;
  }
  /**** STEP 1 ********************************************************************************************************/
  // Step 1: Validate multiple URLs sequentially (concurrency can cause issues with Akamai rate limiting)
  validateUrls() {
    return __async(this, null, function* () {
      this.setUrlState({ rawUrls: "", isValidating: true });
      const urls = this.urlState().urlsToValidate;
      for (const url of urls) {
        yield this.validateUrl(url);
      }
      const validated = this.urlState().urlsToValidate;
      const tree = this.projectState.getProjectTree();
      const seen = /* @__PURE__ */ new Set();
      const pathsToFlip = /* @__PURE__ */ new Set();
      const urlsToAdd = validated.filter((url) => url.status === "ok" || url.status === "redirect").filter((url) => {
        const path = this.fetchService.generatePath(url.href);
        const node = this.projectState.findNodeByPath(tree, path, this.projectLang);
        if (node) {
          if (!node.data?.status?.inScope) {
            pathsToFlip.add(path);
          }
          return false;
        }
        if (seen.has(url.href))
          return false;
        seen.add(url.href);
        return true;
      }).map((url) => ({ href: url.href, status: "pending" }));
      if (pathsToFlip.size) {
        this.projectState.setScope([...pathsToFlip], this.projectLang);
      }
      const urlsToReview = validated.filter((url) => url.status === "bad" || url.status === "redirect" || url.status === "blocked");
      this.setUrlState({ isValidating: false, urlsToValidate: [], urlsToReview, urlsToAdd });
      this.addUrls();
    });
  }
  // Validate a single URL
  validateUrl(page) {
    return __async(this, null, function* () {
      console.log(page);
      try {
        const response = yield this.fetchService.fetchStatus(page.href, "prod", 3, "none", 500);
        let updated;
        if (!response.ok || response.url.includes("404.html")) {
          updated = __spreadProps(__spreadValues({}, page), { status: "bad" });
          console.log(response);
        } else if (response.url !== page.href) {
          updated = __spreadProps(__spreadValues({}, page), { status: "redirect", originalHref: page.href, href: response.url });
        } else {
          updated = __spreadProps(__spreadValues({}, page), { status: "ok" });
        }
        console.log(updated);
        this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
          urlsToValidate: curr.urlsToValidate.map((url) => url.href === page.href ? updated : url)
        }));
      } catch (error) {
        console.error(error);
        const status = error.message.startsWith("Blocked host") ? "blocked" : "bad";
        this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
          urlsToValidate: curr.urlsToValidate.map((url) => url.href === page.href ? __spreadProps(__spreadValues({}, url), { status }) : url)
        }));
      }
    });
  }
  // Step 1: validating URL progress bar
  validatingProgress = computed(() => {
    const { urlsToValidate } = this.urlState();
    const total = urlsToValidate.length;
    const processed = urlsToValidate.filter((u) => u.status !== "checking").length;
    return {
      percent: total ? Math.round(processed / total * 100) : 0,
      total,
      processed
    };
  }, ...ngDevMode ? [{ debugName: "validatingProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  /**** STEP 2 ********************************************************************************************************/
  linkCache = /* @__PURE__ */ new Map();
  // Step 2: Add multiple URLs sequentially (concurrency can cause issues with Akamai rate limiting)
  addUrls(parent = null) {
    return __async(this, null, function* () {
      this.setUrlState({ isAdding: true });
      const urls = this.urlState().urlsToAdd;
      console.log(urls);
      yield this.updService.fetchData();
      yield this.airtableService.fetchTasks();
      yield this.vanityService.fetchData();
      this.setPreviousProjectData(this.projectState.cloneTree(this.projectState.getProjectTree()));
      for (const url of urls) {
        try {
          const added = yield this.addUrl(url.href, true, parent);
          this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
            urlsToAdd: curr.urlsToAdd.map((u) => u.href === url.href ? __spreadProps(__spreadValues({}, u), { status: added ? "added" : "skipped" }) : u)
          }));
        } catch (e) {
          this.urlState.update((curr) => __spreadProps(__spreadValues({}, curr), {
            urlsToAdd: curr.urlsToAdd.map((u) => u.href === url.href ? __spreadProps(__spreadValues({}, u), { status: "error" }) : u)
          }));
        }
      }
      this.projectState.setProjectTree(this.projectState.getProjectTree());
      this.projectStorageService.rebuildParents(this.projectState.getProjectTree(), void 0);
      this.styleTreeNodeService.updateNodeStyles(this.projectState.getProjectTree(), 0);
      this.messageService.add({
        severity: "success",
        summary: this.translate.instant("addPages.done.summary"),
        detail: this.translate.instant("addPages.done.detail", { count: this.urlState().urlsToAdd.filter((url) => url.status === "added").length }),
        life: 5e3
      });
      this.setUrlState({ isAdding: false, urlsToAdd: [], rawUrls: "" });
    });
  }
  // Step 2: Add a single URL
  addUrl(url, inScope, parent = null) {
    return __async(this, null, function* () {
      const inTree = this.projectState.urlExists(url);
      if (inTree) {
        if (inScope) {
          const path = this.fetchService.generatePath(url);
          const lang = this.fetchService.getLang(url) ?? "en";
          this.projectState.setScope([path], lang);
        }
        return false;
      }
      const doc = yield this.fetchService.fetchContent(url, "prod", 3, "none");
      const breadcrumb = this.fetchService.getBreadcrumb(doc, "https://www.canada.ca");
      if (parent && breadcrumb) {
        if (parent !== breadcrumb.at(-1)?.url)
          return false;
      }
      if (inScope) {
        for (const crumb of breadcrumb) {
          yield this.addUrl(crumb.url, false);
        }
      }
      const pageData = yield this.fetchService.extractPageMetadata(doc, url);
      const oppDoc = pageData.oppUrl ? yield this.fetchService.fetchContent(pageData.oppUrl, "prod", 3, "none") : void 0;
      const oppPageData = oppDoc ? yield this.fetchService.extractPageMetadata(oppDoc, pageData.oppUrl) : void 0;
      const urlLang = this.fetchService.getLang(url);
      if (!urlLang)
        return false;
      const pageDataEN = urlLang === "en" ? pageData : oppPageData;
      const pageDataFR = urlLang === "fr" ? pageData : oppPageData;
      const enUrl = urlLang === "en" ? url : pageData.oppUrl;
      const frUrl = urlLang === "fr" ? url : pageData.oppUrl;
      const jsonDataEN = enUrl ? yield this.fetchService.fetchPageJSON(enUrl) : void 0;
      const jsonDataFR = frUrl ? yield this.fetchService.fetchPageJSON(frUrl) : void 0;
      if (enUrl)
        this.linkCache.set(enUrl, pageDataEN?.links ?? []);
      if (frUrl)
        this.linkCache.set(frUrl, pageDataFR?.links ?? []);
      const enParentUrl = this.fetchService.generateUrl(pageDataEN?.parentPath ?? "", "live");
      const frParentUrl = this.fetchService.generateUrl(pageDataFR?.parentPath ?? "", "live");
      if (enParentUrl && !this.linkCache.has(enParentUrl)) {
        const parentDoc = yield this.fetchService.fetchContent(enParentUrl, "prod", 3, "none");
        if (parentDoc)
          this.linkCache.set(enParentUrl, this.fetchService.getLinks(parentDoc, enParentUrl));
      }
      if (frParentUrl && !this.linkCache.has(frParentUrl)) {
        const parentDoc = yield this.fetchService.fetchContent(frParentUrl, "prod", 3, "none");
        if (parentDoc)
          this.linkCache.set(frParentUrl, this.fetchService.getLinks(parentDoc, frParentUrl));
      }
      const enOrphan = pageDataEN?.parentPath ? !this.linkCache.get(enParentUrl)?.includes(enUrl ?? "") : false;
      const frOrphan = pageDataFR?.parentPath ? !this.linkCache.get(frParentUrl ?? "")?.includes(frUrl ?? "") : false;
      const enData = {
        h1: pageDataEN?.h1 ?? "Missing H1",
        doubleH1: pageDataEN?.doubleH1,
        //Content
        contentHash: pageDataEN?.contentHash,
        lastChecked: pageDataEN?.lastChecked,
        githubSha: void 0,
        localSha: void 0,
        //Metadata
        title: pageDataEN?.title ?? "",
        description: pageDataEN?.description ?? "",
        keywords: pageDataEN?.keywords ?? "",
        //Status
        is404: !pageDataEN,
        //TODO: set to true for baseline/prototype until export
        isOrphan: enOrphan,
        noindex: pageDataEN?.noindex ?? false,
        isArchived: pageDataEN?.isArchived ?? false,
        linksToPortal: pageDataEN?.linksToPortal ?? false,
        linksToSignIn: pageDataEN?.linksToSignIn ?? false,
        hasChatbot: pageDataEN?.hasChatbot ?? false,
        // jrc:content.json
        owner: jsonDataEN?.owner,
        email: jsonDataEN?.email,
        lastPublished: jsonDataEN?.lastPublished,
        lastModified: jsonDataEN?.lastModified,
        //Data
        parentPath: pageDataEN?.parentPath,
        wordCount: pageDataEN?.wordCount ?? -1,
        linkCount: pageDataEN?.linkCount ?? -1,
        template: jsonDataEN?.isFreestyle ? PageTemplate.Freestyle : pageDataEN?.template ?? PageTemplate.Content,
        fleschKincaid: pageDataEN?.fleschKincaid ?? -1,
        gunningFog: pageDataEN?.gunningFog ?? -1,
        phoneNumbers: pageDataEN?.phoneNumbers ?? [],
        // Data from problem assistant
        problem: void 0
      };
      const frData = {
        h1: pageDataFR?.h1 ?? "Missing H1",
        doubleH1: pageDataFR?.doubleH1,
        //Content
        contentHash: pageDataFR?.contentHash,
        lastChecked: pageDataFR?.lastChecked,
        githubSha: void 0,
        localSha: void 0,
        //Metadata
        title: pageDataFR?.title ?? "",
        description: pageDataFR?.description ?? "",
        keywords: pageDataFR?.keywords ?? "",
        //Status
        is404: !pageDataFR,
        isOrphan: frOrphan,
        noindex: pageDataFR?.noindex ?? false,
        isArchived: pageDataFR?.isArchived ?? false,
        linksToPortal: pageDataFR?.linksToPortal ?? false,
        linksToSignIn: pageDataFR?.linksToSignIn ?? false,
        hasChatbot: pageDataFR?.hasChatbot ?? false,
        // jrc:content.json
        owner: jsonDataFR?.owner,
        email: jsonDataFR?.email,
        lastPublished: jsonDataFR?.lastPublished,
        lastModified: jsonDataFR?.lastModified,
        //Data
        parentPath: pageDataFR?.parentPath,
        wordCount: pageDataFR?.wordCount ?? -1,
        linkCount: pageDataFR?.linkCount ?? -1,
        template: jsonDataFR?.isFreestyle ? PageTemplate.Freestyle : pageDataFR?.template ?? PageTemplate.Content,
        fleschKincaid: pageDataFR?.fleschKincaid ?? -1,
        gunningFog: pageDataFR?.gunningFog ?? -1,
        phoneNumbers: pageDataFR?.phoneNumbers ?? [],
        // Data from problem assistant
        problem: void 0
      };
      const githubEnData = __spreadProps(__spreadValues({}, enData), { phoneNumbers: [...enData.phoneNumbers], is404: true });
      const githubFrData = __spreadProps(__spreadValues({}, frData), { phoneNumbers: [...frData.phoneNumbers], is404: true });
      const status = {
        inScope,
        isNew: false,
        isMoved: false,
        isROT: false
      };
      const node = {
        label: pageData.h1 ?? url,
        data: {
          lang: urlLang,
          path: {
            en: this.fetchService.generatePath(enUrl),
            fr: this.fetchService.generatePath(frUrl)
          },
          visits: {
            en: this.updService.findVisitsByUrl(enUrl.replace("https://", "")),
            fr: this.updService.findVisitsByUrl(frUrl.replace("https://", ""))
          },
          task: {
            en: this.airtableService.findTaskNamesByUrl(enUrl, "en"),
            fr: this.airtableService.findTaskNamesByUrl(frUrl, "fr")
          },
          vanity: {
            en: this.vanityService.findVanitiesByDestination(enUrl),
            fr: this.vanityService.findVanitiesByDestination(frUrl)
          },
          status,
          baseline: {
            en: __spreadValues({}, githubEnData),
            fr: __spreadValues({}, githubFrData)
          },
          live: {
            en: enData,
            fr: frData
          },
          prototype: {
            en: __spreadValues({}, githubEnData),
            fr: __spreadValues({}, githubFrData)
          },
          metadataReview: void 0,
          notes: void 0,
          isContainer: false,
          isCrawled: false
        },
        expanded: true,
        children: []
      };
      const tree = this.projectState.getProjectTree();
      const parentPath = pageData?.parentPath;
      if (parentPath) {
        const parentNode = this.projectState.findNodeByPath(tree, parentPath, urlLang);
        if (!parentNode)
          return false;
        parentNode.children = parentNode.children ?? [];
        parentNode.children.push(node);
      } else {
        tree.push(node);
      }
      return true;
    });
  }
  // Step 2: adding URL progress bar
  addingProgress = computed(() => {
    const { urlsToAdd } = this.urlState();
    const total = urlsToAdd.length;
    const processed = urlsToAdd.filter((u) => u.status !== "pending").length;
    return {
      percent: total ? Math.round(processed / total * 100) : 0,
      total,
      processed
    };
  }, ...ngDevMode ? [{ debugName: "addingProgress" }] : (
    /* istanbul ignore next */
    []
  ));
  /**** OTHER UTILITIES ************************************************************************************************/
  // Previous project data for undo
  previousProjectData = signal(null, ...ngDevMode ? [{ debugName: "previousProjectData" }] : (
    /* istanbul ignore next */
    []
  ));
  getPreviousProjectData = computed(() => this.previousProjectData(), ...ngDevMode ? [{ debugName: "getPreviousProjectData" }] : (
    /* istanbul ignore next */
    []
  ));
  setPreviousProjectData(data) {
    this.previousProjectData.set(data);
  }
  // Highlight logic
  highlight = signal(false, ...ngDevMode ? [{ debugName: "highlight" }] : (
    /* istanbul ignore next */
    []
  ));
  setHighlight(value) {
    this.highlight.set(value);
  }
  getHighlight() {
    return this.highlight();
  }
  // Append URLs to input (for the various find pages components)
  appendUrlsToInput(newUrls) {
    const lang = this.projectState.detectPrimaryLanguage();
    const currentRawUrls = this.urlState().rawUrls;
    const additionalRawUrls = newUrls.join("\n");
    const updatedRawUrls = currentRawUrls ? `${currentRawUrls}
${additionalRawUrls}` : additionalRawUrls;
    const { parsedUrls } = this.parseUrls(updatedRawUrls, new Set(this.projectState.getAllPages(lang, "live", "inScope").map((u) => u.url)), lang);
    this.setUrlState({
      rawUrls: updatedRawUrls,
      urlsToValidate: parsedUrls
    });
  }
  // Add child pages
  addChildren(node, lang, autoAdd = true) {
    return __async(this, null, function* () {
      if (!node)
        return;
      const parentLink = this.fetchService.generateUrl(node.data?.path[lang], "live");
      if (!parentLink)
        return;
      const existingPages = new Set(this.projectState.getAllPages(lang, "live", "inScope").map((page) => page.url));
      if (autoAdd) {
        console.log("Auto-adding child pages");
        const allLinks = /* @__PURE__ */ new Set();
        try {
          const doc = yield this.fetchService.fetchContent(parentLink, "prod", 3, "none");
          const links = this.fetchService.getLinks(doc, parentLink);
          links.filter((link) => link.includes("canada.ca")).forEach((link) => allLinks.add(link));
        } catch (error) {
          console.warn(`Failed to fetch page ${parentLink}: ${error}`);
        }
        const linksToAdd = [...allLinks].filter((url) => !existingPages.has(url));
        const linksToLimit = this.getChildUrlsService.skipFormsAndPubs;
        const linkLimit = this.getChildUrlsService.PAGE_LIMIT;
        const limited = linksToLimit.has(parentLink);
        const limitedLinksToAdd = limited ? linksToAdd.slice(0, linkLimit) : linksToAdd;
        if (limitedLinksToAdd.length === 0)
          return;
        this.setUrlState({
          isAdding: true,
          urlsToAdd: limitedLinksToAdd.map((url) => ({ href: url, status: "pending" }))
        });
        yield this.addUrls(parentLink);
        if (limited) {
          return;
        }
        node.data.isCrawled = true;
      } else {
        console.log("Checking for child pages (popup mode)");
        const childPages = (yield this.getChildUrlsService.findChildren(/* @__PURE__ */ new Set([parentLink]), 1)).filter((url) => !existingPages.has(url));
        this.parentUrl.set(parentLink);
        this.childUrls.set(childPages.map((url) => ({ url, selected: true })));
      }
    });
  }
  parentUrl = signal("", ...ngDevMode ? [{ debugName: "parentUrl" }] : (
    /* istanbul ignore next */
    []
  ));
  childUrls = signal([], ...ngDevMode ? [{ debugName: "childUrls" }] : (
    /* istanbul ignore next */
    []
  ));
  selectedChildUrlsCount = computed(() => this.childUrls().filter((child) => child.selected).length, ...ngDevMode ? [{ debugName: "selectedChildUrlsCount" }] : (
    /* istanbul ignore next */
    []
  ));
  toggleSelectedChildren(index, selected) {
    this.childUrls.update((urls) => {
      const updated = [...urls];
      updated[index] = __spreadProps(__spreadValues({}, updated[index]), { selected });
      return updated;
    });
  }
  addSelectedChildren() {
    return __async(this, null, function* () {
      const selectedUrls = this.childUrls().filter((item) => item.selected).map((item) => item.url);
      this.setUrlState({
        isAdding: true,
        urlsToAdd: selectedUrls.map((url) => ({ href: url, status: "pending" }))
      });
      yield this.addUrls(this.parentUrl());
    });
  }
  static \u0275fac = function AddUrlsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AddUrlsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AddUrlsService, factory: _AddUrlsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AddUrlsService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();

export {
  GetChildPagesService,
  AddUrlsService
};
//# sourceMappingURL=chunk-OSQZMVCQ.js.map
