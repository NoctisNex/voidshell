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
    "homeLabel": "voidshell Startseite",
    "languageLabel": "Sprache",
    "skip": "Zum Inhalt springen",
    "backTop": "Nach oben",
    "example": "Beispielprojekt",
    "allWork": "Alle Projekte",
    "year": "Jahr",
    "status": "Status",
    "technologies": "Technologien",
    "projectInfo": "Projektinformationen",
    "exampleNotice": "Dieser Beispieltext zeigt den Aufbau einer Projektbeschreibung. Er beschreibt keine abgeschlossene Arbeit.",
    "repository": "Quellcode",
    "live": "Zum Projekt",
    "hero": [
      "Linux.",
      "Systeme.",
      "IT mit Praxis."
    ],
    "explore": "Projekte ansehen",
    "portraitAlt": "Robin in einem schwarzen T-Shirt.",
    "portraitCaption": "Der Mensch hinter voidshell",
    "footnote": "Linux. Systeme. IT mit Praxis.",
    "collection": "Eine Sammlung, die weiterwächst",
    "workLabel": "01 / Projekte",
    "workTitle": "Ausgewählte Arbeiten.",
    "workNote": "Kursarbeiten aus dem 2026 abgeschlossenen Kurs Cloud-native, DevOps und Container an der TBZ.",
    "exampleWork": "Die folgenden Einträge sind Beispiele. Hier werden später eigene Projektbeschreibungen erscheinen.",
    "emptyWork": "Projektbeschreibungen folgen.",
    "aboutLabel": "02 / Über mich",
    "aboutTeaserTitle": [
      "Der Mensch",
      "hinter den Systemen."
    ],
    "aboutTeaser": "Ursprünglich wollte ich Software entwickeln. Durch meine Arbeit in der IT habe ich mein Interesse an der Infrastruktur dahinter entdeckt. Ich finde gerne heraus, wie die einzelnen Teile zusammenspielen und wo ich ansetzen muss, wenn etwas nicht funktioniert.",
    "moreAbout": "Mehr über mich",
    "contactLabel": "03 / Kontakt",
    "contactTitle": "Kommen wir ins Gespräch.",
    "emptyContact": "Kontaktdaten folgen.",
    "aboutTitle": "Über Robin Schmid",
    "aboutDescription": "Robin Schmid, ICT-Fachmann EFZ. Mein Weg zur Infrastruktur, meine Herangehensweise an die Fehlersuche und mein Leben abseits der IT.",
    "aboutEyebrow": "Über mich / voidshell",
    "aboutIntroduction": "Ursprünglich wollte ich Software entwickeln. Durch IT-Support und Systemtechnik habe ich mein Interesse an der Infrastruktur dahinter entdeckt: Hardware, Netzwerke und die Dienste, die alles verbinden.",
    "aboutPortraitAlt": "Porträt von Robin in einem schwarzen T-Shirt vor einer hellen Wand.",
    "noUpdate": "Zurzeit gibt es hier nichts Neues.",
    "getInTouch": "Kontakt aufnehmen",
    "notFoundTitle": "Seite nicht gefunden",
    "notFoundDescription": "Diese Seite wurde auf voidshell nicht gefunden.",
    "notFoundLabel": "404 / Seite nicht gefunden",
    "notFoundHeading": "Hier ist nichts.",
    "notFoundText": "Die Seite wurde möglicherweise verschoben oder die Adresse ist falsch.",
    "backHome": "Zurück zu voidshell",
    "socialAlt": "voidshell. Robin. Linux, Systeme und praktische IT.",
    "jobSearch": "Ich suche eine Junior-Stelle im System Engineering im Kanton Zürich, mit Schwerpunkt Infrastruktur, Linux oder 2nd-Level-Support.",
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
    "approachText": "Fehlersuche ist für mich ein Puzzle. Ich stelle Fragen, prüfe Annahmen und setze die Teile zusammen, bis ich die Ursache verstehe. Mir ist wichtig, warum eine Lösung funktioniert. Ich möchte weiterlernen und immer mehr Probleme selbstständig lösen.",
    "outsideTitle": "Abseits der IT.",
    "outsideText": "Ich spiele verschiedene Games, darunter kompetitive FPS, und mag Anime, Manga, Manhwa und Webtoons. Auch Schwimmen und Parkour/Freerunning gehören dazu, obwohl ich heute seltener dazu komme.",
    "nextTitle": "Was als Nächstes kommt.",
    "courseContext": "Kurs Cloud-native, DevOps und Container an der TBZ, abgeschlossen 2026.",
    "courseLink": "Zu den Kursarbeiten",
    "career": [
      {
        "company": "Spital Zollikerberg",
        "role": "Lehre als ICT-Fachmann EFZ",
        "dates": "Aug. 2023 bis Aug. 2026",
        "summary": "1st- und 2nd-Level-Support für Mitarbeitende aller Stationen und Abteilungen, direkt vor Ort im Spital, per Fernzugriff und am Telefon.",
        "points": [
          "Tickets in TOPdesk bearbeitet und Anrufe aus dem Callcenter entgegengenommen, Probleme gelöst und Tickets bei Bedarf eskaliert.",
          "Drucker-, Hardware- und Softwareprobleme sowie einfache Netzwerkstörungen behoben und Aufgaben rund um Active Directory, DNS und DHCP übernommen.",
          "On- und Offboarding im Active Directory mit eigenen PowerShell-Skripten automatisiert.",
          "Über 100 PCs und Notebooks mit SCCM aufgesetzt und verwaltet, Mobilgeräte mit Workspace ONE."
        ]
      },
      {
        "company": "Huanga IT Solutions",
        "role": "Praktikum in der Systemtechnik",
        "dates": "Nov. 2022 bis Juni 2023",
        "summary": "Microsoft 365 und Azure Active Directory administriert und in der Serveradministration mitgearbeitet.",
        "points": []
      }
    ],
    "personalProjectsContext": "Lernprojekte: Discord-Befehle, Rollenprüfungen, asynchrone Event-Handler und Logging sowie responsive Webseiten und kleine JavaScript-Interaktionen."
  }
};

export function copy(language: Language = 'en') {
  return {
    ...translations[language],
    title: language === 'de' ? 'Robin Schmid · Linux, Systeme & praktische IT' : site.title,
    description: language === 'de' ? 'Robin Schmid, ICT-Fachmann EFZ. Infrastruktur, Linux, Cloud und Automatisierung, mit Kursarbeiten zu Cloud-Lösungen und Docker.' : site.description,
    introduction: language === 'de' ? 'Ich bin Robin Schmid, ICT-Fachmann EFZ mit Erfahrung im IT-Support und in der PowerShell-Automatisierung. Darauf baue ich in Systemtechnik, Linux und Cloud-Infrastruktur auf.' : site.introduction,
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
