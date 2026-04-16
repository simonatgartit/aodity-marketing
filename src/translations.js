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
      "section.features.desc": "Från ett enkelt Excel-tillägg till ett fullständigt API, byggt för team som hanterar strukturerad data.",

      "feature1.title": "Publicera från Excel",
      "feature1.body": "Ladda upp data direkt från Excel-tillägget med ett knapptryck. Ingen export, ingen manuell hantering.",
      "feature2.title": "Versionskontroll",
      "feature2.body": "Varje publicering skapar en ny version. Bläddra i historiken och återställ ett tidigare tillstånd när som helst.",
      "feature3.title": "API för BI-integration",
      "feature3.body": "Hämta aktuell masterdata via REST API med API-nyckel. Fungerar sömlöst med Power BI, Tableau och andra BI-verktyg.",
      "feature4.title": "Rollbaserad access",
      "feature4.body": "Manager, editor och viewer. Styr vem som får publicera, redigera eller enbart läsa. Allt tenant-isolerat.",
      "feature5.title": "Datavalidering och relationer",
      "feature5.body": "Definiera regler direkt i schemat. Kräv att värden matchar en lista, följer ett format eller refererar till en annan entity. Fungerar i både Excel och webb-editorn.",

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
      "pricing.large.f4": "Excel-tillägg",
      "pricing.large.f5": "REST API med API-nycklar",
      "pricing.large.f6": "Rollbaserad access",
      "pricing.large.f7": "Audit log",
      "pricing.large.f8": "Webb-editor",

      "pricing.enterprise.price": "Från 14 990 kr",
      "pricing.enterprise.name": "Enterprise",
      "pricing.enterprise.f1": "Obegränsat antal användare",
      "pricing.enterprise.f2": "Obegränsat antal entities",
      "pricing.enterprise.f3": "Obegränsade API-anrop",
      "pricing.enterprise.f4": "Excel-tillägg",
      "pricing.enterprise.f5": "REST API med API-nycklar",
      "pricing.enterprise.f6": "Rollbaserad access",
      "pricing.enterprise.f7": "Audit log",
      "pricing.enterprise.f8": "Webb-editor",
      "pricing.enterprise.f9": "Custom constraints (enum, regex, intervall, prefix)",
      "pricing.enterprise.f10": "Foreign key-validering mellan entities",
      "pricing.enterprise.f11": "Anpassad onboarding och support",

      "footer.copy": "© 2026 GartIT AB. Alla rättigheter förbehållna."
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
      "section.features.desc": "From a lightweight Excel add-in to a complete API, built for teams that manage structured data.",

      "feature1.title": "Publish from Excel",
      "feature1.body": "Upload data directly from the Excel add-in with a single click. No exports, no manual handling.",
      "feature2.title": "Version control",
      "feature2.body": "Every publish creates a new version. Browse history and restore a previous state anytime.",
      "feature3.title": "API for BI integration",
      "feature3.body": "Fetch current master data via a REST API with an API key. Works seamlessly with Power BI, Tableau, and other BI tools.",
      "feature4.title": "Role-based access",
      "feature4.body": "Manager, editor, and viewer. Control who can publish, edit, or only read. Fully tenant-isolated.",
      "feature5.title": "Data validation and relationships",
      "feature5.body": "Define rules directly in the schema. Require values to match a list, follow a format, or reference another entity. Works in both Excel and the web editor.",

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
      "pricing.large.f4": "Excel add-in",
      "pricing.large.f5": "REST API with API keys",
      "pricing.large.f6": "Role-based access",
      "pricing.large.f7": "Audit log",
      "pricing.large.f8": "Web editor",

      "pricing.enterprise.price": "From 14,990 SEK",
      "pricing.enterprise.name": "Enterprise",
      "pricing.enterprise.f1": "Unlimited users",
      "pricing.enterprise.f2": "Unlimited entities",
      "pricing.enterprise.f3": "Unlimited API calls",
      "pricing.enterprise.f4": "Excel add-in",
      "pricing.enterprise.f5": "REST API with API keys",
      "pricing.enterprise.f6": "Role-based access",
      "pricing.enterprise.f7": "Audit log",
      "pricing.enterprise.f8": "Web editor",
      "pricing.enterprise.f9": "Custom constraints (enum, regex, ranges, prefixes)",
      "pricing.enterprise.f10": "Foreign key validation between entities",
      "pricing.enterprise.f11": "Tailored onboarding and support",

      "footer.copy": "© 2026 GartIT AB. All rights reserved."
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
