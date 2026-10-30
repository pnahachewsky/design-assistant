import {
  DevToolsComponent
} from "./chunk-KLQIPMSV.js";
import {
  DoormatsComponent
} from "./chunk-5K7M43MG.js";
import "./chunk-LRKTUPBS.js";
import "./chunk-UBYXGKIN.js";
import "./chunk-OE6OK7VB.js";
import "./chunk-22EMPEFJ.js";
import "./chunk-4ECWLYHO.js";
import "./chunk-NVXT4DQY.js";
import "./chunk-W7TVOLP4.js";
import "./chunk-ULNRCSK5.js";
import "./chunk-NR63S3BW.js";
import "./chunk-MA272S66.js";
import "./chunk-GGIC4QUJ.js";
import "./chunk-Q5ST5PBV.js";
import "./chunk-OIQTDMBR.js";
import "./chunk-XN4WNFGN.js";
import "./chunk-5QMHUOJQ.js";
import "./chunk-OFBI5QRC.js";
import "./chunk-PL2PAX7Y.js";
import "./chunk-V57K5H6G.js";
import "./chunk-FLJXSAP4.js";
import "./chunk-7DITWZ3V.js";
import "./chunk-Y576ZK6L.js";
import "./chunk-2GRRCX3P.js";
import "./chunk-FQDO2XGS.js";
import "./chunk-JNZO32C5.js";
import "./chunk-MUCV4YIS.js";
import "./chunk-MKX7R2UM.js";
import "./chunk-D57SAGZH.js";
import "./chunk-ZQDXUGCX.js";
import "./chunk-RB7Q4TO5.js";
import "./chunk-G6GBOHXB.js";
import "./chunk-A3C3MBAO.js";
import "./chunk-NJENQTX6.js";
import "./chunk-Y3MLV2IT.js";
import "./chunk-BHVFX6OF.js";
import "./chunk-JR3PODJQ.js";
import {
  marker
} from "./chunk-QN4TTD5X.js";
import "./chunk-DMOF7S63.js";
import {
  DomSanitizer,
  UserSettingsService
} from "./chunk-7YP54JN5.js";
import {
  ChangeDetectionStrategy,
  Component,
  Input,
  TranslatePipe,
  inject,
  input,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵconditional,
  ɵɵconditionalCreate,
  ɵɵdefineComponent,
  ɵɵdomElement,
  ɵɵdomElementEnd,
  ɵɵdomElementStart,
  ɵɵdomListener,
  ɵɵdomProperty,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵnextContext,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIdentity,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵtextInterpolate1
} from "./chunk-KRHY6Z2H.js";
import "./chunk-DKTF6WIM.js";
import "./chunk-G55EJPVD.js";
import "./chunk-7XEOGBZ2.js";
import "./chunk-3RPP55HA.js";
import "./chunk-DBOW7BSZ.js";
import "./chunk-XMWDIV4O.js";
import "./chunk-YCXP4XZS.js";

// src/app/components/bookmarklets/bookmarklets.component.ts
function BookmarkletsComponent_For_2_Conditional_0_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275domElementStart(0, "div", 1)(1, "a", 2);
    \u0275\u0275domListener("click", function BookmarkletsComponent_For_2_Conditional_0_Template_a_click_1_listener($event) {
      return $event.preventDefault();
    });
    \u0275\u0275text(2);
    \u0275\u0275pipe(3, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275domElementStart(4, "p", 3);
    \u0275\u0275text(5);
    \u0275\u0275pipe(6, "translate");
    \u0275\u0275domElement(7, "br");
    \u0275\u0275domElementStart(8, "strong");
    \u0275\u0275text(9);
    \u0275\u0275pipe(10, "translate");
    \u0275\u0275domElementEnd();
    \u0275\u0275text(11);
    \u0275\u0275domElementEnd()();
  }
  if (rf & 2) {
    const item_r1 = ctx;
    const key_r2 = \u0275\u0275nextContext().$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275advance();
    \u0275\u0275domProperty("href", ctx_r2.getHref(key_r2), \u0275\u0275sanitizeUrl);
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(3, 5, item_r1.titleKey));
    \u0275\u0275advance(3);
    \u0275\u0275textInterpolate1(" ", \u0275\u0275pipeBind1(6, 7, item_r1.descriptionKey));
    \u0275\u0275advance(4);
    \u0275\u0275textInterpolate1("", \u0275\u0275pipeBind1(10, 9, "common.modified"), ": ");
    \u0275\u0275advance(2);
    \u0275\u0275textInterpolate1("", item_r1.modified, " ");
  }
}
function BookmarkletsComponent_For_2_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275conditionalCreate(0, BookmarkletsComponent_For_2_Conditional_0_Template, 12, 11, "div", 1);
  }
  if (rf & 2) {
    let tmp_10_0;
    const key_r2 = ctx.$implicit;
    const ctx_r2 = \u0275\u0275nextContext();
    \u0275\u0275conditional((tmp_10_0 = ctx_r2.items[key_r2]) ? 0 : -1, tmp_10_0);
  }
}
var BOOKMARKLETS = {
  aida: {
    buildHref: (origin) => `javascript:(function(){const url=encodeURIComponent(window.location.href);const title=encodeURIComponent(document.title);window.open('${origin}/import-page?org=CRA&url='+url+'&title='+title,'_blank');})();`,
    titleKey: "standalone.bookmarklet.aida._title",
    descriptionKey: "standalone.bookmarklet.aida.description",
    modified: "2026-02-01"
  },
  githubToggle: {
    buildHref: () => `javascript:(function(){if(window.location.href.indexOf("github.com")>-1){var m=window.location.toString().match(/^https:\\/\\/github.com\\/(.*?)\\/(.*?)\\/(blob|tree|edit)\\/.*?\\/(.*?)(\\/)?(\\.\\w+)?$/);if(m){var u=m[1]==="gc-proto"?"https://test.canada.ca/"+m[2]+"/"+m[4]+m[6]:m[1]==="cra-proto"?"https://cra-test-arc.canada.ca/"+m[2]+"/"+m[4]+m[6]:"https://"+m[1]+".github.io/"+m[2]+"/"+m[4]+m[6];window.location=u;}}else{var i="index.html";if(window.location.href.indexOf(".html")>-1){i="";}window.location=window.location.toString().replace(/^https:\\/\\/(.*?).github.io\\/(.*?)\\/(.*?)(\\/)?(\\.\\w+)?$/,"https://github.com/$1/$2/tree/main/$3$5/"+i).replace(/^https:\\/\\/test.canada.ca\\/(.*?)\\/(.*?)(\\/)?(\\.\\w+)?$/,"https://github.com/gc-proto/$1/tree/master/$2$4/"+i).replace(/^https:\\/\\/cra-test-arc.canada.ca\\/(.*?)\\/(.*?)(\\/)?(\\.\\w+)?$/,"https://github.com/cra-proto/$1/tree/main/$2$4/"+i);}})();`,
    titleKey: "standalone.bookmarklet.githubToggle._title",
    descriptionKey: "standalone.bookmarklet.githubToggle.description",
    modified: "2026-06-12"
  },
  githubNewTab: {
    buildHref: () => `javascript:(function(){if(window.location.href.indexOf("github.com")>-1){var m=window.location.toString().match(/^https:\\/\\/github.com\\/(.*?)\\/(.*?)\\/(blob|tree|edit)\\/.*?\\/(.*?)(\\/)?(\\.\\w+)?$/);if(m){var u=m[1]==="gc-proto"?"https://test.canada.ca/"+m[2]+"/"+m[4]+m[6]:m[1]==="cra-proto"?"https://cra-test-arc.canada.ca/"+m[2]+"/"+m[4]+m[6]:"https://"+m[1]+".github.io/"+m[2]+"/"+m[4]+m[6];window.open(u,'_blank');}}else{var i="index.html";if(window.location.href.indexOf(".html")>-1){i="";}window.open(window.location.toString().replace(/^https:\\/\\/(.*?).github.io\\/(.*?)\\/(.*?)(\\/)?(\\.\\w+)?$/,"https://github.com/$1/$2/blob/main/$3$5/"+i).replace(/^https:\\/\\/test.canada.ca\\/(.*?)\\/(.*?)(\\/)?(\\.\\w+)?$/,"https://github.com/gc-proto/$1/blob/master/$2$4/"+i).replace(/^https:\\/\\/cra-test-arc.canada.ca\\/(.*?)\\/(.*?)(\\/)?(\\.\\w+)?$/,"https://github.com/cra-proto/$1/blob/main/$2$4/"+i),'_blank');}})();`,
    titleKey: "standalone.bookmarklet.githubNewTab._title",
    descriptionKey: "standalone.bookmarklet.githubNewTab.description",
    modified: "2026-06-12"
  },
  linkChecker: {
    buildHref: () => `javascript:(function(){if(document.getElementById('link-check-summary')){document.getElementById('link-check-summary').remove(); document.getElementById('link-check-results').remove(); document.querySelectorAll('a[data-link-checked]').forEach(a=>{if(a.title!==undefined){a.innerHTML=a.title; a.title='';}; a.style.backgroundColor=''; a.style.padding=''; a.style.display=''; a.removeAttribute('data-link-checked');}); return;} var index,child,link,href,count,lang,pattern; var statusChecks=[],totalLinks=0,unknownCount=0,errorCount=0; var broken=[],redirects=[],preview=[],canadasite=[],empty=[],utm=[],wrongLang=[],unknown=[]; lang=$("html").attr("lang"); const oppLang=(lang=="en")?"fr":"en"; pattern="canada.ca/|preview.adobecqms.net/|canadasite|null link|utm|/"+oppLang+"/|lang="+oppLang; const summary=document.createElement("div"); summary.id="link-check-summary"; summary.style.cssText="background:#f0f0f0;border:2px solid #333;padding:10px;margin-bottom:10px;font-weight:bold;"; const summaryInner=document.createElement("div"); summaryInner.className="container"; summary.appendChild(summaryInner); document.body.prepend(summary); const resultsContainer=document.createElement("div"); resultsContainer.id="link-check-results"; resultsContainer.className="container"; document.body.prepend(resultsContainer); async function checkLink(href,linkElem,isRetry=false){if(!href||href.startsWith('#')||href.startsWith('javascript:')||href.startsWith('mailto:')||href.startsWith('tel:'))return null; let fullUrl=href.startsWith('http')?href:new URL(href,window.location.href).href; let isSameOrigin=new URL(fullUrl).origin===window.location.origin; try{let resp=await fetch(fullUrl,{method:'HEAD',mode:'no-cors',cache:'no-cache',redirect:'manual'}); if(resp.type==='opaqueredirect'){if(isSameOrigin&&!isRetry){await new Promise(resolve=>setTimeout(resolve,500)); return checkLink(href,linkElem,true)}; return 302}; if(resp.type==='opaque'&&!isSameOrigin){unknownCount++; return'unknown'}; if(resp.url&&resp.url.includes('/errors/404.html')){if(isSameOrigin&&!isRetry){await new Promise(resolve=>setTimeout(resolve,500)); return checkLink(href,linkElem,true)}; return 404}; return resp.status}catch(e){if(isSameOrigin&&!isRetry){await new Promise(resolve=>setTimeout(resolve,500)); return checkLink(href,linkElem,true)}; if(!isSameOrigin){unknownCount++}; return isSameOrigin?404:'unknown'}}; function markLink(link,originalHref,color){link.setAttribute('data-link-checked','true'); link.title+=link.innerHTML; while(child=link.firstChild){link.removeChild(child)}; link.appendChild(document.createTextNode(originalHref)); link.style.backgroundColor=color; link.style.padding='2px 6px'; link.style.display='inline-block';}; function displayResults(){let html=''; if(errorCount>0||unknownCount>0){html+='<div class="alert alert-danger mt-4"><h2 class="h3">Link problems found</h2><p>The problems are listed below and highlighted in the content.</p><ul>'; if(broken.length>0&&!broken.some(url=>url.includes('Error'))){html+='<li><span style="background:red;padding:2px 6px;">Red highlight</span> - 404\\'s (broken links)</li>'}; if(broken.some(url=>url.includes('Error'))||redirects.length>0){html+='<li><span style="background:orange;padding:2px 6px;">Orange highlight</span> - Redirects or HTTP errors (50X\\'s, 403\\'s, etc.)</li>'}; if(preview.length>0||canadasite.length>0||empty.length>0||utm.length>0||wrongLang.length>0){html+='<li><span style="background:yellow;padding:2px 6px;">Yellow highlight</span> - pattern issues (hard-coded preview links, wrong language links, duplicate canadasite, empty links, or utm codes)</li>'}; if(unknown.length>0){html+='<li><span style="background:cyan;padding:2px 6px;">Cyan highlight</span> - external links (unable to verify)</li>'}; html+='</ul><p class="text-muted mt-2"><strong>Note: </strong>Intermittent server issues can result in false positives that can be ignored.</p></div>'}; if(broken.length>0){html+='<h3>Broken links:</h3><ul>'; broken.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(redirects.length>0){html+='<h3>Redirects:</h3><ul>'; redirects.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(preview.length>0){html+='<h3>Hard-coded preview links:</h3><ul>'; preview.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(canadasite.length>0){html+='<h3>Duplicate canadasite links:</h3><ul>'; canadasite.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(empty.length>0){html+='<h3>Empty links:</h3><ul>'; empty.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(utm.length>0){html+='<h3>UTM codes to remove:</h3><ul>'; utm.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(wrongLang.length>0){html+='<h3>Wrong language:</h3><ul>'; wrongLang.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(unknown.length>0){html+='<h3>External links (unable to verify):</h3><ul>'; unknown.forEach(url=>html+='<li>'+url+'</li>'); html+='</ul>'}; if(errorCount==0&&unknownCount==0){html='<div class="alert alert-success mt-4"><h2 class="h3">No problems found</h2><p>No broken links, hard-coded preview links, wrong language links, duplicate canadasite, empty links, or utm codes were detected on this page.</p></div>'}; resultsContainer.innerHTML=html}; var allLinks=[]; for(index=0;link=document.body.querySelector("#wb-bc")?.querySelectorAll("a")[index];++index){allLinks.push(link)}; for(index=0;link=document.body.querySelector("main")?.querySelectorAll("a")[index];++index){allLinks.push(link)}; totalLinks=allLinks.length; allLinks.forEach(link=>{href=link.getAttribute("href"); if(!href||href=="null link"){empty.push("null link"); markLink(link,"null link",'yellow'); errorCount++}else if(href.match(/preview.adobecqms.net/)){preview.push(href); markLink(link,href,'yellow'); errorCount++}else if(href.match(/canadasite/)){canadasite.push(href); markLink(link,href,'yellow'); errorCount++}else if(href.match(/utm/)){utm.push(href); markLink(link,href,'yellow'); errorCount++}else if((lang=="en"&&href.match(/\\/fr\\/|lang=fr/))||(lang=="fr"&&href.match(/\\/en\\/|lang=en/))){wrongLang.push(href); markLink(link,href,'yellow'); errorCount++}else{let originalUrl=href; statusChecks.push(checkLink(href,link).then(status=>{if(status===404){broken.push(originalUrl); markLink(link,originalUrl,'red'); errorCount++}else if(status>=300&&status<400){redirects.push(originalUrl+' (Redirect '+status+')'); markLink(link,originalUrl,'orange'); errorCount++}else if(status>=400&&status<600){broken.push(originalUrl+' (Error '+status+')'); markLink(link,originalUrl,'orange'); errorCount++}else if(status==='unknown'){unknown.push(originalUrl); markLink(link,originalUrl,'cyan')}}))}});Promise.all(statusChecks).then(()=>{let cleanCount=totalLinks-errorCount-unknownCount; summaryInner.innerHTML="Checked "+totalLinks+" links: "+errorCount+" problems, "+unknownCount+" unknown, "+cleanCount+" ok"; displayResults();});})()`,
    titleKey: "standalone.bookmarklet.linkChecker._title",
    descriptionKey: "standalone.bookmarklet.linkChecker.description",
    modified: "2026-03-23"
  },
  nightMode: {
    buildHref: () => `javascript:(function(){var invId='night-mode-invert';var maskId='night-mode-mask';var html=document.documentElement;var levels=[0,0.2,0.3,0.4,0.5,0.6,0.7,0.8,0.9,1];var overlay=document.getElementById(maskId);var current=overlay?parseFloat(overlay.dataset.level):(html.classList.contains(invId)?0:-1);var idx=levels.indexOf(current);var next=idx===-1?0:idx+1;if(next>=levels.length){html.classList.remove(invId);var s=document.getElementById(invId+'-style');if(s)s.remove();if(overlay)overlay.remove();}else{if(!html.classList.contains(invId)){html.classList.add(invId);var style=document.createElement('style');style.id=invId+'-style';style.textContent='html.'+invId+'{filter:invert(1) hue-rotate(180deg);background:#fff;}html.'+invId+' img,html.'+invId+' video,html.'+invId+' iframe,html.'+invId+' svg,html.'+invId+' picture,html.'+invId+' canvas,html.'+invId+' [style*="background-image"]{filter:invert(1) hue-rotate(180deg);}html.'+invId+' #wb-info .gc-contextual,html.'+invId+' #wb-info .gc-main-footer{filter:invert(1) hue-rotate(180deg);}html.'+invId+' #wb-info .gc-contextual img,html.'+invId+' #wb-info .gc-contextual svg,html.'+invId+' #wb-info .gc-main-footer img,html.'+invId+' #wb-info .gc-main-footer svg{filter:none;}';document.head.appendChild(style);}var lvl=levels[next];if(lvl===0){if(overlay)overlay.remove();}else{if(!overlay){overlay=document.createElement('div');overlay.id=maskId;overlay.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background-color:black;pointer-events:none;z-index:2147483647;filter:invert(1) hue-rotate(180deg);';document.body.appendChild(overlay);}overlay.dataset.level=lvl;overlay.style.opacity=lvl;}}})();`,
    titleKey: "standalone.bookmarklet.nightMode._title",
    descriptionKey: "standalone.bookmarklet.nightMode.description",
    modified: "2026-07-17"
  }
};
var BookmarkletsComponent = class _BookmarkletsComponent {
  sanitizer = inject(DomSanitizer);
  items = BOOKMARKLETS;
  keys = input.required(...ngDevMode ? [{ debugName: "keys" }] : (
    /* istanbul ignore next */
    []
  ));
  hrefs = Object.fromEntries(Object.keys(BOOKMARKLETS).map((key) => [key, this.sanitizer.bypassSecurityTrustUrl(BOOKMARKLETS[key].buildHref(window.location.origin))]));
  getHref(key) {
    return this.hrefs[key];
  }
  markForTranslation() {
    marker("standalone.bookmarklet.aida._title");
    marker("standalone.bookmarklet.aida.description");
    marker("standalone.bookmarklet.githubToggle._title");
    marker("standalone.bookmarklet.githubToggle.description");
    marker("standalone.bookmarklet.githubNewTab._title");
    marker("standalone.bookmarklet.githubNewTab.description");
    marker("standalone.bookmarklet.linkChecker._title");
    marker("standalone.bookmarklet.linkChecker.description");
    marker("standalone.bookmarklet.nightMode._title");
    marker("standalone.bookmarklet.nightMode.description");
  }
  static \u0275fac = function BookmarkletsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _BookmarkletsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _BookmarkletsComponent, selectors: [["aida-bookmarklets"]], inputs: { keys: [1, "keys"] }, decls: 3, vars: 0, consts: [[1, "grid", "py-2", "px-4", "lg:px-6"], [1, "col-12", "md:col-6", "lg:col-4"], [1, "text-xl", "font-semibold", 3, "click", "href"], [1, "text-color-secondary", "mt-2"]], template: function BookmarkletsComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275domElementStart(0, "div", 0);
      \u0275\u0275repeaterCreate(1, BookmarkletsComponent_For_2_Template, 1, 1, null, null, \u0275\u0275repeaterTrackByIdentity);
      \u0275\u0275domElementEnd();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275repeater(ctx.keys());
    }
  }, dependencies: [TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BookmarkletsComponent, [{
    type: Component,
    args: [{ selector: "aida-bookmarklets", imports: [TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<div class="grid py-2 px-4 lg:px-6">
  @for (key of keys(); track key) {
    @if (items[key]; as item) {
      <div class="col-12 md:col-6 lg:col-4">
        <a [href]="getHref(key)" (click)="$event.preventDefault()" class="text-xl font-semibold">{{ item.titleKey | translate }}</a>
        <p class="text-color-secondary mt-2">
          {{ item.descriptionKey | translate }}<br />
          <strong>{{ 'common.modified' | translate }}: </strong>{{ item.modified }}
        </p>
      </div>
    }
  }
</div>
` }]
  }], null, { keys: [{ type: Input, args: [{ isSignal: true, alias: "keys", required: true }] }] });
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(BookmarkletsComponent, { className: "BookmarkletsComponent", filePath: "src/app/components/bookmarklets/bookmarklets.component.ts", lineNumber: 60 });
})();

// src/app/views/toolbox/standalone-tools/standalone.component.ts
function StandaloneComponent_Conditional_19_Template(rf, ctx) {
}
function StandaloneComponent_Conditional_20_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275element(0, "aida-dev-tools");
  }
}
var StandaloneComponent = class _StandaloneComponent {
  settingsService = inject(UserSettingsService);
  standaloneDoormats = ["standaloneCompare"];
  standaloneBookmarklets = ["aida", "githubToggle", "githubNewTab", "linkChecker", "nightMode"];
  // For group-specific tools
  myToolbox = this.settingsService.toolbox;
  static \u0275fac = function StandaloneComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _StandaloneComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _StandaloneComponent, selectors: [["aida-standalone"]], decls: 21, vars: 22, consts: [["id", "wb-cont"], [3, "innerHTML"], [3, "keys"]], template: function StandaloneComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(3, "p", 1);
      \u0275\u0275pipe(4, "translate");
      \u0275\u0275elementStart(5, "h2");
      \u0275\u0275text(6);
      \u0275\u0275pipe(7, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(8, "p");
      \u0275\u0275text(9);
      \u0275\u0275pipe(10, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(11, "aida-doormats", 2);
      \u0275\u0275elementStart(12, "h2");
      \u0275\u0275text(13);
      \u0275\u0275pipe(14, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(15, "p");
      \u0275\u0275text(16);
      \u0275\u0275pipe(17, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275element(18, "aida-bookmarklets", 2);
      \u0275\u0275conditionalCreate(19, StandaloneComponent_Conditional_19_Template, 0, 0);
      \u0275\u0275conditionalCreate(20, StandaloneComponent_Conditional_20_Template, 1, 0, "aida-dev-tools");
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 10, "standalone._title"));
      \u0275\u0275advance(2);
      \u0275\u0275property("innerHTML", \u0275\u0275pipeBind1(4, 12, "standalone.description"), \u0275\u0275sanitizeHtml);
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(7, 14, "standalone.tools._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(10, 16, "standalone.tools.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("keys", ctx.standaloneDoormats);
      \u0275\u0275advance(2);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(14, 18, "standalone.bookmarklet._title"));
      \u0275\u0275advance(3);
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(17, 20, "standalone.bookmarklet.description"));
      \u0275\u0275advance(2);
      \u0275\u0275property("keys", ctx.standaloneBookmarklets);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.myToolbox() === "CRA" || ctx.myToolbox() === "ADMIN" ? 19 : -1);
      \u0275\u0275advance();
      \u0275\u0275conditional(ctx.myToolbox() === "DEV" || ctx.myToolbox() === "ADMIN" ? 20 : -1);
    }
  }, dependencies: [BookmarkletsComponent, DevToolsComponent, DoormatsComponent, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(StandaloneComponent, [{
    type: Component,
    args: [{ selector: "aida-standalone", imports: [TranslatePipe, BookmarkletsComponent, DevToolsComponent, DoormatsComponent], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'standalone._title' | translate }}</h1>
<p [innerHTML]="'standalone.description' | translate"></p>

<!--Standalone tools-->
<h2>{{ 'standalone.tools._title' | translate }}</h2>
<p>{{ 'standalone.tools.description' | translate }}</p>
<aida-doormats [keys]="standaloneDoormats" />

<!--Standalone bookmarklets-->
<h2>{{ 'standalone.bookmarklet._title' | translate }}</h2>
<p>{{ 'standalone.bookmarklet.description' | translate }}</p>
<aida-bookmarklets [keys]="standaloneBookmarklets" />

<!-- CRA tools -->
@if (myToolbox() === 'CRA' || myToolbox() === 'ADMIN') {
  <!--ADD ANYTHING UNIQUE TO CRA HERE-->
}

<!-- Dev tools -->
@if (myToolbox() === 'DEV' || myToolbox() === 'ADMIN') {
  <aida-dev-tools />
}
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(StandaloneComponent, { className: "StandaloneComponent", filePath: "src/app/views/toolbox/standalone-tools/standalone.component.ts", lineNumber: 17 });
})();
export {
  StandaloneComponent
};
//# sourceMappingURL=chunk-VFW4VM7Y.js.map
