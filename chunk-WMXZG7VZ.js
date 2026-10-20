import {
  MessageService,
  environment
} from "./chunk-AGPMTYRP.js";
import {
  HttpClient,
  Router
} from "./chunk-MDI4WJGA.js";
import {
  Injectable,
  TranslateService,
  catchError,
  computed,
  effect,
  firstValueFrom,
  inject,
  map,
  of,
  setClassMetadata,
  signal,
  timeout,
  toSignal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";
import {
  __async
} from "./chunk-YCXP4XZS.js";

// src/app/services/github/github-auth.service.ts
var GitHubAuthService = class _GitHubAuthService {
  http = inject(HttpClient);
  router = inject(Router);
  BACKEND_URL = environment.apiGateway;
  TOKEN_KEY = "github_access_token";
  USER_KEY = "github_user";
  // Signals
  accessToken = signal(this.getStoredToken(), ...ngDevMode ? [{ debugName: "accessToken" }] : (
    /* istanbul ignore next */
    []
  ));
  currentUser = signal(this.getStoredUser(), ...ngDevMode ? [{ debugName: "currentUser" }] : (
    /* istanbul ignore next */
    []
  ));
  // Computed signals
  isAuthenticated = computed(() => !!this.accessToken(), ...ngDevMode ? [{ debugName: "isAuthenticated" }] : (
    /* istanbul ignore next */
    []
  ));
  user = computed(() => this.currentUser(), ...ngDevMode ? [{ debugName: "user" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    effect(() => {
      const token = this.accessToken();
      if (token) {
        localStorage.setItem(this.TOKEN_KEY, token);
      } else {
        localStorage.removeItem(this.TOKEN_KEY);
      }
    });
    effect(() => {
      const user = this.currentUser();
      if (user) {
        localStorage.setItem(this.USER_KEY, JSON.stringify(user));
      } else {
        localStorage.removeItem(this.USER_KEY);
      }
    });
    if (this.accessToken() && !this.currentUser()) {
      this.fetchUserInfo();
    }
  }
  /**
   * Initiate GitHub OAuth flow by calling backend to get authorization URL
   */
  login() {
    return __async(this, null, function* () {
      try {
        const currentUrl = this.router.url;
        sessionStorage.setItem("github_oauth_return_url", currentUrl);
        const state = this.generateState();
        sessionStorage.setItem("github_oauth_state", state);
        const response = yield firstValueFrom(this.http.get(`${this.BACKEND_URL}/auth/github/url`));
        const authUrlWithState = `${response.authUrl}&state=${state}`;
        window.location.href = authUrlWithState;
      } catch (error) {
        console.error("Failed to initiate GitHub login:", error);
        throw error;
      }
    });
  }
  /**
   * Handle OAuth callback from GitHub
   */
  handleCallback(code, state) {
    return __async(this, null, function* () {
      const storedState = sessionStorage.getItem("github_oauth_state");
      if (state !== storedState) {
        throw new Error("Invalid state parameter - possible CSRF attack");
      }
      sessionStorage.removeItem("github_oauth_state");
      try {
        const response = yield firstValueFrom(this.http.post(`${this.BACKEND_URL}/auth/github/callback`, { code }));
        this.accessToken.set(response.access_token);
        yield this.fetchUserInfo();
      } catch (error) {
        console.error("Failed to handle GitHub callback:", error);
        throw error;
      }
    });
  }
  /**
   * Fetch user information from GitHub API using the access token
   */
  fetchUserInfo() {
    return __async(this, null, function* () {
      const token = this.accessToken();
      if (!token) {
        return;
      }
      try {
        const user = yield firstValueFrom(this.http.get("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github.v3+json"
          }
        }).pipe(catchError((error) => {
          console.error("Failed to fetch user info:", error);
          this.logout();
          return of(null);
        })));
        if (user) {
          const mappedUser = {
            login: user.login,
            id: user.id,
            avatar_url: user.avatar_url,
            name: user.name,
            email: user.email
          };
          this.currentUser.set(mappedUser);
        }
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    });
  }
  /**
   * Logout and clear stored data
   */
  logout() {
    this.accessToken.set(null);
    this.currentUser.set(null);
  }
  /** Get current access token value (for making authenticated GitHub API calls) */
  getToken() {
    return this.accessToken();
  }
  getStoredToken() {
    return localStorage.getItem(this.TOKEN_KEY);
  }
  getStoredUser() {
    const user = localStorage.getItem(this.USER_KEY);
    return user ? JSON.parse(user) : null;
  }
  generateState() {
    return Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
  }
  static \u0275fac = function GitHubAuthService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _GitHubAuthService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _GitHubAuthService, factory: _GitHubAuthService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(GitHubAuthService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

// src/app/services/github/sign-in.service.ts
var SignInService = class _SignInService {
  http = inject(HttpClient);
  translate = inject(TranslateService);
  messageService = inject(MessageService);
  authService = inject(GitHubAuthService);
  /** OAuth or PAT token */
  token = computed(() => this.authService.isAuthenticated() ? this.authService.getToken() ?? "" : this.patToken(), ...ngDevMode ? [{ debugName: "token" }] : (
    /* istanbul ignore next */
    []
  ));
  /** OAuth or PAT user */
  user = computed(() => this.authService.isAuthenticated() ? this.authService.user() : this.patUser(), ...ngDevMode ? [{ debugName: "user" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Key for retrieving PAT token from session storage */
  PAT_STORAGE_KEY = "github_pat";
  /** Key for retrieving PAT user from session storage */
  PAT_USER_STORAGE_KEY = "github_pat_user";
  /** Signal to track PAT token */
  patToken = signal(this.loadPAT(), ...ngDevMode ? [{ debugName: "patToken" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Signal to track PAT user */
  patUser = signal(this.loadPATUser(), ...ngDevMode ? [{ debugName: "patUser" }] : (
    /* istanbul ignore next */
    []
  ));
  /** Public access to get PAT token */
  get pat() {
    return this.patToken();
  }
  /** Public access to set PAT token (needed for chaining session storage) */
  set pat(value) {
    this.patToken.set(value);
    sessionStorage.setItem(this.PAT_STORAGE_KEY, value);
  }
  /** Loads PAT token from session storage */
  loadPAT() {
    return sessionStorage.getItem(this.PAT_STORAGE_KEY) ?? "";
  }
  /** Loads PAT user from session storage */
  loadPATUser() {
    const stored = sessionStorage.getItem(this.PAT_USER_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  }
  /** Clears PAT token and user from signals and session storage */
  clearPAT() {
    this.patToken.set("");
    this.patUser.set(null);
    sessionStorage.removeItem(this.PAT_STORAGE_KEY);
    sessionStorage.removeItem(this.PAT_USER_STORAGE_KEY);
  }
  /** Maps user object returned from GitHub to AIDA's GitHubUser interface (for PAT users) */
  mapGitHubUser(patUser) {
    const user = patUser;
    return {
      login: user["login"],
      id: user["id"],
      avatar_url: user["avatar_url"],
      name: user["name"],
      email: user["email"]
    };
  }
  /** Validate PAT and set PAT user */
  validatePAT() {
    return __async(this, null, function* () {
      const token = this.pat;
      try {
        const userResponse = yield fetch("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
          }
        });
        if (!userResponse.ok) {
          this.clearPAT();
          this.messageService.add({
            key: "html",
            severity: "error",
            summary: this.translate.instant("github.connect.pat.error.summary"),
            detail: this.translate.instant("github.connect.pat.error.detail") + this.translate.instant("github.connect.pat.token.link"),
            sticky: true
          });
        } else {
          const user = yield userResponse.json();
          this.patUser.set(this.mapGitHubUser(user));
          sessionStorage.setItem(this.PAT_USER_STORAGE_KEY, JSON.stringify(user));
          console.log("patUser set:", this.patUser());
          console.log("user computed:", this.user());
        }
      } catch (e) {
        console.log("Network error validating token");
      }
    });
  }
  /** Validate GitHub token against currently selected repo */
  validateToken(token, owner, repo) {
    return __async(this, null, function* () {
      try {
        const userResponse = yield fetch("https://api.github.com/user", {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
          }
        });
        if (!userResponse.ok) {
          const error = userResponse.status === 401 ? "Invalid or expired token" : `GitHub API error: ${userResponse.status}`;
          return { valid: false, error };
        }
        const user = yield userResponse.json();
        const tokenScopes = userResponse.headers.get("x-oauth-scopes")?.split(",").map((s) => s.trim()) ?? [];
        const repoResponse = yield fetch(`https://api.github.com/repos/${owner}/${repo}`, {
          headers: {
            Authorization: `Bearer ${token}`,
            Accept: "application/vnd.github+json"
          }
        });
        if (repoResponse.ok) {
          const repoData = yield repoResponse.json();
          let hasWriteAccess = false;
          if (this.authService.isAuthenticated()) {
            hasWriteAccess = repoData.permissions?.push === true || repoData.permissions?.admin === true;
          } else {
            hasWriteAccess = yield this.checkWritePermission(token, owner, repo, user.login);
          }
          return {
            valid: true,
            repoExists: true,
            hasRepoAccess: hasWriteAccess,
            showDisclaimer: false
          };
        } else if (repoResponse.status === 404) {
          let canCreate = false;
          let showDisclaimer = false;
          if (this.authService.isAuthenticated()) {
            if (owner === user.login) {
              canCreate = tokenScopes.includes("repo") || tokenScopes.includes("public_repo");
            } else {
              const orgMemberResponse = yield fetch(`https://api.github.com/orgs/${owner}/memberships/${user.login}`, {
                headers: {
                  Authorization: `Bearer ${token}`,
                  Accept: "application/vnd.github+json"
                }
              });
              if (orgMemberResponse.ok) {
                const memberData = yield orgMemberResponse.json();
                canCreate = memberData.role === "admin" || memberData.state === "active";
              }
            }
          } else {
            const repoList = yield this.getRepoList(owner);
            if (repoList.length > 0) {
              const testRepo = repoList[0].name;
              canCreate = yield this.checkWritePermission(token, owner, testRepo, user.login);
            } else {
              if (owner === user.login) {
                canCreate = true;
                showDisclaimer = true;
              } else {
                const orgMemberResponse = yield fetch(`https://api.github.com/orgs/${owner}/memberships/${user.login}`, {
                  headers: {
                    Authorization: `Bearer ${token}`,
                    Accept: "application/vnd.github+json"
                  }
                });
                canCreate = orgMemberResponse.ok;
                showDisclaimer = orgMemberResponse.ok;
              }
            }
          }
          return {
            valid: true,
            repoExists: false,
            canCreateRepo: canCreate,
            showDisclaimer
          };
        } else {
          return { valid: false, error: `Error checking repo: ${repoResponse.status}` };
        }
      } catch (e) {
        return { valid: false, error: "Network error validating token" };
      }
    });
  }
  /** Check user's write permission for selected repo */
  checkWritePermission(token, owner, repo, userLogin) {
    return __async(this, null, function* () {
      const response = yield fetch(`https://api.github.com/repos/${owner}/${repo}/collaborators/${userLogin}/permission`, {
        headers: {
          Authorization: `Bearer ${token}`,
          Accept: "application/vnd.github+json"
        }
      });
      if (response.ok) {
        const data = yield response.json();
        return data.permission === "admin" || data.permission === "write";
      }
      return false;
    });
  }
  /** Get list of public repos for an owner (user or org) */
  getRepoList(owner) {
    return __async(this, null, function* () {
      const type = yield this.getOwnerType(owner);
      const url = type === "Organization" ? `https://api.github.com/orgs/${owner}/repos?per_page=100&type=public` : `https://api.github.com/users/${owner}/repos?per_page=100&type=public`;
      const response = yield fetch(url, {
        headers: {
          Accept: "application/vnd.github+json"
        }
      });
      if (!response.ok) {
        throw new Error(`Failed to load repos: ${response.status}`);
      }
      return response.json();
    });
  }
  /** Determine if owner is a user or organization */
  getOwnerType(owner) {
    return __async(this, null, function* () {
      const response = yield fetch(`https://api.github.com/users/${owner}`, {
        headers: { Accept: "application/vnd.github+json" }
      });
      if (!response.ok) {
        throw new Error(`Failed to fetch owner type for ${owner}: ${response.status}`);
      }
      const data = yield response.json();
      return data.type;
    });
  }
  /** Signal to track if API Gateway is accessible for OAuth */
  isApiGatewayAccessible = toSignal(this.checkApiGatewayAccess(), { initialValue: false });
  /** Checks if API gateway is available so we can surface the preferred sign-in method */
  checkApiGatewayAccess() {
    if (window.location.hostname === "localhost") {
      return of(false);
    }
    return this.http.get(`${environment.apiGateway}/auth/github/url`, { observe: "response" }).pipe(timeout(3e3), map(() => true), catchError(() => of(false)));
  }
  static \u0275fac = function SignInService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SignInService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _SignInService, factory: _SignInService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SignInService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], null, null);
})();

export {
  GitHubAuthService,
  SignInService
};
//# sourceMappingURL=chunk-WMXZG7VZ.js.map
