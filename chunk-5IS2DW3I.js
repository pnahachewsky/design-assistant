import {
  SignInService
} from "./chunk-NJENQTX6.js";
import {
  FetchService,
  PageTemplate,
  ProjectPhase
} from "./chunk-M6FDN6OY.js";
import {
  BaseEditableHolder,
  Bind,
  BindModule,
  FormsModule,
  NG_VALUE_ACCESSOR,
  NgControlStatus,
  NgModel,
  PARENT_INSTANCE,
  Ripple
} from "./chunk-QN4TTD5X.js";
import {
  BaseStyle,
  CommonModule,
  HttpClient,
  HttpHeaders,
  MessageService,
  NgTemplateOutlet,
  PrimeTemplate,
  SharedModule,
  UserSettingsService,
  environment,
  k,
  p
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ContentChildren,
  EventEmitter,
  HostListener,
  Injectable,
  InjectionToken,
  Input,
  NgModule,
  Output,
  TranslateService,
  ViewEncapsulation,
  booleanAttribute,
  catchError,
  computed,
  firstValueFrom,
  forwardRef,
  inject,
  input,
  numberAttribute,
  of,
  setClassMetadata,
  signal,
  ɵɵHostDirectivesFeature,
  ɵɵInheritDefinitionFeature,
  ɵɵProvidersFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵelement,
  ɵɵelementContainer,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnextContext,
  ɵɵproperty,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵresetView,
  ɵɵrestoreView,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";
import {
  __async,
  __objRest,
  __spreadProps,
  __spreadValues
} from "./chunk-YCXP4XZS.js";

// src/app/services/storage/cloud-storage.service.ts
var CloudStorageService = class _CloudStorageService {
  http = inject(HttpClient);
  signInService = inject(SignInService);
  API_URL = `${environment.dynamodbFunctionUrl}projects`;
  // Signal for cloud project metadata (for list view)
  cloudProjects = signal([], ...ngDevMode ? [{ debugName: "cloudProjects" }] : (
    /* istanbul ignore next */
    []
  ));
  projects = computed(() => this.cloudProjects(), ...ngDevMode ? [{ debugName: "projects" }] : (
    /* istanbul ignore next */
    []
  ));
  // Loading states
  loading = signal(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  isLoading = computed(() => this.loading(), ...ngDevMode ? [{ debugName: "isLoading" }] : (
    /* istanbul ignore next */
    []
  ));
  // Error state
  error = signal(null, ...ngDevMode ? [{ debugName: "error" }] : (
    /* istanbul ignore next */
    []
  ));
  errorMessage = computed(() => this.error(), ...ngDevMode ? [{ debugName: "errorMessage" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    this.loadProjects();
  }
  /**
   * Get headers with optional auth token
   */
  getHeaders() {
    const token = this.signInService.token();
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    if (token) {
      headers = headers.set("Authorization", `Bearer ${token}`);
    }
    return headers;
  }
  /**
   * Load all public project metadata (without full projectData)
   * Used for displaying project lists
   */
  loadProjects() {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.error.set(null);
      try {
        const org = localStorage.getItem("myOrg") || environment.myOrg;
        const url = `${this.API_URL}?org=${encodeURIComponent(org)}`;
        const projects = yield firstValueFrom(this.http.get(url, {
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to load projects:", error);
          this.error.set("Failed to load cloud projects");
          return of([]);
        })));
        const convertedProjects = projects.map((p2) => __spreadProps(__spreadValues({}, p2), {
          lastModified: new Date(p2.lastModified),
          storageType: "cloud"
        }));
        this.cloudProjects.set(convertedProjects);
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Get a specific project with full content (including projectData)
   */
  getProject(projectId) {
    return __async(this, null, function* () {
      this.loading.set(true);
      this.error.set(null);
      try {
        const project = yield firstValueFrom(this.http.get(`${this.API_URL}/${projectId}`, {
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to get project:", error);
          this.error.set("Failed to load project");
          return of(null);
        })));
        if (!project)
          return null;
        const convertedProject = __spreadProps(__spreadValues({}, project), {
          created: new Date(project.created),
          lastModified: new Date(project.lastModified),
          lastSaved: new Date(project.lastSaved),
          lastExported: project.lastExported ? new Date(project.lastExported) : null,
          storageType: "cloud"
        });
        return convertedProject;
      } finally {
        this.loading.set(false);
      }
    });
  }
  // Generates a project key for saving to local or cloud storage
  generateKeyFromName(projectName) {
    if (!projectName || projectName.trim() === "") {
      return "autosave";
    }
    return projectName.replace(/[:']/g, "").replace(/\s+/g, "-").toLowerCase();
  }
  /**
   * Save project to cloud (requires auth)
   * @param project The full project to save
   * @param projectId Optional - provide for updates, omit for new projects
   * @returns The project ID if successful, null if failed
   */
  saveProject(project, projectId) {
    return __async(this, null, function* () {
      if (!this.signInService.token()) {
        this.error.set("Authentication required to save projects");
        return null;
      }
      if (!project.projectName && !project.github.repo) {
        this.error.set("Project name or repository name is required");
        return null;
      }
      const org = localStorage.getItem("myOrg") || environment.myOrg;
      this.loading.set(true);
      this.error.set(null);
      try {
        const payload = __spreadProps(__spreadValues({}, project), {
          org,
          key: this.generateKeyFromName(project.projectName),
          storageType: "cloud",
          created: project.created instanceof Date ? project.created.getTime() : project.created,
          lastModified: project.lastModified instanceof Date ? project.lastModified.getTime() : project.lastModified,
          lastSaved: project.lastSaved instanceof Date ? project.lastSaved.getTime() : project.lastSaved,
          lastExported: project.lastExported instanceof Date ? project.lastExported.getTime() : project.lastExported,
          collaborators: project.collaborators?.map((c) => ({
            id: c.id,
            login: c.login,
            name: c.name || c.login,
            avatar_url: c.avatar_url,
            email: c.email || null
          }))
        });
        const url = projectId ? `${this.API_URL}/${projectId}` : this.API_URL;
        const method = projectId ? "PUT" : "POST";
        const response = yield firstValueFrom(this.http.request(method, url, {
          body: payload,
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to save project:", error);
          let errorMsg = "Failed to save project to cloud";
          if (error.error?.error) {
            errorMsg = error.error.error;
          }
          if (error.error?.details) {
            errorMsg += ": " + error.error.details;
          }
          this.error.set(errorMsg);
          throw error;
        })));
        yield this.loadProjects();
        return response.id;
      } catch (error) {
        console.error(error);
        return null;
      } finally {
        this.loading.set(false);
      }
    });
  }
  /**
   * Delete project from cloud (requires auth)
   */
  deleteProject(projectId) {
    return __async(this, null, function* () {
      if (!this.signInService.token()) {
        this.error.set("Authentication required to delete projects");
        return false;
      }
      this.loading.set(true);
      this.error.set(null);
      try {
        yield firstValueFrom(this.http.delete(`${this.API_URL}/${projectId}`, {
          headers: this.getHeaders()
        }).pipe(catchError((error) => {
          console.error("Failed to delete project:", error);
          this.error.set("Failed to delete project");
          throw error;
        })));
        yield this.loadProjects();
        return true;
      } finally {
        this.loading.set(false);
      }
    });
  }
  static \u0275fac = function CloudStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CloudStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CloudStorageService, factory: _CloudStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CloudStorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// package.json
var version = "0.7.7";

// src/app/services/storage/project-storage.service.ts
var ProjectStorageService = class _ProjectStorageService {
  //Services
  translate = inject(TranslateService);
  messageService = inject(MessageService);
  cloudStorageService = inject(CloudStorageService);
  settingsService = inject(UserSettingsService);
  fetchService = inject(FetchService);
  // Local storage keys
  ACTIVE_PROJECT_KEY = "activeProject";
  SAVED_PROJECTS_KEY = "savedProjects";
  DELETED_PROJECTS_KEY = "deletedProjects";
  generateKeyFromName(projectName) {
    if (!projectName || projectName.trim() === "") {
      return "autosave";
    }
    return projectName.replace(/[:']/g, "").replace(/\s+/g, "-").toLowerCase();
  }
  // Other variables
  DAYS_UNTIL_AUTO_DELETE = 30;
  // Signal for changes to project list
  projectListVersion = signal(0, ...ngDevMode ? [{ debugName: "projectListVersion" }] : (
    /* istanbul ignore next */
    []
  ));
  projectListChanged = computed(() => this.projectListVersion(), ...ngDevMode ? [{ debugName: "projectListChanged" }] : (
    /* istanbul ignore next */
    []
  ));
  /************************************
   ********** ACTIVE PROJECT **********
   ************************************/
  // Signal for current active project
  activeProject = signal(this.getActiveProject("session"), ...ngDevMode ? [{ debugName: "activeProject" }] : (
    /* istanbul ignore next */
    []
  ));
  lastActiveProject = signal(this.getActiveProject("local"), ...ngDevMode ? [{ debugName: "lastActiveProject" }] : (
    /* istanbul ignore next */
    []
  ));
  currentActive = this.activeProject.asReadonly();
  lastActive = this.lastActiveProject.asReadonly();
  // Get active project key from local storage (used on initial app load)
  getActiveProject(mode = "session") {
    const stored = mode === "session" ? sessionStorage.getItem(this.ACTIVE_PROJECT_KEY) : localStorage.getItem(this.ACTIVE_PROJECT_KEY);
    if (!stored)
      return null;
    try {
      const parsed = JSON.parse(stored);
      if (parsed.key && (parsed.storageType === "local" || parsed.storageType === "cloud")) {
        return parsed;
      }
      return null;
    } catch (error) {
      console.error("Failed to parse active project:", error);
      return null;
    }
  }
  // Set active project (used when switching projects)
  setActiveProject(key, storageType) {
    const activeProject = { key, storageType };
    sessionStorage.setItem(this.ACTIVE_PROJECT_KEY, JSON.stringify(activeProject));
    this.activeProject.set(activeProject);
    localStorage.setItem(this.ACTIVE_PROJECT_KEY, JSON.stringify(activeProject));
    this.lastActiveProject.set(activeProject);
  }
  // Clear active project (used when starting new project)
  clearActiveProject() {
    sessionStorage.removeItem(this.ACTIVE_PROJECT_KEY);
    this.activeProject.set(null);
    localStorage.removeItem(this.ACTIVE_PROJECT_KEY);
    this.lastActiveProject.set(null);
  }
  // Tracks if active project exists (true unless working in autosave file)
  hasActiveProject(mode = "session") {
    return this.getActiveProject(mode) !== null;
  }
  /************************************
   *********** SAVE PROJECT ***********
   ************************************/
  // Save to either local or cloud based on project.storageType (returns true if successful)
  saveProject(project) {
    return __async(this, null, function* () {
      try {
        const newKey = this.generateKeyFromName(project.projectName);
        const storageType = project.storageType;
        const oldActiveProject = this.getActiveProject("session");
        const oldKey = oldActiveProject?.key;
        if (storageType === "cloud") {
          const success = yield this.saveToCloud(project, newKey);
          if (!success) {
            console.error("Cloud save failed");
            return false;
          } else {
            this.deleteLocalProject(newKey);
          }
          this.setActiveProject(project.id, storageType);
        } else {
          this.saveToLocal(project, newKey);
          if (oldKey && oldKey !== newKey) {
            this.deleteLocalProject(oldKey);
          }
          this.setActiveProject(newKey, storageType);
          const deletedProjects = JSON.parse(localStorage.getItem(this.DELETED_PROJECTS_KEY) || "[]");
          const updatedDeletedProjects = deletedProjects.filter((p2) => p2.key !== newKey && p2.key !== oldKey);
          localStorage.setItem(this.DELETED_PROJECTS_KEY, JSON.stringify(updatedDeletedProjects));
        }
        return true;
      } catch (error) {
        console.error("Failed to save project:", error);
        return false;
      }
    });
  }
  // Save project to local storage
  saveToLocal(project, key) {
    const projectToSave = this.prepareProjectForSave(project);
    localStorage.setItem(key, JSON.stringify(projectToSave));
    this.updateLocalProjectList(key, project);
    this.projectListVersion.update((v) => v + 1);
  }
  // Save project to cloud storage (including the extra data that we save separately for local projcts for display purposes)
  saveToCloud(project, key) {
    return __async(this, null, function* () {
      const projectToSave = this.prepareProjectForSave(project);
      const updatedProject = __spreadProps(__spreadValues({}, projectToSave), {
        key,
        storageLocation: "cloud"
      });
      const savedId = yield this.cloudStorageService.saveProject(updatedProject, project.id);
      if (savedId) {
        this.projectListVersion.update((v) => v + 1);
      }
      return savedId !== null;
    });
  }
  // Remove circular TreeNode references from project data
  prepareProjectForSave(project) {
    return __spreadProps(__spreadValues({}, project), {
      projectData: this.removeParents(project.projectData)
    });
  }
  // Remove circular TreeNode references from TreeNodes
  removeParents(nodes) {
    return nodes.map((node) => {
      const _a = node, { parent } = _a, rest = __objRest(_a, ["parent"]);
      return __spreadProps(__spreadValues({}, rest), {
        children: node.children ? this.removeParents(node.children) : []
      });
    });
  }
  // Add parent references back
  rebuildParents(nodes, parent) {
    for (const node of nodes) {
      node.parent = parent;
      if (node.children?.length) {
        this.rebuildParents(node.children, node);
      }
    }
  }
  // Update list of local projects in localStorage
  updateLocalProjectList(key, project) {
    const savedProjects = JSON.parse(localStorage.getItem(this.SAVED_PROJECTS_KEY) || "[]");
    const existingIndex = savedProjects.findIndex((p2) => p2.key === key);
    const projectEntry = {
      id: project.id,
      key,
      projectName: project.projectName,
      phase: project.phase,
      inScopePages: project.inScopePages,
      lastModified: project.lastModified,
      storageType: "local",
      repoType: project.repoType ?? "github",
      collaborators: project.collaborators || [],
      github: project.github,
      lockedBy: project.lockedBy
    };
    if (existingIndex >= 0) {
      savedProjects[existingIndex] = projectEntry;
    } else {
      savedProjects.push(projectEntry);
    }
    savedProjects.sort((a, b) => new Date(b.lastModified).getTime() - new Date(a.lastModified).getTime());
    localStorage.setItem(this.SAVED_PROJECTS_KEY, JSON.stringify(savedProjects));
  }
  /************************************
   *********** LOAD PROJECTS **********
   ************************************/
  getProjectList() {
    return __async(this, null, function* () {
      const localProjects = this.getLocalProjectList("saved");
      const cloudProjects = yield this.cloudStorageService.projects();
      const normalized = [...localProjects, ...cloudProjects].map((p2) => this.patchProjectList(p2));
      return normalized.sort((a, b) => b.lastModified.getTime() - a.lastModified.getTime());
    });
  }
  /** Ensures all projects in list have all the required fields (older ones may be missing repoType) */
  patchProjectList(raw) {
    return {
      id: raw.id ?? "",
      key: raw.key ?? "",
      projectName: raw.projectName ?? "common.autosave",
      lastModified: raw.lastModified ?? /* @__PURE__ */ new Date(0),
      phase: raw.phase ?? ProjectPhase.Draft,
      inScopePages: raw.inScopePages ?? 0,
      collaborators: raw.collaborators ?? [],
      github: raw.github ?? { owner: environment.defaultOrg, repo: "", branch: "main", hasBaselineRepo: false },
      storageType: raw.storageType ?? "local",
      repoType: raw.repoType ?? "github",
      org: raw.org,
      lockedBy: raw.lockedBy ?? void 0
    };
  }
  getLocalProjectList(mode = "saved") {
    const storageKey = mode === "deleted" ? this.DELETED_PROJECTS_KEY : this.SAVED_PROJECTS_KEY;
    const projectsString = localStorage.getItem(storageKey);
    if (!projectsString)
      return [];
    try {
      const projects = JSON.parse(projectsString);
      return projects.map((p2) => __spreadProps(__spreadValues({}, p2), {
        lastModified: new Date(p2.lastModified)
      }));
    } catch (error) {
      console.error(`Failed to parse ${mode} projects:`, error);
      return [];
    }
  }
  hasSavedProjects() {
    return localStorage.getItem(this.SAVED_PROJECTS_KEY) !== null;
  }
  /************************************
   ********** SWITCH PROJECTS **********
   ************************************/
  // Gets project from local or cloud storage (caller will need to update project-state)
  loadProject(key, storageType) {
    return __async(this, null, function* () {
      console.log(`Loading project: ${key} from ${storageType}`);
      try {
        let project = null;
        if (storageType === "local") {
          project = yield this.loadFromLocal(key);
          const hasCloudVersionToo = project?.id ? yield this.loadFromCloud(project?.id) : null;
          if (project && hasCloudVersionToo) {
            console.log(hasCloudVersionToo);
            const localIsNewer = new Date(project.lastModified) >= new Date(hasCloudVersionToo.lastModified);
            const detail = localIsNewer ? this.translate.instant("switch.usingLocalVersion.localIsNewer") : this.translate.instant("switch.usingLocalVersion.cloudIsNewer");
            this.messageService.add({
              severity: "warn",
              summary: this.translate.instant("switch.usingLocalVersion.summary"),
              detail,
              sticky: true
            });
          }
        } else {
          project = yield this.loadFromCloud(key);
        }
        if (!project) {
          console.error("Failed to load project");
          return null;
        }
        project = __spreadProps(__spreadValues({}, project), {
          created: new Date(project.created),
          lastModified: new Date(project.lastModified),
          lastSaved: new Date(project.lastSaved),
          lastExported: project.lastExported ? new Date(project.lastExported) : null,
          lastDownloaded: project.lastDownloaded ? new Date(project.lastDownloaded) : null
        });
        this.rebuildParents(project.projectData, void 0);
        this.setActiveProject(key, storageType);
        this.settingsService.includeBaseline.set(project.github.hasBaselineRepo);
        this.settingsService.includeLocal.set(project.repoType === "local");
        this.settingsService.includeGitHub.set(project.repoType === "github");
        return project;
      } catch (error) {
        console.error("Failed to load project:", error);
        return null;
      }
    });
  }
  /**
   * Load project from local storage
   */
  loadFromLocal(key) {
    return __async(this, null, function* () {
      const stored = localStorage.getItem(key);
      if (!stored) {
        console.error(`No project found with key: ${key}`);
        return null;
      }
      try {
        const project = JSON.parse(stored);
        const patched = this.patchLegacyProject(__spreadProps(__spreadValues({}, project), {
          created: new Date(project.created),
          lastModified: new Date(project.lastModified),
          lastSaved: new Date(project.lastSaved),
          lastExported: project.lastExported ? new Date(project.lastExported) : null,
          storageType: "local"
        }));
        return patched;
      } catch (error) {
        console.error("Failed to parse project:", error);
        return null;
      }
    });
  }
  /**
   * Load project from cloud storage
   */
  loadFromCloud(projectId) {
    return __async(this, null, function* () {
      const cloudProject = yield this.cloudStorageService.getProject(projectId);
      if (!cloudProject)
        return null;
      return this.patchLegacyProject(__spreadProps(__spreadValues({}, cloudProject), {
        storageType: "cloud"
      }));
    });
  }
  /************************************
   *********** DELETE PROJECT **********
   ************************************/
  /**
   * Delete a project from local or cloud storage
   */
  deleteProject(key, storageType) {
    return __async(this, null, function* () {
      try {
        if (storageType === "local") {
          const success = this.deleteLocalProject(key);
          if (success) {
            this.projectListVersion.update((v) => v + 1);
          }
          return success;
        } else {
          const projectToDelete = yield this.loadProjectData(key, "cloud");
          if (projectToDelete) {
            this.saveToLocal(projectToDelete, key);
            this.deleteLocalProject(key);
          }
          const success = yield this.cloudStorageService.deleteProject(key);
          if (success) {
            this.projectListVersion.update((v) => v + 1);
          }
          return success;
        }
      } catch (error) {
        console.error("Failed to delete project:", error);
        return false;
      }
    });
  }
  // Delete a local project (saved → recycle bin → delete)
  deleteLocalProject(key) {
    const savedProjects = JSON.parse(localStorage.getItem(this.SAVED_PROJECTS_KEY) || "[]");
    const deletedProjects = JSON.parse(localStorage.getItem(this.DELETED_PROJECTS_KEY) || "[]");
    const savedProject = savedProjects.find((p2) => p2.key === key);
    const inDeleted = deletedProjects.some((p2) => p2.key === key);
    if (savedProject) {
      const updatedSavedProjects = savedProjects.filter((p2) => p2.key !== key);
      localStorage.setItem(this.SAVED_PROJECTS_KEY, JSON.stringify(updatedSavedProjects));
      const deletedProject = __spreadProps(__spreadValues({}, savedProject), {
        lastModified: /* @__PURE__ */ new Date()
      });
      const updatedDeletedProjects = [...deletedProjects, deletedProject];
      localStorage.setItem(this.DELETED_PROJECTS_KEY, JSON.stringify(updatedDeletedProjects));
      this.projectListVersion.update((v) => v + 1);
      return true;
    } else if (inDeleted) {
      localStorage.removeItem(key);
      const updatedDeletedProjects = deletedProjects.filter((p2) => p2.key !== key);
      localStorage.setItem(this.DELETED_PROJECTS_KEY, JSON.stringify(updatedDeletedProjects));
      this.projectListVersion.update((v) => v + 1);
      return true;
    }
    return false;
  }
  /*******************************************
   *********** BACKGROUND OPERATIONS **********
   ********************************************/
  // Loads project data without setting it as active
  loadProjectData(key, storageType) {
    return __async(this, null, function* () {
      try {
        if (storageType === "local") {
          return yield this.loadFromLocal(key);
        } else {
          return yield this.loadFromCloud(key);
        }
      } catch (error) {
        console.error(`Failed to load project data for ${key}:`, error);
        return null;
      }
    });
  }
  // Automatically removes deleted projects after a period of time
  cleanupDeletedProjects() {
    const deletedProjects = this.getLocalProjectList("deleted");
    const cutoffDate = /* @__PURE__ */ new Date();
    cutoffDate.setDate(cutoffDate.getDate() - this.DAYS_UNTIL_AUTO_DELETE);
    const projectsToDelete = deletedProjects.filter((p2) => p2.lastModified < cutoffDate);
    projectsToDelete.forEach((project) => {
      this.deleteLocalProject(project.key);
    });
    return projectsToDelete.length;
  }
  /************************************
   *********** EXPORT PROJECT **********
   ************************************/
  /************************************
   ********** IMPORT PROJECT **********
   ************************************/
  /************************************
   *********** PATCH PROJECT ***********
   ************************************/
  patchLegacyNode(node) {
    if (node.data?.live !== void 0) {
      return __spreadProps(__spreadValues({}, node), {
        children: node.children?.map((child) => this.patchLegacyNode(child)) ?? []
      });
    }
    const old = node.data;
    const urlLang = old.url?.includes("/en/") || old.url?.includes("/en.html") ? "en" : "fr";
    const oppUrl = old.metadata?.oppUrl;
    const enUrl = urlLang === "en" ? old.url : oppUrl;
    const frUrl = urlLang === "fr" ? old.url : oppUrl;
    const enPath = enUrl ? this.fetchService.generatePath(enUrl) : void 0;
    const frPath = frUrl ? this.fetchService.generatePath(frUrl) : void 0;
    const enData = {
      h1: urlLang === "en" ? old.h1 : old.metadata?.oppTitle ?? "",
      doubleH1: urlLang === "en" ? old.doubleH1 : old.metadata?.oppSectionTitle,
      contentHash: void 0,
      lastChecked: void 0,
      githubSha: void 0,
      title: old.metadata?.title ?? "",
      description: old.metadata?.description ?? "",
      keywords: old.metadata?.keywords ?? "",
      is404: old.status?.isNew ?? false,
      isOrphan: old.status?.isOrphan ?? false,
      noindex: old.status?.noindexEN === true,
      isArchived: old.status?.archiveStatus === "archived",
      linksToPortal: old.status?.linksToPortal ?? false,
      linksToSignIn: void 0,
      // This will get populated via refreshAll
      hasChatbot: false,
      owner: old.metadata?.owner,
      email: old.metadata?.email,
      lastPublished: old.metadata?.lastPublished instanceof Date ? old.metadata.lastPublished.toISOString() : old.metadata?.lastPublished,
      lastModified: old.metadata?.lastModified instanceof Date ? old.metadata.lastModified.toISOString() : old.metadata?.lastModified,
      parentPath: old.originalParent ? this.fetchService.generatePath(old.originalParent) : void 0,
      wordCount: old.metadata?.wordCount ?? -1,
      linkCount: -1,
      fleschKincaid: -1,
      gunningFog: -1,
      phoneNumbers: [],
      template: old.metadata?.template ?? PageTemplate.Content,
      problem: void 0
    };
    const frData = {
      h1: urlLang === "fr" ? old.h1 : old.metadata?.oppTitle ?? "",
      doubleH1: urlLang === "fr" ? old.doubleH1 : old.metadata?.oppSectionTitle,
      contentHash: void 0,
      lastChecked: void 0,
      githubSha: void 0,
      title: old.metadata?.titleFR ?? "",
      description: old.metadata?.descriptionFR ?? "",
      keywords: old.metadata?.keywordsFR ?? "",
      is404: old.status?.isNew ?? false,
      isOrphan: old.status?.isOrphan ?? false,
      noindex: old.status?.noindexFR === true,
      isArchived: old.status?.archiveStatus === "archived",
      linksToPortal: old.status?.linksToPortal ?? false,
      linksToSignIn: void 0,
      // This will get populated via refreshAll
      hasChatbot: false,
      owner: old.metadata?.owner,
      email: old.metadata?.email,
      lastPublished: old.metadata?.lastPublished instanceof Date ? old.metadata.lastPublished.toISOString() : old.metadata?.lastPublished,
      lastModified: old.metadata?.lastModified instanceof Date ? old.metadata.lastModified.toISOString() : old.metadata?.lastModified,
      parentPath: old.originalParent ? this.fetchService.generatePath(old.originalParent) : void 0,
      wordCount: old.metadata?.wordCount ?? -1,
      linkCount: -1,
      fleschKincaid: -1,
      gunningFog: -1,
      phoneNumbers: [],
      template: old.metadata?.template ?? PageTemplate.Content,
      problem: void 0
    };
    const githubEnData = __spreadProps(__spreadValues({}, enData), { is404: true });
    const githubFrData = __spreadProps(__spreadValues({}, frData), { is404: true });
    return __spreadProps(__spreadValues({}, node), {
      data: {
        lang: urlLang,
        path: { en: enPath, fr: frPath },
        status: {
          inScope: old.status?.inScope ?? false,
          isNew: old.status?.isNew ?? false,
          isMoved: old.status?.isMoved ?? false,
          isROT: old.status?.isROT ?? false
        },
        task: { en: old.metadata?.task ?? [], fr: old.metadata?.task ?? [] },
        visits: { en: old.metadata?.visits ?? -1, fr: old.metadata?.visits ?? -1 },
        vanities: { en: [], fr: [] },
        live: { en: enData, fr: frData },
        baseline: { en: __spreadValues({}, githubEnData), fr: __spreadValues({}, githubFrData) },
        prototype: { en: __spreadValues({}, githubEnData), fr: __spreadValues({}, githubFrData) },
        metadataReview: old.metadataReview,
        notes: { issue: old.notes?.problem, solution: old.notes?.solution },
        repoType: "github",
        isContainer: old.status?.isContainer ?? false,
        isCrawled: old.status?.isCrawled ?? false
      },
      children: node.children?.map((child) => this.patchLegacyNode(child)) ?? []
    });
  }
  /** Resets all lastChecked fields (use when adding new data fields) */
  updateLastChecked(tree) {
    const traverse = (nodes) => {
      for (const node of nodes) {
        if (node.data?.live?.en)
          node.data.live.en.lastChecked = void 0;
        if (node.data?.live?.fr)
          node.data.live.fr.lastChecked = void 0;
        if (node.data?.baseline?.en)
          node.data.baseline.en.lastChecked = void 0;
        if (node.data?.baseline?.fr)
          node.data.baseline.fr.lastChecked = void 0;
        if (node.data?.prototype?.en)
          node.data.prototype.en.lastChecked = void 0;
        if (node.data?.prototype?.fr)
          node.data.prototype.fr.lastChecked = void 0;
        if (node.children?.length)
          traverse(node.children);
      }
    };
    traverse(tree);
  }
  /** Patch older project data. If new mandatory variables are added, bump up the major or minor version numbers to trigger a data refresh */
  patchLegacyProject(project) {
    if (!project.projectData?.length)
      return project;
    project = __spreadProps(__spreadValues({}, project), {
      projectData: project.projectData.map((node) => this.patchLegacyNode(node))
    });
    const [major, minor] = String(project.version ?? "0.0.0").split(".").map(Number);
    const needsRefresh = major === 0 && minor < 6;
    if (needsRefresh) {
      this.updateLastChecked(project.projectData);
      project.version = version;
    }
    return project;
  }
  static \u0275fac = function ProjectStorageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectStorageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _ProjectStorageService, factory: _ProjectStorageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ProjectStorageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/github/collaborator.service.ts
var CollaboratorService = class _CollaboratorService {
  projectStorageService = inject(ProjectStorageService);
  signInService = inject(SignInService);
  settingsService = inject(UserSettingsService);
  /**
   * Check if current user is a collaborator
   *
   * Accepts an optional user param to check if signed-out user is a collab
   */
  canEditProject(project, user) {
    const currentUser = this.signInService.user();
    if (currentUser) {
      return project.collaborators.some((c) => {
        if (c.id != null && currentUser.id != null) {
          return c.id === currentUser.id;
        } else {
          return !!c.login && !!currentUser.login && c.login.toLowerCase() === currentUser.login.toLowerCase();
        }
      });
    } else if (user) {
      return project.collaborators.some((c) => {
        return c.id === user;
      });
    } else
      return false;
  }
  /** Returns 2 booleans for if user is signed in and if they are a collaborator */
  getUploadAccessInfo(project) {
    const hasCollaborators = project.collaborators.length > 0;
    const userId = Number.isNaN(Number(this.settingsService.userId())) ? void 0 : Number(this.settingsService.userId());
    const isCollaborator = this.canEditProject(project, userId);
    const isSignedIn = !!this.signInService.user();
    const isLocked = project.lockedBy && project.lockedBy === this.signInService.user()?.login ? "byMe" : project.lockedBy ? project.lockedBy : void 0;
    return { isSignedIn, isCollaborator, hasCollaborators, isLocked };
  }
  // Get current user to add to new projects
  getInitialCollaborators() {
    const currentUser = this.signInService.user();
    return currentUser ? [currentUser] : [];
  }
  // Add current user to all local projects without collaborators
  addCurrentUserToLocalProjects(user) {
    return __async(this, null, function* () {
      const savedProjects = this.projectStorageService.getLocalProjectList("saved");
      for (const metadata of savedProjects) {
        if (!metadata.collaborators || metadata.collaborators.length === 0) {
          yield this.addUserToProject(metadata.key, user);
        }
      }
    });
  }
  // Add current user to specific project
  addUserToProject(projectKey, user) {
    return __async(this, null, function* () {
      try {
        const project = yield this.projectStorageService.loadProjectData(projectKey, "local");
        if (!project) {
          console.warn(`Could not load project ${projectKey}`);
          return;
        }
        project.collaborators = [user];
        project.lastModified = /* @__PURE__ */ new Date();
        const projectToSave = this.projectStorageService.prepareProjectForSave(project);
        localStorage.setItem(projectKey, JSON.stringify(projectToSave));
        this.projectStorageService.updateLocalProjectList(projectKey, project);
        this.projectStorageService.projectListVersion.update((v) => v + 1);
      } catch (error) {
        console.error(`Failed to add user to project ${projectKey}:`, error);
      }
    });
  }
  addCollaborators(project, collabs) {
    console.log(`Adding/updating ${collabs.length} collaborator(s) for project ${project.projectName}`);
    const updatedCollaborators = [...project.collaborators];
    let addedCount = 0;
    let updatedCount = 0;
    collabs.forEach((newCollab) => {
      const existingIndex = updatedCollaborators.findIndex((existing) => existing.id === newCollab.id);
      if (existingIndex !== -1) {
        updatedCollaborators[existingIndex] = newCollab;
        updatedCount++;
      } else {
        updatedCollaborators.push(newCollab);
        addedCount++;
      }
    });
    console.log(`Added ${addedCount}, updated ${updatedCount} collaborator(s)`);
    return __spreadProps(__spreadValues({}, project), {
      collaborators: updatedCollaborators,
      lastModified: /* @__PURE__ */ new Date()
    });
  }
  removeCollaborator(project, collab) {
    console.log(`Removing ${collab.login} from project ${project.projectName}`);
    const originalCount = project.collaborators.length;
    const updatedCollaborators = project.collaborators = project.collaborators.filter((c) => c.id !== collab.id);
    if (updatedCollaborators.length === originalCount) {
      return project;
    }
    return __spreadProps(__spreadValues({}, project), {
      collaborators: updatedCollaborators,
      lastModified: /* @__PURE__ */ new Date()
    });
  }
  //NOTE - avatars will always return images due to GitHub identicons
  //       we can add parameter s=40 to get a 40x40 image for custom images and default size identicons
  //       use that to strip out identicons and display initials instead or get rid of the functions below
  // Collaborator avatar - Get initials
  getCollaboratorName(collab) {
    return collab.name ? collab.name : collab.login;
  }
  // Collaborator avatar - Get initials
  getCollaboratorInitials(collab) {
    if (collab.name) {
      const nameParts = collab.name.trim().split(/\s+/);
      if (nameParts.length >= 2) {
        return (nameParts[0][0] + nameParts[nameParts.length - 1][0]).toUpperCase();
      } else {
        return collab.name.substring(0, 2).toUpperCase();
      }
    }
    return collab.login.substring(0, 2).toUpperCase();
  }
  // Collaborator avatar - Assign colors to user ids (same user will always be same color)
  getCollaboratorColorClass(collab) {
    const colors = [
      "bg-primary text-white",
      "bg-blue-500 text-white",
      "bg-green-500 text-white",
      "bg-yellow-500 text-black-alpha-90",
      "bg-cyan-500 text-black-alpha-90",
      "bg-pink-500 text-white",
      "bg-indigo-500 text-white",
      "bg-teal-500 text-black-alpha-90",
      "bg-orange-500 text-black-alpha-90"
    ];
    return colors[collab.id % colors.length];
  }
  // Get list of org members (for adding as collaborators)
  getOrgMembers(org) {
    return __async(this, null, function* () {
      const token = this.signInService.token();
      if (!token) {
        console.warn("No GitHub token available");
        return [];
      }
      try {
        const response = yield fetch(`https://api.github.com/orgs/${org}/members?per_page=100`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
          }
        });
        if (!response.ok) {
          console.error(`Failed to fetch org members: ${response.status}`);
          return [];
        }
        const members = yield response.json();
        return members.map((member) => ({
          login: member.login,
          id: member.id,
          avatar_url: member.avatar_url,
          name: member.name || null,
          email: member.email || null
        }));
      } catch (error) {
        console.error("Error fetching org members:", error);
        return [];
      }
    });
  }
  // Get detailed user information
  getUserDetails(username) {
    return __async(this, null, function* () {
      const token = this.signInService.token();
      if (!token) {
        console.warn("No GitHub token available");
        return null;
      }
      try {
        const response = yield fetch(`https://api.github.com/users/${username}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
          }
        });
        if (!response.ok) {
          console.error(`Failed to fetch user details for ${username}: ${response.status}`);
          return null;
        }
        const userData = yield response.json();
        return {
          login: userData.login,
          id: userData.id,
          avatar_url: userData.avatar_url,
          name: userData.name || null,
          email: userData.email || null
        };
      } catch (error) {
        console.error(`Error fetching user details for ${username}:`, error);
        return null;
      }
    });
  }
  // Get collaborator emails (for requesting access)
  getCollaboratorEmails(collabs) {
    return collabs.filter((collab) => !!collab.email && collab.email.trim() !== "").map((collab) => collab.email);
  }
  /** Get GitHub login from id */
  getLogin(userID) {
    return __async(this, null, function* () {
      const token = this.signInService.token();
      const headers = token ? {
        Authorization: `Bearer ${token}`,
        Accept: "application/vnd.github+json"
      } : void 0;
      try {
        const response = yield fetch(`https://api.github.com/user/${userID}`, { headers });
        if (!response.ok) {
          console.error(`Failed to fetch user details for ${userID}: ${response.status}`);
          return userID;
        } else {
          const userData = yield response.json();
          return userData.name ?? userData.login;
        }
      } catch (error) {
        console.error(`Error fetching username for ${userID}:`, error);
        return userID;
      }
    });
  }
  static \u0275fac = function CollaboratorService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _CollaboratorService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _CollaboratorService, factory: _CollaboratorService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(CollaboratorService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// src/app/services/usage.service.ts
var UsageService = class _UsageService {
  http = inject(HttpClient);
  settingsService = inject(UserSettingsService);
  apiUrl = environment.usageFunctionUrl;
  /** Track acceptance of generated metadata */
  trackMetadata(projectId, orgId, storageType, pageUrl, originalDescEN, originalDescFR, originalKeywordsEN, originalKeywordsFR, review, promptConfig, isUpdate = false) {
    return __async(this, null, function* () {
      try {
        yield firstValueFrom(this.http.post(this.apiUrl, {
          isUpdate,
          feature: "metadata",
          projectId,
          orgId,
          storageType,
          userId: this.settingsService.userId(),
          pageUrl,
          model: review.model,
          promptConfig,
          generatedAt: new Date(review.generatedAt).toISOString(),
          originalDescEN,
          originalDescFR,
          originalKeywordsEN,
          originalKeywordsFR,
          aiDescEN: review.en.description.ai,
          aiDescFR: review.fr.description.ai,
          aiKeywordsEN: review.en.keywords.ai,
          aiKeywordsFR: review.fr.keywords.ai,
          finalDescEN: review.en.description.edited ?? review.en.description.ai,
          finalDescFR: review.fr.description.edited ?? review.fr.description.ai,
          finalKeywordsEN: review.en.keywords.edited ?? review.en.keywords.ai,
          finalKeywordsFR: review.fr.keywords.edited ?? review.fr.keywords.ai,
          statusDescEN: review.en.description.status,
          statusDescFR: review.fr.description.status,
          statusKeywordsEN: review.en.keywords.status,
          statusKeywordsFR: review.fr.keywords.status
        }));
      } catch (error) {
        console.warn("Usage tracking failed silently:", error);
      }
    });
  }
  /** Track GitHub and Local file exports */
  trackExport(projectId, orgId, storageType, repoType, repo, exportTarget, pageCountEN, pageCountFR) {
    return __async(this, null, function* () {
      try {
        yield firstValueFrom(this.http.post(this.apiUrl, {
          feature: "export",
          projectId,
          orgId,
          storageType,
          repoType,
          userId: this.settingsService.userId(),
          repo,
          exportTarget,
          pageCountEN,
          pageCountFR
        }));
      } catch (error) {
        console.warn("Export tracking failed silently:", error);
      }
    });
  }
  /** Get global stats */
  loadGlobal() {
    return __async(this, null, function* () {
      return yield firstValueFrom(this.http.get(this.apiUrl));
    });
  }
  /** Get feature stats */
  loadFeature(feature) {
    return __async(this, null, function* () {
      const result = yield firstValueFrom(this.http.get(`${this.apiUrl}?feature=${feature}`));
      return result.items;
    });
  }
  /** Update temporary userID's with GitHub userID's when user logs in */
  updateUserId(tempUserId, githubUserId) {
    return __async(this, null, function* () {
      try {
        yield firstValueFrom(this.http.post(this.apiUrl, {
          feature: "update-user",
          tempUserId,
          githubUserId
        }));
      } catch (error) {
        console.warn("User ID update failed silently:", error);
      }
    });
  }
  /** Delete records for a specific user (intended for deleting AIDA developer records) */
  deleteUserRecords(userId) {
    return this.http.post(this.apiUrl, { feature: "delete-user", userId });
  }
  static \u0275fac = function UsageService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UsageService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UsageService, factory: _UsageService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UsageService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/togglebutton/index.mjs
var style = "\n    .p-togglebutton {\n        display: inline-flex;\n        cursor: pointer;\n        user-select: none;\n        overflow: hidden;\n        position: relative;\n        color: dt('togglebutton.color');\n        background: dt('togglebutton.background');\n        border: 1px solid dt('togglebutton.border.color');\n        padding: dt('togglebutton.padding');\n        font-size: 1rem;\n        font-family: inherit;\n        font-feature-settings: inherit;\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n        border-radius: dt('togglebutton.border.radius');\n        outline-color: transparent;\n        font-weight: dt('togglebutton.font.weight');\n    }\n\n    .p-togglebutton-content {\n        display: inline-flex;\n        flex: 1 1 auto;\n        align-items: center;\n        justify-content: center;\n        gap: dt('togglebutton.gap');\n        padding: dt('togglebutton.content.padding');\n        background: transparent;\n        border-radius: dt('togglebutton.content.border.radius');\n        transition:\n            background dt('togglebutton.transition.duration'),\n            color dt('togglebutton.transition.duration'),\n            border-color dt('togglebutton.transition.duration'),\n            outline-color dt('togglebutton.transition.duration'),\n            box-shadow dt('togglebutton.transition.duration');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover {\n        background: dt('togglebutton.hover.background');\n        color: dt('togglebutton.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked {\n        background: dt('togglebutton.checked.background');\n        border-color: dt('togglebutton.checked.border.color');\n        color: dt('togglebutton.checked.color');\n    }\n\n    .p-togglebutton-checked .p-togglebutton-content {\n        background: dt('togglebutton.content.checked.background');\n        box-shadow: dt('togglebutton.content.checked.shadow');\n    }\n\n    .p-togglebutton:focus-visible {\n        box-shadow: dt('togglebutton.focus.ring.shadow');\n        outline: dt('togglebutton.focus.ring.width') dt('togglebutton.focus.ring.style') dt('togglebutton.focus.ring.color');\n        outline-offset: dt('togglebutton.focus.ring.offset');\n    }\n\n    .p-togglebutton.p-invalid {\n        border-color: dt('togglebutton.invalid.border.color');\n    }\n\n    .p-togglebutton:disabled {\n        opacity: 1;\n        cursor: default;\n        background: dt('togglebutton.disabled.background');\n        border-color: dt('togglebutton.disabled.border.color');\n        color: dt('togglebutton.disabled.color');\n    }\n\n    .p-togglebutton-label,\n    .p-togglebutton-icon {\n        position: relative;\n        transition: none;\n    }\n\n    .p-togglebutton-icon {\n        color: dt('togglebutton.icon.color');\n    }\n\n    .p-togglebutton:not(:disabled):not(.p-togglebutton-checked):hover .p-togglebutton-icon {\n        color: dt('togglebutton.icon.hover.color');\n    }\n\n    .p-togglebutton.p-togglebutton-checked .p-togglebutton-icon {\n        color: dt('togglebutton.icon.checked.color');\n    }\n\n    .p-togglebutton:disabled .p-togglebutton-icon {\n        color: dt('togglebutton.icon.disabled.color');\n    }\n\n    .p-togglebutton-sm {\n        padding: dt('togglebutton.sm.padding');\n        font-size: dt('togglebutton.sm.font.size');\n    }\n\n    .p-togglebutton-sm .p-togglebutton-content {\n        padding: dt('togglebutton.content.sm.padding');\n    }\n\n    .p-togglebutton-lg {\n        padding: dt('togglebutton.lg.padding');\n        font-size: dt('togglebutton.lg.font.size');\n    }\n\n    .p-togglebutton-lg .p-togglebutton-content {\n        padding: dt('togglebutton.content.lg.padding');\n    }\n\n    .p-togglebutton-fluid {\n        width: 100%;\n    }\n";

// node_modules/primeng/fesm2022/primeng-togglebutton.mjs
var _c0 = ["icon"];
var _c1 = ["content"];
var _c2 = (a0) => ({
  $implicit: a0
});
function ToggleButton_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "span", 0);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(3);
    \u0275\u0275classMap(ctx_r0.cn(ctx_r0.cx("icon"), ctx_r0.checked ? ctx_r0.onIcon : ctx_r0.offIcon, ctx_r0.iconPos === "left" ? ctx_r0.cx("iconLeft") : ctx_r0.cx("iconRight")));
    \u0275\u0275property("pBind", ctx_r0.ptm("icon"));
  }
}
function ToggleButton_Conditional_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Conditional_0_Template, 1, 3, "span", 2);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275conditional(ctx_r0.onIcon || ctx_r0.offIcon ? 0 : -1);
  }
}
function ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function ToggleButton_Conditional_2_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, ToggleButton_Conditional_2_Conditional_1_ng_container_0_Template, 1, 0, "ng-container", 1);
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext(2);
    \u0275\u0275property("ngTemplateOutlet", ctx_r0.iconTemplate || ctx_r0._iconTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(2, _c2, ctx_r0.checked));
  }
}
function ToggleButton_Conditional_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, ToggleButton_Conditional_2_Conditional_0_Template, 1, 1)(1, ToggleButton_Conditional_2_Conditional_1_Template, 1, 4, "ng-container");
    \u0275\u0275elementStart(2, "span", 0);
    \u0275\u0275text(3);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = \u0275\u0275nextContext();
    \u0275\u0275conditional(!ctx_r0.iconTemplate ? 0 : 1);
    \u0275\u0275advance(2);
    \u0275\u0275classMap(ctx_r0.cx("label"));
    \u0275\u0275property("pBind", ctx_r0.ptm("label"));
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(ctx_r0.checked ? ctx_r0.hasOnLabel ? ctx_r0.onLabel : "\xA0" : ctx_r0.hasOffLabel ? ctx_r0.offLabel : "\xA0");
  }
}
var style2 = (
  /*css*/
  `
    ${style}

    /* For PrimeNG (iconPos) */
    .p-togglebutton-icon-right {
        order: 1;
    }

    .p-togglebutton.ng-invalid.ng-dirty {
        border-color: dt('togglebutton.invalid.border.color');
    }
`
);
var classes = {
  root: ({
    instance
  }) => ["p-togglebutton p-component", {
    "p-togglebutton-checked": instance.checked,
    "p-invalid": instance.invalid(),
    "p-disabled": instance.$disabled(),
    "p-togglebutton-sm p-inputfield-sm": instance.size === "small",
    "p-togglebutton-lg p-inputfield-lg": instance.size === "large",
    "p-togglebutton-fluid": instance.fluid()
  }],
  content: "p-togglebutton-content",
  icon: "p-togglebutton-icon",
  iconLeft: "p-togglebutton-icon-left",
  iconRight: "p-togglebutton-icon-right",
  label: "p-togglebutton-label"
};
var ToggleButtonStyle = class _ToggleButtonStyle extends BaseStyle {
  name = "togglebutton";
  style = style2;
  classes = classes;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButtonStyle_BaseFactory;
    return function ToggleButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275ToggleButtonStyle_BaseFactory || (\u0275ToggleButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButtonStyle)))(__ngFactoryType__ || _ToggleButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _ToggleButtonStyle,
    factory: _ToggleButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var ToggleButtonClasses;
(function(ToggleButtonClasses2) {
  ToggleButtonClasses2["root"] = "p-togglebutton";
  ToggleButtonClasses2["icon"] = "p-togglebutton-icon";
  ToggleButtonClasses2["iconLeft"] = "p-togglebutton-icon-left";
  ToggleButtonClasses2["iconRight"] = "p-togglebutton-icon-right";
  ToggleButtonClasses2["label"] = "p-togglebutton-label";
})(ToggleButtonClasses || (ToggleButtonClasses = {}));
var TOGGLEBUTTON_INSTANCE = new InjectionToken("TOGGLEBUTTON_INSTANCE");
var TOGGLEBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ToggleButton),
  multi: true
};
var ToggleButton = class _ToggleButton extends BaseEditableHolder {
  componentName = "ToggleButton";
  $pcToggleButton = inject(TOGGLEBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  onKeyDown(event) {
    switch (event.code) {
      case "Enter":
        this.toggle(event);
        event.preventDefault();
        break;
      case "Space":
        this.toggle(event);
        event.preventDefault();
        break;
    }
  }
  toggle(event) {
    if (!this.$disabled() && !(this.allowEmpty === false && this.checked)) {
      this.checked = !this.checked;
      this.writeModelValue(this.checked);
      this.onModelChange(this.checked);
      this.onModelTouched();
      this.onChange.emit({
        originalEvent: event,
        checked: this.checked
      });
      this.cd.markForCheck();
    }
  }
  /**
   * Label for the on state.
   * @group Props
   */
  onLabel = "Yes";
  /**
   * Label for the off state.
   * @group Props
   */
  offLabel = "No";
  /**
   * Icon for the on state.
   * @group Props
   */
  onIcon;
  /**
   * Icon for the off state.
   * @group Props
   */
  offIcon;
  /**
   * Defines a string that labels the input for accessibility.
   * @group Props
   */
  ariaLabel;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * Style class of the element.
   * @deprecated since v20.0.0, use `class` instead.
   * @group Props
   */
  styleClass;
  /**
   * Identifier of the focus input to match a label defined for the component.
   * @group Props
   */
  inputId;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * Position of the icon.
   * @group Props
   */
  iconPos = "left";
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
  /**
   * Defines the size of the component.
   * @group Props
   */
  size;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty;
  /**
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Callback to invoke on value change.
   * @param {ToggleButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom icon template.
   * @param {ToggleButtonIconTemplateContext} context - icon context.
   * @see {@link ToggleButtonIconTemplateContext}
   * @group Templates
   */
  iconTemplate;
  /**
   * Custom content template.
   * @param {ToggleButtonContentTemplateContext} context - content context.
   * @see {@link ToggleButtonContentTemplateContext}
   * @group Templates
   */
  contentTemplate;
  templates;
  checked = false;
  onInit() {
    if (this.checked === null || this.checked === void 0) {
      this.checked = false;
    }
  }
  _componentStyle = inject(ToggleButtonStyle);
  onBlur() {
    this.onModelTouched();
  }
  get hasOnLabel() {
    return this.onLabel && this.onLabel.length > 0;
  }
  get hasOffLabel() {
    return this.offLabel && this.offLabel.length > 0;
  }
  get active() {
    return this.checked === true;
  }
  _iconTemplate;
  _contentTemplate;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "icon":
          this._iconTemplate = item.template;
          break;
        case "content":
          this._contentTemplate = item.template;
          break;
        default:
          this._contentTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.checked = value;
    setModelValue(value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      checked: this.active,
      invalid: this.invalid(),
      [this.size]: this.size
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275ToggleButton_BaseFactory;
    return function ToggleButton_Factory(__ngFactoryType__) {
      return (\u0275ToggleButton_BaseFactory || (\u0275ToggleButton_BaseFactory = \u0275\u0275getInheritedFactory(_ToggleButton)))(__ngFactoryType__ || _ToggleButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _ToggleButton,
    selectors: [["p-toggleButton"], ["p-togglebutton"], ["p-toggle-button"]],
    contentQueries: function ToggleButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c0, 4)(dirIndex, _c1, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.iconTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.contentTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 11,
    hostBindings: function ToggleButton_HostBindings(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275listener("keydown", function ToggleButton_keydown_HostBindingHandler($event) {
          return ctx.onKeyDown($event);
        })("click", function ToggleButton_click_HostBindingHandler($event) {
          return ctx.toggle($event);
        });
      }
      if (rf & 2) {
        \u0275\u0275attribute("aria-labelledby", ctx.ariaLabelledBy)("aria-label", ctx.ariaLabel)("aria-pressed", ctx.checked ? "true" : "false")("role", "button")("tabindex", ctx.tabindex !== void 0 ? ctx.tabindex : !ctx.$disabled() ? 0 : -1)("data-pc-name", "togglebutton")("data-p-checked", ctx.active)("data-p-disabled", ctx.$disabled())("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cn(ctx.cx("root"), ctx.styleClass));
      }
    },
    inputs: {
      onLabel: "onLabel",
      offLabel: "offLabel",
      onIcon: "onIcon",
      offIcon: "offIcon",
      ariaLabel: "ariaLabel",
      ariaLabelledBy: "ariaLabelledBy",
      styleClass: "styleClass",
      inputId: "inputId",
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      iconPos: "iconPos",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: "size",
      allowEmpty: "allowEmpty",
      fluid: [1, "fluid"]
    },
    outputs: {
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
      provide: TOGGLEBUTTON_INSTANCE,
      useExisting: _ToggleButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _ToggleButton
    }]), \u0275\u0275HostDirectivesFeature([Ripple, Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 3,
    vars: 9,
    consts: [[3, "pBind"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "class", "pBind"]],
    template: function ToggleButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275elementStart(0, "span", 0);
        \u0275\u0275template(1, ToggleButton_ng_container_1_Template, 1, 0, "ng-container", 1);
        \u0275\u0275conditionalCreate(2, ToggleButton_Conditional_2_Template, 4, 5);
        \u0275\u0275elementEnd();
      }
      if (rf & 2) {
        \u0275\u0275classMap(ctx.cx("content"));
        \u0275\u0275property("pBind", ctx.ptm("content"));
        \u0275\u0275attribute("data-p", ctx.dataP);
        \u0275\u0275advance();
        \u0275\u0275property("ngTemplateOutlet", ctx.contentTemplate || ctx._contentTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction1(7, _c2, ctx.checked));
        \u0275\u0275advance();
        \u0275\u0275conditional(!ctx.contentTemplate ? 2 : -1);
      }
    },
    dependencies: [CommonModule, NgTemplateOutlet, SharedModule, BindModule, Bind],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButton, [{
    type: Component,
    args: [{
      selector: "p-toggleButton, p-togglebutton, p-toggle-button",
      standalone: true,
      imports: [CommonModule, SharedModule, BindModule],
      hostDirectives: [{
        directive: Ripple
      }, Bind],
      host: {
        "[class]": "cn(cx('root'), styleClass)",
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.aria-label]": "ariaLabel",
        "[attr.aria-pressed]": 'checked ? "true" : "false"',
        "[attr.role]": '"button"',
        "[attr.tabindex]": "tabindex !== undefined ? tabindex : (!$disabled() ? 0 : -1)",
        "[attr.data-pc-name]": "'togglebutton'",
        "[attr.data-p-checked]": "active",
        "[attr.data-p-disabled]": "$disabled()",
        "[attr.data-p]": "dataP"
      },
      template: `<span [class]="cx('content')" [pBind]="ptm('content')" [attr.data-p]="dataP">
        <ng-container *ngTemplateOutlet="contentTemplate || _contentTemplate; context: { $implicit: checked }"></ng-container>
        @if (!contentTemplate) {
            @if (!iconTemplate) {
                @if (onIcon || offIcon) {
                    <span [class]="cn(cx('icon'), checked ? this.onIcon : this.offIcon, iconPos === 'left' ? cx('iconLeft') : cx('iconRight'))" [pBind]="ptm('icon')"></span>
                }
            } @else {
                <ng-container *ngTemplateOutlet="iconTemplate || _iconTemplate; context: { $implicit: checked }"></ng-container>
            }
            <span [class]="cx('label')" [pBind]="ptm('label')">{{ checked ? (hasOnLabel ? onLabel : '\xA0') : hasOffLabel ? offLabel : '\xA0' }}</span>
        }
    </span>`,
      providers: [TOGGLEBUTTON_VALUE_ACCESSOR, ToggleButtonStyle, {
        provide: TOGGLEBUTTON_INSTANCE,
        useExisting: ToggleButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: ToggleButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush
    }]
  }], null, {
    onKeyDown: [{
      type: HostListener,
      args: ["keydown", ["$event"]]
    }],
    toggle: [{
      type: HostListener,
      args: ["click", ["$event"]]
    }],
    onLabel: [{
      type: Input
    }],
    offLabel: [{
      type: Input
    }],
    onIcon: [{
      type: Input
    }],
    offIcon: [{
      type: Input
    }],
    ariaLabel: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    inputId: [{
      type: Input
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    iconPos: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    size: [{
      type: Input
    }],
    allowEmpty: [{
      type: Input
    }],
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onChange: [{
      type: Output
    }],
    iconTemplate: [{
      type: ContentChild,
      args: ["icon", {
        descendants: false
      }]
    }],
    contentTemplate: [{
      type: ContentChild,
      args: ["content", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var ToggleButtonModule = class _ToggleButtonModule {
  static \u0275fac = function ToggleButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ToggleButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _ToggleButtonModule,
    imports: [ToggleButton, SharedModule],
    exports: [ToggleButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [ToggleButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ToggleButtonModule, [{
    type: NgModule,
    args: [{
      imports: [ToggleButton, SharedModule],
      exports: [ToggleButton, SharedModule]
    }]
  }], null, null);
})();

// node_modules/@primeuix/styles/dist/selectbutton/index.mjs
var style3 = "\n    .p-selectbutton {\n        display: inline-flex;\n        user-select: none;\n        vertical-align: bottom;\n        outline-color: transparent;\n        border-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton {\n        border-radius: 0;\n        border-width: 1px 1px 1px 0;\n    }\n\n    .p-selectbutton .p-togglebutton:focus-visible {\n        position: relative;\n        z-index: 1;\n    }\n\n    .p-selectbutton .p-togglebutton:first-child {\n        border-inline-start-width: 1px;\n        border-start-start-radius: dt('selectbutton.border.radius');\n        border-end-start-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton .p-togglebutton:last-child {\n        border-start-end-radius: dt('selectbutton.border.radius');\n        border-end-end-radius: dt('selectbutton.border.radius');\n    }\n\n    .p-selectbutton.p-invalid {\n        outline: 1px solid dt('selectbutton.invalid.border.color');\n        outline-offset: 0;\n    }\n\n    .p-selectbutton-fluid {\n        width: 100%;\n    }\n    \n    .p-selectbutton-fluid .p-togglebutton {\n        flex: 1 1 0;\n    }\n";

// node_modules/primeng/fesm2022/primeng-selectbutton.mjs
var _c02 = ["item"];
var _c12 = (a0, a1) => ({
  $implicit: a0,
  index: a1
});
function _forTrack0($index, $item) {
  return this.getOptionLabel($item);
}
function SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementContainer(0);
  }
}
function SelectButton_For_1_Conditional_1_ng_template_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_ng_container_0_Template, 1, 0, "ng-container", 3);
  }
  if (rf & 2) {
    const ctx_r5 = \u0275\u0275nextContext(2);
    const option_r3 = ctx_r5.$implicit;
    const \u0275$index_1_r4 = ctx_r5.$index;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("ngTemplateOutlet", ctx_r4.itemTemplate || ctx_r4._itemTemplate)("ngTemplateOutletContext", \u0275\u0275pureFunction2(2, _c12, option_r3, \u0275$index_1_r4));
  }
}
function SelectButton_For_1_Conditional_1_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275template(0, SelectButton_For_1_Conditional_1_ng_template_0_Template, 1, 5, "ng-template", null, 0, \u0275\u0275templateRefExtractor);
  }
}
function SelectButton_For_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = \u0275\u0275getCurrentView();
    \u0275\u0275elementStart(0, "p-togglebutton", 2);
    \u0275\u0275listener("onChange", function SelectButton_For_1_Template_p_togglebutton_onChange_0_listener($event) {
      const ctx_r1 = \u0275\u0275restoreView(_r1);
      const option_r3 = ctx_r1.$implicit;
      const \u0275$index_1_r4 = ctx_r1.$index;
      const ctx_r4 = \u0275\u0275nextContext();
      return \u0275\u0275resetView(ctx_r4.onOptionSelect($event, option_r3, \u0275$index_1_r4));
    });
    \u0275\u0275conditionalCreate(1, SelectButton_For_1_Conditional_1_Template, 2, 0);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const option_r3 = ctx.$implicit;
    const ctx_r4 = \u0275\u0275nextContext();
    \u0275\u0275property("autofocus", ctx_r4.autofocus)("styleClass", ctx_r4.styleClass)("ngModel", ctx_r4.isSelected(option_r3))("onLabel", ctx_r4.getOptionLabel(option_r3))("offLabel", ctx_r4.getOptionLabel(option_r3))("disabled", ctx_r4.$disabled() || ctx_r4.isOptionDisabled(option_r3))("allowEmpty", ctx_r4.getAllowEmpty())("size", ctx_r4.size())("fluid", ctx_r4.fluid())("pt", ctx_r4.ptm("pcToggleButton"))("unstyled", ctx_r4.unstyled());
    \u0275\u0275advance();
    \u0275\u0275conditional(ctx_r4.itemTemplate || ctx_r4._itemTemplate ? 1 : -1);
  }
}
var style4 = (
  /*css*/
  `
    ${style3}

    /* For PrimeNG */
    .p-selectbutton.ng-invalid.ng-dirty {
        outline: 1px solid dt('selectbutton.invalid.border.color');
        outline-offset: 0;
    }
`
);
var classes2 = {
  root: ({
    instance
  }) => ["p-selectbutton p-component", {
    "p-invalid": instance.invalid(),
    "p-selectbutton-fluid": instance.fluid()
  }]
};
var SelectButtonStyle = class _SelectButtonStyle extends BaseStyle {
  name = "selectbutton";
  style = style4;
  classes = classes2;
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButtonStyle_BaseFactory;
    return function SelectButtonStyle_Factory(__ngFactoryType__) {
      return (\u0275SelectButtonStyle_BaseFactory || (\u0275SelectButtonStyle_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButtonStyle)))(__ngFactoryType__ || _SelectButtonStyle);
    };
  })();
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({
    token: _SelectButtonStyle,
    factory: _SelectButtonStyle.\u0275fac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonStyle, [{
    type: Injectable
  }], null, null);
})();
var SelectButtonClasses;
(function(SelectButtonClasses2) {
  SelectButtonClasses2["root"] = "p-selectbutton";
})(SelectButtonClasses || (SelectButtonClasses = {}));
var SELECTBUTTON_INSTANCE = new InjectionToken("SELECTBUTTON_INSTANCE");
var SELECTBUTTON_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => SelectButton),
  multi: true
};
var SelectButton = class _SelectButton extends BaseEditableHolder {
  componentName = "SelectButton";
  /**
   * An array of selectitems to display as the available options.
   * @group Props
   */
  options;
  /**
   * Name of the label field of an option.
   * @group Props
   */
  optionLabel;
  /**
   * Name of the value field of an option.
   * @group Props
   */
  optionValue;
  /**
   * Name of the disabled field of an option.
   * @group Props
   */
  optionDisabled;
  /**
   * Whether selection can be cleared.
   * @group Props
   */
  get unselectable() {
    return this._unselectable;
  }
  _unselectable = false;
  set unselectable(value) {
    this._unselectable = value;
    this.allowEmpty = !value;
  }
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  /**
   * When specified, allows selecting multiple values.
   * @group Props
   */
  multiple;
  /**
   * Whether selection can not be cleared.
   * @group Props
   */
  allowEmpty = true;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
   * @group Props
   */
  ariaLabelledBy;
  /**
   * A property to uniquely identify a value in options.
   * @group Props
   */
  dataKey;
  /**
   * When present, it specifies that the component should automatically get focus on load.
   * @group Props
   */
  autofocus;
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
   * Spans 100% width of the container when enabled.
   * @defaultValue undefined
   * @group Props
   */
  fluid = input(void 0, __spreadProps(__spreadValues({}, ngDevMode ? {
    debugName: "fluid"
  } : (
    /* istanbul ignore next */
    {}
  )), {
    transform: booleanAttribute
  }));
  /**
   * Callback to invoke on input click.
   * @param {SelectButtonOptionClickEvent} event - Custom click event.
   * @group Emits
   */
  onOptionClick = new EventEmitter();
  /**
   * Callback to invoke on selection change.
   * @param {SelectButtonChangeEvent} event - Custom change event.
   * @group Emits
   */
  onChange = new EventEmitter();
  /**
   * Custom item template.
   * @param {SelectButtonItemTemplateContext} context - item context.
   * @see {@link SelectButtonItemTemplateContext}
   * @group Templates
   */
  itemTemplate;
  _itemTemplate;
  get equalityKey() {
    return this.optionValue ? null : this.dataKey;
  }
  value;
  focusedIndex = 0;
  _componentStyle = inject(SelectButtonStyle);
  $pcSelectButton = inject(SELECTBUTTON_INSTANCE, {
    optional: true,
    skipSelf: true
  }) ?? void 0;
  bindDirectiveInstance = inject(Bind, {
    self: true
  });
  onAfterViewChecked() {
    this.bindDirectiveInstance.setAttrs(this.ptms(["host", "root"]));
  }
  getAllowEmpty() {
    if (this.multiple) {
      return this.allowEmpty || this.value?.length !== 1;
    }
    return this.allowEmpty;
  }
  getOptionLabel(option) {
    return this.optionLabel ? p(option, this.optionLabel) : option.label != void 0 ? option.label : option;
  }
  getOptionValue(option) {
    return this.optionValue ? p(option, this.optionValue) : this.optionLabel || option.value === void 0 ? option : option.value;
  }
  isOptionDisabled(option) {
    return this.optionDisabled ? p(option, this.optionDisabled) : option.disabled !== void 0 ? option.disabled : false;
  }
  onOptionSelect(event, option, index) {
    if (this.$disabled() || this.isOptionDisabled(option)) {
      return;
    }
    let selected = this.isSelected(option);
    if (selected && this.unselectable) {
      return;
    }
    let optionValue = this.getOptionValue(option);
    let newValue;
    if (this.multiple) {
      if (selected) newValue = this.value.filter((val) => !k(val, optionValue, this.equalityKey || void 0));
      else newValue = this.value ? [...this.value, optionValue] : [optionValue];
    } else {
      if (selected && !this.allowEmpty) {
        return;
      }
      newValue = selected ? null : optionValue;
    }
    this.focusedIndex = index;
    this.value = newValue;
    this.writeModelValue(this.value);
    this.onModelChange(this.value);
    this.onChange.emit({
      originalEvent: event,
      value: this.value
    });
    this.onOptionClick.emit({
      originalEvent: event,
      option,
      index
    });
  }
  changeTabIndexes(event, direction) {
    let firstTabableChild, index;
    for (let i = 0; i <= this.el.nativeElement.children.length - 1; i++) {
      if (this.el.nativeElement.children[i].getAttribute("tabindex") === "0") firstTabableChild = {
        elem: this.el.nativeElement.children[i],
        index: i
      };
    }
    if (direction === "prev") {
      if (firstTabableChild.index === 0) index = this.el.nativeElement.children.length - 1;
      else index = firstTabableChild.index - 1;
    } else {
      if (firstTabableChild.index === this.el.nativeElement.children.length - 1) index = 0;
      else index = firstTabableChild.index + 1;
    }
    this.focusedIndex = index;
    this.el.nativeElement.children[index].focus();
  }
  onFocus(event, index) {
    this.focusedIndex = index;
  }
  onBlur() {
    this.onModelTouched();
  }
  removeOption(option) {
    this.value = this.value.filter((val) => !k(val, this.getOptionValue(option), this.dataKey));
  }
  isSelected(option) {
    let selected = false;
    const optionValue = this.getOptionValue(option);
    if (this.multiple) {
      if (this.value && Array.isArray(this.value)) {
        for (let val of this.value) {
          if (k(val, optionValue, this.dataKey)) {
            selected = true;
            break;
          }
        }
      }
    } else {
      selected = k(this.getOptionValue(option), this.value, this.equalityKey || void 0);
    }
    return selected;
  }
  templates;
  onAfterContentInit() {
    this.templates.forEach((item) => {
      switch (item.getType()) {
        case "item":
          this._itemTemplate = item.template;
          break;
      }
    });
  }
  /**
   * @override
   *
   * @see {@link BaseEditableHolder.writeControlValue}
   * Writes the value to the control.
   */
  writeControlValue(value, setModelValue) {
    this.value = value;
    setModelValue(this.value);
    this.cd.markForCheck();
  }
  get dataP() {
    return this.cn({
      invalid: this.invalid()
    });
  }
  static \u0275fac = /* @__PURE__ */ (() => {
    let \u0275SelectButton_BaseFactory;
    return function SelectButton_Factory(__ngFactoryType__) {
      return (\u0275SelectButton_BaseFactory || (\u0275SelectButton_BaseFactory = \u0275\u0275getInheritedFactory(_SelectButton)))(__ngFactoryType__ || _SelectButton);
    };
  })();
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({
    type: _SelectButton,
    selectors: [["p-selectButton"], ["p-selectbutton"], ["p-select-button"]],
    contentQueries: function SelectButton_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        \u0275\u0275contentQuery(dirIndex, _c02, 4)(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.itemTemplate = _t.first);
        \u0275\u0275queryRefresh(_t = \u0275\u0275loadQuery()) && (ctx.templates = _t);
      }
    },
    hostVars: 5,
    hostBindings: function SelectButton_HostBindings(rf, ctx) {
      if (rf & 2) {
        \u0275\u0275attribute("role", "group")("aria-labelledby", ctx.ariaLabelledBy)("data-p", ctx.dataP);
        \u0275\u0275classMap(ctx.cx("root"));
      }
    },
    inputs: {
      options: "options",
      optionLabel: "optionLabel",
      optionValue: "optionValue",
      optionDisabled: "optionDisabled",
      unselectable: [2, "unselectable", "unselectable", booleanAttribute],
      tabindex: [2, "tabindex", "tabindex", numberAttribute],
      multiple: [2, "multiple", "multiple", booleanAttribute],
      allowEmpty: [2, "allowEmpty", "allowEmpty", booleanAttribute],
      styleClass: "styleClass",
      ariaLabelledBy: "ariaLabelledBy",
      dataKey: "dataKey",
      autofocus: [2, "autofocus", "autofocus", booleanAttribute],
      size: [1, "size"],
      fluid: [1, "fluid"]
    },
    outputs: {
      onOptionClick: "onOptionClick",
      onChange: "onChange"
    },
    features: [\u0275\u0275ProvidersFeature([SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
      provide: SELECTBUTTON_INSTANCE,
      useExisting: _SelectButton
    }, {
      provide: PARENT_INSTANCE,
      useExisting: _SelectButton
    }]), \u0275\u0275HostDirectivesFeature([Bind]), \u0275\u0275InheritDefinitionFeature],
    decls: 2,
    vars: 0,
    consts: [["content", ""], [3, "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt", "unstyled"], [3, "onChange", "autofocus", "styleClass", "ngModel", "onLabel", "offLabel", "disabled", "allowEmpty", "size", "fluid", "pt", "unstyled"], [4, "ngTemplateOutlet", "ngTemplateOutletContext"]],
    template: function SelectButton_Template(rf, ctx) {
      if (rf & 1) {
        \u0275\u0275repeaterCreate(0, SelectButton_For_1_Template, 2, 12, "p-togglebutton", 1, _forTrack0, true);
      }
      if (rf & 2) {
        \u0275\u0275repeater(ctx.options);
      }
    },
    dependencies: [ToggleButton, FormsModule, NgControlStatus, NgModel, CommonModule, NgTemplateOutlet, SharedModule, BindModule],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButton, [{
    type: Component,
    args: [{
      selector: "p-selectButton, p-selectbutton, p-select-button",
      standalone: true,
      imports: [ToggleButton, FormsModule, CommonModule, SharedModule, BindModule],
      template: `
        @for (option of options; track getOptionLabel(option); let i = $index) {
            <p-togglebutton
                [autofocus]="autofocus"
                [styleClass]="styleClass"
                [ngModel]="isSelected(option)"
                [onLabel]="this.getOptionLabel(option)"
                [offLabel]="this.getOptionLabel(option)"
                [disabled]="$disabled() || isOptionDisabled(option)"
                (onChange)="onOptionSelect($event, option, i)"
                [allowEmpty]="getAllowEmpty()"
                [size]="size()"
                [fluid]="fluid()"
                [pt]="ptm('pcToggleButton')"
                [unstyled]="unstyled()"
            >
                @if (itemTemplate || _itemTemplate) {
                    <ng-template #content>
                        <ng-container *ngTemplateOutlet="itemTemplate || _itemTemplate; context: { $implicit: option, index: i }"></ng-container>
                    </ng-template>
                }
            </p-togglebutton>
        }
    `,
      providers: [SELECTBUTTON_VALUE_ACCESSOR, SelectButtonStyle, {
        provide: SELECTBUTTON_INSTANCE,
        useExisting: SelectButton
      }, {
        provide: PARENT_INSTANCE,
        useExisting: SelectButton
      }],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation.None,
      host: {
        "[class]": "cx('root')",
        "[attr.role]": '"group"',
        "[attr.aria-labelledby]": "ariaLabelledBy",
        "[attr.data-p]": "dataP"
      },
      hostDirectives: [Bind]
    }]
  }], null, {
    options: [{
      type: Input
    }],
    optionLabel: [{
      type: Input
    }],
    optionValue: [{
      type: Input
    }],
    optionDisabled: [{
      type: Input
    }],
    unselectable: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    tabindex: [{
      type: Input,
      args: [{
        transform: numberAttribute
      }]
    }],
    multiple: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    allowEmpty: [{
      type: Input,
      args: [{
        transform: booleanAttribute
      }]
    }],
    styleClass: [{
      type: Input
    }],
    ariaLabelledBy: [{
      type: Input
    }],
    dataKey: [{
      type: Input
    }],
    autofocus: [{
      type: Input,
      args: [{
        transform: booleanAttribute
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
    fluid: [{
      type: Input,
      args: [{
        isSignal: true,
        alias: "fluid",
        required: false
      }]
    }],
    onOptionClick: [{
      type: Output
    }],
    onChange: [{
      type: Output
    }],
    itemTemplate: [{
      type: ContentChild,
      args: ["item", {
        descendants: false
      }]
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }]
  });
})();
var SelectButtonModule = class _SelectButtonModule {
  static \u0275fac = function SelectButtonModule_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SelectButtonModule)();
  };
  static \u0275mod = /* @__PURE__ */ \u0275\u0275defineNgModule({
    type: _SelectButtonModule,
    imports: [SelectButton, SharedModule],
    exports: [SelectButton, SharedModule]
  });
  static \u0275inj = /* @__PURE__ */ \u0275\u0275defineInjector({
    imports: [SelectButton, SharedModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SelectButtonModule, [{
    type: NgModule,
    args: [{
      imports: [SelectButton, SharedModule],
      exports: [SelectButton, SharedModule]
    }]
  }], null, null);
})();

export {
  CloudStorageService,
  version,
  ProjectStorageService,
  CollaboratorService,
  UsageService,
  ToggleButton,
  ToggleButtonModule,
  SelectButton,
  SelectButtonModule
};
//# sourceMappingURL=chunk-5IS2DW3I.js.map
