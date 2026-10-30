import {
  ExportGitHubService
} from "./chunk-RB7Q4TO5.js";
import {
  CollaboratorService,
  ProjectStorageService,
  UsageService,
  version
} from "./chunk-A3C3MBAO.js";
import {
  SignInService
} from "./chunk-NJENQTX6.js";
import {
  FetchService,
  PageTemplate,
  ProjectPhase
} from "./chunk-Y3MLV2IT.js";
import {
  BaseComponent,
  marker
} from "./chunk-QN4TTD5X.js";
import {
  STOP_WORDS
} from "./chunk-DMOF7S63.js";
import {
  HttpClient,
  Lt,
  MessageService,
  bt,
  environment,
  isPlatformBrowser,
  q2 as q,
  vt
} from "./chunk-7YP54JN5.js";
import {
  DOCUMENT,
  Directive,
  Injectable,
  Input,
  NgModule,
  PLATFORM_ID,
  TranslateService,
  booleanAttribute,
  catchError,
  computed,
  effect,
  firstValueFrom,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵgetInheritedFactory
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/services/data-sources/airtable.service.ts
var AirtableService = class _AirtableService {
  http = inject(HttpClient);
  FUNCTION_URL = environment.airtableFunctionUrl;
  // Signals for managing data state
  tasks = signal([], ...ngDevMode ? [{ debugName: "tasks" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  lastFetched = signal(null, ...ngDevMode ? [{ debugName: "lastFetched" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  isLoading = computed(() => this.loading(), ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  hasError = computed(() => !!this.error(), ...ngDevMode ? [{ debugName: "hasError" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = computed(() => this.error(), ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  data = computed(() => this.tasks(), ...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  isCached = computed(() => this.lastFetched() !== null, ...ngDevMode ? [{ debugName: "isCached" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Fetch task data from Airtable (or use cached data if available)
   */
  fetchTasks(forceRefresh = false) {
    return __async(this, null, function* () {
      if (!forceRefresh && this.tasks().length > 0) {
        console.log("Using cached Airtable data");
        return this.tasks();
      }
      this.loading.set(true);
      this.error.set(null);
      try {
        console.log("Fetching Airtable data...");
        const response = yield firstValueFrom(this.http.get(this.FUNCTION_URL).pipe(catchError((error) => {
          console.error("Failed to fetch Airtable tasks:", error);
          this.error.set(error.error?.error || "Failed to fetch tasks");
          return of(null);
        })));
        if (response) {
          this.tasks.set(response);
          this.lastFetched.set(Date.now());
          console.log(`Fetched ${response.length} tasks from Airtable`);
          return response;
        }
        return [];
      } catch (error) {
        console.error("Error fetching Airtable tasks:", error);
        this.error.set("An unexpected error occurred");
        return [];
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Clear cached data and fetch fresh data
   */
  refreshData() {
    return __async(this, null, function* () {
      this.clearCache();
      return yield this.fetchTasks(true);
    });
  }
  /**
   * Clear the cache and current data
   */
  clearCache() {
    this.tasks.set([]);
    this.error.set(null);
    this.lastFetched.set(null);
    console.log("Cleared Airtable cache");
  }
  /**
   * Get tasks filtered by language
   */
  getTasksByLanguage(language) {
    return this.tasks().filter((task) => {
      const urls = language === "en" ? task.urlsEN : task.urlsFR;
      return urls.length > 0;
    });
  }
  /**
   * Search tasks by name
   */
  searchTasks(query, language = "en") {
    if (!query.trim()) {
      return this.tasks();
    }
    const lowerQuery = query.toLowerCase();
    return this.tasks().filter((task) => {
      const taskName = language === "en" ? task.taskNameEN : task.taskNameFR;
      return taskName.toLowerCase().includes(lowerQuery);
    });
  }
  // Finds all tasks for a given URL
  findTaskNamesByUrl(url, language) {
    const matchingTasks = this.tasks().filter((task) => {
      const urls = language === "en" ? task.urlsEN : task.urlsFR;
      return urls.some((taskUrl) => taskUrl === url);
    });
    return matchingTasks.map((task) => language === "en" ? task.taskNameEN : task.taskNameFR);
  }
  /**
   * Check if data is available (cached or needs fetching)
   */
  hasData() {
    return this.tasks().length > 0;
  }
  /**
   * Get the timestamp of when data was last fetched
   */
  getLastFetchedTime() {
    const timestamp = this.lastFetched();
    return timestamp ? new Date(timestamp) : null;
  }
  static \u0275fac = function AirtableService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AirtableService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _AirtableService, factory: _AirtableService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AirtableService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/data-sources/upd.service.ts
var UpdService = class _UpdService {
  http = inject(HttpClient);
  DATA_URL = "/visits-urls.json";
  // Signals for managing data state
  pageData = signal([], ...ngDevMode ? [{ debugName: "pageData" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  lastFetched = signal(null, ...ngDevMode ? [{ debugName: "lastFetched" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  isLoading = computed(() => this.loading(), ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  hasError = computed(() => !!this.error(), ...ngDevMode ? [{ debugName: "hasError" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = computed(() => this.error(), ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  data = computed(() => this.pageData(), ...ngDevMode ? [{ debugName: "data" }] : (
    /* istanbul ignore next */
    []
  ));
  isCached = computed(() => this.lastFetched() !== null, ...ngDevMode ? [{ debugName: "isCached" }] : (
    /* istanbul ignore next */
    []
  ));
  /**
   * Fetch UPD data from JSON file (or use cached data if available)
   */
  fetchData(forceRefresh = false) {
    return __async(this, null, function* () {
      if (!forceRefresh && this.pageData().length > 0) {
        console.log("Using cached UPD data");
        return this.pageData();
      }
      this.loading.set(true);
      this.error.set(null);
      try {
        console.log("Fetching UPD data...");
        const response = yield firstValueFrom(this.http.get(this.DATA_URL).pipe(catchError((error) => {
          console.error("Failed to fetch UPD data:", error);
          this.error.set("Failed to fetch visit data");
          return of(null);
        })));
        if (response) {
          this.pageData.set(response);
          this.lastFetched.set(Date.now());
          console.log(`Fetched ${response.length} pages from UPD data`);
          return response;
        }
        return [];
      } catch (error) {
        console.error("Error fetching UPD data:", error);
        this.error.set("An unexpected error occurred");
        return [];
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Clear cached data and fetch fresh data
   */
  refreshData() {
    return __async(this, null, function* () {
      this.clearCache();
      return yield this.fetchData(true);
    });
  }
  /**
   * Clear the cache and current data
   */
  clearCache() {
    this.pageData.set([]);
    this.error.set(null);
    this.lastFetched.set(null);
    console.log("Cleared UPD cache");
  }
  /**
   * Find visits for a given URL
   */
  findVisitsByUrl(url) {
    const page = this.pageData().find((item) => item.url === url);
    return page?.visits ?? -1;
  }
  /**
   * Find complete page data for a given URL
   */
  findPageDataByUrl(url) {
    return this.pageData().find((item) => item.url === url);
  }
  /**
   * Get top N pages by visits
   */
  getTopPagesByVisits(limit = 10) {
    return [...this.pageData()].sort((a, b) => b.visits - a.visits).slice(0, limit);
  }
  /**
   * Search pages by title or URL
   */
  searchPages(query) {
    if (!query.trim()) {
      return this.pageData();
    }
    const lowerQuery = query.toLowerCase();
    return this.pageData().filter((page) => {
      return page.title.toLowerCase().includes(lowerQuery) || page.url.toLowerCase().includes(lowerQuery);
    });
  }
  /**
   * Get total visits across all pages
   */
  getTotalVisits() {
    return this.pageData().reduce((sum, page) => sum + page.visits, 0);
  }
  /**
   * Check if data is available (cached or needs fetching)
   */
  hasData() {
    return this.pageData().length > 0;
  }
  /**
   * Get the timestamp of when data was last fetched
   */
  getLastFetchedTime() {
    const timestamp = this.lastFetched();
    return timestamp ? new Date(timestamp) : null;
  }
  static \u0275fac = function UpdService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UpdService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UpdService, factory: _UpdService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UpdService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/data-sources/vanity.service.ts
var VanityService = class _VanityService {
  http = inject(HttpClient);
  DATA_URL = "/vanity-urls.json";
  vanityData = signal([], ...ngDevMode ? [{ debugName: "vanityData" }] : (
    /* istanbul ignore next */
    []
  ));
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = computed(() => this.loading(), ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  hasError = computed(() => !!this.error(), ...ngDevMode ? [{ debugName: "hasError" }] : (
    /* istanbul ignore next */
    []
  ));
  fetchData(forceRefresh = false) {
    return __async(this, null, function* () {
      if (!forceRefresh && this.vanityData().length > 0)
        return;
      this.loading.set(true);
      this.error.set(null);
      try {
        const response = yield firstValueFrom(this.http.get(this.DATA_URL).pipe(catchError((error) => {
          console.error("Failed to fetch vanity data:", error);
          this.error.set("Failed to fetch vanity URLs");
          return of(null);
        })));
        if (response)
          this.vanityData.set(response);
      } catch (error) {
        console.error("Error fetching vanity data:", error);
        this.error.set("An unexpected error occurred");
      } finally {
        this.loading.set(false);
      }
    });
  }
  findVanitiesByDestination(destination) {
    return this.vanityData().find((entry) => entry.destination === destination)?.vanity ?? [];
  }
  static \u0275fac = function VanityService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _VanityService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _VanityService, factory: _VanityService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(VanityService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/project-state.service.ts
var ProjectStateService = class _ProjectStateService {
  translate = inject(TranslateService);
  messageService = inject(MessageService);
  projectStorageService = inject(ProjectStorageService);
  collaboratorService = inject(CollaboratorService);
  fetchService = inject(FetchService);
  airtableService = inject(AirtableService);
  updService = inject(UpdService);
  vanityService = inject(VanityService);
  usageService = inject(UsageService);
  exportGitHubService = inject(ExportGitHubService);
  signInService = inject(SignInService);
  currentLang = signal(this.translate.currentLang() ?? "en", ...ngDevMode ? [{ debugName: "currentLang" }] : (
    /* istanbul ignore next */
    []
  ));
  // Main project state
  project = signal({
    id: this.generateId(),
    key: "",
    version,
    projectName: "",
    phase: ProjectPhase.Draft,
    created: /* @__PURE__ */ new Date(),
    lastModified: /* @__PURE__ */ new Date(),
    lastSaved: /* @__PURE__ */ new Date(),
    lastExported: null,
    lastDownloaded: null,
    storageType: "local",
    repoType: "github",
    collaborators: this.collaboratorService.getInitialCollaborators(),
    baselinePages: 0,
    inScopePages: 0,
    github: {
      owner: environment.defaultOrg,
      repo: "",
      branch: "main",
      hasBaselineRepo: false
    },
    projectData: []
  }, ...ngDevMode ? [{ debugName: "project" }] : (
    /* istanbul ignore next */
    []
  ));
  getProject = computed(() => this.project(), ...ngDevMode ? [{ debugName: "getProject" }] : (
    /* istanbul ignore next */
    []
  ));
  getGitHub = computed(() => this.project().github, ...ngDevMode ? [{ debugName: "getGitHub" }] : (
    /* istanbul ignore next */
    []
  ));
  // Track save status
  saveStatus = signal("saved", ...ngDevMode ? [{ debugName: "saveStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  getSaveStatus = computed(() => this.saveStatus(), ...ngDevMode ? [{ debugName: "getSaveStatus" }] : (
    /* istanbul ignore next */
    []
  ));
  // Set autosave delay
  autoSaveTimer = null;
  AUTO_SAVE_DELAY = 1e4;
  // 30 seconds
  MAX_UNSAVED_DURATION = 5 * 60 * 1e3;
  // 5 minutes
  // Loading states for project versions
  refreshing = signal({
    prototype: false,
    live: false,
    baseline: false
  }, ...ngDevMode ? [{ debugName: "refreshing" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const currentProject = this.project();
      const hasChanges = currentProject.lastModified > currentProject.lastSaved;
      if (hasChanges) {
        this.saveStatus.set("unsaved");
        const timeSinceLastSave = currentProject.lastModified.getTime() - currentProject.lastSaved.getTime();
        const shouldForceSave = timeSinceLastSave >= this.MAX_UNSAVED_DURATION;
        if (shouldForceSave) {
          this.saveProject();
          return;
        }
        if (this.autoSaveTimer) {
          clearTimeout(this.autoSaveTimer);
        }
        this.autoSaveTimer = setTimeout(() => {
          this.saveProject();
        }, this.AUTO_SAVE_DELAY);
      }
    });
    effect(() => {
      if (this.signInService.user() && localStorage.getItem("pendingStorageSwitch") === "cloud") {
        localStorage.removeItem("pendingStorageSwitch");
        this.setStorageType("cloud");
      }
    });
    this.translate.onLangChange.subscribe((e) => this.currentLang.set(e.lang));
  }
  // Helper to generate unique project ID
  generateId() {
    return `project_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
  }
  // Set entire project
  setProject(project, mode = "load") {
    return __async(this, null, function* () {
      this.project.set(project);
      if (mode === "load") {
        const [major, minor] = String(project.version ?? "0.0.0").split(".").map(Number);
        const onlyMissing = major > 0 || major === 0 && minor >= 6;
        yield this.refreshAll(project.projectData, "live", true);
        yield this.refreshAll(project.projectData, "baseGH", true, true, onlyMissing);
        yield this.refreshAll(project.projectData, "protoGH", true, true, true);
      }
    });
  }
  // Update project metadata
  setProjectName(name) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      projectName: name,
      lastModified: /* @__PURE__ */ new Date()
    }));
    if (name && !this.project().github.repo) {
      let repo = this.sanitizeUrlFragment(name);
      const currentYear = (/* @__PURE__ */ new Date()).getFullYear().toString();
      if (!/[-_]?\d{4}$/.test(repo)) {
        repo = `${repo}-${currentYear}`;
      }
      this.setGitHubRepo({ repo });
    }
  }
  setProjectPhase(phase) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      phase,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  //Set locked by
  setLockedBy() {
    const user = this.signInService.user()?.login;
    if (!user) {
      return;
    }
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      lockedBy: user,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  //Set locked by
  removeLockedBy() {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      lockedBy: void 0,
      storageType: "cloud",
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setGitHubRepo(gitHubData) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      github: __spreadValues(__spreadValues({}, curr.github), gitHubData),
      lastModified: /* @__PURE__ */ new Date()
    }));
    if (this.project().github.repo && !this.project().projectName) {
      const name = this.project().github.repo.replace(/-/g, " ").replace(/^./, (char) => char.toUpperCase());
      this.setProjectName(name);
    }
  }
  setCollaborators(collaborators) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      collaborators,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setStorageType(type) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      storageType: type,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setRepoType(type) {
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      repoType: type,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  setPageSha(path, sha, version2 = "prototype", lang = "en", repoType = "github") {
    const tree = this.getProjectTree();
    const node = this.findNodeByPath(tree, path, lang);
    if (node?.data) {
      if (repoType === "github" && !node.data[version2][lang].githubSha) {
        node.data[version2][lang].githubSha = {};
      }
      if (repoType === "local" && !node.data[version2][lang].localSha) {
        node.data[version2][lang].localSha = {};
      }
      if (repoType === "github") {
        node.data[version2][lang].githubSha = sha;
      } else if (repoType === "local") {
        node.data[version2][lang].localSha = sha;
      }
      this.project.update((p) => __spreadProps(__spreadValues({}, p), {
        lastModified: /* @__PURE__ */ new Date(),
        projectData: [...p.projectData]
      }));
    }
  }
  setMetadataReview(path, review, promptConfig) {
    const tree = this.getProjectTree();
    const lang = this.fetchService.getLang(path) ?? "en";
    const node = this.findNodeByPath(tree, path, lang);
    if (node?.data) {
      node.data.metadataReview = review;
      this.project.update((p) => __spreadProps(__spreadValues({}, p), {
        lastModified: /* @__PURE__ */ new Date(),
        projectData: [...p.projectData]
      }));
      this.usageService.trackMetadata(this.project().id, this.project().org ?? "DEFAULT", this.project().storageType, path, node.data.metadata?.description, node.data.metadata?.descriptionFR, node.data.metadata?.keywords, node.data.metadata?.keywordsFR, review, promptConfig ?? {}, !promptConfig);
    }
  }
  setExportDate() {
    this.project.update((p) => __spreadProps(__spreadValues({}, p), {
      lastModified: /* @__PURE__ */ new Date(),
      lastExported: /* @__PURE__ */ new Date()
    }));
  }
  setDownloadDate() {
    this.project.update((p) => __spreadProps(__spreadValues({}, p), {
      lastModified: /* @__PURE__ */ new Date(),
      lastDownloaded: /* @__PURE__ */ new Date()
    }));
  }
  setModifiedDate() {
    this.project.update((p) => __spreadProps(__spreadValues({}, p), {
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  // Get project tree
  getProjectTree = computed(() => this.project().projectData, ...ngDevMode ? [{ debugName: "getProjectTree" }] : (
    /* istanbul ignore next */
    []
  ));
  setProjectTree(tree) {
    const baselineCount = this.countPages("baseline");
    const inScopeCount = this.countPages("inScope");
    this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
      baselinePages: baselineCount,
      inScopePages: inScopeCount,
      projectData: tree,
      lastModified: /* @__PURE__ */ new Date()
    }));
  }
  getAlertIssuesReport(path) {
    const match = this.findNodeAndLanguageByPath(path);
    const report = match?.node.data?.issueReports?.[match.lang]?.alerts;
    return report ? structuredClone(report) : null;
  }
  setAlertIssuesReport(path, report) {
    const match = this.findNodeAndLanguageByPath(path);
    if (!match?.node.data) {
      console.warn(`Unable to store alert issues report: project page not found for path "${path}".`);
      return false;
    }
    match.node.data.issueReports ??= {};
    const languageReports = match.node.data.issueReports[match.lang] ??= {};
    languageReports.alerts = structuredClone(report);
    this.project.update((project) => __spreadProps(__spreadValues({}, project), {
      projectData: [...project.projectData],
      lastModified: /* @__PURE__ */ new Date()
    }));
    return true;
  }
  findNodeAndLanguageByPath(path) {
    const tree = this.getProjectTree();
    const enNode = this.findNodeByPath(tree, path, "en");
    if (enNode)
      return { node: enNode, lang: "en" };
    const frNode = this.findNodeByPath(tree, path, "fr");
    return frNode ? { node: frNode, lang: "fr" } : null;
  }
  // Count pages
  countPages(mode = "inScope") {
    let count = 0;
    const traverse = (nodes) => {
      for (const node of nodes) {
        if (mode === "inScope" && node.data?.status.inScope)
          count++;
        else if (mode === "baseline") {
          count++;
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    return count;
  }
  setScope(paths, lang = "en") {
    const currentTree = this.project().projectData;
    const traverse = (nodes) => {
      for (const node of nodes) {
        if (node.data?.path[lang] && paths.includes(node.data.path[lang])) {
          node.data.status.inScope = true;
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    this.setProjectTree(currentTree);
  }
  /** Get a nested value from the TreeNode */
  getNestedValue(obj, path) {
    return path.reduce((current, key) => current && typeof current === "object" ? current[key] : void 0, obj);
  }
  /** Set a nested value in the TreeNode */
  setNestedValue(obj, path, value) {
    const last = path[path.length - 1];
    const target = path.slice(0, -1).reduce((current, key) => {
      if (!current[key] || typeof current[key] !== "object")
        current[key] = {};
      return current[key];
    }, obj);
    if (target)
      target[last] = value;
  }
  // Check if URL already exists in tree
  urlExists(url) {
    const urlLang = this.fetchService.getLang(url);
    if (!urlLang)
      return false;
    const urlPath = this.fetchService.generatePath(url);
    const search = (nodes) => {
      for (const node of nodes) {
        if (node.data?.path[urlLang] === urlPath)
          return true;
        if (node.children?.length && search(node.children))
          return true;
      }
      return false;
    };
    return search(this.project().projectData);
  }
  // TODO: refactor getAllUrls and getAllPages to use new data structure
  getAllPages(lang, urlVersion = "protoGH", scope = "all") {
    const version2 = urlVersion.startsWith("proto") ? "prototype" : urlVersion.startsWith("base") ? "baseline" : "live";
    const pages = [];
    const traverse = (nodes) => {
      for (const node of nodes) {
        const path = node.data?.path?.[lang] ?? "";
        const h1 = node.data?.[version2]?.[lang]?.h1;
        const url = this.fetchService.generateUrl(path, urlVersion, this.project().github.owner, this.project().github.repo);
        if (scope === "inScope" && path && h1 && url && node.data?.status.inScope) {
          pages.push({ label: h1, path, url });
        } else if (scope === "all" && path && h1 && url) {
          pages.push({ label: h1, path, url });
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    return pages;
  }
  getPairedPages(urlVersion = "protoGH", scope = "all") {
    console.log("UPDATE", urlVersion);
    const version2 = urlVersion.startsWith("proto") ? "prototype" : urlVersion.startsWith("base") ? "baseline" : "live";
    const pages = [];
    const traverse = (nodes) => {
      for (const node of nodes) {
        const enPath = node.data?.path?.en ?? "";
        const enH1 = node.data?.[version2]?.en?.h1;
        const enSection = node.data?.[version2]?.en?.doubleH1 ?? "";
        const enUrl = this.fetchService.generateUrl(enPath, urlVersion, this.project().github.owner, this.project().github.repo);
        const frPath = node.data?.path?.fr ?? "";
        const frH1 = node.data?.[version2]?.fr?.h1;
        const frSection = node.data?.[version2]?.fr?.doubleH1 ?? "";
        const frUrl = this.fetchService.generateUrl(frPath, urlVersion, this.project().github.owner, this.project().github.repo);
        const status = !node.data?.status.inScope ? "isBaseline" : node.data?.status.isNew ? "isNew" : node.data?.status.isROT ? "isROT" : node.data?.status.isMoved ? "isMoved" : "";
        if (scope === "inScope" && node.data?.status?.inScope && enPath && enH1 && enUrl && frPath && frH1 && frUrl) {
          pages.push({
            en: { label: enH1, path: enPath, url: enUrl, group: enSection },
            fr: { label: frH1, path: frPath, url: frUrl, group: frSection },
            status
          });
        } else if (scope === "all" && enPath && enH1 && enUrl && frPath && frH1 && frUrl) {
          pages.push({
            en: { label: enH1, path: enPath, url: enUrl, group: enSection },
            fr: { label: frH1, path: frPath, url: frUrl, group: frSection },
            status
          });
        } else {
          console.log({
            en: { label: enH1, path: enPath, url: enUrl, group: enSection },
            fr: { label: frH1, path: frPath, url: frUrl, group: frSection },
            status
          });
        }
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(this.project().projectData);
    return pages;
  }
  /** Get all paths starting at a specific node */
  getSubtreePaths(node, lang) {
    const paths = [];
    if (node.data)
      paths.push(node.data.path[lang]);
    const walk = (currentNode) => {
      (currentNode.children ?? []).forEach((child) => {
        if (child.data)
          paths.push(child.data.path[lang]);
        walk(child);
      });
    };
    walk(node);
    return paths;
  }
  /** Get max child page depth from a specific node */
  getSubtreeMaxDepth(node) {
    if (!node.children?.length)
      return 0;
    return 1 + Math.max(...node.children.map((child) => this.getSubtreeMaxDepth(child)));
  }
  /** Get max in-scope child page depth from a specific node */
  getInScopeMaxDepth(node) {
    const findMinInScopeDepth = (currentNode) => {
      if (currentNode.data?.status.inScope)
        return 0;
      if (!currentNode.children?.length)
        return void 0;
      const childDepths = currentNode.children.map((child) => findMinInScopeDepth(child)).filter((depth) => depth !== void 0).map((depth) => depth + 1);
      return childDepths.length > 0 ? Math.min(...childDepths) : void 0;
    };
    const minInScopeDepth = findMinInScopeDepth(node);
    if (minInScopeDepth === void 0)
      return void 0;
    return this.getSubtreeMaxDepth(node) - minInScopeDepth;
  }
  //Template options
  templateOptions = computed(() => Object.values(PageTemplate).map((key) => ({ value: key, label: this.translate.instant(key) })).sort((a, b) => a.label.localeCompare(b.label, this.translate.currentLang())), ...ngDevMode ? [{ debugName: "templateOptions" }] : (
    /* istanbul ignore next */
    []
  ));
  //TreeNode lookup
  findNodeByPath(nodes, path, lang = "en") {
    for (const node of nodes) {
      const nodeUrl = node.data.path[lang];
      if (nodeUrl === path) {
        return node;
      }
      if (node.children) {
        const found = this.findNodeByPath(node.children, path, lang);
        if (found)
          return found;
      }
    }
    return null;
  }
  // Get project state for saving (with circular references removed)
  getProjectToSave() {
    const currentProject = this.project();
    return __spreadProps(__spreadValues({}, currentProject), {
      projectData: this.projectStorageService.removeParents(currentProject.projectData)
    });
  }
  /**
   * Save project (manual or auto-save)
   * Cancels any pending auto-save timer
   */
  saveProject() {
    return __async(this, null, function* () {
      const project = this.project();
      if (this.autoSaveTimer) {
        clearTimeout(this.autoSaveTimer);
        this.autoSaveTimer = null;
      }
      this.saveStatus.set("saving");
      const previousLastSaved = project.lastSaved;
      if (project.storageType === "cloud") {
        const { isSignedIn, isCollaborator, isLocked } = this.collaboratorService.getUploadAccessInfo(project);
        const isLockedByOther = !!(isLocked && isLocked !== "byMe");
        if (!this.collaboratorService.canEditProject(project) || isLockedByOther) {
          const message = isCollaborator && !isSignedIn ? this.translate.instant("switch.convertToLocalMessage.signIn") : isCollaborator && isLockedByOther ? this.translate.instant("switch.convertToLocalMessage.lockedBy", { user: isLocked }) : this.translate.instant("switch.convertToLocalMessage.notCollab");
          this.messageService.add({
            severity: "info",
            summary: this.translate.instant("switch.convertToLocalMessage.summary"),
            detail: message,
            sticky: true
          });
          this.setStorageType("local");
        }
      }
      try {
        this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
          lastSaved: /* @__PURE__ */ new Date()
        }));
        const projectToSave = this.project();
        const success = yield this.projectStorageService.saveProject(projectToSave);
        if (success) {
          yield new Promise((resolve) => setTimeout(resolve, 2e3));
          this.saveStatus.set("saved");
          console.log("Project saved successfully");
          return true;
        } else {
          this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
            lastSaved: previousLastSaved
          }));
          this.saveStatus.set("error");
          console.error("Failed to save project");
          return false;
        }
      } catch (error) {
        this.project.update((curr) => __spreadProps(__spreadValues({}, curr), {
          lastSaved: previousLastSaved
        }));
        this.saveStatus.set("error");
        console.error("Error saving project:", error);
        return false;
      }
    });
  }
  /**
   * Check if there are unsaved changes
   */
  hasUnsavedChanges() {
    const project = this.project();
    return project.lastModified > project.lastSaved;
  }
  /**
   * Save if there are unsaved changes (used before project switch or app close)
   */
  saveIfNeeded() {
    return __async(this, null, function* () {
      if (this.hasUnsavedChanges()) {
        return yield this.saveProject();
      }
      return true;
    });
  }
  // Export as JSON
  exportProjectAsJson() {
    const project = this.getProjectToSave();
    const data = JSON.stringify(project, null, 2);
    const blob = new Blob([data], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const filename = project.github.repo ?? project.projectName ?? project.id;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}.json`;
    a.click();
    URL.revokeObjectURL(url);
  }
  // Import from JSON
  importProjectFromJson(jsonString) {
    try {
      const project = JSON.parse(jsonString);
      if (project.version !== version) {
        console.warn("Incompatible project version. Import skipped.");
        return false;
      }
      project.created = new Date(project.created);
      project.lastModified = new Date(project.lastModified);
      project.lastSaved = new Date(project.lastSaved);
      project.lastExported = project.lastExported ? new Date(project.lastExported) : null;
      this.project.set(project);
      this.saveProject();
      console.log("Project imported successfully");
      return true;
    } catch (error) {
      console.error("Failed to import project:", error);
      return false;
    }
  }
  // Reset project
  resetProject() {
    return __async(this, null, function* () {
      this.saveIfNeeded();
      this.project.set({
        id: this.generateId(),
        key: "autosave",
        version,
        projectName: "",
        phase: ProjectPhase.Draft,
        created: /* @__PURE__ */ new Date(),
        lastModified: /* @__PURE__ */ new Date(),
        lastSaved: /* @__PURE__ */ new Date(),
        lastExported: null,
        lastDownloaded: null,
        storageType: "local",
        repoType: "github",
        collaborators: this.collaboratorService.getInitialCollaborators(),
        baselinePages: 0,
        inScopePages: 0,
        github: {
          owner: environment.defaultOrg,
          repo: "",
          branch: "main",
          hasBaselineRepo: false
        },
        projectData: []
      });
      yield this.saveProject();
      console.log("Project reset");
    });
  }
  flattenTree() {
    const tree = this.project().projectData;
    const flatNodes = [];
    const walk = (nodes) => {
      for (const node of nodes) {
        const data = node.data;
        if (!data)
          continue;
        const lang = data.lang ?? "en";
        flatNodes.push({
          //English
          enPath: data.path.en,
          enH1: data.prototype?.en.h1 ?? "",
          enDoubleH1: data.prototype?.en.doubleH1 ?? "",
          enVanity: data.vanity?.en ?? [],
          //French
          frPath: data.path.fr,
          frH1: data.prototype?.fr.h1 ?? "",
          frDoubleH1: data.prototype?.fr.doubleH1 ?? "",
          frVanity: data.vanity?.fr ?? [],
          //Status
          inScope: data.status.inScope,
          isNew: data.status.isNew,
          isMoved: data.status.isMoved,
          isROT: data.status.isROT,
          isArchived: data.prototype?.en.isArchived ?? data.prototype?.fr.isArchived ?? false,
          noindex: data.prototype?.en.noindex ?? data.prototype?.fr.noindex ?? false,
          //Actions
          actions: this.computeActions(data),
          //Problems
          isOrphan: data.live?.en.isOrphan ?? data.live?.fr.isOrphan ?? false,
          //Notes
          issue: data.notes?.issue ?? "",
          solution: data.notes?.solution ?? "",
          //Data
          template: data.prototype?.[lang].template ?? "",
          linksToPortal: data.live?.en.linksToPortal ?? data.live?.fr.linksToPortal ?? false,
          linksToSignIn: data.live?.en.linksToSignIn ?? data.live?.fr.linksToSignIn ?? false,
          hasChatbot: data.live?.en.hasChatbot ?? data.live?.fr.hasChatbot ?? false,
          task: data.task?.[lang] ?? [],
          visits: data.visits?.[lang] ?? void 0,
          updLink: "",
          wordCount: data.live?.[lang].wordCount,
          fleschKincaid: data.prototype?.[lang].fleschKincaid,
          gunningFog: data.prototype?.[lang].gunningFog,
          linkCount: data.live?.[lang].linkCount,
          phoneNumbers: [.../* @__PURE__ */ new Set([...data.live?.en.phoneNumbers ?? [], ...data.live?.fr.phoneNumbers ?? []])],
          lastModified: data.live?.[lang]?.lastModified ? new Date(data.live[lang].lastModified) : void 0,
          lastPublished: data.live?.[lang]?.lastPublished ? new Date(data.live[lang].lastPublished) : void 0,
          //Owner
          owner: data.live?.[lang].owner ?? "",
          email: data.live?.[lang].email ?? "",
          //Metadata (prototype)
          titleEN: data.prototype?.en.title ?? "",
          descriptionEN: data.prototype?.en.description ?? "",
          keywordsEN: data.prototype?.en.keywords ?? "",
          titleFR: data.prototype?.fr.title ?? "",
          descriptionFR: data.prototype?.fr.description ?? "",
          keywordsFR: data.prototype?.fr.keywords ?? "",
          //AI Metadata
          aiDescriptionEN: data.metadataReview?.en.description,
          aiKeywordsEN: data.metadataReview?.en.keywords,
          aiDescriptionFR: data.metadataReview?.fr.description,
          aiKeywordsFR: data.metadataReview?.fr.keywords,
          aiModel: data.metadataReview?.model,
          aiGeneratedAt: data.metadataReview?.generatedAt
        });
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    walk(tree);
    return flatNodes;
  }
  treeTableColumns = computed(() => {
    const lang = this.currentLang().startsWith("fr") ? "fr" : "en";
    const enPrimary = lang !== "fr" ? true : false;
    const frPrimary = lang === "fr" ? true : false;
    const enData = [
      { field: "enH1", label: this.translate.instant("inventory.header.enH1"), type: "text", frozen: enPrimary, group: "english", visibleByDefault: enPrimary, dataSection: ["prototype", "en", "h1"] },
      { field: "enDoubleH1", label: this.translate.instant("inventory.header.enDoubleH1"), type: "text", group: "english", visibleByDefault: false, dataSection: ["prototype", "en", "doubleH1"] },
      { field: "enPath", label: this.translate.instant("inventory.header.enPath"), type: "url", group: "english", visibleByDefault: false, dataSection: ["path", "en"] },
      { field: "enVanity", label: this.translate.instant("inventory.header.enVanity"), type: "array", group: "english", visibleByDefault: false, dataSection: ["vanity", "en"] }
    ];
    const frData = [
      { field: "frH1", label: this.translate.instant("inventory.header.frH1"), type: "text", frozen: frPrimary, group: "french", visibleByDefault: frPrimary, dataSection: ["prototype", "fr", "h1"] },
      { field: "frDoubleH1", label: this.translate.instant("inventory.header.frDoubleH1"), type: "text", group: "french", visibleByDefault: false, dataSection: ["prototype", "fr", "doubleH1"] },
      { field: "frPath", label: this.translate.instant("inventory.header.frPath"), type: "url", group: "french", visibleByDefault: false, dataSection: ["path", "fr"] },
      { field: "frVanity", label: this.translate.instant("inventory.header.frVanity"), type: "array", group: "french", visibleByDefault: false, dataSection: ["vanity", "fr"] }
    ];
    const order = lang === "fr" ? [frData, enData] : [enData, frData];
    const langColumns = order.flat();
    return [
      ...langColumns,
      //Status
      { field: "inScope", label: this.translate.instant("inventory.header.inScope"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "inScope"] },
      { field: "isNew", label: this.translate.instant("inventory.header.isNew"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "isNew"] },
      { field: "isMoved", label: this.translate.instant("inventory.header.isMoved"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "isMoved"] },
      { field: "isROT", label: this.translate.instant("inventory.header.isROT"), type: "boolean", group: "status", visibleByDefault: true, dataSection: ["status", "isROT"] },
      {
        field: "isArchived",
        label: this.translate.instant("inventory.header.archiveStatus"),
        type: "boolean",
        group: "status",
        visibleByDefault: false,
        dataSection: ["prototype", "lang", "isArchived"]
      },
      { field: "noindex", label: this.translate.instant("inventory.header.noindex"), type: "boolean", group: "status", visibleByDefault: false, dataSection: ["prototype", "lang", "noindex"] },
      //Actions
      { field: "actions", label: this.translate.instant("inventory.header.actions"), type: "tags", group: "actions", visibleByDefault: true, dataSection: [] },
      //Notes
      { field: "issue", label: this.translate.instant("inventory.header.issue"), type: "textArea", group: "notes", visibleByDefault: true, dataSection: ["notes", "issue"] },
      { field: "solution", label: this.translate.instant("inventory.header.solution"), type: "textArea", group: "notes", visibleByDefault: true, dataSection: ["notes", "solution"] },
      //Problems
      { field: "isOrphan", label: this.translate.instant("inventory.header.isOrphan"), type: "boolean", group: "problems", visibleByDefault: false, dataSection: ["prototype", "lang", "isOrphan"] },
      //ADD 404's!!!
      //Data
      { field: "template", label: this.translate.instant("inventory.header.template"), type: "template", group: "pageData", visibleByDefault: true, dataSection: ["prototype", "lang", "template"] },
      { field: "linksToPortal", label: this.translate.instant("inventory.header.linksToPortal"), type: "boolean", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "linksToSignIn", label: this.translate.instant("inventory.header.linksToSignIn"), type: "boolean", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "hasChatbot", label: this.translate.instant("inventory.header.hasChatbot"), type: "boolean", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "task", label: this.translate.instant("inventory.header.task"), type: "array", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "visits", label: this.translate.instant("inventory.header.visits"), type: "number", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "updLink", label: this.translate.instant("inventory.header.updLink"), type: "upd", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "fleschKincaid", label: this.translate.instant("common.readability.fleschKincaid"), type: "number", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "gunningFog", label: this.translate.instant("common.readability.gunningFog"), type: "number", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "wordCount", label: this.translate.instant("inventory.header.wordCount"), type: "number", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "linkCount", label: this.translate.instant("inventory.header.linkCount"), type: "number", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "phoneNumbers", label: this.translate.instant("inventory.header.phoneNumbers"), type: "array", group: "pageData", visibleByDefault: false, dataSection: [] },
      { field: "lastModified", label: this.translate.instant("inventory.header.lastModified"), type: "date", group: "pageData", visibleByDefault: true, dataSection: [] },
      { field: "lastPublished", label: this.translate.instant("inventory.header.lastPublished"), type: "date", group: "pageData", visibleByDefault: false, dataSection: [] },
      //Owner
      { field: "owner", label: this.translate.instant("inventory.header.owner"), type: "text", group: "owner", visibleByDefault: true, dataSection: [] },
      { field: "email", label: this.translate.instant("inventory.header.email"), type: "text", group: "owner", visibleByDefault: false, dataSection: [] },
      //Metadata & AI metadata
      { field: "titleEN", label: this.translate.instant("inventory.header.titleEN"), type: "text", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "titleFR", label: this.translate.instant("inventory.header.titleFR"), type: "text", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "descriptionEN", label: this.translate.instant("inventory.header.descriptionEN"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiDescriptionEN", label: this.translate.instant("inventory.header.ai.descriptionEN"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "descriptionFR", label: this.translate.instant("inventory.header.descriptionFR"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiDescriptionFR", label: this.translate.instant("inventory.header.ai.descriptionFR"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "keywordsEN", label: this.translate.instant("inventory.header.keywordsEN"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiKeywordsEN", label: this.translate.instant("inventory.header.ai.keywordsEN"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "keywordsFR", label: this.translate.instant("inventory.header.keywordsFR"), type: "longText", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiKeywordsFR", label: this.translate.instant("inventory.header.ai.keywordsFR"), type: "aiText", group: "metadata", visibleByDefault: false, dataSection: [] },
      //AI Metadata
      { field: "aiModel", label: this.translate.instant("inventory.header.ai.model"), type: "text", group: "metadata", visibleByDefault: false, dataSection: [] },
      { field: "aiGeneratedAt", label: this.translate.instant("inventory.header.ai.date"), type: "date", group: "metadata", visibleByDefault: false, dataSection: [] }
    ];
  }, ...ngDevMode ? [{ debugName: "treeTableColumns" }] : (
    /* istanbul ignore next */
    []
  ));
  computeActions(data) {
    const actions = [];
    const isNew = data.status.isNew;
    const isROT = data.status.isROT;
    const is404Proto = data.prototype?.en.is404;
    const is404Live = data.live?.en.is404;
    const isMoved = data.status.isMoved;
    const parentProto = data.prototype?.en.parentPath;
    const parentLive = data.live?.en.parentPath;
    if (isROT && !is404Live) {
      actions.push({ key: marker("actions.isROT.unpublish"), severity: "danger" });
    } else if (isNew) {
      if (!is404Live) {
        actions.push({ key: marker("actions.isNew.monitor"), severity: "secondary" });
      } else if (is404Proto) {
        actions.push({ key: marker("actions.isNew.createProto"), severity: "info" });
      } else if (!is404Proto) {
        actions.push({ key: marker("actions.isNew.createLive"), severity: "info" });
      }
    } else if (isMoved && parentProto !== parentLive) {
      actions.push({ key: marker("actions.isMoved.movePage"), severity: "warn" });
    }
    return actions;
  }
  exportTreeAsCsv() {
    const tree = this.project().projectData;
    const rows = [];
    const lang = this.detectPrimaryLanguage();
    rows.push([
      //English
      this.translate.instant("inventory.header.enH1"),
      this.translate.instant("inventory.header.enDoubleH1"),
      this.translate.instant("inventory.header.enPath"),
      this.translate.instant("inventory.header.enVanity"),
      //French
      this.translate.instant("inventory.header.frH1"),
      this.translate.instant("inventory.header.frPath"),
      this.translate.instant("inventory.header.frDoubleH1"),
      this.translate.instant("inventory.header.frVanity"),
      //Status
      this.translate.instant("inventory.header.inScope"),
      this.translate.instant("inventory.header.isNew"),
      this.translate.instant("inventory.header.isMoved"),
      this.translate.instant("inventory.header.isROT"),
      this.translate.instant("inventory.header.archiveStatus"),
      this.translate.instant("inventory.header.noindex"),
      //Problems
      this.translate.instant("inventory.header.isOrphan"),
      //Notes
      this.translate.instant("inventory.header.issue"),
      this.translate.instant("inventory.header.solution"),
      //Data
      this.translate.instant("inventory.header.template"),
      this.translate.instant("inventory.header.linksToPortal"),
      this.translate.instant("inventory.header.linksToSignIn"),
      this.translate.instant("inventory.header.hasChatbot"),
      this.translate.instant("inventory.header.task"),
      this.translate.instant("inventory.header.phoneNumbers"),
      this.translate.instant("inventory.header.visits"),
      this.translate.instant("common.readability.gradeLevel"),
      this.translate.instant("inventory.header.wordCount"),
      this.translate.instant("inventory.header.linkCount"),
      this.translate.instant("inventory.header.lastModified"),
      this.translate.instant("inventory.header.lastPublished"),
      //Owner
      this.translate.instant("inventory.header.owner"),
      this.translate.instant("inventory.header.email"),
      //Metadata
      this.translate.instant("inventory.header.titleEN"),
      this.translate.instant("inventory.header.titleFR"),
      this.translate.instant("inventory.header.descriptionEN"),
      this.translate.instant("inventory.header.descriptionFR"),
      this.translate.instant("inventory.header.keywordsEN"),
      this.translate.instant("inventory.header.keywordsFR"),
      //Move info
      this.translate.instant("inventory.header.originalParentEN"),
      this.translate.instant("inventory.header.newParentEN"),
      this.translate.instant("inventory.header.originalParentFR"),
      this.translate.instant("inventory.header.newParentFR")
    ].join(","));
    const walk = (nodes) => {
      for (const node of nodes) {
        const data = node.data;
        if (!data)
          continue;
        const yes = this.translate.instant("common.yes");
        const no = this.translate.instant("common.no");
        rows.push([
          //English
          JSON.stringify(data.prototype?.en?.h1 ?? ""),
          JSON.stringify(data.prototype?.en?.doubleH1 ?? ""),
          data.path?.en ?? "",
          JSON.stringify(data.vanity?.en?.join("; ") ?? ""),
          //French
          JSON.stringify(data.prototype?.fr?.h1 ?? ""),
          JSON.stringify(data.prototype?.fr?.doubleH1 ?? ""),
          data.path?.fr ?? "",
          JSON.stringify(data.vanity?.fr?.join("; ") ?? ""),
          //Status
          data.status?.inScope ? yes : no,
          data.status?.isNew ? yes : no,
          data.status?.isMoved ? yes : no,
          data.status?.isROT ? yes : no,
          data.prototype?.en?.isArchived || data.prototype?.fr?.isArchived ? yes : no,
          data.prototype?.en?.noindex || data.prototype?.fr?.noindex ? yes : no,
          //Problems
          data.prototype?.en?.isOrphan || data.prototype?.fr?.isOrphan ? yes : no,
          //Notes
          JSON.stringify(data.notes?.issue ?? ""),
          JSON.stringify(data.notes?.solution ?? ""),
          //Data
          this.translate.instant(data.prototype?.[lang]?.template ?? ""),
          data.prototype?.en?.linksToPortal || data.prototype?.fr?.linksToPortal ? yes : no,
          data.prototype?.en?.linksToSignIn || data.prototype?.fr?.linksToSignIn ? yes : no,
          data.prototype?.en?.hasChatbot || data.prototype?.fr?.hasChatbot ? yes : no,
          JSON.stringify(data.task?.[lang]?.join("; ") ?? ""),
          JSON.stringify([.../* @__PURE__ */ new Set([...data.prototype?.en?.phoneNumbers ?? [], ...data.prototype?.fr?.phoneNumbers ?? []])].join("; ")),
          data.visits?.[lang] ?? -1,
          Math.min(data.prototype?.[lang]?.fleschKincaid ?? -1, data.prototype?.[lang]?.gunningFog ?? -1),
          data.prototype?.[lang]?.wordCount ?? -1,
          data.prototype?.[lang]?.linkCount ?? -1,
          data.live?.[lang]?.lastModified ? new Date(data.live[lang].lastModified).toISOString().slice(0, 10) : "",
          data.live?.[lang]?.lastPublished ? new Date(data.live[lang].lastPublished).toISOString().slice(0, 10) : "",
          //Owner
          JSON.stringify(data.prototype?.[lang]?.owner ?? ""),
          JSON.stringify(data.prototype?.[lang]?.email ?? ""),
          //Metadata
          JSON.stringify(data.prototype?.en?.title ?? ""),
          JSON.stringify(data.prototype?.fr?.title ?? ""),
          JSON.stringify(data.prototype?.en?.description ?? ""),
          JSON.stringify(data.prototype?.fr?.description ?? ""),
          JSON.stringify(data.prototype?.en?.keywords ?? ""),
          JSON.stringify(data.prototype?.fr?.keywords ?? ""),
          //Move info
          data.live?.en?.parentPath ?? "",
          data.prototype?.en?.parentPath !== data.live?.en?.parentPath ? data.prototype?.en?.parentPath ?? "" : "",
          data.live?.fr?.parentPath ?? "",
          data.prototype?.fr?.parentPath !== data.live?.fr?.parentPath ? data.prototype?.fr?.parentPath ?? "" : ""
        ].join(","));
        if (node.children?.length) {
          walk(node.children);
        }
      }
    };
    walk(tree);
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + rows.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const proj = this.project();
    const filename = proj.github.repo ?? proj.projectName ?? proj.id;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-content-inventory.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  //For tree testing in Optimal Workshop or similar tools
  exportAsTreeCsv() {
    const tree = this.project().projectData;
    const rootChildren = tree[0]?.children ?? [];
    const getMaxDepth = (nodes, depth = 0) => {
      let maxDepth2 = depth;
      for (const node of nodes) {
        if (node.children?.length) {
          maxDepth2 = Math.max(maxDepth2, getMaxDepth(node.children, depth + 1));
        }
      }
      return maxDepth2;
    };
    const maxDepth = getMaxDepth(rootChildren);
    const rows = [];
    const levelLabels = [];
    for (let i = 0; i <= maxDepth; i++) {
      levelLabels.push(this.getLevelLabel(i + 1));
    }
    const headers = [...levelLabels.map((l) => `${l} EN`), ...levelLabels.map((l) => `${l} FR`)];
    rows.push(headers.join(","));
    const columnsPerLang = maxDepth + 1;
    const walk = (nodes, depth) => {
      for (const node of nodes) {
        const data = node.data;
        if (!data)
          continue;
        const row = new Array(columnsPerLang * 2).fill("");
        row[depth] = `"${data.prototype?.en.h1 ?? ""}"`;
        row[columnsPerLang + depth] = `"${data.prototype?.fr.h1 ?? ""}"`;
        rows.push(row.join(","));
        if (node.children?.length) {
          walk(node.children, depth + 1);
        }
      }
    };
    walk(rootChildren, 0);
    const BOM = "\uFEFF";
    const blob = new Blob([BOM + rows.join("\r\n")], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const proj = this.project();
    const filename = proj.github.repo ?? proj.projectName ?? proj.id;
    const a = document.createElement("a");
    a.href = url;
    a.download = `${filename}-tree-testing.csv`;
    a.click();
    URL.revokeObjectURL(url);
  }
  getOrdinalSuffix(n) {
    const lang = this.translate.currentLang()?.startsWith("fr") ? "fr" : "en";
    if (lang === "fr") {
      return n === 1 ? "er" : "e";
    }
    const category = new Intl.PluralRules("en", { type: "ordinal" }).select(n);
    const suffixes = { one: "st", two: "nd", few: "rd", other: "th" };
    return suffixes[category] ?? "th";
  }
  /** Returns Niveau # or # level with ordinal suffix */
  getLevelLabel(n) {
    const level = n + this.getOrdinalSuffix(n);
    return this.translate.instant("common.level", { level });
  }
  // Generate url fragment (for repo names and new pages)
  sanitizeUrlFragment(h1) {
    return h1.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/\b(?:l|d|n|s|c|j|m|t|qu)'/gi, "").toLowerCase().replace(/[^\w\s.-]/g, "").split(/\s+/).filter((word) => word.length > 0 && !STOP_WORDS.includes(word)).join("-");
  }
  sanitizeUrlPath(path) {
    return path.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().trim().replace(/\s+/g, "-").replace(/[^a-z0-9/.-]/g, "").replace(/-{2,}/g, "-").replace(/\/{2,}/g, "/").replace(/\.{2,}/g, ".");
  }
  deleteNodes(selectedPages, canDeleteRoot = false) {
    const projectTree = this.getProjectTree();
    const lang = this.detectPrimaryLanguage();
    for (const page of selectedPages) {
      const path = lang === "fr" ? page.frPath : page.enPath;
      const nodeToDelete = this.findNodeByPath(projectTree, path, lang);
      if (!nodeToDelete) {
        console.warn(`Node not found for URL: ${path}`);
        continue;
      }
      const rootIndex = this.project().projectData.findIndex((n) => n === nodeToDelete);
      if (rootIndex > -1) {
        if (!canDeleteRoot) {
          console.warn("Cannot delete root node.");
          continue;
        }
        projectTree.splice(rootIndex, 1);
        console.log("Deleted root node at index:", rootIndex);
        continue;
      }
      const findAndDelete = (nodes) => {
        for (const node of nodes) {
          const children = node.children ?? [];
          const childIndex = children.findIndex((c) => c === nodeToDelete);
          if (childIndex > -1) {
            children.splice(childIndex, 1);
            return true;
          }
          if (children.length && findAndDelete(children)) {
            return true;
          }
        }
        return false;
      };
      findAndDelete(projectTree);
    }
    this.setProjectTree(projectTree);
  }
  // Check for child pages that will be deleted (so component UI can display a warning)
  checkDeletionImpact(selectedPages) {
    const projectTree = this.getProjectTree();
    const lang = this.detectPrimaryLanguage();
    const selectedUrls = new Set(lang === "fr" ? selectedPages.map((p) => p.frPath) : selectedPages.map((p) => p.enPath));
    const additionalPages = [];
    for (const page of selectedPages) {
      const path = lang === "fr" ? page.frPath : page.enPath;
      const nodeToDelete = this.findNodeByPath(projectTree, path, lang);
      if (!nodeToDelete)
        continue;
      const descendants = this.collectAllDescendants(nodeToDelete);
      for (const desc of descendants) {
        const url = desc.data?.path[lang];
        if (url && !selectedUrls.has(url)) {
          additionalPages.push({
            url,
            h1: desc.data?.prototype?.[lang].h1 ?? "",
            inScope: desc.data?.status.inScope ?? false
          });
          selectedUrls.add(url);
        }
      }
    }
    return additionalPages;
  }
  /** Return all nodes under the specified parent node (used to check if child pages will be deleted during a delete operation) */
  collectAllDescendants(node) {
    const descendants = [];
    const collect = (n) => {
      if (n.children) {
        for (const child of n.children) {
          descendants.push(child);
          collect(child);
        }
      }
    };
    collect(node);
    return descendants;
  }
  /** Return all nodes at the specified depth from the specified parent node (used for hiding specific levels in the IA diagram) */
  getNodesAtRelativeDepth(node, depth) {
    if (depth === 0)
      return [node];
    if (!node.children?.length)
      return [];
    return node.children.flatMap((child) => this.getNodesAtRelativeDepth(child, depth - 1));
  }
  deleteNode(nodeToDelete) {
    const projectTree = this.getProjectTree();
    const rootIndex = this.project().projectData.findIndex((n) => n === nodeToDelete);
    if (rootIndex > -1) {
      projectTree.splice(rootIndex, 1);
      console.log("Deleted root node at index:", rootIndex);
    }
    const findAndDelete = (nodes) => {
      for (const node of nodes) {
        const children = node.children ?? [];
        const childIndex = children.findIndex((c) => c === nodeToDelete);
        if (childIndex > -1) {
          children.splice(childIndex, 1);
          return true;
        }
        if (children.length && findAndDelete(children)) {
          return true;
        }
      }
      return false;
    };
    findAndDelete(projectTree);
    this.setProjectTree(projectTree);
  }
  // Get breadcrumb chain by url
  getBreadcrumbChain(path, lang = "en") {
    const breadcrumbs = [];
    const findAndBuildChain = (nodes, targetPath, ancestors = []) => {
      for (const node of nodes) {
        if (node.data?.path[lang] === targetPath) {
          for (const ancestor of ancestors) {
            if (ancestor.data?.path[lang]) {
              const url = this.fetchService.generateUrl(ancestor.data.path[lang], "live");
              const h1 = ancestor.data.live?.[lang].h1;
              breadcrumbs.push({
                title: h1 ?? "",
                link: url ?? ""
              });
            }
          }
          return true;
        } else if (node.children?.length) {
          const found = findAndBuildChain(node.children, targetPath, [...ancestors, node]);
          if (found)
            return true;
        }
      }
      return false;
    };
    findAndBuildChain(this.project().projectData, path);
    return breadcrumbs;
  }
  refreshNode(node, urlVersion, fetchLive = false, missingOnly = false) {
    return __async(this, null, function* () {
      const version2 = urlVersion.startsWith("proto") ? "prototype" : urlVersion.startsWith("base") ? "baseline" : "live";
      const source = fetchLive ? "live" : urlVersion;
      const sourceType = source.endsWith("UT") ? "local" : source.endsWith("GH") ? "github" : "live";
      const data = node.data;
      const { owner, repo, branch } = this.project().github;
      const enUrl = this.fetchService.generateUrl(data.path.en, source, owner, repo);
      const frUrl = this.fetchService.generateUrl(data.path.fr, source, owner, repo);
      console.log(`Refreshing ${enUrl}`);
      const liveEnUrl = this.fetchService.generateUrl(data.path.en, "live");
      const liveFrUrl = this.fetchService.generateUrl(data.path.fr, "live");
      yield this.updService.fetchData();
      yield this.airtableService.fetchTasks();
      yield this.vanityService.fetchData();
      if (enUrl) {
        try {
          const doc = sourceType !== "local" ? yield this.fetchService.fetchContent(enUrl, "both", 2, "none") : this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(enUrl));
          const pageData = yield this.fetchService.extractPageMetadata(doc, enUrl);
          const jsonData = yield (() => __async(this, null, function* () {
            try {
              return liveEnUrl ? yield this.fetchService.fetchPageJSON(liveEnUrl) : void 0;
            } catch (e) {
              return void 0;
            }
          }))();
          const parentUrl = pageData.parentPath ? this.fetchService.generateUrl(pageData.parentPath, source, owner, repo) : void 0;
          const parentDoc = yield (() => __async(this, null, function* () {
            try {
              return parentUrl && sourceType !== "local" ? yield this.fetchService.fetchContent(parentUrl, "both", 2, "none") : parentUrl && sourceType !== "local" ? this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(parentUrl)) : void 0;
            } catch (e) {
              return void 0;
            }
          }))();
          const parentLinks = parentDoc && liveEnUrl ? this.fetchService.getLinks(parentDoc, liveEnUrl) : void 0;
          const lastModified = source !== "live" ? yield this.exportGitHubService.getLastModified(enUrl, owner, repo, branch, this.signInService.token() ?? void 0) : void 0;
          const updated = __spreadValues(__spreadProps(__spreadValues({
            h1: pageData.h1,
            doubleH1: pageData.doubleH1,
            //Content
            contentHash: pageData.contentHash,
            lastChecked: pageData.lastChecked,
            //Metadata
            title: pageData.title,
            description: pageData.description,
            keywords: pageData.keywords,
            //Status
            is404: false
          }, parentLinks ? { isOrphan: !parentLinks.some((link) => this.fetchService.generatePath(link) === this.fetchService.generatePath(liveEnUrl ?? "")) } : {}), {
            noindex: pageData.noindex ?? false,
            isArchived: pageData.isArchived ?? false,
            linksToPortal: pageData.linksToPortal ?? false,
            linksToSignIn: pageData?.linksToSignIn ?? false,
            hasChatbot: pageData.hasChatbot ?? false,
            //Data
            parentPath: pageData.parentPath,
            wordCount: pageData.wordCount,
            linkCount: pageData.linkCount,
            template: jsonData?.isFreestyle ? PageTemplate.Freestyle : pageData.template,
            fleschKincaid: pageData.fleschKincaid,
            gunningFog: pageData.gunningFog
          }), source === "live" && jsonData ? {
            //jrc:content.json
            owner: jsonData?.owner,
            email: jsonData?.email,
            lastPublished: jsonData?.lastPublished,
            lastModified: jsonData?.lastModified
          } : {
            lastModified
          });
          data[version2].en = missingOnly ? this.mergeMissingOnly(data[version2].en, updated) : __spreadValues(__spreadValues({}, data[version2].en), updated);
        } catch (e) {
          data[version2].en = __spreadProps(__spreadValues({}, data[version2].en), { lastChecked: (/* @__PURE__ */ new Date()).toISOString(), is404: true });
        }
      }
      if (frUrl) {
        try {
          const doc = sourceType !== "local" ? yield this.fetchService.fetchContent(frUrl, "both", 2, "none") : this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(frUrl));
          const pageData = yield this.fetchService.extractPageMetadata(doc, frUrl);
          const jsonData = yield (() => __async(this, null, function* () {
            try {
              return liveFrUrl ? yield this.fetchService.fetchPageJSON(liveFrUrl) : void 0;
            } catch (e) {
              return void 0;
            }
          }))();
          const parentUrl = pageData.parentPath ? this.fetchService.generateUrl(pageData.parentPath, source, owner, repo) : void 0;
          const parentDoc = yield (() => __async(this, null, function* () {
            try {
              return parentUrl && sourceType !== "local" ? yield this.fetchService.fetchContent(parentUrl, "both", 2, "none") : parentUrl && sourceType !== "local" ? this.fetchService.stringToDoc(yield this.fetchService.fetchViaProxy(parentUrl)) : void 0;
            } catch (e) {
              return void 0;
            }
          }))();
          const parentLinks = parentDoc && liveFrUrl ? this.fetchService.getLinks(parentDoc, liveFrUrl) : void 0;
          const lastModified = source !== "live" ? yield this.exportGitHubService.getLastModified(frUrl, owner, repo, branch, this.signInService.token() ?? void 0) : void 0;
          const updated = __spreadValues(__spreadProps(__spreadValues({
            h1: pageData.h1,
            doubleH1: pageData.doubleH1,
            //Content
            contentHash: pageData.contentHash,
            lastChecked: pageData.lastChecked,
            //Metadata
            title: pageData.title,
            description: pageData.description,
            keywords: pageData.keywords,
            //Status
            is404: false
          }, parentLinks ? { isOrphan: !parentLinks.some((link) => this.fetchService.generatePath(link) === this.fetchService.generatePath(liveFrUrl ?? "")) } : {}), {
            noindex: pageData.noindex ?? false,
            isArchived: pageData.isArchived ?? false,
            linksToPortal: pageData.linksToPortal ?? false,
            linksToSignIn: pageData?.linksToSignIn ?? false,
            hasChatbot: pageData.hasChatbot ?? false,
            //Data
            parentPath: pageData.parentPath,
            wordCount: pageData.wordCount,
            linkCount: pageData.linkCount,
            template: jsonData?.isFreestyle ? PageTemplate.Freestyle : pageData.template,
            fleschKincaid: pageData.fleschKincaid,
            gunningFog: pageData.gunningFog
          }), source === "live" && jsonData ? {
            //jrc:content.json
            owner: jsonData?.owner,
            email: jsonData?.email,
            lastPublished: jsonData?.lastPublished,
            lastModified: jsonData?.lastModified
          } : {
            lastModified
          });
          data[version2].fr = missingOnly ? this.mergeMissingOnly(data[version2].fr, updated) : __spreadValues(__spreadValues({}, data[version2].fr), updated);
        } catch (e) {
          data[version2].fr = __spreadProps(__spreadValues({}, data[version2].fr), { lastChecked: (/* @__PURE__ */ new Date()).toISOString(), is404: true });
        }
      }
      data.visits = {
        en: this.updService.findVisitsByUrl(liveEnUrl.replace("https://", "")) ?? -1,
        fr: this.updService.findVisitsByUrl(liveFrUrl.replace("https://", "")) ?? -1
      };
      data.task = {
        en: this.airtableService.findTaskNamesByUrl(liveEnUrl, "en"),
        fr: this.airtableService.findTaskNamesByUrl(liveFrUrl, "fr")
      };
      data.vanity = {
        en: this.vanityService.findVanitiesByDestination(liveEnUrl ?? ""),
        fr: this.vanityService.findVanitiesByDestination(liveFrUrl ?? "")
      };
      this.setModifiedDate();
    });
  }
  mergeMissingOnly(existing, updates) {
    const result = __spreadValues({}, existing ?? {});
    for (const key of Object.keys(updates)) {
      result[key] ??= updates[key];
    }
    return result;
  }
  refreshAll(nodes, urlVersion, onlyNeverChecked = false, fetchLive = false, onlyMissing = false) {
    return __async(this, null, function* () {
      const version2 = urlVersion.startsWith("proto") ? "prototype" : urlVersion.startsWith("base") ? "baseline" : "live";
      for (const node of nodes) {
        const needsRefresh = onlyNeverChecked ? !node.data?.[version2]?.en?.lastChecked || !node.data?.[version2]?.fr?.lastChecked : true;
        if (needsRefresh) {
          yield this.refreshNode(node, urlVersion, fetchLive, onlyMissing);
        }
        if (node.children?.length) {
          yield this.refreshAll(node.children, urlVersion, onlyNeverChecked, fetchLive, onlyMissing);
        }
      }
    });
  }
  //TODO: automate whatever we can!
  createNode(parent, url) {
    const date = Date.now().toString();
    const parentPathEN = parent.data?.path?.en ?? ".html";
    const parentPathFR = parent.data?.path?.fr ?? ".html";
    const placeholderPathEN = url && this.fetchService.getLang(url) === "en" ? this.fetchService.generatePath(url) : parentPathEN.replace(".html", `/new-page-${date}.html`);
    const placeholderPathFR = url && this.fetchService.getLang(url) === "fr" ? this.fetchService.generatePath(url) : parentPathFR.replace(".html", `/nouvelle-page-${date}.html`);
    const placeholderH1EN = url?.split("/").pop()?.replace(".html", "").replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase()) || "New page";
    const placeholderH1FR = url?.split("/").pop()?.replace(".html", "").replace(/-/g, " ").replace(/^./, (c) => c.toUpperCase()) || "Nouvelle page";
    const enData = {
      h1: placeholderH1EN,
      doubleH1: parent.data?.prototype.en.doubleH1 ?? void 0,
      //Content
      contentHash: void 0,
      lastChecked: void 0,
      githubSha: void 0,
      //Metadata
      title: "",
      description: "",
      keywords: "",
      //Status
      is404: true,
      isOrphan: false,
      noindex: false,
      isArchived: false,
      linksToPortal: false,
      linksToSignIn: false,
      hasChatbot: false,
      //jrc:content.json
      owner: parent.data.prototype.en.owner ?? "",
      email: parent.data.prototype.en.email ?? "",
      lastPublished: void 0,
      lastModified: void 0,
      //Data
      parentPath: parentPathEN,
      wordCount: 0,
      linkCount: 0,
      fleschKincaid: 0,
      gunningFog: 0,
      phoneNumbers: [],
      template: PageTemplate.Content,
      // Data from problem assistant
      problem: void 0
    };
    const frData = __spreadProps(__spreadValues({}, enData), {
      h1: placeholderH1FR,
      doubleH1: parent.data?.prototype.fr.doubleH1 ?? void 0,
      parentPath: parentPathFR
    });
    const lang = parent.data.lang;
    const data = {
      lang,
      path: { en: placeholderPathEN, fr: placeholderPathFR },
      task: { en: [], fr: [] },
      visits: { en: -1, fr: -1 },
      vanity: { en: [], fr: [] },
      status: {
        inScope: true,
        isNew: true,
        isMoved: false,
        isROT: false
      },
      baseline: { en: structuredClone(enData), fr: structuredClone(frData) },
      live: { en: structuredClone(enData), fr: structuredClone(frData) },
      prototype: { en: structuredClone(enData), fr: structuredClone(frData) },
      metadataReview: void 0,
      notes: void 0,
      isContainer: false,
      isCrawled: false
    };
    const node = {
      label: lang === "fr" ? "Nouvelle page" : "New Page",
      data,
      expanded: true,
      children: [],
      parent
    };
    parent.children = parent.children ?? [];
    parent.children.push(node);
    this.setProjectTree([...this.getProjectTree()]);
    return node;
  }
  // Get first URL from project to determine primary language
  detectPrimaryLanguage() {
    const nodes = this.getProjectTree();
    if (nodes.length > 0 && nodes[0].children && nodes[0].children.length > 0) {
      if (nodes[0].children[0].data.lang) {
        return nodes[0].children[0].data.lang;
      }
      const firstUrl = nodes[0].children[0].data?.url ?? "";
      return firstUrl.includes("/en/") || firstUrl.includes("/en.html") ? "en" : "fr";
    }
    return "en";
  }
  // Move a node to a different parent
  moveNode(node, newParent) {
    if (node === newParent || this.isAncestor(newParent, node)) {
      console.error("Move blocked due to circular reference");
      return "circular";
    }
    const tree = this.getProjectTree();
    if (node.parent) {
      node.parent.children = node.parent.children?.filter((child) => child !== node) ?? [];
    } else {
      const index = tree.indexOf(node);
      if (index > -1)
        tree.splice(index, 1);
    }
    newParent.children = newParent.children ?? [];
    newParent.children.push(node);
    node.parent = newParent;
    this.applyMoveResult(node, newParent);
    this.setProjectTree(tree);
    return "success";
  }
  isAncestor(node, potentialAncestor) {
    let current = node.parent;
    while (current) {
      if (current === potentialAncestor)
        return true;
      current = current.parent;
    }
    return false;
  }
  applyMoveResult(node, newParent) {
    const previousMoveStatus = node.data.status.isMoved;
    const pathParent = this.resolveNonContainerParent(newParent);
    node.data.prototype.en.parentPath = pathParent?.data?.path.en ?? "";
    node.data.prototype.fr.parentPath = pathParent?.data?.path.fr ?? "";
    const isNew = node.data.status.isNew && node.data.live.en.is404 && node.data.live.fr.is404;
    if (isNew) {
      const ENsuffix = node.data.path.en.split("/").pop();
      const ENprefix = node.data.prototype.en.parentPath.replaceAll(".html", "");
      const FRsuffix = node.data.path.fr.split("/").pop();
      const FRprefix = node.data.prototype.fr.parentPath.replaceAll(".html", "");
      node.data.path.en = `${ENprefix}/${ENsuffix}`;
      node.data.path.fr = `${FRprefix}/${FRsuffix}`;
    }
    const enMoved = this.fetchService.generatePath(node.data.prototype.en.parentPath) !== this.fetchService.generatePath(node.data.baseline.en.parentPath ?? "");
    const frMoved = this.fetchService.generatePath(node.data.prototype.fr.parentPath) !== this.fetchService.generatePath(node.data.baseline.fr.parentPath ?? "");
    node.data.status.isMoved = enMoved || frMoved;
    if (previousMoveStatus !== node.data.status.isMoved) {
      this.setModifiedDate();
    }
  }
  resolveNonContainerParent(node) {
    let current = node;
    while (current?.data?.isContainer) {
      current = current.parent;
    }
    return current;
  }
  // Reorder a node among its siblings
  reorderNode(node, direction) {
    if (!node.parent)
      return "no-parent";
    const siblings = node.parent.children ?? [];
    const index = siblings.indexOf(node);
    if (direction === "left" && index === 0)
      return "at-boundary";
    if (direction === "right" && index === siblings.length - 1)
      return "at-boundary";
    const swapIndex = direction === "left" ? index - 1 : index + 1;
    [siblings[swapIndex], siblings[index]] = [siblings[index], siblings[swapIndex]];
    this.setProjectTree([...this.getProjectTree()]);
    this.setModifiedDate();
    return "success";
  }
  getSiblings(node) {
    if (!node.parent)
      return [];
    return node.parent.children ?? [];
  }
  // Clone so we don't edit the working copy if the IA tree
  cloneTree(nodes) {
    const clonedTree = structuredClone(nodes);
    this.projectStorageService.rebuildParents(clonedTree, void 0);
    return clonedTree;
  }
  // Restore moved pages to their original position and remove new pages
  getBaselineTree(nodes, mode = "full") {
    const clonedTree = this.cloneTree(nodes);
    const lang = this.detectPrimaryLanguage();
    if (mode === "full") {
      const root = this.findNodeWhere(clonedTree, (n) => n.data?.baseline?.[lang]?.parentPath == null);
      if (root?.parent) {
        root.parent.children = root.parent.children?.filter((c) => c !== root) ?? [];
        root.parent = void 0;
        clonedTree.unshift(root);
      }
    }
    let hasMovedNodes = true;
    while (hasMovedNodes) {
      const movedNodes = [];
      this.collectMovedNodes(clonedTree, movedNodes, true, mode);
      if (movedNodes.length === 0) {
        hasMovedNodes = false;
      }
      for (const { node, originalParentUrl } of movedNodes) {
        const originalParent = originalParentUrl === "" ? null : this.findNodeByPath(clonedTree, originalParentUrl, lang);
        if (originalParent) {
          originalParent.children ??= [];
          originalParent.children.push(node);
          node.parent = originalParent;
        }
      }
    }
    this.removeNewPages(clonedTree);
    return clonedTree;
  }
  // Remove ROT pages
  getFinalTree(nodes) {
    const clonedTree = this.cloneTree(nodes);
    this.removeROTPages(clonedTree);
    return clonedTree;
  }
  // Remove collapsed or hidden pages
  getDisplayTree(nodes, collapsedUrls, hiddenUrls, navUrls) {
    const clonedTree = this.cloneTree(nodes);
    if (navUrls.size > 0)
      this.applyNavState(clonedTree, navUrls);
    if (hiddenUrls.size > 0)
      this.applyHiddenState(clonedTree, hiddenUrls);
    if (collapsedUrls.size > 0)
      this.applyCollapsedState(clonedTree, collapsedUrls);
    return clonedTree;
  }
  // Expand all nodes
  expandNodes(nodes) {
    for (const node of nodes) {
      node.expanded = true;
      if (node.children?.length) {
        this.expandNodes(node.children);
      }
    }
    return nodes;
  }
  collectMovedNodes(nodes, movedNodes, isTopLevel = false, mode = "full") {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      const lang = this.detectPrimaryLanguage();
      const currentParentPath = node.parent?.data?.path[lang] ?? "";
      const originalParentPath = node.data?.baseline?.[lang]?.parentPath ?? "";
      if (isTopLevel && mode === "custom" && i === 0) {
        if (node.children?.length) {
          this.collectMovedNodes(node.children, movedNodes, false, mode);
        }
        continue;
      }
      if (currentParentPath !== originalParentPath) {
        movedNodes.push({
          node,
          originalParentUrl: originalParentPath
        });
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.collectMovedNodes(node.children, movedNodes);
      }
    }
  }
  removeNewPages(nodes) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (node.data?.status.isNew) {
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.removeNewPages(node.children);
      }
    }
  }
  removeROTPages(nodes) {
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (node.data?.status.isROT) {
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.removeROTPages(node.children);
      }
    }
  }
  findNodeWhere(nodes, condition) {
    for (const node of nodes) {
      if (condition(node))
        return node;
      if (node.children?.length) {
        const found = this.findNodeWhere(node.children, condition);
        if (found)
          return found;
      }
    }
    return null;
  }
  applyCollapsedState(nodes, collapsedUrls) {
    const lang = this.detectPrimaryLanguage();
    for (const node of nodes) {
      if (collapsedUrls.has(node.data?.path[lang])) {
        node.data.collapsedChildren = node.children ?? [];
        node.children = [];
      } else if (node.children?.length) {
        this.applyCollapsedState(node.children, collapsedUrls);
      }
    }
  }
  applyHiddenState(nodes, hiddenUrls) {
    const lang = nodes[0].data.lang;
    for (let i = nodes.length - 1; i >= 0; i--) {
      const node = nodes[i];
      if (hiddenUrls.has(node.data?.path[lang])) {
        if (node.parent) {
          node.parent.data.hiddenChildrenUrls = node.parent.data.hiddenChildrenUrls ?? [];
          node.parent.data.hiddenChildrenUrls.push(node.data.path[lang]);
        }
        nodes.splice(i, 1);
      } else if (node.children?.length) {
        this.applyHiddenState(node.children, hiddenUrls);
      }
    }
  }
  applyNavState(nodes, navUrls) {
    const lang = nodes[0]?.data.lang;
    const root = this.project().projectData;
    for (const node of nodes) {
      const path = node.data?.path[lang];
      if (navUrls.has(path)) {
        const linkedPaths = navUrls.get(path);
        const rescueNodes = linkedPaths.map((linkedPath) => this.findNodeByPath(root, linkedPath, lang)).filter((match) => !!match).map((match) => this.duplicateNode(match, node));
        node.children = [...node.children ?? [], ...rescueNodes];
      }
      if (node.children?.length) {
        this.applyNavState(node.children, navUrls);
      }
    }
  }
  duplicateNode(node, newParent) {
    const clone = structuredClone(node);
    clone.children = [];
    clone.parent = newParent;
    const prefixLangData = (langData, prefix) => __spreadProps(__spreadValues({}, langData), {
      h1: `${prefix}${langData.h1}`
    });
    clone.data = __spreadProps(__spreadValues({}, clone.data), {
      live: {
        en: prefixLangData(clone.data.live.en, "Rescue: "),
        fr: prefixLangData(clone.data.live.fr, "Sauvetage : ")
      },
      baseline: {
        en: prefixLangData(clone.data.baseline.en, "Rescue: "),
        fr: prefixLangData(clone.data.baseline.fr, "Sauvetage : ")
      },
      prototype: {
        en: prefixLangData(clone.data.prototype.en, "Rescue: "),
        fr: prefixLangData(clone.data.prototype.fr, "Sauvetage : ")
      },
      isNavChild: true
      // not editable, different colour
    });
    return clone;
  }
  static \u0275fac = function ProjectStateService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectStateService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectStateService, factory: _ProjectStateService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectStateService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// node_modules/primeng/fesm2022/primeng-focustrap.mjs
var FocusTrap = class _FocusTrap extends BaseComponent {
  /**
   * When set as true, focus wouldn't be managed.
   * @group Props
   */
  pFocusTrapDisabled = false;
  platformId = inject(PLATFORM_ID);
  document = inject(DOCUMENT);
  firstHiddenFocusableElement;
  lastHiddenFocusableElement;
  onInit() {
    if (isPlatformBrowser(this.platformId) && !this.pFocusTrapDisabled) {
      !this.firstHiddenFocusableElement && !this.lastHiddenFocusableElement && this.createHiddenFocusableElements();
    }
  }
  onChanges(changes) {
    if (changes.pFocusTrapDisabled && isPlatformBrowser(this.platformId)) {
      if (changes.pFocusTrapDisabled.currentValue) {
        this.removeHiddenFocusableElements();
      } else {
        this.createHiddenFocusableElements();
      }
    }
  }
  removeHiddenFocusableElements() {
    if (this.firstHiddenFocusableElement && this.firstHiddenFocusableElement.parentNode) {
      this.firstHiddenFocusableElement.parentNode.removeChild(this.firstHiddenFocusableElement);
    }
    if (this.lastHiddenFocusableElement && this.lastHiddenFocusableElement.parentNode) {
      this.lastHiddenFocusableElement.parentNode.removeChild(this.lastHiddenFocusableElement);
    }
  }
  getComputedSelector(selector) {
    return `:not(.p-hidden-focusable):not([data-p-hidden-focusable="true"])${selector ?? ""}`;
  }
  createHiddenFocusableElements() {
    const tabindex = "0";
    const createFocusableElement = (onFocus) => {
      return q("span", {
        class: "p-hidden-accessible p-hidden-focusable",
        tabindex,
        role: "presentation",
        "aria-hidden": true,
        "data-p-hidden-accessible": true,
        "data-p-hidden-focusable": true,
        onFocus: onFocus?.bind(this)
      });
    };
    this.firstHiddenFocusableElement = createFocusableElement(this.onFirstHiddenElementFocus);
    this.lastHiddenFocusableElement = createFocusableElement(this.onLastHiddenElementFocus);
    this.firstHiddenFocusableElement.setAttribute("data-pc-section", "firstfocusableelement");
    this.lastHiddenFocusableElement.setAttribute("data-pc-section", "lastfocusableelement");
    this.el.nativeElement.prepend(this.firstHiddenFocusableElement);
    this.el.nativeElement.append(this.lastHiddenFocusableElement);
  }
  onFirstHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.lastHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? vt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.lastHiddenFocusableElement;
    bt(focusableElement);
  }
  onLastHiddenElementFocus(event) {
    const {
      currentTarget,
      relatedTarget
    } = event;
    const focusableElement = relatedTarget === this.firstHiddenFocusableElement || !this.el.nativeElement?.contains(relatedTarget) ? Lt(currentTarget.parentElement, ":not(.p-hidden-focusable)") : this.firstHiddenFocusableElement;
    bt(focusableElement);
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275FocusTrap_BaseFactory;
    return function FocusTrap_Factory(__ngFactoryType__) {
      return (\u0275FocusTrap_BaseFactory || (\u0275FocusTrap_BaseFactory = \u0275\u0275getInheritedFactory(_FocusTrap)))(__ngFactoryType__ || _FocusTrap);
    };
  })();
  static \u0275dir = /* @__PURE__ */ \u0275\u0275defineDirective({
    type: _FocusTrap,
    selectors: [["", "pFocusTrap", ""]],
    inputs: {
      pFocusTrapDisabled: [2, "pFocusTrapDisabled", "pFocusTrapDisabled", booleanAttribute]
    },
    features: [\u0275\u0275InheritDefinitionFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrap, [{
    type: Directive,
    args: [{
      selector: "[pFocusTrap]",
      standalone: true
    }]
  }], null, {
    pFocusTrapDisabled: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }]
  });
})();
var FocusTrapModule = class _FocusTrapModule {
  static \u0275fac = function FocusTrapModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _FocusTrapModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _FocusTrapModule,
    imports: [FocusTrap],
    exports: [FocusTrap]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({});
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FocusTrapModule, [{
    type: NgModule,
    args: [{
      imports: [FocusTrap],
      exports: [FocusTrap]
    }]
  }], null, null);
})();

export {
  FocusTrap,
  FocusTrapModule,
  AirtableService,
  UpdService,
  VanityService,
  ProjectStateService
};
//# sourceMappingURL=chunk-ZQDXUGCX.js.map
