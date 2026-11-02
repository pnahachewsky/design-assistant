import {
  PrimeNG,
  Router,
  Title,
  environment
} from "./chunk-34V6ZG4B.js";
import {
  Injectable,
  TranslateService,
  effect,
  inject,
  setClassMetadata,
  signal,
  ɵɵdefineInjectable
} from "./chunk-KRHY6Z2H.js";
import {
  preset_default
} from "./chunk-DKTF6WIM.js";
import {
  preset_custom_default
} from "./chunk-G55EJPVD.js";
import {
  preset_deutan_default
} from "./chunk-7XEOGBZ2.js";
import {
  preset_protan_default
} from "./chunk-3RPP55HA.js";
import {
  preset_tritan_default
} from "./chunk-DBOW7BSZ.js";

// src/app/services/user-settings.service.ts
var UserSettingsService = class _UserSettingsService {
  primeNGConfig = inject(PrimeNG);
  translate = inject(TranslateService);
  router = inject(Router);
  title = inject(Title);
  // Language
  currentLang = signal("en", ...ngDevMode ? [{ debugName: "currentLang" }] : (
    /* istanbul ignore next */
    []
  ));
  // Dark & Light themes
  darkMode = signal(false, ...ngDevMode ? [{ debugName: "darkMode" }] : (
    /* istanbul ignore next */
    []
  ));
  icon = signal("pi pi-sun", ...ngDevMode ? [{ debugName: "icon" }] : (
    /* istanbul ignore next */
    []
  ));
  // Default & Colorblind themes
  colorSchemeKey = "color-scheme";
  colorScheme = signal(this.getStoredColorScheme(), ...ngDevMode ? [{ debugName: "colorScheme" }] : (
    /* istanbul ignore next */
    []
  ));
  // Toolbox visibility (used by sidebar, undecided if we should surface in user settings)
  toolbox = signal(localStorage.getItem("myToolbox") || environment.myToolbox, ...ngDevMode ? [{ debugName: "toolbox" }] : (
    /* istanbul ignore next */
    []
  ));
  // Toolbox visibility (undecided if we should surface in user settings)
  org = signal(localStorage.getItem("myOrg") || environment.myToolbox, ...ngDevMode ? [{ debugName: "org" }] : (
    /* istanbul ignore next */
    []
  ));
  // User
  userId = signal(this.getOrCreateUserId(), ...ngDevMode ? [{ debugName: "userId" }] : (
    /* istanbul ignore next */
    []
  ));
  //Version
  includePreview = signal(localStorage.getItem("includePreview") === "true", ...ngDevMode ? [{ debugName: "includePreview" }] : (
    /* istanbul ignore next */
    []
  ));
  includeGitHub = signal(false, ...ngDevMode ? [{ debugName: "includeGitHub" }] : (
    /* istanbul ignore next */
    []
  ));
  includeLocal = signal(false, ...ngDevMode ? [{ debugName: "includeLocal" }] : (
    /* istanbul ignore next */
    []
  ));
  includeBaseline = signal(false, ...ngDevMode ? [{ debugName: "includeBaseline" }] : (
    /* istanbul ignore next */
    []
  ));
  //Auto-add preference
  autoAddChildren = signal(localStorage.getItem("autoAddChildren") === "true", ...ngDevMode ? [{ debugName: "autoAddChildren" }] : (
    /* istanbul ignore next */
    []
  ));
  //Tracks if duplicate cloud version exists (updated on project load)
  hasCloudToo = signal(false, ...ngDevMode ? [{ debugName: "hasCloudToo" }] : (
    /* istanbul ignore next */
    []
  ));
  constructor() {
    const supportedLangs = ["en", "fr"];
    this.translate.addLangs(supportedLangs);
    const storedLang = localStorage.getItem("lang") || this.translate.getBrowserLang() || "en";
    this.setLanguage(storedLang);
    const storedTheme = localStorage.getItem("darkMode");
    this.setDarkMode(storedTheme === "true");
    effect(() => {
      this.applyColorScheme(this.colorScheme());
    });
    effect(() => {
      localStorage.setItem("includePreview", this.includePreview().toString());
    });
  }
  // Language
  setLanguage(lang) {
    const useLang = lang === "en" ? "en" : "fr";
    this.currentLang.set(useLang);
    this.translate.use(useLang);
    localStorage.setItem("lang", useLang);
    console.log(`Language set to ${useLang}`);
  }
  toggleLanguage() {
    const newLang = this.currentLang() === "en" ? "fr" : "en";
    this.setLanguage(newLang);
    const titleKey = this.router.routerState.snapshot.root.firstChild?.title;
    if (titleKey) {
      this.translate.get(titleKey).subscribe((translated) => {
        this.title.setTitle(translated);
      });
    }
  }
  // Dark & Light
  setDarkMode(enabled) {
    this.darkMode.set(enabled);
    localStorage.setItem("darkMode", String(enabled));
    document.documentElement.classList.toggle("dark-mode", enabled);
    this.icon.set(enabled ? "pi pi-sun" : "pi pi-moon");
    console.log(`Dark mode set to ${enabled}`);
  }
  toggle() {
    this.setDarkMode(!this.darkMode());
  }
  // Default & Colorblind
  getStoredColorScheme() {
    const stored = localStorage.getItem(this.colorSchemeKey);
    return stored === "deutan" || stored === "protan" || stored === "tritan" || stored === "custom" || stored === "default" ? stored : "default";
  }
  setColorScheme(scheme) {
    this.colorScheme.set(scheme);
    localStorage.setItem(this.colorSchemeKey, scheme);
  }
  applyColorScheme(scheme) {
    console.log("Applying color scheme:", scheme);
    let preset;
    switch (scheme) {
      case "deutan":
        preset = preset_deutan_default;
        break;
      case "protan":
        preset = preset_protan_default;
        break;
      case "tritan":
        preset = preset_tritan_default;
        break;
      case "custom":
        preset = preset_custom_default;
        break;
      default:
        preset = preset_default;
    }
    this.primeNGConfig.theme.set({
      preset,
      options: {
        colorScheme: "light",
        theme: "blue",
        ripple: true,
        darkModeSelector: ".dark-mode"
      }
    });
  }
  // UserId
  getOrCreateUserId() {
    const stored = localStorage.getItem("userId");
    if (stored)
      return stored;
    const id = `user_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
    localStorage.setItem("userId", id);
    return id;
  }
  setUserId(id) {
    localStorage.setItem("userId", id);
    this.userId.set(id);
  }
  // Auto-add children
  setAutoAddChildren(value) {
    localStorage.setItem("autoAddChildren", value.toString());
    this.autoAddChildren.set(value);
  }
  static \u0275fac = function UserSettingsService_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _UserSettingsService)();
  };
  static \u0275prov = /* @__PURE__ */ \u0275\u0275defineInjectable({ token: _UserSettingsService, factory: _UserSettingsService.\u0275fac, providedIn: "root" });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(UserSettingsService, [{
    type: Injectable,
    args: [{ providedIn: "root" }]
  }], () => [], null);
})();

export {
  UserSettingsService
};
//# sourceMappingURL=chunk-5A4MZAOI.js.map
