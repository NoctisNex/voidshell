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
    "aboutTeaser": "Working in IT drew my interest towards servers, networks and Linux. I like understanding how systems work and figuring out why something goes wrong. While I look for my next role, I'm keeping that curiosity going with daily KodeKloud labs and Engineer tasks.",
    "moreAbout": "A little more about me",
    "contactLabel": "03 / contact",
    "contactTitle": "Get in touch.",
    "emptyContact": "Contact details will be added here.",
    "aboutTitle": "About Robin Schmid",
    "aboutDescription": "Robin Schmid, ICT-Fachmann EFZ. My IT experience, daily KodeKloud labs and RHCSA preparation, Red Hat coursework and personal Linux desktop with Omarchy.",
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
    "learning": {
      "label": "Current learning",
      "title": "Learning by doing.",
      "motivation": "I've been looking for a job since around late July or early August. I miss working and learning something new along the way. I felt like I wasn't developing my skills anymore, so I wanted to find something that gave me practical work to do while I kept looking for a job.",
      "approach": "That's how I found KodeKloud and signed up for a subscription. I'm having a lot of fun with the course, especially the labs where I can try things myself. Breaking something and working out how to fix it helps me understand how it works. I've been practising every day.",
      "courseLabel": "Current course",
      "courseText": "I'm taking KodeKloud's RHCSA prep course, with labs where I practise Linux administration.",
      "progressLabel": "Course progress",
      "complete": "complete",
      "asOf": "As of",
      "engineerLabel": "Practice tasks and tickets",
      "engineerText": "I also work through tasks and tickets on KodeKloud Engineer. The platform has a fictional company with its own IT infrastructure, and the tasks are based on problems you might come across at work. Working through those tickets gives me some of the routine I've been missing.",
      "engineerContext": "These tickets are part of my training."
    },
    "linux": {
      "link": "My Linux experience",
      "label": "Linux",
      "title": "Linux, day to day.",
      "personalLabel": "Personal use",
      "desktopTitle": "At home on Linux.",
      "desktopText": "I've used Linux as my personal desktop for nearly a year. I recently switched from CachyOS to Omarchy and am enjoying it a lot. I use Hyprland and prefer working with keyboard shortcuts.",
      "setupTitle": "Setting up Arch Linux",
      "setupText": "I've installed and set up Arch Linux myself.",
      "distributionsLabel": "Distros I've worked with",
      "learningLabel": "Coursework",
      "completed": "Completed",
      "planned": "Planned",
      "courseDescriptions": {
        "rh104": "Practical Linux basics: working with the desktop and shell, managing files and permissions, installing packages, and checking network settings and system resources.",
        "rh134": "I plan to take this after finishing KodeKloud's RHCSA prep course. It's the next step in my Linux administration learning."
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
          "Windows / PowerShell / Active Directory",
          "Microsoft 365 / Microsoft Entra ID / SCCM",
          "TOPdesk / WAPT / Aruba ClearPass"
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
        "summary": "Provided first- and second-level support for Windows, Microsoft 365 and internal applications; handled TOPdesk tickets remotely and on site.",
        "points": [
          "Set up and maintained workstations, thin clients and peripherals; deployed Windows and assigned software through existing SCCM processes.",
          "Handled AD group memberships and mailbox permissions; processed account changes by manually running PowerShell scripts in coordination with the IAM team.",
          "Diagnosed and resolved connectivity issues, including DNS and DHCP problems; added and removed devices in Aruba ClearPass.",
          "Maintained inventory records in TOPdesk, independently placed hardware orders and coordinated with suppliers.",
          "Created and maintained documentation and knowledge base articles; delivered monthly IT induction training for new employees."
        ]
      },
      {
        "company": "Huanga IT Solutions",
        "role": "Systems engineering internship",
        "dates": "Nov 2022 to Jun 2023",
        "summary": "Manually prepared and configured Windows PCs and laptops for customers, including on-site setup and handover, and occasionally packaged and deployed software using WAPT.",
        "points": [
          "Supported customers by phone, email and on site with technical issues affecting devices and software.",
          "Handled requests relating to user accounts, licences, groups and permissions in Microsoft 365 and Azure Active Directory, now Microsoft Entra ID."
        ]
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
    "aboutTeaser": "Durch meine Arbeit in der IT ist mein Interesse an Servern, Netzwerken und Linux gewachsen. Ich möchte verstehen, wie Systeme funktionieren und wo es hakt, wenn etwas nicht läuft. Während ich eine neue Stelle suche, bleibe ich mit täglichen KodeKloud-Labs und Engineer-Aufgaben dran.",
    "moreAbout": "Mehr über mich",
    "contactLabel": "03 / Kontakt",
    "contactTitle": "Schreib mir.",
    "emptyContact": "Kontaktdaten folgen.",
    "aboutTitle": "Über Robin Schmid",
    "aboutDescription": "Robin Schmid, ICT-Fachmann EFZ. Meine IT-Erfahrung, tägliche KodeKloud-Labs und RHCSA-Vorbereitung, Red-Hat-Kurse und mein privater Linux-Desktop mit Omarchy.",
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
    "learning": {
      "label": "Was ich gerade lerne",
      "title": "Lernen durch Ausprobieren.",
      "motivation": "Seit etwa Ende Juli oder Anfang August bin ich auf Stellensuche. Ich vermisse die Arbeit und das Gefühl, dabei etwas dazuzulernen. Ich hatte den Eindruck, mich fachlich kaum noch weiterzuentwickeln. Deshalb habe ich nach etwas gesucht, bei dem ich auch ohne Stelle wieder regelmässig an konkreten Aufgaben arbeiten kann.",
      "approach": "So bin ich auf KodeKloud gestossen und habe ein Abo abgeschlossen. Der Kurs macht mir viel Spass, besonders die Labs, in denen ich alles selbst ausprobieren kann. Wenn ich dabei etwas kaputtmache und es selbst wieder repariere, verstehe ich besser, wie es funktioniert. Inzwischen übe ich jeden Tag.",
      "courseLabel": "Aktueller Kurs",
      "courseText": "Im RHCSA-Vorbereitungskurs von KodeKloud übe ich die Linux-Administration direkt in den Labs.",
      "progressLabel": "Kursfortschritt",
      "complete": "abgeschlossen",
      "asOf": "Stand",
      "engineerLabel": "Aufgaben und Tickets zum Üben",
      "engineerText": "Neben dem Kurs bearbeite ich Aufgaben und Tickets auf KodeKloud Engineer. Dort gibt es eine fiktive Firma mit eigener IT-Infrastruktur. Die Aufgaben orientieren sich an Problemen aus dem Arbeitsalltag. Die Tickets geben mir wieder etwas von der Routine, die mir im Moment fehlt.",
      "engineerContext": "Die Tickets sind Teil meiner Weiterbildung."
    },
    "linux": {
      "link": "Meine Linux-Erfahrung",
      "label": "Linux",
      "title": "Linux im Alltag.",
      "personalLabel": "Private Nutzung",
      "desktopTitle": "Mein Desktop läuft mit Linux.",
      "desktopText": "Seit knapp einem Jahr nutze ich Linux auf meinem privaten Desktop. Vor Kurzem bin ich von CachyOS zu Omarchy gewechselt und habe viel Freude daran. Ich nutze Hyprland und arbeite am liebsten mit Keyboard Shortcuts.",
      "setupTitle": "Arch Linux selbst einrichten",
      "setupText": "Arch Linux habe ich selbst installiert und eingerichtet.",
      "distributionsLabel": "Distros, mit denen ich gearbeitet habe",
      "learningLabel": "Kurse",
      "completed": "Abgeschlossen",
      "planned": "Geplant",
      "courseDescriptions": {
        "rh104": "Grundlagen für den Linux-Alltag: mit Desktop und Shell arbeiten, Dateien und Permissions verwalten, Packages installieren sowie Netzwerkeinstellungen und Systemressourcen prüfen.",
        "rh134": "Diesen Kurs plane ich nach dem RHCSA-Vorbereitungskurs von KodeKloud. Damit möchte ich meine Kenntnisse in der Linux-Administration weiter vertiefen."
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
          "Windows / PowerShell / Active Directory",
          "Microsoft 365 / Microsoft Entra ID / SCCM",
          "TOPdesk / WAPT / Aruba ClearPass"
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
        "summary": "1st und 2nd Level Support für Windows, Microsoft 365 und interne Anwendungen; Bearbeitung von Tickets in TOPdesk, remote und vor Ort.",
        "points": [
          "Aufbau und Wartung von Arbeitsplätzen, Thin Clients und Peripherie; Windows-Bereitstellung und Softwarezuweisung über bestehende SCCM-Prozesse.",
          "Bearbeitung von AD-Gruppenmitgliedschaften und Postfachberechtigungen; Kontobearbeitung mit manuell ausgeführten PowerShell-Skripten in Abstimmung mit dem IAM-Team.",
          "Analyse und Behebung von Verbindungsproblemen, einschliesslich DNS und DHCP; Erfassen und Entfernen von Geräten in Aruba ClearPass.",
          "Inventarpflege in TOPdesk sowie selbstständige Hardwarebestellungen und Abstimmung mit Lieferanten.",
          "Erstellung und Pflege von Dokumentationen und Know-how-Artikeln; Durchführung der monatlichen IT-Schulung für neue Mitarbeitende."
        ]
      },
      {
        "company": "Huanga IT Solutions",
        "role": "Praktikum im System Engineering",
        "dates": "Nov. 2022 bis Juni 2023",
        "summary": "Manuelle Vorbereitung und Konfiguration von Windows-PCs und Laptops für Kunden sowie Einrichtung und Übergabe vor Ort; dabei auch gelegentliche Softwarepaketierung und -verteilung mit WAPT.",
        "points": [
          "Unterstützung von Kunden per Telefon, E-Mail und vor Ort bei technischen Problemen mit Geräten und Software.",
          "Bearbeitung von Anfragen zu Benutzerkonten, Lizenzen, Gruppen und Berechtigungen in Microsoft 365 und Azure Active Directory, heute Microsoft Entra ID."
        ]
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
    introduction: language === 'de' ? 'Ich bin Robin Schmid, ICT-Fachmann EFZ. Ich habe im IT-Support gearbeitet, Windows-Arbeitsplätze eingerichtet und Kontoänderungen mit PowerShell-Skripten bearbeitet. Jetzt möchte ich mich im System Engineering weiterentwickeln, besonders in den Bereichen Linux und Cloud-Infrastruktur.' : site.introduction,
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
