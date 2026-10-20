import {
  SMALL_WORDS_ENGLISH,
  SMALL_WORDS_FRENCH
} from "./chunk-DMOF7S63.js";
import {
  RouterLink
} from "./chunk-MDI4WJGA.js";
import {
  ChangeDetectionStrategy,
  Component,
  TranslatePipe,
  setClassMetadata,
  ɵsetClassDebugInfo,
  ɵɵadvance,
  ɵɵdefineComponent,
  ɵɵelement,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵpipe,
  ɵɵpipeBind1,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵrepeater,
  ɵɵrepeaterCreate,
  ɵɵrepeaterTrackByIndex,
  ɵɵtext,
  ɵɵtextInterpolate
} from "./chunk-KRHY6Z2H.js";
import "./chunk-YCXP4XZS.js";

// src/app/views/utility/help/help.component.ts
var _c0 = () => [];
function HelpComponent_For_388_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const word_r1 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(word_r1);
  }
}
function HelpComponent_For_394_Template(rf, ctx) {
  if (rf & 1) {
    \u0275\u0275elementStart(0, "li");
    \u0275\u0275text(1);
    \u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const word_r2 = ctx.$implicit;
    \u0275\u0275advance();
    \u0275\u0275textInterpolate(word_r2);
  }
}
var HelpComponent = class _HelpComponent {
  stopWordsEN = SMALL_WORDS_ENGLISH;
  stopWordsFR = SMALL_WORDS_FRENCH;
  static \u0275fac = function HelpComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HelpComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ \u0275\u0275defineComponent({ type: _HelpComponent, selectors: [["aida-help"]], decls: 1007, vars: 15, consts: [["id", "wb-cont"], [1, "my-0"], [1, "mt-0", "mb-5"], ["fragment", "about", 3, "routerLink"], ["fragment", "start", 3, "routerLink"], ["fragment", "documentation", 3, "routerLink"], ["fragment", "data", 3, "routerLink"], ["fragment", "urls", 3, "routerLink"], ["fragment", "release", 3, "routerLink"], [1, "flex", "flex-column", "gap-3", "my-3"], [1, "surface-card", "border-round-lg", "shadow-2", "p-4", "w-full", "min-w-min"], ["id", "about"], [1, "flex", "flex-row", "gap-8"], ["href", "mailto:AIPIA-PIAAI@cra-arc.gc.ca?subject=Interested%20in%20contributing%20to%20AIDA&body=Hi%2C%0A%0AI'd%20like%20to%20get%20involved%20with%20AIDA%20as%20a%20%5Bdeveloper%20%2F%20researcher%20%2F%20tester%5D.%20Here's%20a%20bit%20about%20my%20background%20and%20what%20I'd%20like%20to%20help%20with%3A%0A%0A%5BYour%20message%20here%5D%0A%0A%E2%80%94%20%5BYour%20name%5D"], ["id", "start"], ["id", "documentation"], ["id", "data"], [1, "mb-1"], [1, "mt-1"], [1, "custom"], ["id", "urls"], [1, "grid"], [1, "col-3"], [1, "my-0", "ml-3"], [1, "mt-0"], ["id", "release"], ["id", "0-7-6"], ["id", "0-7-5"], ["id", "0-7-4"], ["id", "0-7-3"], ["id", "0-7-2"], ["id", "0-7-1"], ["id", "0-7-0"], ["id", "0-6-12"], ["id", "0-6-11"], ["id", "0-6-10"], ["id", "0-6-9"], ["id", "0-6-8"], ["id", "0-6-7"], ["id", "0-6-6"], ["id", "0-6-5"], ["id", "0-6-4"], ["id", "0-6-3"], ["id", "0-6-2"], ["id", "0-6-1"], ["id", "0-6-0"], ["id", "0-5-8"], ["id", "0-5-7"], ["id", "0-5-6"], ["id", "0-5-5"], ["id", "0-5-4"], ["id", "0-5-3"], ["id", "0-5-2"], ["id", "0-5-1"], ["id", "0-5-0"], ["id", "0-4-0"]], template: function HelpComponent_Template(rf, ctx) {
    if (rf & 1) {
      \u0275\u0275elementStart(0, "h1", 0);
      \u0275\u0275text(1);
      \u0275\u0275pipe(2, "translate");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(3, "p");
      \u0275\u0275text(4, "New to AIDA? Start with the basics or jump to a specific topic below.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(5, "h2", 1);
      \u0275\u0275text(6, "On this page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(7, "ul", 2)(8, "li")(9, "a", 3);
      \u0275\u0275text(10, "About AIDA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(11, "li")(12, "a", 4);
      \u0275\u0275text(13, "Starting a project");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(14, "li")(15, "a", 5);
      \u0275\u0275text(16, "Documentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(17, "ul")(18, "li")(19, "a", 6);
      \u0275\u0275text(20, "How AIDA collects its data");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(21, "li")(22, "a", 7);
      \u0275\u0275text(23, "How AIDA generates new URLs");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(24, "li")(25, "a", 8);
      \u0275\u0275text(26, "Release notes");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(27, "div", 9)(28, "section", 10)(29, "h2", 11);
      \u0275\u0275text(30, "About AIDA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(31, "p");
      \u0275\u0275text(32, "The DDPD GenAI Project is exploring how artificial intelligence and automation can improve web content design for Canada.ca.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(33, "p");
      \u0275\u0275text(34, "The AI Design Assistant (AIDA) helps content designers manage projects, analyze pages, identify issues, and create prototypes.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(35, "div", 12)(36, "div")(37, "h3");
      \u0275\u0275text(38, "What it does now");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(39, "ul")(40, "li");
      \u0275\u0275text(41, "Generate and manage your content inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(42, "li");
      \u0275\u0275text(43, "Update your metadata with AI assistance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(44, "li");
      \u0275\u0275text(45, "Visualize and make changes to your information architecture");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(46, "li");
      \u0275\u0275text(47, "Export your prototypes to GitHub for editing");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(48, "li");
      \u0275\u0275text(49, "Compare your prototype with the live page or with AI-assisted edits");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(50, "div")(51, "h3");
      \u0275\u0275text(52, "What's coming next");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(53, "ul")(54, "li");
      \u0275\u0275text(55, "AI-assisted content review");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(56, "li");
      \u0275\u0275text(57, "Accessibility checking");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(58, "li");
      \u0275\u0275text(59, "Automated quality assurance tools");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(60, "li");
      \u0275\u0275text(61, " Have an idea? ");
      \u0275\u0275elementStart(62, "a", 13);
      \u0275\u0275text(63, "Contact CDIA");
      \u0275\u0275elementEnd();
      \u0275\u0275text(64, ". ");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(65, "section", 10)(66, "h2", 14);
      \u0275\u0275text(67, "Starting a project");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(68, "p");
      \u0275\u0275text(69, ` When you load AIDA for the first time, it's going to bring you to the "New project" page. There is `);
      \u0275\u0275elementStart(70, "strong");
      \u0275\u0275text(71, "no");
      \u0275\u0275elementEnd();
      \u0275\u0275text(72, " requirement to complete any steps on this page in any particular order. These options will resurface throughout the AIDA if you need to complete something before using one of the tools. ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(73, "p");
      \u0275\u0275text(74, ' You will start out working in the "autosave" file. If you want to have multiple projects that you can switch between, go ahead and give your project a name in the "Set up project" box. When you name your project, AIDA will automatically fill out the GitHub repository name for you but feel free to override that with a name of your choosing. ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(75, "p");
      \u0275\u0275text(76, ` The next thing you'll want to do is add some pages. You can copy and paste one or more Canada.ca URLs into the "Add pages" tool, or use the "Find pages" tool to copy all the URLs for whichever task you are interested in. You'll need to have at least one page in your inventory to make use of the other tools. After you've added at least one page, you can also use the "Find pages" tool to find any child pages to fill out your inventory. `);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(77, "p");
      \u0275\u0275text(78, "Some of the other tools in AIDA include:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(79, "ul")(80, "li");
      \u0275\u0275text(81, "a content inventory that pulls in all kinds of information about your pages from various sources");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(82, "li");
      \u0275\u0275text(83, "an IA diagram view where you can make changes to the IA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(84, "li");
      \u0275\u0275text(85, "an export tool where you can download a copy of your pages or export them to GitHub for prototyping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(86, "li");
      \u0275\u0275text(87, "a compare versions tool where you can compare any version of your pages to any other version (for example, your protoype with the live page)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(88, "p");
      \u0275\u0275text(89, "Go ahead and look around. We'll add more detailed instructions for each of these tools in a future release.");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(90, "section", 10)(91, "h2", 15);
      \u0275\u0275text(92, "Documentation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(93, "p");
      \u0275\u0275text(94, "Some of the information below is intended for AIDA contributors and may be a bit technical. You don't need to understand this part to use AIDA.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(95, "h3", 16);
      \u0275\u0275text(96, "How AIDA collects its data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(97, "p");
      \u0275\u0275text(98, "When you add a Canada.ca page to your project, AIDA fetches information from:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(99, "ul")(100, "li");
      \u0275\u0275text(101, "the live English and French pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(102, "li");
      \u0275\u0275text(103, "the live content.json file");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(104, "li");
      \u0275\u0275text(105, "the task airtable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(106, "li");
      \u0275\u0275text(107, "a static export of page visits from the UPD");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(108, "li");
      \u0275\u0275text(109, "a static export of vanity URLs from gcPedia");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(110, "h4");
      \u0275\u0275text(111, "Page templates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(112, "p");
      \u0275\u0275text(113, ` AIDA detects page templates based on specific criteria from the page itself and puts that information in the "Template" column of your content inventory table. This helps give you an overview of what kind of pages you're working with. Here's what AIDA looks for: `);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(114, "p", 17)(115, "strong");
      \u0275\u0275text(116, "Navigation templates:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(117, "ul", 18)(118, "li")(119, "strong");
      \u0275\u0275text(120, "topic");
      \u0275\u0275elementEnd();
      \u0275\u0275text(121, " - has classes ");
      \u0275\u0275elementStart(122, "code", 19);
      \u0275\u0275text(123, "most-requested-bullets");
      \u0275\u0275elementEnd();
      \u0275\u0275text(124, " or ");
      \u0275\u0275elementStart(125, "code", 19);
      \u0275\u0275text(126, "gc-srvinfo");
      \u0275\u0275elementEnd();
      \u0275\u0275text(127, " or ");
      \u0275\u0275elementStart(128, "code", 19);
      \u0275\u0275text(129, "mwsdoormat-links-container");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(130, "li")(131, "strong");
      \u0275\u0275text(132, "old topic");
      \u0275\u0275elementEnd();
      \u0275\u0275text(133, " - has class ");
      \u0275\u0275elementStart(134, "code", 19);
      \u0275\u0275text(135, "list-group-item");
      \u0275\u0275elementEnd();
      \u0275\u0275text(136, " where more than 80% are links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(137, "li")(138, "strong");
      \u0275\u0275text(139, "subway");
      \u0275\u0275elementEnd();
      \u0275\u0275text(140, " - has class ");
      \u0275\u0275elementStart(141, "code", 19);
      \u0275\u0275text(142, "gc-subway");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(143, "li")(144, "strong");
      \u0275\u0275text(145, "old subway");
      \u0275\u0275elementEnd();
      \u0275\u0275text(146, " - has class ");
      \u0275\u0275elementStart(147, "code", 19);
      \u0275\u0275text(148, "gc-navseq");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(149, "li")(150, "strong");
      \u0275\u0275text(151, "navigation");
      \u0275\u0275elementEnd();
      \u0275\u0275text(152, " - where none of the above apply and more than 70% of the text is links");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(153, "p")(154, "strong");
      \u0275\u0275text(155, "Content templates");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(156, "ul")(157, "li")(158, "strong");
      \u0275\u0275text(159, "multimedia gallery");
      \u0275\u0275elementEnd();
      \u0275\u0275text(160, " - url includes ");
      \u0275\u0275elementStart(161, "code", 19);
      \u0275\u0275text(162, "/news/cra-multimedia-library/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(163, " or ");
      \u0275\u0275elementStart(164, "code", 19);
      \u0275\u0275text(165, "/nouvelles/bibliotheque-multimedia-arc/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(166, "li")(167, "strong");
      \u0275\u0275text(168, "video transcript");
      \u0275\u0275elementEnd();
      \u0275\u0275text(169, " - has ");
      \u0275\u0275elementStart(170, "code", 19);
      \u0275\u0275text(171, "<video>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(172, ' element, H2 contains "transcript", and is a child of the multimedia gallery');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(173, "li")(174, "strong");
      \u0275\u0275text(175, "contact");
      \u0275\u0275elementEnd();
      \u0275\u0275text(176, ' - h1 starts with "Contact" or "Contactez"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(177, "li")(178, "strong");
      \u0275\u0275text(179, "brochure");
      \u0275\u0275elementEnd();
      \u0275\u0275text(180, " - has classes ");
      \u0275\u0275elementStart(181, "code", 19);
      \u0275\u0275text(182, "panel-heading bg-primary");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(183, "li")(184, "strong");
      \u0275\u0275text(185, "pdf download");
      \u0275\u0275elementEnd();
      \u0275\u0275text(186, " - has a pdf link with classes ");
      \u0275\u0275elementStart(187, "code", 19);
      \u0275\u0275text(188, "btn stretched-link");
      \u0275\u0275elementEnd();
      \u0275\u0275text(189, " and either the ");
      \u0275\u0275elementStart(190, "code", 19);
      \u0275\u0275text(191, "thumbnail");
      \u0275\u0275elementEnd();
      \u0275\u0275text(192, " class or a ");
      \u0275\u0275elementStart(193, "code", 19);
      \u0275\u0275text(194, "<small>");
      \u0275\u0275elementEnd();
      \u0275\u0275text(195, ' element with "PDF, # KB, # page" or "PDF, # Ko, # page" ');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(196, "li")(197, "strong");
      \u0275\u0275text(198, "content");
      \u0275\u0275elementEnd();
      \u0275\u0275text(199, " - if no other page templates apply");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(200, "p")(201, "strong");
      \u0275\u0275text(202, "Newsroom templates:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(203, "ul", 18)(204, "li")(205, "strong");
      \u0275\u0275text(206, "newsroom");
      \u0275\u0275elementEnd();
      \u0275\u0275text(207, " - url includes ");
      \u0275\u0275elementStart(208, "code", 19);
      \u0275\u0275text(209, "/news/####");
      \u0275\u0275elementEnd();
      \u0275\u0275text(210, " or ");
      \u0275\u0275elementStart(211, "code", 19);
      \u0275\u0275text(212, "/nouvelles/####");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(213, "li")(214, "strong");
      \u0275\u0275text(215, "taxtip");
      \u0275\u0275elementEnd();
      \u0275\u0275text(216, " - url includes ");
      \u0275\u0275elementStart(217, "code", 19);
      \u0275\u0275text(218, "/newsroom/tax-tips/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(219, " or ");
      \u0275\u0275elementStart(220, "code", 19);
      \u0275\u0275text(221, "/salle-presse/conseils-fiscaux/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(222, "li")(223, "strong");
      \u0275\u0275text(224, "tax filing season media kit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(225, " - url includes ");
      \u0275\u0275elementStart(226, "code", 19);
      \u0275\u0275text(227, "/tax-tips/tax-filing-season-media-kit");
      \u0275\u0275elementEnd();
      \u0275\u0275text(228, " or ");
      \u0275\u0275elementStart(229, "code", 19);
      \u0275\u0275text(230, "/salle-presse/mesures-relatives-enquetes-criminelles-accusations-condamnations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(231, "li")(232, "strong");
      \u0275\u0275text(233, "enforcement notice");
      \u0275\u0275elementEnd();
      \u0275\u0275text(234, " - url includes ");
      \u0275\u0275elementStart(235, "code", 19);
      \u0275\u0275text(236, "/newsroom/criminal-investigations-actions-charges-convictions");
      \u0275\u0275elementEnd();
      \u0275\u0275text(237, " or ");
      \u0275\u0275elementStart(238, "code", 19);
      \u0275\u0275text(239, "/salle-presse/mesures-relatives-enquetes-criminelles-accusations-condamnations");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(240, "li")(241, "strong");
      \u0275\u0275text(242, "campaign");
      \u0275\u0275elementEnd();
      \u0275\u0275text(243, " - url includes ");
      \u0275\u0275elementStart(244, "code", 19);
      \u0275\u0275text(245, "/campaigns/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(246, " or ");
      \u0275\u0275elementStart(247, "code", 19);
      \u0275\u0275text(248, "/campagnes/");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(249, "p")(250, "strong");
      \u0275\u0275text(251, "Forms and publications templates:");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(252, "ul")(253, "li")(254, "strong");
      \u0275\u0275text(255, "readme (form)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(256, " - url includes ");
      \u0275\u0275elementStart(257, "code", 19);
      \u0275\u0275text(258, "/forms-publications/forms/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(259, " or ");
      \u0275\u0275elementStart(260, "code", 19);
      \u0275\u0275text(261, "/formulaires-publications/formulaires/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(262, "li")(263, "strong");
      \u0275\u0275text(264, "readme (guide)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(265, " - url includes ");
      \u0275\u0275elementStart(266, "code", 19);
      \u0275\u0275text(267, "/forms-publications/publications/[guide number].html");
      \u0275\u0275elementEnd();
      \u0275\u0275text(268, " or ");
      \u0275\u0275elementStart(269, "code", 19);
      \u0275\u0275text(270, "/formulaires-publications/publications/[guide number].html");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(271, "li")(272, "strong");
      \u0275\u0275text(273, "readme (T1)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(274, " - url includes ");
      \u0275\u0275elementStart(275, "code", 19);
      \u0275\u0275text(276, "/general-income-tax-benefit-package/[province]?/5###-[1 to 5 letters].html");
      \u0275\u0275elementEnd();
      \u0275\u0275text(277, " or ");
      \u0275\u0275elementStart(278, "code", 19);
      \u0275\u0275text(279, "/trousse-generale-impot-prestations/[province]?/5###-[1 to 5 letters].html");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(280, "li")(281, "strong");
      \u0275\u0275text(282, "readme (TD1)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(283, " - url includes ");
      \u0275\u0275elementStart(284, "code", 19);
      \u0275\u0275text(285, "/td1-forms-pay-received-on-january-1-[year]?-later/[filename].html");
      \u0275\u0275elementEnd();
      \u0275\u0275text(286, " or ");
      \u0275\u0275elementStart(287, "code", 19);
      \u0275\u0275text(288, "/formulaires-td1-paies-recues-1er-janvier-[year]?-apres/[filename].html");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(289, "li")(290, "strong");
      \u0275\u0275text(291, "readme (payroll)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(292, " - url includes: ");
      \u0275\u0275elementStart(293, "ul")(294, "li")(295, "code", 19);
      \u0275\u0275text(296, "/t4127-payroll-deductions-formulas/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(297, " or ");
      \u0275\u0275elementStart(298, "code", 19);
      \u0275\u0275text(299, "/t4127-formules-calcul-retenues-paie/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(300, "li")(301, "code", 19);
      \u0275\u0275text(302, "/payroll-deductions-t4127-payroll-deductions-formulas/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(303, " or ");
      \u0275\u0275elementStart(304, "code", 19);
      \u0275\u0275text(305, "/t4127-formules-calcul-retenues-paie-annees-precedentes/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(306, "li")(307, "code", 19);
      \u0275\u0275text(308, "/t4032-payroll-deductions-tables/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(309, " or ");
      \u0275\u0275elementStart(310, "code", 19);
      \u0275\u0275text(311, "/t4032-tables-retenues-paie/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(312, "li")(313, "code", 19);
      \u0275\u0275text(314, "/t4032-payroll-deductions-tables-previous-years/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(315, " or ");
      \u0275\u0275elementStart(316, "code", 19);
      \u0275\u0275text(317, "/t4032-tables-retenues-paie-documents-annees-anterieures/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(318, "li")(319, "code", 19);
      \u0275\u0275text(320, "/t4008-payroll-deductions-supplementary-tables/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(321, " or ");
      \u0275\u0275elementStart(322, "code", 19);
      \u0275\u0275text(323, "/t4008-tables-supplementaires-retenues-paie/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(324, "li")(325, "code", 19);
      \u0275\u0275text(326, "/t4008-payroll-deductions-supplementary-tables-previous-years/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(327, " or ");
      \u0275\u0275elementStart(328, "code", 19);
      \u0275\u0275text(329, "/t4008-tables-supplementaires-retenues-paie-annees-anterieures/");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(330, "li");
      \u0275\u0275text(331, "followed by ");
      \u0275\u0275elementStart(332, "code", 19);
      \u0275\u0275text(333, "[filename].html");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(334, "li")(335, "strong");
      \u0275\u0275text(336, "guide");
      \u0275\u0275elementEnd();
      \u0275\u0275text(337, " - url includes ");
      \u0275\u0275elementStart(338, "code", 19);
      \u0275\u0275text(339, "/forms-publications/publications/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(340, " or ");
      \u0275\u0275elementStart(341, "code", 19);
      \u0275\u0275text(342, "/formulaires-publications/publications/");
      \u0275\u0275elementEnd();
      \u0275\u0275text(343, " if readme (guide) doesn't apply ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(344, "li")(345, "strong");
      \u0275\u0275text(346, "guide (T1)");
      \u0275\u0275elementEnd();
      \u0275\u0275text(347, " - url includes: ");
      \u0275\u0275elementStart(348, "ul")(349, "li")(350, "code", 19);
      \u0275\u0275text(351, "/general-income-tax-benefit-package/5000-g.html");
      \u0275\u0275elementEnd();
      \u0275\u0275text(352, " or ");
      \u0275\u0275elementStart(353, "code", 19);
      \u0275\u0275text(354, "/trousse-generale-impot-prestations/5000-g.html");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(355, "li")(356, "code", 19);
      \u0275\u0275text(357, "/general-income-tax-benefit-package/[province]?/5###-[1 to 5 letters]/[guide].html");
      \u0275\u0275elementEnd();
      \u0275\u0275text(358, " or ");
      \u0275\u0275elementStart(359, "code", 19);
      \u0275\u0275text(360, "/trousse-generale-impot-prestations/[province]?/5###-[1 to 5 letters]/[guide].html");
      \u0275\u0275elementEnd()()()()();
      \u0275\u0275elementStart(361, "p");
      \u0275\u0275text(362, "If AIDA tags a page incorrectly or if you think we're missing a template type, please let us know.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(363, "h3", 20);
      \u0275\u0275text(364, "How AIDA generates new URLs");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(365, "p");
      \u0275\u0275text(366, "For new pages, AIDA will use the H1 to generate a URL by doing the following:");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(367, "ul")(368, "li");
      \u0275\u0275text(369, "remove accents");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(370, "li");
      \u0275\u0275text(371, "remove punctuation (except periods or hyphens)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(372, "li");
      \u0275\u0275text(373, "convert everything to lowercase");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(374, "li");
      \u0275\u0275text(375, "remove any small words from the English and French lists below");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(376, "li");
      \u0275\u0275text(377, "convert spaces to hyphens");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(378, "p");
      \u0275\u0275text(379, "AIDA will continue to keep your new page url in sync with your H1 up until you make a deliberate change to the url or until it detects the page is no longer a 404.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(380, "p");
      \u0275\u0275text(381, "If any small words are missing from these lists, please let us know.");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(382, "div", 21)(383, "div", 22)(384, "h4", 23);
      \u0275\u0275text(385, "English");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(386, "ul", 24);
      \u0275\u0275repeaterCreate(387, HelpComponent_For_388_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(389, "div", 22)(390, "h4", 23);
      \u0275\u0275text(391, "French");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(392, "ul", 24);
      \u0275\u0275repeaterCreate(393, HelpComponent_For_394_Template, 2, 1, "li", null, \u0275\u0275repeaterTrackByIndex);
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(395, "section", 10)(396, "h2", 25);
      \u0275\u0275text(397, "Release notes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(398, "h3", 26);
      \u0275\u0275text(399, "Release 0.7.6 (Oct 15, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(400, "h4");
      \u0275\u0275text(401, "Update IA");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(402, "ul")(403, "li");
      \u0275\u0275text(404, "Reorganize all routes into new hierarchy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(405, "li");
      \u0275\u0275text(406, "Update side nav to clarify which tools work on the active project");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(407, "li");
      \u0275\u0275text(408, "Add new home page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(409, "h4");
      \u0275\u0275text(410, "Other updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(411, "ul")(412, "li");
      \u0275\u0275text(413, "On IA diagram, add optional popup to confirm which child pages to add (can be adjusted in user settings)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(414, "li");
      \u0275\u0275text(415, 'Move the "page move" view from the content inventory to the IA diagram');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(416, "li");
      \u0275\u0275text(417, "When exporting pages to a zip file, store a local content hash so we can skip that file on next export (the hash can be used to check for changes in future if needed)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(418, "h3", 27);
      \u0275\u0275text(419, "Release 0.7.5 (Oct 8, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(420, "h4");
      \u0275\u0275text(421, "Minor updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(422, "ul")(423, "li");
      \u0275\u0275text(424, "Add export breakdown of new, existing and skipped pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(425, "li");
      \u0275\u0275text(426, "Fix taxes theme exports (unique template)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(427, "li");
      \u0275\u0275text(428, "Add more small word exclusions to auto-generated new page urls");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(429, "h3", 28);
      \u0275\u0275text(430, "Release 0.7.4 (Oct 1, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(431, "h4");
      \u0275\u0275text(432, "Minor updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(433, "ul")(434, "li");
      \u0275\u0275text(435, "Add checkboxes to export page (same behaviour as the toggle buttons)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(436, "h3", 29);
      \u0275\u0275text(437, "Release 0.7.3 (Sept 29, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(438, "h4");
      \u0275\u0275text(439, "Optional project lock");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(440, "ul")(441, "li");
      \u0275\u0275text(442, "Added option for a user to soft-lock a cloud project (this will show others who locked the project, any collaborator can unlock if needed)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(443, "h4");
      \u0275\u0275text(444, "Content inventory updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(445, "ul")(446, "li");
      \u0275\u0275text(447, "Make notes visible by default in content inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(448, "li");
      \u0275\u0275text(449, 'Adjust column visibily when filtering on "flagged pages" to show only booleans');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(450, "li");
      \u0275\u0275text(451, "Add 'View pages' box to bottom of content inventory");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(452, "h4");
      \u0275\u0275text(453, "Other changes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(454, "ul")(455, "li");
      \u0275\u0275text(456, "For new pages only, sync H1 to url and keep url in sync with parent url during edits or moves");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(457, "li");
      \u0275\u0275text(458, "Add autosave indicator to IA diagram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(459, "li");
      \u0275\u0275text(460, 'Add page titles to "Export pages" view');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(461, "li");
      \u0275\u0275text(462, "Move cache & version tools from AI review tools to select a page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(463, "li");
      \u0275\u0275text(464, "Add handling for changes found in nested ex/hides on web page diff");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(465, "h3", 30);
      \u0275\u0275text(466, "Release 0.7.2 (Sept 28, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(467, "h4");
      \u0275\u0275text(468, "Minor updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(469, "ul")(470, "li");
      \u0275\u0275text(471, "Limited active project storage to the browser session");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(472, "li");
      \u0275\u0275text(473, 'Returning users without an active project are redirected from landing page to "Saved projects" view');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(474, "li");
      \u0275\u0275text(475, 'Expand all nodes when opening the IA diagram (they can be collapsed from the "Page move" view)');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(476, "li");
      \u0275\u0275text(477, "Added route guard for IA diagram to capture previous page so we don't have to remember to add the function wherever we add a link to the diagram");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(478, "h3", 31);
      \u0275\u0275text(479, "Release 0.7.1 (Sept 25, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(480, "h4");
      \u0275\u0275text(481, "Minor updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(482, "ul")(483, "li");
      \u0275\u0275text(484, "Make openrouter/free the last option for AI requests since its the most unstable");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(485, "li");
      \u0275\u0275text(486, "Fix bug that blocks page moves and other actions while a view option is set (the view options create a clone and actions need to run on original)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(487, "li");
      \u0275\u0275text(488, "Adjust max width for source code view");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(489, "li");
      \u0275\u0275text(490, "Keep new page names in sync until the page goes live");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(491, "h3", 32);
      \u0275\u0275text(492, "Release 0.7.0 (Sept 24, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(493, "h4");
      \u0275\u0275text(494, 'New "Edit pages" and "Compare versions" views');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(495, "ul")(496, "li");
      \u0275\u0275text(497, "View tracked changes for the rendered web page or source code");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(498, "li");
      \u0275\u0275text(499, " Switch between any version of any page in the project: ");
      \u0275\u0275elementStart(500, "ul")(501, "li");
      \u0275\u0275text(502, "Canada.ca");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(503, "li");
      \u0275\u0275text(504, "AEM preview");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(505, "li");
      \u0275\u0275text(506, "GitHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(507, "li");
      \u0275\u0275text(508, "Local (UT)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(509, "li");
      \u0275\u0275text(510, "AI suggestions");
      \u0275\u0275elementEnd()()();
      \u0275\u0275elementStart(511, "li");
      \u0275\u0275text(512, "Changes can be accepted or rejected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(513, "li");
      \u0275\u0275text(514, "Before & after versions can be edited");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(515, "li");
      \u0275\u0275text(516, "Editing in source view lets the user right click to add snippets of code (and/or pattern, rescue link, list, alert, ex/hide)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(517, "li");
      \u0275\u0275text(518, ' "Edit pages" lets users compare their source page with AI assisted edits ');
      \u0275\u0275elementStart(519, "ul")(520, "li");
      \u0275\u0275text(521, "First page-level AI report to change tense between past, present, and future");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(522, "li");
      \u0275\u0275text(523, "More AI reports and the ability to sync changes back to GitHub or local (UT) will be available in a future release");
      \u0275\u0275elementEnd()()()();
      \u0275\u0275elementStart(524, "h4");
      \u0275\u0275text(525, "Other changes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(526, "ul")(527, "li");
      \u0275\u0275text(528, "Edit page button on content inventory is now a dropdown menu with both edit and open in new tab options");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(529, "li");
      \u0275\u0275text(530, "Add tooltips to side nav in mobile view");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(531, "li");
      \u0275\u0275text(532, "Adjust default inventory view");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(533, "h3", 33);
      \u0275\u0275text(534, "Release 0.6.12 (Sept 22, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(535, "h4");
      \u0275\u0275text(536, 'Updates to "Find and add pages"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(537, "ul")(538, "li");
      \u0275\u0275text(539, 'Combine "Add pages" and "Find pages" into a single "Find and add pages" tabbed interface');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(540, "li");
      \u0275\u0275text(541, "When adding task or child pages, filter in-scope urls out of the found pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(542, "li");
      \u0275\u0275text(543, "Add toast popup when add is complete");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(544, "li");
      \u0275\u0275text(545, "Add GET fallback to last HEAD request to prevent pages being incorrectly flagged as 404 during add");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(546, "li");
      \u0275\u0275text(547, "Add rescue links to this view from all other tasks");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(548, "h4");
      \u0275\u0275text(549, "Minor fixes & improvments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(550, "ul")(551, "li");
      \u0275\u0275text(552, "Set default org and toolbox values");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(553, "li");
      \u0275\u0275text(554, "Route new users to landing page instead of new project page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(555, "li");
      \u0275\u0275text(556, "Add image to 404 page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(557, "li");
      \u0275\u0275text(558, "Allow custom content to be passed into sign-in button so anything can pop up the sign-in dialog");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(559, "li");
      \u0275\u0275text(560, "Add sign-in popup to cloud storage toggle and switch project read-only tag");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(561, "li");
      \u0275\u0275text(562, "Add confirmation dialog when user deletes a cloud project");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(563, "li");
      \u0275\u0275text(564, "Add toast message when cloud project autoconverts to local (collab not signed in, or not a collab)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(565, "li");
      \u0275\u0275text(566, "Add method to name unamed projects from landing page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(567, "li");
      \u0275\u0275text(568, "Comment out phase advancer on landing page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(569, "li");
      \u0275\u0275text(570, "Update character count tooltip to include colour explanation (on inventory page)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(571, "li");
      \u0275\u0275text(572, "Add filter for h1, double h1 or page path on inventory page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(573, "h3", 34);
      \u0275\u0275text(574, "Release 0.6.11 (Sept 17, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(575, "h4");
      \u0275\u0275text(576, "Minor fixes & improvments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(577, "ul")(578, "li");
      \u0275\u0275text(579, "Add hover effect to phase cards");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(580, "li");
      \u0275\u0275text(581, "Remove repository setup from new project view");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(582, "li");
      \u0275\u0275text(583, 'Add sign-in button under "Save to browser" / "Save to cloud" toggle if user is not signed in');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(584, "li");
      \u0275\u0275text(585, 'Surface "How to get a token" tooltip as a label');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(586, "li");
      \u0275\u0275text(587, "Add .html to links if missing when fetching breadcrumb or page links");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(588, "li");
      \u0275\u0275text(589, "Add tooltip to add pages icon on IA diagram");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(590, "h3", 35);
      \u0275\u0275text(591, "Release 0.6.10 (Sept 16, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(592, "h4");
      \u0275\u0275text(593, "Minor fixes & improvments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(594, "ul")(595, "li");
      \u0275\u0275text(596, "Improve latency on manage inventory page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(597, "li");
      \u0275\u0275text(598, "Add new tooltip directive (fixes squished tooltips on inventory page)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(599, "li");
      \u0275\u0275text(600, "Add double H1 with project name to views that read project data");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(601, "h4");
      \u0275\u0275text(602, "Updates to saved projects view");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(603, "ul")(604, "li");
      \u0275\u0275text(605, "Pre-filter saved project list to the users projects");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(606, "li");
      \u0275\u0275text(607, "Add buttons to toggle pre-filter list on saved projects page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(608, "li");
      \u0275\u0275text(609, "Add border and background tint for active project and border for a duplicate cloud/browser version");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(610, "li");
      \u0275\u0275text(611, "Add dialog for uploading projects to the cloud if user has actions to complete first (previously it just hid the upload button)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(612, "h3", 36);
      \u0275\u0275text(613, "Release 0.6.9 (Sept 14, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(614, "h4");
      \u0275\u0275text(615, "Minor fixes & improvments");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(616, "ul")(617, "li");
      \u0275\u0275text(618, "Fix reactivity of collaborators dropdown so it populates if you log in while the tool is visible");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(619, "li");
      \u0275\u0275text(620, "Add global indicator for current project, storage type, and conditional warnings if user is not signed in");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(621, "li");
      \u0275\u0275text(622, "Reorganize project url paths (routes)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(623, "li");
      \u0275\u0275text(624, 'Add breadcrumbs and topic pages for "Project" and "Tasks"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(625, "li");
      \u0275\u0275text(626, "Extract doormats to reusable template for topic pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(627, "li");
      \u0275\u0275text(628, 'Add "Hide # level of child pages" option to IA diagram so everything past the 4th level can be hidden (for example)');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(629, "h3", 37);
      \u0275\u0275text(630, "Release 0.6.8 (Sept 11, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(631, "h4");
      \u0275\u0275text(632, "Minor fixes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(633, "ul")(634, "li");
      \u0275\u0275text(635, "Add link to GitHub at end of PAT instructions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(636, "li");
      \u0275\u0275text(637, "Add error message if PAT is expired or invalid");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(638, "li");
      \u0275\u0275text(639, "Add missing data to inventory csv export (phone numbers, IA orphan status, and original parent urls)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(640, "li");
      \u0275\u0275text(641, "Fix encoding for tree csv export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(642, "li");
      \u0275\u0275text(643, "Remove root Canada.ca node from tree csv export");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(644, "li");
      \u0275\u0275text(645, "Add both languages to tree csv export (it previously only used whichever language the project was created in)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(646, "li");
      \u0275\u0275text(647, "Add description to new/edit project page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(648, "h3", 38);
      \u0275\u0275text(649, "Release 0.6.7 (Sept 10, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(650, "h4");
      \u0275\u0275text(651, "Cloud storage");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(652, "ul")(653, "li");
      \u0275\u0275text(654, "Update cloud storage to handle larger file sizes");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(655, "h4");
      \u0275\u0275text(656, "New data collected");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(657, "ul")(658, "li");
      \u0275\u0275text(659, "Track which pages link to the sign-in page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(660, "h3", 39);
      \u0275\u0275text(661, "Release 0.6.6 (Sept 8, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(662, "h4");
      \u0275\u0275text(663, "Minor improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(664, "ul")(665, "li");
      \u0275\u0275text(666, "Add bulk update buttons to content inventory for in-scope, ROT, archived, and noindex");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(667, "li");
      \u0275\u0275text(668, "Fix issue with undefined notes preventing edit node popup from opening");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(669, "h3", 40);
      \u0275\u0275text(670, "Release 0.6.5 (Sept 4, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(671, "h4");
      \u0275\u0275text(672, "Minor improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(673, "ul")(674, "li");
      \u0275\u0275text(675, "Added legend to IA diagram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(676, "li");
      \u0275\u0275text(677, 'Add "View notes" context menu option to IA diagram (if notes exist)');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(678, "li");
      \u0275\u0275text(679, "Added option to edit notes from the edit page popup");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(680, "li");
      \u0275\u0275text(681, "Lowered number of pages needed to trigger pagination on content inventory from 50 to 25");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(682, "li");
      \u0275\u0275text(683, "Added help cursor for content inventory table cells with context menus");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(684, "li");
      \u0275\u0275text(685, "Added bulk status toggles to Actions dropdown on content inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(686, "li");
      \u0275\u0275text(687, "Updated help text");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(688, "h3", 41);
      \u0275\u0275text(689, "Release 0.6.4 (August 28, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(690, "h4");
      \u0275\u0275text(691, "Bug fixes");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(692, "ul")(693, "li");
      \u0275\u0275text(694, "Adding a duplicate out-of-scope page will flip its status to in-scope instead of skipping it");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(695, "li");
      \u0275\u0275text(696, "Fix heading logic for subway page exports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(697, "li");
      \u0275\u0275text(698, "Fix z-index for invalid url dialog");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(699, "h4");
      \u0275\u0275text(700, "Navigation & instructions");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(701, "ul")(702, "li");
      \u0275\u0275text(703, "Add help page with information on getting started");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(704, "li");
      \u0275\u0275text(705, "Add phase-based navigation pages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(706, "h3", 42);
      \u0275\u0275text(707, "Release 0.6.3 (August 13, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(708, "h4");
      \u0275\u0275text(709, "Framework upgrade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(710, "ul")(711, "li");
      \u0275\u0275text(712, "Upgraded Angular framework from v19 to v21 to ensure we get any security patches");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(713, "li");
      \u0275\u0275text(714, "Updated primeNG component library and icon library to stay current with framework upgrade");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(715, "li");
      \u0275\u0275text(716, "Updated internal build tooling (TypeScript, ngx-translate-extract) to stay current with framework updrade");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(717, "h3", 43);
      \u0275\u0275text(718, "Release 0.6.2 (August 11, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(719, "h4");
      \u0275\u0275text(720, "Security & maintenance");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(721, "ul")(722, "li");
      \u0275\u0275text(723, " Migrated ngx-translate from v16 to v18 (required for the upcoming Angular 20 upgrade)");
      \u0275\u0275element(724, "br");
      \u0275\u0275elementStart(725, "strong");
      \u0275\u0275text(726, "note:");
      \u0275\u0275elementEnd();
      \u0275\u0275text(727, " ngx-translate-extract-marker can be removed in a future update as marker is now part of ngx-translate ");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(728, "li");
      \u0275\u0275text(729, "Updated Angular framework, AWS SDK, and other dependencies to resolve flagged vulnerabilities");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(730, "li");
      \u0275\u0275text(731, "Removed unused @angular/platform-browser-dynamic dependency");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(732, "li");
      \u0275\u0275text(733, "Updated ESlint rules to warn about more patterns in preparation for Angular 20 upgrade");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(734, "h4");
      \u0275\u0275text(735, "Other updates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(736, "ul")(737, "li");
      \u0275\u0275text(738, "Added loading spinner during initial app load");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(739, "li");
      \u0275\u0275text(740, `Added new invalid urls component for reviewing urls that don't pass validation during "Add pages"`);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(741, "h3", 44);
      \u0275\u0275text(742, "Release 0.6.1 (July 30, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(743, "h4");
      \u0275\u0275text(744, "Export improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(745, "ul")(746, "li");
      \u0275\u0275text(747, "Add index page to local exports");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(748, "li");
      \u0275\u0275text(749, "Apply prettier after local html is built");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(750, "li");
      \u0275\u0275text(751, "Add handling for new pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(752, "li");
      \u0275\u0275text(753, "Add option to choose which source to use for export (Canada.ca, GitHub, Local)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(754, "li");
      \u0275\u0275text(755, "Add warning if a local project already exists at chosen location");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(756, "li");
      \u0275\u0275text(757, "Add bookmarklet to toggle between UT and Canada.ca");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(758, "h4");
      \u0275\u0275text(759, "Other improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(760, "ul")(761, "li");
      \u0275\u0275text(762, "Add option to show navigational children to IA diagram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(763, "li");
      \u0275\u0275text(764, "Fix issue with links in IA diagram");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(765, "li");
      \u0275\u0275text(766, "Fix issue with dates on project load");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(767, "li");
      \u0275\u0275text(768, "When creating new page, pop up the node editor right away");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(769, "li");
      \u0275\u0275text(770, "Add primary border and background to toggle buttons so active state stands out more");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(771, "li");
      \u0275\u0275text(772, "Extract UI selectors to shared component with shared state");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(773, "li");
      \u0275\u0275text(774, 'Add UI selectors to URL drawer on "Edit project" page so users can review or copy whichever set they want');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(775, "li");
      \u0275\u0275text(776, "Update inventory & tree CSV exports for new data model");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(777, "h3", 45);
      \u0275\u0275text(778, "Release 0.6.0 (July 20, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(779, "h4");
      \u0275\u0275text(780, "Data structure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(781, "ul")(782, "li");
      \u0275\u0275text(783, 'Reorganized data into "baseline", "live", and "prototype" subsections for better tracking and quick comparisons');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(784, "li");
      \u0275\u0275text(785, ` Users can refresh the "live" data from Canada.ca or the "prototype" data from GitHub ("baseline" doesn't refresh, so changes can be tracked from start of project or from current live state) `);
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(786, "li");
      \u0275\u0275text(787, "Old saved files will be patched to the new structure automatically");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(788, "li");
      \u0275\u0275text(789, "The new structure is used to calculate what actions are needed (Create new page, unpublish from Canada.ca etc.)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(790, "h4");
      \u0275\u0275text(791, "IA diagram improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(792, "ul")(793, "li");
      \u0275\u0275text(794, "Added drag & drop function for page moves");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(795, "li");
      \u0275\u0275text(796, "Added menu option to reorder sibling pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(797, "li");
      \u0275\u0275text(798, "Added menu option and button to find child pages for a specific page");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(799, "li");
      \u0275\u0275text(800, "Added menu option to open a popup for editing page data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(801, "li");
      \u0275\u0275text(802, "Added toggle for English and French page labels");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(803, "li");
      \u0275\u0275text(804, 'The "changes" view will now show the live page title crossed out above the prototype title if they are different');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(805, "h4");
      \u0275\u0275text(806, "Other improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(807, "ul")(808, "li");
      \u0275\u0275text(809, "Content inventory is now separated by English and French instead of primary and opposite language");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(810, "li");
      \u0275\u0275text(811, "Content inventory now includes a menu to any version of a page, vanity urls, chatbot indicator, reading grade level, link count, and phone numbers");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(812, "li");
      \u0275\u0275text(813, "Added an option to export pages to a zip file instead of GitHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(814, "li");
      \u0275\u0275text(815, "Exported index pages now open the correct repo link, even if you fork, move, or rename the repo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(816, "li");
      \u0275\u0275text(817, 'Added a "New tab GitHub" bookmarklet to open the other version in a new tab (same as the "Toggle GitHub" bookmarklet but opens in a new tab instead of the same tab)');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(818, "li");
      \u0275\u0275text(819, 'Added a "Toggle night mode" bookmarklet so users can darken Canada.ca pages if preferred for reading');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(820, "h3", 46);
      \u0275\u0275text(821, "Release 0.5.8 (June 15, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(822, "h4");
      \u0275\u0275text(823, "Content inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(824, "ul")(825, "li");
      \u0275\u0275text(826, "Add notes group with 'issues' and 'solutions' for user to document whatever they wish");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(827, "h3", 47);
      \u0275\u0275text(828, "Release 0.5.7 (June 12, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(829, "h4");
      \u0275\u0275text(830, "New IA diagram features");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(831, "ul")(832, "li");
      \u0275\u0275text(833, "Add options to hide or unhide specific pages or all child pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(834, "li");
      \u0275\u0275text(835, "Add option to view any page as the root page so users can focus on specific sections of the IA");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(836, "h4");
      \u0275\u0275text(837, "Other improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(838, "ul")(839, "li");
      \u0275\u0275text(840, 'Separate "Find pages" options with tabs');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(841, "li");
      \u0275\u0275text(842, "Add monitoring dashboard");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(843, "li");
      \u0275\u0275text(844, "Update project bookmarklet to load index page instead of repo");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(845, "li");
      \u0275\u0275text(846, "Add more padding between items in page move table");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(847, "h3", 48);
      \u0275\u0275text(848, "Release 0.5.6 (June 4, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(849, "h4");
      \u0275\u0275text(850, "Content inventory improvement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(851, "ul")(852, "li");
      \u0275\u0275text(853, "Make more cells editable");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(854, "h3", 49);
      \u0275\u0275text(855, "Release 0.5.5 (April 15, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(856, "h4");
      \u0275\u0275text(857, "Feature improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(858, "ul")(859, "li");
      \u0275\u0275text(860, "Strip /content/canadasite from links so we don't mislabel pages as IA orphans");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(861, "li");
      \u0275\u0275text(862, 'Update find child pages function to use checkboxes so user can select which to copy to the "Add pages" input');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(863, "li");
      \u0275\u0275text(864, "Prevent fetching cached json data (last modified dates and content owners will be more accurate now)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(865, "li");
      \u0275\u0275text(866, "Maintain cnt-wdth-lmtd when exporting pages to GitHub");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(867, "li");
      \u0275\u0275text(868, `Fix bug on "Page move" view so navigating away while editing doesn't lock a page from future edits`);
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(869, "h3", 50);
      \u0275\u0275text(870, "Release 0.5.4 (April 10, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(871, "h4");
      \u0275\u0275text(872, "New find child pages feature");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(873, "ul")(874, "li");
      \u0275\u0275text(875, 'Add find child pages functionality to the "Find pages" component');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(876, "li");
      \u0275\u0275text(877, "This function crawls your in-scope pages for potential child pages. It can also find IA orphans if they are linked from other in-scope pages");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(878, "h4");
      \u0275\u0275text(879, "Content inventory improvement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(880, "ul")(881, "li");
      \u0275\u0275text(882, "Add sort function to table");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(883, "li");
      \u0275\u0275text(884, "Add pagination for projects with more than 50 pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(885, "li");
      \u0275\u0275text(886, "Improve status filters");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(887, "h4");
      \u0275\u0275text(888, "IA diagram improvement");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(889, "ul")(890, "li");
      \u0275\u0275text(891, "Add toggle to view baseline or final version");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(892, "h3", 51);
      \u0275\u0275text(893, "Release 0.5.3 (March 31, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(894, "h4");
      \u0275\u0275text(895, "GitHub export improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(896, "ul")(897, "li");
      \u0275\u0275text(898, "Add option to export English, French or both languages for prototyping");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(899, "li");
      \u0275\u0275text(900, 'All pages get robots: "noindex, nofollow" from _config.yml, individual pages may have it listed as well if the live page has it');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(901, "li");
      \u0275\u0275text(902, "Copy everything from core-prototype/_includes instead of specific files");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(903, "li");
      \u0275\u0275text(904, "Add 2s delay before enabling GitHub Pages (preview)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(905, "h4");
      \u0275\u0275text(906, "UPD integration");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(907, "ul")(908, "li");
      \u0275\u0275text(909, "Content inventory table now links directly to the UPD data for each page (opens UPD in new tab)");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(910, "h4");
      \u0275\u0275text(911, "Update bookmarklets");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(912, "ul")(913, "li");
      \u0275\u0275text(914, 'Update "Toggle [repo name] and "Toggle github" to work with new cra-test-arc.canada.ca subdomain');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(915, "h4");
      \u0275\u0275text(916, "Update template detection");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(917, "ul")(918, "li");
      \u0275\u0275text(919, 'Add "mwsdoormat-links-container" to topic page template detection logic');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(920, "li");
      \u0275\u0275text(921, "Add additional double H1 detection for <p> elements");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(922, "h3", 52);
      \u0275\u0275text(923, "Release 0.5.2 (March 27, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(924, "h4");
      \u0275\u0275text(925, "Add pages improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(926, "ul")(927, "li");
      \u0275\u0275text(928, "Added input validation to enforce single-language page entry");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(929, "li");
      \u0275\u0275text(930, "Automatic URL formatting and normalization");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(931, "li");
      \u0275\u0275text(932, "Removed list of urls undergoing validation (we still show urls with problems and valid or skipped urls)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(933, "li");
      \u0275\u0275text(934, 'Added "View pages" section to the Edit/New project view');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(935, "h4");
      \u0275\u0275text(936, "Github export improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(937, "ul")(938, "li");
      \u0275\u0275text(939, "Improved GitHub index.html to support bilingual sitemap generation with paired English/French URLs");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(940, "h3", 53);
      \u0275\u0275text(941, "Release 0.5.1 (March 26, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(942, "h4");
      \u0275\u0275text(943, "New bookmarklet");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(944, "ul")(945, "li");
      \u0275\u0275text(946, 'Added project-specific "Toggle [repo name]" bookmarklet to toggle between GitHub preview, edit mode, and Canada.ca.');
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(947, "h3", 54);
      \u0275\u0275text(948, "Release 0.5.0 (March 25, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(949, "h4");
      \u0275\u0275text(950, "AI-powered metadata generation");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(951, "ul")(952, "li");
      \u0275\u0275text(953, "Generate metadata automatically for selected pages using AI assistance");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(954, "h4");
      \u0275\u0275text(955, "Content inventory improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(956, "ul")(957, "li");
      \u0275\u0275text(958, "Expanded data collection: word count, noindex status, last modified/published dates");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(959, "li");
      \u0275\u0275text(960, "Expanded metadata collection to both languages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(961, "li");
      \u0275\u0275text(962, "Secondary toolbar for bulk actions on selected pages");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(963, "li");
      \u0275\u0275text(964, "Improved page status filtering");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(965, "li");
      \u0275\u0275text(966, "Added option to refresh the collected page data");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(967, "li");
      \u0275\u0275text(968, "Reorganized IA orphan detection into dedicated problem category");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(969, "h4");
      \u0275\u0275text(970, "Switch project improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(971, "ul")(972, "li");
      \u0275\u0275text(973, "Fixed cloud project upload with GitHub Personal Access Tokens");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(974, "li");
      \u0275\u0275text(975, "Filters on switch project view are now linked to the project files");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(976, "h4");
      \u0275\u0275text(977, "GitHub export improvements");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(978, "ul")(979, "li");
      \u0275\u0275text(980, "Added an index.html page to generate a list of files in your repo and robots.txt");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(981, "li");
      \u0275\u0275text(982, "Breadcrumbs now reflect any changes you've made in AIDA instead of the live page");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(983, "h4");
      \u0275\u0275text(984, "New toolbox view");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(985, "ul")(986, "li");
      \u0275\u0275text(987, 'Added bookmarklets, "Open in AIDA", "Toggle GitHub", and "Check links"');
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(988, "li");
      \u0275\u0275text(989, "Note: this view will eventually have some standalone tools that aren't linked to project data");
      \u0275\u0275elementEnd()();
      \u0275\u0275elementStart(990, "h3", 55);
      \u0275\u0275text(991, "Release 0.4.0 (February 25, 2026)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(992, "h4");
      \u0275\u0275text(993, "Initial release - core project management");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(994, "ul")(995, "li");
      \u0275\u0275text(996, "Project dashboard view with high level stats and design phase tracking (discover, assess, design, approve)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(997, "li");
      \u0275\u0275text(998, "Edit/New project view where you can name your project, associate it with a GitHub repo, add collaborators, add pages, or find pages from the task inventory");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(999, "li");
      \u0275\u0275text(1e3, "Switch project view where you can switch between your projects, view any cloud project, or mark projects for deletion (they are stored for 30 days before final deletion)");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1001, "li");
      \u0275\u0275text(1002, "Manage inventory view where you can see all the data collected for your pages, add brand new pages, or change the IA structure");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1003, "li");
      \u0275\u0275text(1004, "IA diagram view where you can see the page hierarchy");
      \u0275\u0275elementEnd();
      \u0275\u0275elementStart(1005, "li");
      \u0275\u0275text(1006, " Export to GitHub view where you can export your pages in Jekyll format. The file comparison table can detect if you've made changes in GitHub after the export and will automatically skip those files on future exports (can be overriden by the user). ");
      \u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      \u0275\u0275advance();
      \u0275\u0275textInterpolate(\u0275\u0275pipeBind1(2, 7, "help._title"));
      \u0275\u0275advance(8);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(9, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(10, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(11, _c0));
      \u0275\u0275advance(4);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(12, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(13, _c0));
      \u0275\u0275advance(3);
      \u0275\u0275property("routerLink", \u0275\u0275pureFunction0(14, _c0));
      \u0275\u0275advance(362);
      \u0275\u0275repeater(ctx.stopWordsEN);
      \u0275\u0275advance(6);
      \u0275\u0275repeater(ctx.stopWordsFR);
    }
  }, dependencies: [RouterLink, TranslatePipe], encapsulation: 2, changeDetection: 0 });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(HelpComponent, [{
    type: Component,
    args: [{ selector: "aida-help", imports: [RouterLink, TranslatePipe], changeDetection: ChangeDetectionStrategy.OnPush, template: `<h1 id="wb-cont">{{ 'help._title' | translate }}</h1>
<p>New to AIDA? Start with the basics or jump to a specific topic below.</p>

<h2 class="my-0">On this page</h2>
<ul class="mt-0 mb-5">
  <li><a [routerLink]="[]" fragment="about">About AIDA</a></li>
  <li><a [routerLink]="[]" fragment="start">Starting a project</a></li>
  <!--li><a [routerLink]="[]" fragment="inventory">Manage your content inventory</a>
        <ul>
            <li><a [routerLink]="[]" fragment="add-existing">Add Canada.ca pages</a></li>
            <li><a [routerLink]="[]" fragment="add-new">Add new pages</a></li>
            <li><a [routerLink]="[]" fragment="view-ia">View your IA diagram</a></li>
            <li><a [routerLink]="[]" fragment="change-ia">Change your IA structure</a></li>
            <li><a [routerLink]="[]" fragment="export-csv">Export to CSV</a></li>
        </ul>
    </li>
    <li><a [routerLink]="[]" fragment="signin">Sign in</a>
        <ul>
            <li><a [routerLink]="[]" fragment="cloud">Store your project in the cloud</a></li>
            <li><a [routerLink]="[]" fragment="collab">Add collaborators to your project</a></li>
            <li><a [routerLink]="[]" fragment="github">Export pages to GitHub for prototyping</a></li>
            <li><a [routerLink]="[]" fragment="jekyll">How to adjust the Jekyll templates</a></li>
            <li><a [routerLink]="[]" fragment="generate-metadata">Generate metadata with AI</a></li>
        </ul>
    </li-->
  <li>
    <a [routerLink]="[]" fragment="documentation">Documentation</a>
    <ul>
      <li><a [routerLink]="[]" fragment="data">How AIDA collects its data</a></li>
      <li><a [routerLink]="[]" fragment="urls">How AIDA generates new URLs</a></li>
    </ul>
  </li>
  <li><a [routerLink]="[]" fragment="release">Release notes</a></li>
</ul>

<div class="flex flex-column gap-3 my-3">
  <section class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <h2 id="about">About AIDA</h2>
    <p>The DDPD GenAI Project is exploring how artificial intelligence and automation can improve web content design for Canada.ca.</p>
    <p>The AI Design Assistant (AIDA) helps content designers manage projects, analyze pages, identify issues, and create prototypes.</p>
    <div class="flex flex-row gap-8">
      <div>
        <h3>What it does now</h3>
        <ul>
          <li>Generate and manage your content inventory</li>
          <li>Update your metadata with AI assistance</li>
          <li>Visualize and make changes to your information architecture</li>
          <li>Export your prototypes to GitHub for editing</li>
          <li>Compare your prototype with the live page or with AI-assisted edits</li>
        </ul>
      </div>
      <div>
        <h3>What's coming next</h3>
        <ul>
          <li>AI-assisted content review</li>
          <li>Accessibility checking</li>
          <li>Automated quality assurance tools</li>
          <li>
            Have an idea?
            <a
              href="mailto:AIPIA-PIAAI@cra-arc.gc.ca?subject=Interested%20in%20contributing%20to%20AIDA&body=Hi%2C%0A%0AI'd%20like%20to%20get%20involved%20with%20AIDA%20as%20a%20%5Bdeveloper%20%2F%20researcher%20%2F%20tester%5D.%20Here's%20a%20bit%20about%20my%20background%20and%20what%20I'd%20like%20to%20help%20with%3A%0A%0A%5BYour%20message%20here%5D%0A%0A%E2%80%94%20%5BYour%20name%5D"
              >Contact CDIA</a
            >.
          </li>
        </ul>
      </div>
    </div>
  </section>

  <section class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <h2 id="start">Starting a project</h2>
    <p>
      When you load AIDA for the first time, it's going to bring you to the "New project" page. There is <strong>no</strong> requirement to complete any steps on this page in any particular order.
      These options will resurface throughout the AIDA if you need to complete something before using one of the tools.
    </p>
    <p>
      You will start out working in the "autosave" file. If you want to have multiple projects that you can switch between, go ahead and give your project a name in the "Set up project" box. When you
      name your project, AIDA will automatically fill out the GitHub repository name for you but feel free to override that with a name of your choosing.
    </p>
    <p>
      The next thing you'll want to do is add some pages. You can copy and paste one or more Canada.ca URLs into the "Add pages" tool, or use the "Find pages" tool to copy all the URLs for whichever
      task you are interested in. You'll need to have at least one page in your inventory to make use of the other tools. After you've added at least one page, you can also use the "Find pages" tool
      to find any child pages to fill out your inventory.
    </p>
    <p>Some of the other tools in AIDA include:</p>
    <ul>
      <li>a content inventory that pulls in all kinds of information about your pages from various sources</li>
      <li>an IA diagram view where you can make changes to the IA</li>
      <li>an export tool where you can download a copy of your pages or export them to GitHub for prototyping</li>
      <li>a compare versions tool where you can compare any version of your pages to any other version (for example, your protoype with the live page)</li>
      <!--li>a review problems tool where you can review all of the problems that AIDA has identified on your pages</li-->
    </ul>
    <p>Go ahead and look around. We'll add more detailed instructions for each of these tools in a future release.</p>
  </section>

  <!--section class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
        <h2 id="inventory">Manage your content inventory</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum.</p>

        <h3 id="add-existing">Add Canada.ca pages</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Excepteur sint occaecat cupidatat non proident.</p>

        <h3 id="add-new">Add new pages</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error.</p>

        <h3 id="view-ia">View your IA diagram</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nemo enim ipsam voluptatem quia voluptas sit aspernatur.</p>

        <h3 id="change-ia">Change your IA structure</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Neque porro quisquam est, qui dolorem ipsum quia dolor sit.</p>

        <h3 id="export-csv">Export to CSV</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut enim ad minima veniam, quis nostrum exercitationem ullam.</p>
    </section>

    <section class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
        <h2 id="signin">Sign in</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis autem vel eum iure reprehenderit qui in ea voluptate velit.</p>

        <h3 id="cloud">Store your project in the cloud</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Et harum quidem rerum facilis est et expedita distinctio.</p>

        <h3 id="collab">Add collaborators to your project</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>

        <h3 id="github">Export pages to GitHub for prototyping</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At vero eos et accusamus et iusto odio dignissimos ducimus.</p>

        <h3 id="jekyll">How to adjust the Jekyll templates</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut perspiciatis unde omnis iste natus error sit voluptatem.</p>

        <h3 id="generate-metadata">Generate metadata with AI</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Temporibus autem quibusdam et aut officiis debitis aut rerum.</p>
    </section-->

  <section class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <h2 id="documentation">Documentation</h2>
    <p>Some of the information below is intended for AIDA contributors and may be a bit technical. You don't need to understand this part to use AIDA.</p>

    <h3 id="data">How AIDA collects its data</h3>
    <p>When you add a Canada.ca page to your project, AIDA fetches information from:</p>
    <ul>
      <li>the live English and French pages</li>
      <li>the live content.json file</li>
      <li>the task airtable</li>
      <li>a static export of page visits from the UPD</li>
      <li>a static export of vanity URLs from gcPedia</li>
    </ul>

    <h4>Page templates</h4>
    <p>
      AIDA detects page templates based on specific criteria from the page itself and puts that information in the "Template" column of your content inventory table. This helps give you an overview of
      what kind of pages you're working with. Here's what AIDA looks for:
    </p>
    <p class="mb-1"><strong>Navigation templates:</strong></p>
    <ul class="mt-1">
      <li>
        <strong>topic</strong> - has classes <code class="custom">most-requested-bullets</code> or <code class="custom">gc-srvinfo</code> or <code class="custom">mwsdoormat-links-container</code>
      </li>
      <li><strong>old topic</strong> - has class <code class="custom">list-group-item</code> where more than 80% are links</li>
      <li><strong>subway</strong> - has class <code class="custom">gc-subway</code></li>
      <li><strong>old subway</strong> - has class <code class="custom">gc-navseq</code></li>
      <li><strong>navigation</strong> - where none of the above apply and more than 70% of the text is links</li>
    </ul>

    <p><strong>Content templates</strong></p>
    <ul>
      <li><strong>multimedia gallery</strong> - url includes <code class="custom">/news/cra-multimedia-library/</code> or <code class="custom">/nouvelles/bibliotheque-multimedia-arc/</code></li>
      <li><strong>video transcript</strong> - has <code class="custom">&lt;video&gt;</code> element, H2 contains "transcript", and is a child of the multimedia gallery</li>
      <li><strong>contact</strong> - h1 starts with "Contact" or "Contactez"</li>
      <li><strong>brochure</strong> - has classes <code class="custom">panel-heading bg-primary</code></li>
      <li>
        <strong>pdf download</strong> - has a pdf link with classes <code class="custom">btn stretched-link</code> and either the <code class="custom">thumbnail</code> class or a
        <code class="custom">&lt;small&gt;</code> element with "PDF, # KB, # page" or "PDF, # Ko, # page"
      </li>
      <li><strong>content</strong> - if no other page templates apply</li>
    </ul>

    <p><strong>Newsroom templates:</strong></p>
    <ul class="mt-1">
      <li><strong>newsroom</strong> - url includes <code class="custom">/news/####</code> or <code class="custom">/nouvelles/####</code></li>
      <li><strong>taxtip</strong> - url includes <code class="custom">/newsroom/tax-tips/</code> or <code class="custom">/salle-presse/conseils-fiscaux/</code></li>
      <li>
        <strong>tax filing season media kit</strong> - url includes <code class="custom">/tax-tips/tax-filing-season-media-kit</code> or
        <code class="custom">/salle-presse/mesures-relatives-enquetes-criminelles-accusations-condamnations</code>
      </li>
      <li>
        <strong>enforcement notice</strong> - url includes <code class="custom">/newsroom/criminal-investigations-actions-charges-convictions</code> or
        <code class="custom">/salle-presse/mesures-relatives-enquetes-criminelles-accusations-condamnations</code>
      </li>
      <li><strong>campaign</strong> - url includes <code class="custom">/campaigns/</code> or <code class="custom">/campagnes/</code></li>
    </ul>

    <p><strong>Forms and publications templates:</strong></p>
    <ul>
      <li><strong>readme (form)</strong> - url includes <code class="custom">/forms-publications/forms/</code> or <code class="custom">/formulaires-publications/formulaires/</code></li>
      <li>
        <strong>readme (guide)</strong> - url includes <code class="custom">/forms-publications/publications/[guide number].html</code> or
        <code class="custom">/formulaires-publications/publications/[guide number].html</code>
      </li>
      <li>
        <strong>readme (T1)</strong> - url includes <code class="custom">/general-income-tax-benefit-package/[province]?/5###-[1 to 5 letters].html</code> or
        <code class="custom">/trousse-generale-impot-prestations/[province]?/5###-[1 to 5 letters].html</code>
      </li>
      <li>
        <strong>readme (TD1)</strong> - url includes <code class="custom">/td1-forms-pay-received-on-january-1-[year]?-later/[filename].html</code> or
        <code class="custom">/formulaires-td1-paies-recues-1er-janvier-[year]?-apres/[filename].html</code>
      </li>
      <li>
        <strong>readme (payroll)</strong> - url includes:
        <ul>
          <li><code class="custom">/t4127-payroll-deductions-formulas/</code> or <code class="custom">/t4127-formules-calcul-retenues-paie/</code></li>
          <li><code class="custom">/payroll-deductions-t4127-payroll-deductions-formulas/</code> or <code class="custom">/t4127-formules-calcul-retenues-paie-annees-precedentes/</code></li>
          <li><code class="custom">/t4032-payroll-deductions-tables/</code> or <code class="custom">/t4032-tables-retenues-paie/</code></li>
          <li><code class="custom">/t4032-payroll-deductions-tables-previous-years/</code> or <code class="custom">/t4032-tables-retenues-paie-documents-annees-anterieures/</code></li>
          <li><code class="custom">/t4008-payroll-deductions-supplementary-tables/</code> or <code class="custom">/t4008-tables-supplementaires-retenues-paie/</code></li>
          <li>
            <code class="custom">/t4008-payroll-deductions-supplementary-tables-previous-years/</code> or <code class="custom">/t4008-tables-supplementaires-retenues-paie-annees-anterieures/</code>
          </li>
          <li>followed by <code class="custom">[filename].html</code></li>
        </ul>
      </li>
      <li>
        <strong>guide</strong> - url includes <code class="custom">/forms-publications/publications/</code> or <code class="custom">/formulaires-publications/publications/</code> if readme (guide)
        doesn't apply
      </li>
      <li>
        <strong>guide (T1)</strong> - url includes:
        <ul>
          <li><code class="custom">/general-income-tax-benefit-package/5000-g.html</code> or <code class="custom">/trousse-generale-impot-prestations/5000-g.html</code></li>
          <li>
            <code class="custom">/general-income-tax-benefit-package/[province]?/5###-[1 to 5 letters]/[guide].html</code> or
            <code class="custom">/trousse-generale-impot-prestations/[province]?/5###-[1 to 5 letters]/[guide].html</code>
          </li>
        </ul>
      </li>
    </ul>

    <p>If AIDA tags a page incorrectly or if you think we're missing a template type, please let us know.</p>

    <h3 id="urls">How AIDA generates new URLs</h3>
    <p>For new pages, AIDA will use the H1 to generate a URL by doing the following:</p>
    <ul>
      <li>remove accents</li>
      <li>remove punctuation (except periods or hyphens)</li>
      <li>convert everything to lowercase</li>
      <li>remove any small words from the English and French lists below</li>
      <li>convert spaces to hyphens</li>
    </ul>
    <p>AIDA will continue to keep your new page url in sync with your H1 up until you make a deliberate change to the url or until it detects the page is no longer a 404.</p>
    <p>If any small words are missing from these lists, please let us know.</p>
    <div class="grid">
      <div class="col-3">
        <h4 class="my-0 ml-3">English</h4>
        <ul class="mt-0">
          @for (word of stopWordsEN; track $index) {
            <li>{{ word }}</li>
          }
        </ul>
      </div>
      <div class="col-3">
        <h4 class="my-0 ml-3">French</h4>
        <ul class="mt-0">
          @for (word of stopWordsFR; track $index) {
            <li>{{ word }}</li>
          }
        </ul>
      </div>
    </div>
  </section>

  <section class="surface-card border-round-lg shadow-2 p-4 w-full min-w-min">
    <h2 id="release">Release notes</h2>
    <h3 id="0-7-6">Release 0.7.6 (Oct 15, 2026)</h3>
    <h4>Update IA</h4>
    <ul>
      <li>Reorganize all routes into new hierarchy</li>
      <li>Update side nav to clarify which tools work on the active project</li>
      <li>Add new home page</li>
    </ul>
    <h4>Other updates</h4>
    <ul>
      <li>On IA diagram, add optional popup to confirm which child pages to add (can be adjusted in user settings)</li>
      <li>Move the "page move" view from the content inventory to the IA diagram</li>
      <li>When exporting pages to a zip file, store a local content hash so we can skip that file on next export (the hash can be used to check for changes in future if needed)</li>
    </ul>
    <h3 id="0-7-5">Release 0.7.5 (Oct 8, 2026)</h3>
    <h4>Minor updates</h4>
    <ul>
      <li>Add export breakdown of new, existing and skipped pages</li>
      <li>Fix taxes theme exports (unique template)</li>
      <li>Add more small word exclusions to auto-generated new page urls</li>
    </ul>
    <h3 id="0-7-4">Release 0.7.4 (Oct 1, 2026)</h3>
    <h4>Minor updates</h4>
    <ul>
      <li>Add checkboxes to export page (same behaviour as the toggle buttons)</li>
    </ul>
    <h3 id="0-7-3">Release 0.7.3 (Sept 29, 2026)</h3>
    <h4>Optional project lock</h4>
    <ul>
      <li>Added option for a user to soft-lock a cloud project (this will show others who locked the project, any collaborator can unlock if needed)</li>
    </ul>
    <h4>Content inventory updates</h4>
    <ul>
      <li>Make notes visible by default in content inventory</li>
      <li>Adjust column visibily when filtering on "flagged pages" to show only booleans</li>
      <li>Add 'View pages' box to bottom of content inventory</li>
    </ul>
    <h4>Other changes</h4>
    <ul>
      <li>For new pages only, sync H1 to url and keep url in sync with parent url during edits or moves</li>
      <li>Add autosave indicator to IA diagram</li>
      <li>Add page titles to "Export pages" view</li>
      <li>Move cache & version tools from AI review tools to select a page</li>
      <li>Add handling for changes found in nested ex/hides on web page diff</li>
    </ul>
    <h3 id="0-7-2">Release 0.7.2 (Sept 28, 2026)</h3>
    <h4>Minor updates</h4>
    <ul>
      <li>Limited active project storage to the browser session</li>
      <li>Returning users without an active project are redirected from landing page to "Saved projects" view</li>
      <li>Expand all nodes when opening the IA diagram (they can be collapsed from the "Page move" view)</li>
      <li>Added route guard for IA diagram to capture previous page so we don't have to remember to add the function wherever we add a link to the diagram</li>
    </ul>
    <h3 id="0-7-1">Release 0.7.1 (Sept 25, 2026)</h3>
    <h4>Minor updates</h4>
    <ul>
      <li>Make openrouter/free the last option for AI requests since its the most unstable</li>
      <li>Fix bug that blocks page moves and other actions while a view option is set (the view options create a clone and actions need to run on original)</li>
      <li>Adjust max width for source code view</li>
      <li>Keep new page names in sync until the page goes live</li>
    </ul>
    <h3 id="0-7-0">Release 0.7.0 (Sept 24, 2026)</h3>
    <h4>New "Edit pages" and "Compare versions" views</h4>
    <ul>
      <li>View tracked changes for the rendered web page or source code</li>
      <li>
        Switch between any version of any page in the project:
        <ul>
          <li>Canada.ca</li>
          <li>AEM preview</li>
          <li>GitHub</li>
          <li>Local (UT)</li>
          <li>AI suggestions</li>
        </ul>
      </li>
      <li>Changes can be accepted or rejected</li>
      <li>Before & after versions can be edited</li>
      <li>Editing in source view lets the user right click to add snippets of code (and/or pattern, rescue link, list, alert, ex/hide)</li>
      <li>
        "Edit pages" lets users compare their source page with AI assisted edits
        <ul>
          <li>First page-level AI report to change tense between past, present, and future</li>
          <li>More AI reports and the ability to sync changes back to GitHub or local (UT) will be available in a future release</li>
        </ul>
      </li>
    </ul>
    <h4>Other changes</h4>
    <ul>
      <li>Edit page button on content inventory is now a dropdown menu with both edit and open in new tab options</li>
      <li>Add tooltips to side nav in mobile view</li>
      <li>Adjust default inventory view</li>
    </ul>
    <h3 id="0-6-12">Release 0.6.12 (Sept 22, 2026)</h3>
    <h4>Updates to "Find and add pages"</h4>
    <ul>
      <li>Combine "Add pages" and "Find pages" into a single "Find and add pages" tabbed interface</li>
      <li>When adding task or child pages, filter in-scope urls out of the found pages</li>
      <li>Add toast popup when add is complete</li>
      <li>Add GET fallback to last HEAD request to prevent pages being incorrectly flagged as 404 during add</li>
      <li>Add rescue links to this view from all other tasks</li>
    </ul>
    <h4>Minor fixes & improvments</h4>
    <ul>
      <li>Set default org and toolbox values</li>
      <li>Route new users to landing page instead of new project page</li>
      <li>Add image to 404 page</li>
      <li>Allow custom content to be passed into sign-in button so anything can pop up the sign-in dialog</li>
      <li>Add sign-in popup to cloud storage toggle and switch project read-only tag</li>
      <li>Add confirmation dialog when user deletes a cloud project</li>
      <li>Add toast message when cloud project autoconverts to local (collab not signed in, or not a collab)</li>
      <li>Add method to name unamed projects from landing page</li>
      <li>Comment out phase advancer on landing page</li>
      <li>Update character count tooltip to include colour explanation (on inventory page)</li>
      <li>Add filter for h1, double h1 or page path on inventory page</li>
    </ul>
    <h3 id="0-6-11">Release 0.6.11 (Sept 17, 2026)</h3>
    <h4>Minor fixes & improvments</h4>
    <ul>
      <li>Add hover effect to phase cards</li>
      <li>Remove repository setup from new project view</li>
      <li>Add sign-in button under "Save to browser" / "Save to cloud" toggle if user is not signed in</li>
      <li>Surface "How to get a token" tooltip as a label</li>
      <li>Add .html to links if missing when fetching breadcrumb or page links</li>
      <li>Add tooltip to add pages icon on IA diagram</li>
    </ul>
    <h3 id="0-6-10">Release 0.6.10 (Sept 16, 2026)</h3>
    <h4>Minor fixes & improvments</h4>
    <ul>
      <li>Improve latency on manage inventory page</li>
      <li>Add new tooltip directive (fixes squished tooltips on inventory page)</li>
      <li>Add double H1 with project name to views that read project data</li>
    </ul>
    <h4>Updates to saved projects view</h4>
    <ul>
      <li>Pre-filter saved project list to the users projects</li>
      <li>Add buttons to toggle pre-filter list on saved projects page</li>
      <li>Add border and background tint for active project and border for a duplicate cloud/browser version</li>
      <li>Add dialog for uploading projects to the cloud if user has actions to complete first (previously it just hid the upload button)</li>
    </ul>
    <h3 id="0-6-9">Release 0.6.9 (Sept 14, 2026)</h3>
    <h4>Minor fixes & improvments</h4>
    <ul>
      <li>Fix reactivity of collaborators dropdown so it populates if you log in while the tool is visible</li>
      <li>Add global indicator for current project, storage type, and conditional warnings if user is not signed in</li>
      <li>Reorganize project url paths (routes)</li>
      <li>Add breadcrumbs and topic pages for "Project" and "Tasks"</li>
      <li>Extract doormats to reusable template for topic pages</li>
      <li>Add "Hide # level of child pages" option to IA diagram so everything past the 4th level can be hidden (for example)</li>
    </ul>
    <h3 id="0-6-8">Release 0.6.8 (Sept 11, 2026)</h3>
    <h4>Minor fixes</h4>
    <ul>
      <li>Add link to GitHub at end of PAT instructions</li>
      <li>Add error message if PAT is expired or invalid</li>
      <li>Add missing data to inventory csv export (phone numbers, IA orphan status, and original parent urls)</li>
      <li>Fix encoding for tree csv export</li>
      <li>Remove root Canada.ca node from tree csv export</li>
      <li>Add both languages to tree csv export (it previously only used whichever language the project was created in)</li>
      <li>Add description to new/edit project page</li>
    </ul>
    <h3 id="0-6-7">Release 0.6.7 (Sept 10, 2026)</h3>
    <h4>Cloud storage</h4>
    <ul>
      <li>Update cloud storage to handle larger file sizes</li>
    </ul>
    <h4>New data collected</h4>
    <ul>
      <li>Track which pages link to the sign-in page</li>
    </ul>
    <h3 id="0-6-6">Release 0.6.6 (Sept 8, 2026)</h3>
    <h4>Minor improvements</h4>
    <ul>
      <li>Add bulk update buttons to content inventory for in-scope, ROT, archived, and noindex</li>
      <li>Fix issue with undefined notes preventing edit node popup from opening</li>
    </ul>
    <h3 id="0-6-5">Release 0.6.5 (Sept 4, 2026)</h3>
    <h4>Minor improvements</h4>
    <ul>
      <li>Added legend to IA diagram</li>
      <li>Add "View notes" context menu option to IA diagram (if notes exist)</li>
      <li>Added option to edit notes from the edit page popup</li>
      <li>Lowered number of pages needed to trigger pagination on content inventory from 50 to 25</li>
      <li>Added help cursor for content inventory table cells with context menus</li>
      <li>Added bulk status toggles to Actions dropdown on content inventory</li>
      <li>Updated help text</li>
    </ul>
    <h3 id="0-6-4">Release 0.6.4 (August 28, 2026)</h3>
    <h4>Bug fixes</h4>
    <ul>
      <li>Adding a duplicate out-of-scope page will flip its status to in-scope instead of skipping it</li>
      <li>Fix heading logic for subway page exports</li>
      <li>Fix z-index for invalid url dialog</li>
    </ul>
    <h4>Navigation & instructions</h4>
    <ul>
      <li>Add help page with information on getting started</li>
      <li>Add phase-based navigation pages</li>
    </ul>
    <h3 id="0-6-3">Release 0.6.3 (August 13, 2026)</h3>
    <h4>Framework upgrade</h4>
    <ul>
      <li>Upgraded Angular framework from v19 to v21 to ensure we get any security patches</li>
      <li>Updated primeNG component library and icon library to stay current with framework upgrade</li>
      <li>Updated internal build tooling (TypeScript, ngx-translate-extract) to stay current with framework updrade</li>
    </ul>
    <h3 id="0-6-2">Release 0.6.2 (August 11, 2026)</h3>
    <h4>Security & maintenance</h4>
    <ul>
      <li>
        Migrated ngx-translate from v16 to v18 (required for the upcoming Angular 20 upgrade)<br /><strong>note:</strong> ngx-translate-extract-marker can be removed in a future update as marker is
        now part of ngx-translate
      </li>
      <li>Updated Angular framework, AWS SDK, and other dependencies to resolve flagged vulnerabilities</li>
      <li>Removed unused &#64;angular/platform-browser-dynamic dependency</li>
      <li>Updated ESlint rules to warn about more patterns in preparation for Angular 20 upgrade</li>
    </ul>
    <h4>Other updates</h4>
    <ul>
      <li>Added loading spinner during initial app load</li>
      <li>Added new invalid urls component for reviewing urls that don't pass validation during "Add pages"</li>
    </ul>
    <h3 id="0-6-1">Release 0.6.1 (July 30, 2026)</h3>
    <h4>Export improvements</h4>
    <ul>
      <li>Add index page to local exports</li>
      <li>Apply prettier after local html is built</li>
      <li>Add handling for new pages</li>
      <li>Add option to choose which source to use for export (Canada.ca, GitHub, Local)</li>
      <li>Add warning if a local project already exists at chosen location</li>
      <li>Add bookmarklet to toggle between UT and Canada.ca</li>
    </ul>
    <h4>Other improvements</h4>
    <ul>
      <li>Add option to show navigational children to IA diagram</li>
      <li>Fix issue with links in IA diagram</li>
      <li>Fix issue with dates on project load</li>
      <li>When creating new page, pop up the node editor right away</li>
      <li>Add primary border and background to toggle buttons so active state stands out more</li>
      <li>Extract UI selectors to shared component with shared state</li>
      <li>Add UI selectors to URL drawer on "Edit project" page so users can review or copy whichever set they want</li>
      <li>Update inventory & tree CSV exports for new data model</li>
    </ul>
    <h3 id="0-6-0">Release 0.6.0 (July 20, 2026)</h3>
    <h4>Data structure</h4>
    <ul>
      <li>Reorganized data into "baseline", "live", and "prototype" subsections for better tracking and quick comparisons</li>
      <li>
        Users can refresh the "live" data from Canada.ca or the "prototype" data from GitHub ("baseline" doesn't refresh, so changes can be tracked from start of project or from current live state)
      </li>
      <li>Old saved files will be patched to the new structure automatically</li>
      <li>The new structure is used to calculate what actions are needed (Create new page, unpublish from Canada.ca etc.)</li>
    </ul>
    <h4>IA diagram improvements</h4>
    <ul>
      <li>Added drag & drop function for page moves</li>
      <li>Added menu option to reorder sibling pages</li>
      <li>Added menu option and button to find child pages for a specific page</li>
      <li>Added menu option to open a popup for editing page data</li>
      <li>Added toggle for English and French page labels</li>
      <li>The "changes" view will now show the live page title crossed out above the prototype title if they are different</li>
    </ul>
    <h4>Other improvements</h4>
    <ul>
      <li>Content inventory is now separated by English and French instead of primary and opposite language</li>
      <li>Content inventory now includes a menu to any version of a page, vanity urls, chatbot indicator, reading grade level, link count, and phone numbers</li>
      <li>Added an option to export pages to a zip file instead of GitHub</li>
      <li>Exported index pages now open the correct repo link, even if you fork, move, or rename the repo</li>
      <li>Added a "New tab GitHub" bookmarklet to open the other version in a new tab (same as the "Toggle GitHub" bookmarklet but opens in a new tab instead of the same tab)</li>
      <li>Added a "Toggle night mode" bookmarklet so users can darken Canada.ca pages if preferred for reading</li>
    </ul>
    <h3 id="0-5-8">Release 0.5.8 (June 15, 2026)</h3>
    <h4>Content inventory</h4>
    <ul>
      <li>Add notes group with 'issues' and 'solutions' for user to document whatever they wish</li>
    </ul>
    <h3 id="0-5-7">Release 0.5.7 (June 12, 2026)</h3>
    <h4>New IA diagram features</h4>
    <ul>
      <li>Add options to hide or unhide specific pages or all child pages</li>
      <li>Add option to view any page as the root page so users can focus on specific sections of the IA</li>
    </ul>
    <h4>Other improvements</h4>
    <ul>
      <li>Separate "Find pages" options with tabs</li>
      <li>Add monitoring dashboard</li>
      <li>Update project bookmarklet to load index page instead of repo</li>
      <li>Add more padding between items in page move table</li>
    </ul>
    <h3 id="0-5-6">Release 0.5.6 (June 4, 2026)</h3>
    <h4>Content inventory improvement</h4>
    <ul>
      <li>Make more cells editable</li>
    </ul>
    <h3 id="0-5-5">Release 0.5.5 (April 15, 2026)</h3>
    <h4>Feature improvements</h4>
    <ul>
      <li>Strip /content/canadasite from links so we don't mislabel pages as IA orphans</li>
      <li>Update find child pages function to use checkboxes so user can select which to copy to the "Add pages" input</li>
      <li>Prevent fetching cached json data (last modified dates and content owners will be more accurate now)</li>
      <li>Maintain cnt-wdth-lmtd when exporting pages to GitHub</li>
      <li>Fix bug on "Page move" view so navigating away while editing doesn't lock a page from future edits</li>
    </ul>
    <h3 id="0-5-4">Release 0.5.4 (April 10, 2026)</h3>
    <h4>New find child pages feature</h4>
    <ul>
      <li>Add find child pages functionality to the "Find pages" component</li>
      <li>This function crawls your in-scope pages for potential child pages. It can also find IA orphans if they are linked from other in-scope pages</li>
    </ul>
    <h4>Content inventory improvement</h4>
    <ul>
      <li>Add sort function to table</li>
      <li>Add pagination for projects with more than 50 pages</li>
      <li>Improve status filters</li>
    </ul>
    <h4>IA diagram improvement</h4>
    <ul>
      <li>Add toggle to view baseline or final version</li>
    </ul>
    <h3 id="0-5-3">Release 0.5.3 (March 31, 2026)</h3>
    <h4>GitHub export improvements</h4>
    <ul>
      <li>Add option to export English, French or both languages for prototyping</li>
      <li>All pages get robots: "noindex, nofollow" from _config.yml, individual pages may have it listed as well if the live page has it</li>
      <li>Copy everything from core-prototype/_includes instead of specific files</li>
      <li>Add 2s delay before enabling GitHub Pages (preview)</li>
    </ul>
    <h4>UPD integration</h4>
    <ul>
      <li>Content inventory table now links directly to the UPD data for each page (opens UPD in new tab)</li>
    </ul>
    <h4>Update bookmarklets</h4>
    <ul>
      <li>Update "Toggle [repo name] and "Toggle github" to work with new cra-test-arc.canada.ca subdomain</li>
    </ul>
    <h4>Update template detection</h4>
    <ul>
      <li>Add "mwsdoormat-links-container" to topic page template detection logic</li>
      <li>Add additional double H1 detection for &lt;p&gt; elements</li>
    </ul>

    <h3 id="0-5-2">Release 0.5.2 (March 27, 2026)</h3>
    <h4>Add pages improvements</h4>
    <ul>
      <li>Added input validation to enforce single-language page entry</li>
      <li>Automatic URL formatting and normalization</li>
      <li>Removed list of urls undergoing validation (we still show urls with problems and valid or skipped urls)</li>
      <li>Added "View pages" section to the Edit/New project view</li>
    </ul>
    <h4>Github export improvements</h4>
    <ul>
      <li>Improved GitHub index.html to support bilingual sitemap generation with paired English/French URLs</li>
    </ul>

    <h3 id="0-5-1">Release 0.5.1 (March 26, 2026)</h3>
    <h4>New bookmarklet</h4>
    <ul>
      <li>Added project-specific "Toggle [repo name]" bookmarklet to toggle between GitHub preview, edit mode, and Canada.ca.</li>
    </ul>

    <h3 id="0-5-0">Release 0.5.0 (March 25, 2026)</h3>
    <h4>AI-powered metadata generation</h4>
    <ul>
      <li>Generate metadata automatically for selected pages using AI assistance</li>
    </ul>
    <h4>Content inventory improvements</h4>
    <ul>
      <li>Expanded data collection: word count, noindex status, last modified/published dates</li>
      <li>Expanded metadata collection to both languages</li>
      <li>Secondary toolbar for bulk actions on selected pages</li>
      <li>Improved page status filtering</li>
      <li>Added option to refresh the collected page data</li>
      <li>Reorganized IA orphan detection into dedicated problem category</li>
    </ul>
    <h4>Switch project improvements</h4>
    <ul>
      <li>Fixed cloud project upload with GitHub Personal Access Tokens</li>
      <li>Filters on switch project view are now linked to the project files</li>
    </ul>
    <h4>GitHub export improvements</h4>
    <ul>
      <li>Added an index.html page to generate a list of files in your repo and robots.txt</li>
      <li>Breadcrumbs now reflect any changes you've made in AIDA instead of the live page</li>
    </ul>
    <h4>New toolbox view</h4>
    <ul>
      <li>Added bookmarklets, "Open in AIDA", "Toggle GitHub", and "Check links"</li>
      <li>Note: this view will eventually have some standalone tools that aren't linked to project data</li>
    </ul>

    <h3 id="0-4-0">Release 0.4.0 (February 25, 2026)</h3>
    <h4>Initial release - core project management</h4>
    <ul>
      <li>Project dashboard view with high level stats and design phase tracking (discover, assess, design, approve)</li>
      <li>Edit/New project view where you can name your project, associate it with a GitHub repo, add collaborators, add pages, or find pages from the task inventory</li>
      <li>Switch project view where you can switch between your projects, view any cloud project, or mark projects for deletion (they are stored for 30 days before final deletion)</li>
      <li>Manage inventory view where you can see all the data collected for your pages, add brand new pages, or change the IA structure</li>
      <li>IA diagram view where you can see the page hierarchy</li>
      <li>
        Export to GitHub view where you can export your pages in Jekyll format. The file comparison table can detect if you've made changes in GitHub after the export and will automatically skip those
        files on future exports (can be overriden by the user).
      </li>
    </ul>
  </section>
</div>
` }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && \u0275setClassDebugInfo(HelpComponent, { className: "HelpComponent", filePath: "src/app/views/utility/help/help.component.ts", lineNumber: 14 });
})();
export {
  HelpComponent
};
//# sourceMappingURL=chunk-HTAQTWW5.js.map
