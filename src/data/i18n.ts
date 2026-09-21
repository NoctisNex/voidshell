import { site, localUrl } from './site';

export type Language = 'en' | 'de';

// German copy uses Swiss spelling. Keep both versions in sync when editing content.
const translations = {
  "en": {
    "nav": [
      "work",
      "about",
      "contact"
    ],
    "navigation": "Main navigation",
    "homeLabel": "voidshell home",
    "languageLabel": "Language",
    "skip": "Skip to content",
    "backTop": "Back to top",
    "example": "Example project",
    "allWork": "All work",
    "year": "Year",
    "status": "Status",
    "technologies": "Technologies",
    "projectInfo": "Project information",
    "exampleNotice": "This is a sample write-up to show the format. It does not describe completed work.",
    "repository": "Source repository",
    "live": "Live project",
    "hero": [
      "Linux.",
      "Systems.",
      "Practical IT."
    ],
    "explore": "Explore the work",
    "portraitAlt": "Robin, wearing a black T-shirt.",
    "portraitCaption": "The person behind voidshell",
    "footnote": "Linux. Systems. Practical IT.",
    "collection": "An ongoing collection",
    "workLabel": "01 / work",
    "workTitle": "Selected work.",
    "workNote": "Coursework from the Cloud-native, DevOps and Container course at TBZ, completed in 2026.",
    "exampleWork": "The entries below are examples. Real project write-ups will go here.",
    "emptyWork": "Project write-ups are on their way.",
    "aboutLabel": "02 / about",
    "aboutTeaserTitle": [
      "There's a person",
      "behind the systems."
    ],
    "aboutTeaser": "I started out wanting to write software. Working in IT drew me towards the infrastructure underneath it. I like figuring out how the pieces fit, and what to check when they don't.",
    "moreAbout": "A little more about me",
    "contactLabel": "03 / contact",
    "contactTitle": "Let's talk.",
    "emptyContact": "Contact details will be added here.",
    "aboutTitle": "About Robin Schmid",
    "aboutDescription": "Robin Schmid, ICT-Fachmann EFZ. My path into infrastructure, my approach to troubleshooting, and life away from IT.",
    "aboutEyebrow": "About / voidshell",
    "aboutIntroduction": "I started out wanting to write software. Working in IT support and systems engineering drew me towards the infrastructure underneath it: hardware, networks and the services that connect them.",
    "aboutPortraitAlt": "Portrait of Robin in a black T-shirt against a light wall.",
    "noUpdate": "No update at the moment.",
    "getInTouch": "Get in touch",
    "notFoundTitle": "Page not found",
    "notFoundDescription": "This page could not be found on voidshell.",
    "notFoundLabel": "404 / page not found",
    "notFoundHeading": "Nothing here.",
    "notFoundText": "The page may have moved, or the address may be wrong.",
    "backHome": "Back to voidshell",
    "socialAlt": "voidshell. Robin. Linux, systems and practical IT.",
    "jobSearch": "Looking for a junior systems engineering role in the canton of Zurich, with a focus on infrastructure, Linux or second-level support.",
    "experienceLink": "Technical experience",
    "experienceTitle": "What I work with.",
    "experienceLabel": "Experience",
    "results": "Results at a glance",
    "onPage": "On this page",
    "theme": "Appearance",
    "themeOptions": [
      "System",
      "Light",
      "Dark"
    ],
    "workExperience": "Where I have worked.",
    "experienceGroups": [
      {
        "title": "At work",
        "items": [
          "PowerShell / Active Directory",
          "Microsoft 365 / Exchange",
          "SCCM / Workspace ONE"
        ],
        "id": "work"
      },
      {
        "title": "In courses and labs",
        "items": [
          "Linux / AWS / cloud-init",
          "Docker / Compose / Swarm",
          "Prometheus / Grafana / Trivy"
        ],
        "id": "course"
      },
      {
        "id": "projects",
        "title": "Personal projects",
        "items": [
          "Python",
          "discord.py",
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "Bootstrap"
        ]
      },
      {
        "title": "Basic knowledge",
        "items": [
          "Ansible",
          "Terraform"
        ],
        "id": "basics"
      }
    ],
    "careerLabel": "Background",
    "personalLabel": "Beyond the tools",
    "approachTitle": "How I work.",
    "approachText": "Troubleshooting is a puzzle. I ask questions, test assumptions and work through the pieces until the cause makes sense. Understanding why a fix works matters to me. I want to keep learning and solve more problems independently.",
    "outsideTitle": "Away from IT.",
    "outsideText": "I play a range of games, including competitive FPS, and enjoy anime, manga, manhwa and webtoons. I also like swimming and parkour/freerunning, though I do them less often these days.",
    "nextTitle": "What's next.",
    "courseContext": "TBZ's Cloud-native, DevOps and Container course, completed in 2026.",
    "courseLink": "See the coursework",
    "career": [
      {
        "company": "Spital Zollikerberg",
        "role": "ICT-Fachmann EFZ apprenticeship",
        "dates": "Aug 2023 to Aug 2026",
        "summary": "First- and second-level support for staff across hospital wards and departments, onsite, remotely and by phone.",
        "points": [
          "Handled TOPdesk tickets and calls from the call centre, resolving issues and escalating tickets when needed.",
          "Troubleshot printer, hardware, software and basic network issues, with tasks involving Active Directory, DNS and DHCP.",
          "Automated Active Directory onboarding and offboarding with my own PowerShell scripts.",
          "Set up and managed more than 100 PCs and notebooks with SCCM, plus mobile devices with Workspace ONE."
        ]
      },
      {
        "company": "Huanga IT Solutions",
        "role": "Systems engineering internship",
        "dates": "Nov 2022 to Jun 2023",
        "summary": "Administered Microsoft 365 and Azure Active Directory, and assisted with server administration.",
        "points": []
      }
    ],
    "personalProjectsContext": "Learning projects: Discord commands, role checks, async event handlers and logging; responsive web layouts and small JavaScript interactions."
  },
  "de": {
    "nav": [
      "Projekte",
      "Über mich",
      "Kontakt"
    ],
    "navigation": "Hauptnavigation",
    "homeLabel": "Zur voidshell-Startseite",
    "languageLabel": "Sprache",
    "skip": "Zum Inhalt springen",
    "backTop": "Nach oben",
    "example": "Beispielprojekt",
    "allWork": "Alle Projekte",
    "year": "Jahr",
    "status": "Status",
    "technologies": "Technologien",
    "projectInfo": "Projektinformationen",
    "exampleNotice": "Dieser Text zeigt beispielhaft, wie eine Projektbeschreibung aufgebaut ist. Er beschreibt kein abgeschlossenes Projekt.",
    "repository": "Quellcode",
    "live": "Zum Projekt",
    "hero": [
      "Linux.",
      "Systeme.",
      "IT für die Praxis."
    ],
    "explore": "Projekte ansehen",
    "portraitAlt": "Robin in einem schwarzen T-Shirt.",
    "portraitCaption": "Der Mensch hinter voidshell",
    "footnote": "Linux. Systeme. IT für die Praxis.",
    "collection": "Eine Sammlung, die weiterwächst",
    "workLabel": "01 / Projekte",
    "workTitle": "Ausgewählte Arbeiten.",
    "workNote": "Diese Arbeiten sind im Kurs «Cloud-native, DevOps und Container» an der TBZ entstanden, den ich 2026 abgeschlossen habe.",
    "exampleWork": "Die folgenden Einträge sind Beispiele. Später stelle ich hier meine eigenen Projekte vor.",
    "emptyWork": "Projektbeschreibungen folgen.",
    "aboutLabel": "02 / Über mich",
    "aboutTeaserTitle": [
      "Der Mensch",
      "hinter den Systemen."
    ],
    "aboutTeaser": "Ursprünglich wollte ich Software entwickeln. Bei meiner Arbeit in der IT hat mich dann die Infrastruktur dahinter immer mehr interessiert. Ich gehe den Dingen gerne auf den Grund: Wie spielen die einzelnen Komponenten zusammen, und wo setze ich an, wenn etwas nicht funktioniert?",
    "moreAbout": "Mehr über mich",
    "contactLabel": "03 / Kontakt",
    "contactTitle": "Reden wir miteinander.",
    "emptyContact": "Kontaktdaten folgen.",
    "aboutTitle": "Über Robin Schmid",
    "aboutDescription": "Robin Schmid, ICT-Fachmann EFZ. Wie ich zur Systemtechnik gekommen bin, wie ich bei der Fehlersuche vorgehe und was mich ausserhalb der IT interessiert.",
    "aboutEyebrow": "Über mich / voidshell",
    "aboutIntroduction": "Ursprünglich wollte ich Software entwickeln. Bei meiner Arbeit im IT-Support und in der Systemtechnik hat mich dann die Infrastruktur dahinter immer mehr interessiert: Hardware, Netzwerke und die Dienste, die alles miteinander verbinden.",
    "aboutPortraitAlt": "Porträt von Robin in einem schwarzen T-Shirt vor einer hellen Wand.",
    "noUpdate": "Zurzeit gibt es hier nichts Neues.",
    "getInTouch": "Kontakt aufnehmen",
    "notFoundTitle": "Seite nicht gefunden",
    "notFoundDescription": "Die gesuchte Seite konnte auf voidshell nicht gefunden werden.",
    "notFoundLabel": "404 / Seite nicht gefunden",
    "notFoundHeading": "Hier gibt es nichts zu sehen.",
    "notFoundText": "Vielleicht wurde die Seite verschoben oder die Adresse stimmt nicht.",
    "backHome": "Zurück zu voidshell",
    "socialAlt": "voidshell. Robin. Linux, Systeme und IT für die Praxis.",
    "jobSearch": "Ich suche im Kanton Zürich eine Junior-Stelle im System Engineering mit Schwerpunkt Infrastruktur, Linux oder 2nd-Level-Support.",
    "experienceLink": "Technische Erfahrung",
    "experienceTitle": "Womit ich arbeite.",
    "experienceLabel": "Erfahrung",
    "results": "Ergebnisse auf einen Blick",
    "onPage": "Auf dieser Seite",
    "theme": "Darstellung",
    "themeOptions": [
      "System",
      "Hell",
      "Dunkel"
    ],
    "workExperience": "Meine bisherigen Stationen.",
    "experienceGroups": [
      {
        "title": "Im Beruf",
        "items": [
          "PowerShell / Active Directory",
          "Microsoft 365 / Exchange",
          "SCCM / Workspace ONE"
        ],
        "id": "work"
      },
      {
        "title": "In Kursen und Labs",
        "items": [
          "Linux / AWS / cloud-init",
          "Docker / Compose / Swarm",
          "Prometheus / Grafana / Trivy"
        ],
        "id": "course"
      },
      {
        "id": "projects",
        "title": "Eigene Projekte",
        "items": [
          "Python",
          "discord.py",
          "HTML",
          "CSS",
          "JavaScript",
          "Tailwind CSS",
          "Bootstrap"
        ]
      },
      {
        "title": "Grundkenntnisse",
        "items": [
          "Ansible",
          "Terraform"
        ],
        "id": "basics"
      }
    ],
    "careerLabel": "Werdegang",
    "personalLabel": "Abseits der Technik",
    "approachTitle": "Wie ich arbeite.",
    "approachText": "Fehlersuche ist für mich wie ein Puzzle. Ich stelle Fragen, überprüfe meine Annahmen und gehe den Hinweisen Schritt für Schritt nach, bis ich die Ursache verstehe. Dabei ist mir wichtig, auch zu verstehen, warum eine Lösung funktioniert. Ich möchte weiter dazulernen und immer mehr Probleme selbstständig lösen.",
    "outsideTitle": "Abseits der IT.",
    "outsideText": "In meiner Freizeit spiele ich verschiedene Games, darunter auch kompetitive Ego-Shooter. Ausserdem mag ich Anime, Manga, Manhwa und Webtoons. Ich gehe auch gerne schwimmen und mache Parkour/Freerunning, komme aber inzwischen seltener dazu.",
    "nextTitle": "Wie es weitergeht.",
    "courseContext": "Kurs «Cloud-native, DevOps und Container» an der TBZ, abgeschlossen 2026.",
    "courseLink": "Zu den Kursarbeiten",
    "career": [
      {
        "company": "Spital Zollikerberg",
        "role": "Lehre als ICT-Fachmann EFZ",
        "dates": "Aug. 2023 bis Aug. 2026",
        "summary": "1st- und 2nd-Level-Support für Mitarbeitende auf den Stationen und in den Abteilungen des Spitals: vor Ort, per Fernzugriff und am Telefon.",
        "points": [
          "Tickets in TOPdesk bearbeitet, Anrufe aus dem Callcenter entgegengenommen und Probleme gelöst. Tickets bei Bedarf an die zuständigen Fachstellen weitergeleitet.",
          "Drucker-, Hardware- und Softwareprobleme sowie einfache Netzwerkstörungen behoben und Aufgaben rund um Active Directory, DNS und DHCP übernommen.",
          "On- und Offboarding im Active Directory mit eigenen PowerShell-Skripten automatisiert.",
          "Über 100 PCs und Notebooks mit SCCM eingerichtet und verwaltet sowie Mobilgeräte mit Workspace ONE betreut."
        ]
      },
      {
        "company": "Huanga IT Solutions",
        "role": "Praktikum in der Systemtechnik",
        "dates": "Nov. 2022 bis Juni 2023",
        "summary": "Microsoft 365 und Azure Active Directory verwaltet und bei der Administration von Servern mitgearbeitet.",
        "points": []
      }
    ],
    "personalProjectsContext": "In eigenen Lernprojekten habe ich mich mit Discord-Befehlen, Rollenprüfungen, asynchronen Event-Handlern und Logging beschäftigt. Dazu kommen responsive Webseiten mit kleinen JavaScript-Interaktionen."
  }
};

export function copy(language: Language = 'en') {
  return {
    ...translations[language],
    title: language === 'de' ? 'Robin Schmid · Linux, Systeme & IT für die Praxis' : site.title,
    description: language === 'de' ? 'Robin Schmid, ICT-Fachmann EFZ. Mein Portfolio zu Infrastruktur, Linux, Cloud und Automatisierung mit Kursarbeiten zu Cloud-Lösungen und Docker.' : site.description,
    introduction: language === 'de' ? 'Ich bin Robin Schmid, ICT-Fachmann EFZ mit Erfahrung im IT-Support und in der Automatisierung mit PowerShell. Auf dieser Grundlage vertiefe ich meine Kenntnisse in Systemtechnik, Linux und Cloud-Infrastruktur.' : site.introduction,
    currentFocus: language === 'de' ? site.currentFocusDe : site.currentFocus,
  };
}

// Route paths are always unprefixed here; asset URLs continue to use localUrl().
export function pageUrl(path: string, language: Language = 'en') {
  if (path === '/404.html' && language === 'de') return localUrl('/de/404/');
  return localUrl(language === 'de' ? `/de${path}` : path);
}

export function englishPath(pathname: string) {
  const base = site.base.replace(/\/$/, '');
  let path = base && (pathname === base || pathname.startsWith(`${base}/`))
    ? pathname.slice(base.length) || '/' : pathname;
  if (path === '/de' || path.startsWith('/de/')) path = path.slice(3) || '/';
  return path === '/404/' ? '/404.html' : path;
}
