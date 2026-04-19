/* eslint-disable */
(function (global) {
  var TRANSLATIONS = {
    sv: {
      "meta.title": "Aodity, masterdata från Excel till API",
      "meta.description": "Publicera masterdata direkt från Excel och gör den tillgänglig via ett strukturerat API. Versionskontroll, rollbaserad access och sömlös BI-integration.",

      "nav.getStarted": "Kom igång",

      "hero.eyebrow": "Masterdata Management",
      "hero.titleHtml": "Publicera masterdata från <em>Excel</em> till API",
      "hero.body": "Aodity kopplar ihop din Excel-arbetsbok med resten av organisationen. Ett strukturerat API med versionskontroll, rollbaserad access och sömlös BI-integration.",
      "hero.ctaPrimary": "Kom igång",
      "hero.ctaSecondary": "Hur det fungerar",

      "section.features.label": "Funktioner",
      "section.features.title": "Allt du behöver för masterdata",
      "section.features.desc": "Från ett enkelt Excel-tillägg till ett fullständigt API, byggt för team som hanterar strukturerad data. Data når ditt BI-verktyg eller data warehouse via REST API med API-nyckel.",

      "feature1.title": "Publicera från Excel",
      "feature1.body": "Ladda upp data direkt från Excel-tillägget med ett knapptryck. Ingen export, ingen manuell hantering.",
      "feature2.title": "Versionskontroll",
      "feature2.body": "Varje publicering skapar en ny version. Bläddra i historiken och återställ ett tidigare tillstånd när som helst.",
      "feature3.title": "Rollbaserad access",
      "feature3.body": "Manager, editor och viewer. Styr vem som får publicera, redigera eller enbart läsa. Allt tenant-isolerat.",
      "feature4.title": "Datavalidering och relationer",
      "feature4.body": "Definiera regler direkt i schemat. Kräv att värden matchar en lista, följer ett format eller refererar till en annan entity. Fungerar i både Excel och webb-editorn.",

      "section.how.label": "Hur det fungerar",
      "section.how.title": "Tre steg till strukturerad data",
      "section.how.desc": "Kom igång på minuter. Ingen infrastruktur att sätta upp, ingen kod att skriva.",

      "step1.title": "Definiera schema",
      "step1.body": "Skapa ett entity-schema i admin-portalen och definiera fält med namn och typ. Lägg till valideringsregler som enum-värden, format eller kopplingar till andra entities.",
      "step2.title": "Publicera från Excel",
      "step2.body": "Öppna Aodity-tillägget i Excel, välj entity och tryck Publicera. Data valideras mot schemat och lagras som en ny version.",
      "step3.title": "Hämta via API",
      "step3.body": "Integrera med ditt BI-verktyg via REST API. Alltid senaste versionen, eller välj en specifik version för reproducerbara rapporter.",

      "section.pricing.label": "Prissättning",
      "section.pricing.title": "Enkelt och transparent",
      "section.pricing.desc": "Välj den plan som passar din organisation. Kontakta oss för att komma igång.",

      "pricing.perMonth": "/ månad",
      "pricing.popular": "Populärast",
      "pricing.vatNote": "Alla priser anges exklusive moms.",
      "pricing.getStarted": "Kom igång",
      "pricing.contactUs": "Kontakta oss",

      "pricing.medium.price": "2 490 kr",
      "pricing.medium.name": "Medium",
      "pricing.medium.f1": "Upp till 5 användare",
      "pricing.medium.f2": "Upp till 10 entities",
      "pricing.medium.f3": "5 000 API-anrop / månad",
      "pricing.medium.f4": "Excel-tillägg",
      "pricing.medium.f5": "REST API med API-nycklar",
      "pricing.medium.f6": "Rollbaserad access",

      "pricing.large.price": "5 990 kr",
      "pricing.large.name": "Large",
      "pricing.large.f1": "Upp till 15 användare",
      "pricing.large.f2": "Upp till 50 entities",
      "pricing.large.f3": "25 000 API-anrop / månad",

      "pricing.enterprise.price": "Från 14 990 kr",
      "pricing.enterprise.name": "Enterprise",
      "pricing.enterprise.f1": "Obegränsat antal användare",
      "pricing.enterprise.f2": "Obegränsat antal entities",
      "pricing.enterprise.f3": "Obegränsade API-anrop",

      "pricing.epic.includes": "Inkluderar",

      "pricing.epic.visibility.title": "Insyn i hur datan används",
      "pricing.epic.visibility.body": "Se vilka externa system som läser din data och när de senast synkade.",
      "pricing.epic.visibility.includes": "Konsumenter",

      "pricing.epic.webEditor.title": "Redigera data utanför Excel",
      "pricing.epic.webEditor.body": "Hantera poster direkt i webbläsaren när du inte vill öppna ett ark. Snabba ändringar, samma validering som Excel.",
      "pricing.epic.webEditor.includes": "Webb-editor",

      "pricing.epic.traceability.title": "Full spårbarhet över vad som ändrats",
      "pricing.epic.traceability.body": "Se vem som gjorde vad och när — både för schema-ändringar och dataändringar. Rulla tillbaka till en tidigare version när något blivit fel.",
      "pricing.epic.traceability.includes": "Audit log, versionshistorik",

      "pricing.epic.dataFlow.title": "Spåra var datan tar vägen",
      "pricing.epic.dataFlow.body": "Se vilka system som konsumerar din masterdata och vad de läser. Visualisera schemat och dess relationer som ett diagram.",
      "pricing.epic.dataFlow.includes": "Konsumenter, ERD-diagram per projekt",

      "pricing.epic.access.title": "Skräddarsy åtkomsten efter organisationen",
      "pricing.epic.access.body": "Ge olika team ansvar för olika projekt utan att tumma på säkerheten. Projekt-scopade roller med Project Managers som äger sina domäner.",
      "pricing.epic.access.includes": "Project Manager-rollen, projekt-scopade behörigheter",

      "pricing.epic.quality.title": "Säkerställ datakvalitet vid källan",
      "pricing.epic.quality.body": "Validera data mot egna regler innan den når dina system. Foreign keys, mönstermatchning, värdeintervall och tillåtna val. Sök- och relationsstöd direkt i Excel.",
      "pricing.epic.quality.includes": "Custom constraints (enum, FK, regex, range, prefix), FK display-kolumn i Excel",

      "footer.copy": "© 2026 GartIT AB. Alla rättigheter förbehållna.",
      "footer.terms": "Villkor"
    },

    en: {
      "meta.title": "Aodity, master data from Excel to API",
      "meta.description": "Publish master data straight from Excel and expose it through a structured API. Version control, role-based access, and seamless BI integration.",

      "nav.getStarted": "Get started",

      "hero.eyebrow": "Master Data Management",
      "hero.titleHtml": "Publish master data from <em>Excel</em> to API",
      "hero.body": "Aodity connects your Excel workbook to the rest of the organization. A structured API with version control, role-based access, and seamless BI integration.",
      "hero.ctaPrimary": "Get started",
      "hero.ctaSecondary": "How it works",

      "section.features.label": "Features",
      "section.features.title": "Everything you need for master data",
      "section.features.desc": "From a lightweight Excel add-in to a complete API, built for teams that manage structured data. Data reaches your BI tool or data warehouse via the REST API with an API key.",

      "feature1.title": "Publish from Excel",
      "feature1.body": "Upload data directly from the Excel add-in with a single click. No exports, no manual handling.",
      "feature2.title": "Version control",
      "feature2.body": "Every publish creates a new version. Browse history and restore a previous state anytime.",
      "feature3.title": "Role-based access",
      "feature3.body": "Manager, editor, and viewer. Control who can publish, edit, or only read. Fully tenant-isolated.",
      "feature4.title": "Data validation and relationships",
      "feature4.body": "Define rules directly in the schema. Require values to match a list, follow a format, or reference another entity. Works in both Excel and the web editor.",

      "section.how.label": "How it works",
      "section.how.title": "Three steps to structured data",
      "section.how.desc": "Get up and running in minutes. No infrastructure to set up, no code to write.",

      "step1.title": "Define a schema",
      "step1.body": "Create an entity schema in the admin portal and define fields with name and type. Add validation rules such as enum values, formats, or links to other entities.",
      "step2.title": "Publish from Excel",
      "step2.body": "Open the Aodity add-in in Excel, pick an entity and click Publish. Data is validated against the schema and stored as a new version.",
      "step3.title": "Fetch via API",
      "step3.body": "Integrate with your BI tool via the REST API. Always the latest version, or pick a specific version for reproducible reports.",

      "section.pricing.label": "Pricing",
      "section.pricing.title": "Simple and transparent",
      "section.pricing.desc": "Pick the plan that fits your organization. Contact us to get started.",

      "pricing.perMonth": "/ month",
      "pricing.popular": "Most popular",
      "pricing.vatNote": "All prices excluding VAT.",
      "pricing.getStarted": "Get started",
      "pricing.contactUs": "Contact us",

      "pricing.medium.price": "2,490 SEK",
      "pricing.medium.name": "Medium",
      "pricing.medium.f1": "Up to 5 users",
      "pricing.medium.f2": "Up to 10 entities",
      "pricing.medium.f3": "5,000 API calls / month",
      "pricing.medium.f4": "Excel add-in",
      "pricing.medium.f5": "REST API with API keys",
      "pricing.medium.f6": "Role-based access",

      "pricing.large.price": "5,990 SEK",
      "pricing.large.name": "Large",
      "pricing.large.f1": "Up to 15 users",
      "pricing.large.f2": "Up to 50 entities",
      "pricing.large.f3": "25,000 API calls / month",

      "pricing.enterprise.price": "From 14,990 SEK",
      "pricing.enterprise.name": "Enterprise",
      "pricing.enterprise.f1": "Unlimited users",
      "pricing.enterprise.f2": "Unlimited entities",
      "pricing.enterprise.f3": "Unlimited API calls",

      "pricing.epic.includes": "Includes",

      "pricing.epic.visibility.title": "Visibility into how your data is used",
      "pricing.epic.visibility.body": "See which external systems read your data and when they last synced.",
      "pricing.epic.visibility.includes": "Consumers",

      "pricing.epic.webEditor.title": "Edit data outside Excel",
      "pricing.epic.webEditor.body": "Manage records straight in the browser when you don't want to open a spreadsheet. Fast edits, same validation as Excel.",
      "pricing.epic.webEditor.includes": "Web editor",

      "pricing.epic.traceability.title": "Full traceability of what changed",
      "pricing.epic.traceability.body": "See who did what and when — for both schema and data changes. Roll back to a previous version whenever something breaks.",
      "pricing.epic.traceability.includes": "Audit log, version history",

      "pricing.epic.dataFlow.title": "Track where your data goes",
      "pricing.epic.dataFlow.body": "See which systems consume your master data and what they read. Visualize your schema and its relationships as a diagram.",
      "pricing.epic.dataFlow.includes": "Consumers, ERD diagram per project",

      "pricing.epic.access.title": "Tailor access to your organization",
      "pricing.epic.access.body": "Give different teams responsibility for different projects without compromising security. Project-scoped roles with Project Managers owning their domain.",
      "pricing.epic.access.includes": "Project Manager role, project-scoped permissions",

      "pricing.epic.quality.title": "Ensure data quality at the source",
      "pricing.epic.quality.body": "Validate data against your own rules before it reaches downstream systems. Foreign keys, pattern matching, value ranges, and allowed options. Lookup and relationship support right inside Excel.",
      "pricing.epic.quality.includes": "Custom constraints (enum, FK, regex, range, prefix), FK display column in Excel",

      "footer.copy": "© 2026 GartIT AB. All rights reserved.",
      "footer.terms": "Terms"
    }
  };

  var STORAGE_KEY = "aodity_lang";
  var LANGS = ["sv", "en"];

  function getLang() {
    var stored = localStorage.getItem(STORAGE_KEY);
    return LANGS.indexOf(stored) !== -1 ? stored : "sv";
  }

  function setLang(lang) {
    if (LANGS.indexOf(lang) === -1) return;
    localStorage.setItem(STORAGE_KEY, lang);
    document.documentElement.lang = lang;
    applyTranslations();
    updateLangToggle();
  }

  function t(key) {
    var lang = getLang();
    return (
      (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) ||
      TRANSLATIONS.sv[key] ||
      key
    );
  }

  function applyTranslations() {
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      el.textContent = t(el.getAttribute("data-i18n"));
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      el.innerHTML = t(el.getAttribute("data-i18n-html"));
    });
    document.querySelectorAll("[data-i18n-content]").forEach(function (el) {
      el.setAttribute("content", t(el.getAttribute("data-i18n-content")));
    });
    var titleEl = document.querySelector("title[data-i18n-title-text]");
    if (titleEl) document.title = t(titleEl.getAttribute("data-i18n-title-text"));
  }

  function updateLangToggle() {
    var lang = getLang();
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.classList.toggle("lang-active", btn.dataset.langBtn === lang);
    });
  }

  function initLangToggle() {
    document.documentElement.lang = getLang();
    document.querySelectorAll("[data-lang-btn]").forEach(function (btn) {
      btn.addEventListener("click", function () {
        setLang(btn.dataset.langBtn);
      });
    });
    applyTranslations();
    updateLangToggle();
  }

  global.AodityI18n = {
    t: t,
    getLang: getLang,
    setLang: setLang,
    applyTranslations: applyTranslations,
    initLangToggle: initLangToggle,
  };
})(window);
