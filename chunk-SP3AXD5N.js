import {
  SignInService
} from "./chunk-6HPKKU65.js";
import {
  UserSettingsService
} from "./chunk-JF73CZCV.js";
import {
  FetchService,
  PageTemplate,
  ProjectPhase
} from "./chunk-6PPBJKXF.js";
import {
  HttpClient,
  HttpHeaders,
  MessageService,
  environment
} from "./chunk-WQJJFENA.js";
import {
  Injectable,
  TranslateService,
  catchError,
  computed,
  firstValueFrom,
  inject,
  of,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-MB4XCYRB.js";
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
        const convertedProjects = projects.map((p) => __spreadProps(__spreadValues({}, p), {
          lastModified: new Date(p.lastModified),
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
var version = "0.8.7";

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
            this.settingsService.hasCloudToo.set(false);
          }
          this.setActiveProject(project.id, storageType);
        } else {
          this.saveToLocal(project, newKey);
          if (oldKey && oldKey !== newKey) {
            this.deleteLocalProject(oldKey);
          }
          this.setActiveProject(newKey, storageType);
          const deletedProjects = JSON.parse(localStorage.getItem(this.DELETED_PROJECTS_KEY) || "[]");
          const updatedDeletedProjects = deletedProjects.filter((p) => p.key !== newKey && p.key !== oldKey);
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
    const existingIndex = savedProjects.findIndex((p) => p.key === key);
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
      const normalized = [...localProjects, ...cloudProjects].map((p) => this.patchProjectList(p));
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
      return projects.map((p) => __spreadProps(__spreadValues({}, p), {
        lastModified: new Date(p.lastModified)
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
          this.settingsService.hasCloudToo.set(!!hasCloudVersionToo);
          if (project && hasCloudVersionToo) {
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
    const savedProject = savedProjects.find((p) => p.key === key);
    const inDeleted = deletedProjects.some((p) => p.key === key);
    if (savedProject) {
      const updatedSavedProjects = savedProjects.filter((p) => p.key !== key);
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
      const updatedDeletedProjects = deletedProjects.filter((p) => p.key !== key);
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
    const projectsToDelete = deletedProjects.filter((p) => p.lastModified < cutoffDate);
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
      const updatedKeys = [];
      const savedProjects = this.projectStorageService.getLocalProjectList("saved");
      for (const metadata of savedProjects) {
        if (!metadata.collaborators || metadata.collaborators.length === 0) {
          if (yield this.addUserToProject(metadata.key, user)) {
            updatedKeys.push(metadata.key);
          }
        }
      }
      return updatedKeys;
    });
  }
  // Add current user to specific project
  addUserToProject(projectKey, user) {
    return __async(this, null, function* () {
      try {
        const project = yield this.projectStorageService.loadProjectData(projectKey, "local");
        if (!project) {
          console.warn(`Could not load project ${projectKey}`);
          return false;
        }
        project.collaborators = [user];
        project.lastModified = /* @__PURE__ */ new Date();
        const projectToSave = this.projectStorageService.prepareProjectForSave(project);
        localStorage.setItem(projectKey, JSON.stringify(projectToSave));
        this.projectStorageService.updateLocalProjectList(projectKey, project);
        this.projectStorageService.projectListVersion.update((v) => v + 1);
        return true;
      } catch (error) {
        console.error(`Failed to add user to project ${projectKey}:`, error);
        return false;
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
      "bg-green text-white",
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

export {
  CloudStorageService,
  version,
  ProjectStorageService,
  CollaboratorService,
  UsageService
};
//# sourceMappingURL=chunk-SP3AXD5N.js.map
