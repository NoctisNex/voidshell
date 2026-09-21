import { site, localUrl } from './site';

export type Language = 'en' | 'de';

// German copy uses Swiss spelling and established English technical terms.
// Keep both versions in sync when editing content.
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
      "Automation."
    ],
    "explore": "Explore the work",
    "portraitAlt": "Robin, wearing a black T-shirt.",
    "portraitCaption": "Robin Schmid",
    "footnote": "Linux. Systems. Automation.",
    "collection": "What I've worked on so far",
    "workLabel": "01 / work",
    "workTitle": "Selected work.",
    "workNote": "Coursework from the Cloud-native, DevOps and Container course at TBZ, completed in 2026.",
    "exampleWork": "The entries below are examples. Real project write-ups will go here.",
    "emptyWork": "Project write-ups are on their way.",
    "aboutLabel": "02 / about",
    "aboutTeaserTitle": [
      "A little more",
      "about me."
    ],
    "aboutTeaser": "Working in IT drew my interest towards servers, networks and Linux. I like understanding how systems work and figuring out why something goes wrong.",
    "moreAbout": "A little more about me",
    "contactLabel": "03 / contact",
    "contactTitle": "Get in touch.",
    "emptyContact": "Contact details will be added here.",
    "aboutTitle": "About Robin Schmid",
    "aboutDescription": "Robin Schmid, ICT-Fachmann EFZ. My IT experience, personal Linux desktop with Hyprland, Red Hat Academy coursework and interests beyond IT.",
    "aboutEyebrow": "About / voidshell",
    "aboutIntroduction": "I started out wanting to write software. While working in IT support and systems engineering, I realised that servers, networks and Linux particularly interested me. I want to understand how these systems work and interact.",
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
    "jobSearch": "I'm looking for a junior systems engineer role in the canton of Zurich, ideally focused on Linux and IT infrastructure. I'm also interested in second-level support roles with opportunities to move into systems engineering.",
    "experienceLink": "Technical experience",
    "linux": {
      "link": "My Linux experience",
      "label": "Linux",
      "title": "Linux, day to day.",
      "personalLabel": "Personal use",
      "desktopTitle": "At home on Linux.",
      "desktopText": "I've used Linux as my personal desktop for nearly a year. I currently use CachyOS with Hyprland and prefer working with keyboard shortcuts.",
      "setupTitle": "Setting up Arch Linux",
      "setupText": "I've installed and set up Arch Linux myself.",
      "distributionsLabel": "Distros I've worked with",
      "learningLabel": "Coursework",
      "completed": "Completed",
      "inProgress": "In progress",
      "courseDescriptions": {
        "rh104": "Practical Linux basics: working with the desktop and shell, managing files and permissions, installing packages, and checking network settings and system resources.",
        "rh124": "I'm already familiar with much of this from practical experience. The course gives me a structured review of these topics in RHEL: users, groups and permissions, systemd services, SSH, networking and DNF.",
        "rh134": "Currently learning more advanced administration: shell scripting, scheduled tasks, storage with LVM, SELinux and boot troubleshooting, plus Podman containers and image mode for RHEL."
      }
    },
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
    "approachText": "When troubleshooting, I want to understand the cause and why a fix works. I ask questions, test my assumptions and follow the evidence. That helps me learn and work more independently.",
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
    "repository": "Repository",
    "live": "Zum Projekt",
    "hero": [
      "Linux.",
      "Systeme.",
      "Automation."
    ],
    "explore": "Projekte ansehen",
    "portraitAlt": "Robin in einem schwarzen T-Shirt.",
    "portraitCaption": "Robin Schmid",
    "footnote": "Linux. Systeme. Automation.",
    "collection": "Was ich bisher gemacht habe",
    "workLabel": "01 / Projekte",
    "workTitle": "Ausgewählte Projekte.",
    "workNote": "Diese Arbeiten sind im Kurs «Cloud-native, DevOps und Container» an der TBZ entstanden, den ich 2026 abgeschlossen habe.",
    "exampleWork": "Die folgenden Einträge sind Beispiele. Später stelle ich hier meine eigenen Projekte vor.",
    "emptyWork": "Projektbeschreibungen folgen.",
    "aboutLabel": "02 / Über mich",
    "aboutTeaserTitle": [
      "Etwas mehr",
      "über mich."
    ],
    "aboutTeaser": "Durch meine Arbeit in der IT ist mein Interesse an Servern, Netzwerken und Linux gewachsen. Ich möchte verstehen, wie Systeme funktionieren und wo es hakt, wenn etwas nicht läuft.",
    "moreAbout": "Mehr über mich",
    "contactLabel": "03 / Kontakt",
    "contactTitle": "Schreib mir.",
    "emptyContact": "Kontaktdaten folgen.",
    "aboutTitle": "Über Robin Schmid",
    "aboutDescription": "Robin Schmid, ICT-Fachmann EFZ. Meine IT-Erfahrung, mein privater Linux-Desktop mit Hyprland, Kurse an der Red Hat Academy und Interessen ausserhalb der IT.",
    "aboutEyebrow": "Über mich / voidshell",
    "aboutIntroduction": "Ursprünglich wollte ich Software entwickeln. Während meiner Arbeit im IT-Support und im System Engineering habe ich gemerkt, dass mich Server, Netzwerke und Linux besonders interessieren. Ich möchte verstehen, wie diese Systeme funktionieren und zusammenspielen.",
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
    "jobSearch": "Ich suche eine Stelle als Junior System Engineer im Kanton Zürich, idealerweise mit Fokus auf Linux und IT-Infrastruktur. Auch eine Stelle im 2nd-Level-Support mit Entwicklungsmöglichkeiten in Richtung System Engineering interessiert mich.",
    "experienceLink": "Technische Erfahrung",
    "linux": {
      "link": "Meine Linux-Erfahrung",
      "label": "Linux",
      "title": "Linux im Alltag.",
      "personalLabel": "Private Nutzung",
      "desktopTitle": "Mein Desktop läuft mit Linux.",
      "desktopText": "Seit knapp einem Jahr nutze ich Linux auf meinem privaten Desktop. Aktuell verwende ich CachyOS mit Hyprland. Am liebsten arbeite ich mit Keyboard Shortcuts.",
      "setupTitle": "Arch Linux selbst einrichten",
      "setupText": "Arch Linux habe ich selbst installiert und eingerichtet.",
      "distributionsLabel": "Distros, mit denen ich gearbeitet habe",
      "learningLabel": "Kurse",
      "completed": "Abgeschlossen",
      "inProgress": "In Bearbeitung",
      "courseDescriptions": {
        "rh104": "Grundlagen für den Linux-Alltag: mit Desktop und Shell arbeiten, Dateien und Permissions verwalten, Packages installieren sowie Netzwerkeinstellungen und Systemressourcen prüfen.",
        "rh124": "Vieles davon kenne ich bereits aus der Praxis. Im Kurs gehe ich diese Themen für RHEL nochmals strukturiert durch: Users, Groups und Permissions, systemd-Services, SSH, Networking und DNF.",
        "rh134": "Hier vertiefe ich aktuell meine Kenntnisse in Shell Scripting, Task Scheduling, Storage mit LVM, SELinux und Boot Troubleshooting. Dazu kommen Podman-Container und Image Mode für RHEL."
      }
    },
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
    "workExperience": "Meine bisherigen Erfahrungen.",
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
    "approachText": "Beim Troubleshooting möchte ich die Ursache verstehen und nachvollziehen können, warum ein Fix funktioniert. Ich stelle Fragen, prüfe meine Annahmen und gehe den Hinweisen nach. Dabei lerne ich dazu und kann zunehmend selbstständig arbeiten.",
    "outsideTitle": "In meiner Freizeit.",
    "outsideText": "Ich spiele gerne verschiedene Games, darunter auch Competitive FPS. Ausserdem mag ich Anime, Manga, Manhwa und Webtoons. Schwimmen und Parkour/Freerunning machen mir ebenfalls Spass, auch wenn ich inzwischen seltener dazu komme.",
    "nextTitle": "Wie es weitergeht.",
    "courseContext": "Kurs «Cloud-native, DevOps und Container» an der TBZ, abgeschlossen 2026.",
    "courseLink": "Zu den Kursarbeiten",
    "career": [
      {
        "company": "Spital Zollikerberg",
        "role": "Lehre als ICT-Fachmann EFZ",
        "dates": "Aug. 2023 bis Aug. 2026",
        "summary": "1st- und 2nd-Level-Support für Mitarbeitende auf den Stationen und in den Abteilungen des Spitals: vor Ort, remote und am Telefon.",
        "points": [
          "Tickets in TOPdesk bearbeitet und Anrufe aus dem Callcenter entgegengenommen. Probleme gelöst oder Tickets bei Bedarf eskaliert.",
          "Drucker-, Hardware- und Softwareprobleme sowie einfache Netzwerkstörungen behoben und Aufgaben rund um Active Directory, DNS und DHCP übernommen.",
          "Onboarding und Offboarding in Active Directory mit eigenen PowerShell-Scripts automatisiert.",
          "Über 100 PCs und Notebooks mit SCCM eingerichtet und verwaltet sowie Mobilgeräte mit Workspace ONE betreut."
        ]
      },
      {
        "company": "Huanga IT Solutions",
        "role": "Praktikum im System Engineering",
        "dates": "Nov. 2022 bis Juni 2023",
        "summary": "Microsoft 365 und Azure Active Directory verwaltet und bei der Administration von Servern mitgearbeitet.",
        "points": []
      }
    ],
    "personalProjectsContext": "In eigenen Lernprojekten habe ich mich mit Discord Commands, Role Checks, Async Event Handlers und Logging beschäftigt. Ausserdem habe ich responsive Weblayouts und kleine Interaktionen mit JavaScript umgesetzt."
  }
};

export function copy(language: Language = 'en') {
  return {
    ...translations[language],
    title: language === 'de' ? 'Robin Schmid · Linux, Systeme & Automation' : site.title,
    description: language === 'de' ? 'Robin Schmid, ICT-Fachmann EFZ. Mein Portfolio zu Infrastruktur, Linux, Cloud und Automatisierung mit Kursarbeiten zu Cloud-Lösungen und Docker.' : site.description,
    introduction: language === 'de' ? 'Ich bin Robin Schmid, ICT-Fachmann EFZ. Ich habe im IT-Support gearbeitet und Abläufe mit PowerShell automatisiert. Jetzt möchte ich mich im System Engineering weiterentwickeln, besonders in den Bereichen Linux und Cloud-Infrastruktur.' : site.introduction,
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
