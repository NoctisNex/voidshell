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
    "aboutEyebrow": "About / Robin",
    "aboutHeading": [
      "The person",
      "behind voidshell."
    ],
    "aboutIntroduction": "I'm Robin Schmid, an ICT-Fachmann EFZ with a growing interest in infrastructure and the systems behind everyday services.",
    "aboutPortraitAlt": "Portrait of Robin in a black T-shirt against a light wall.",
    "aboutHeadings": [
      "From code to infrastructure.",
      "Putting the pieces together.",
      "Always more to learn.",
      "Away from IT.",
      "What's next."
    ],
    "aboutParagraphs": [
      "When I was younger, I wanted to become a software developer. An internship in systems engineering and my ICT-Fachmann apprenticeship changed where I wanted to focus. I became more interested in physical hardware, networking and the infrastructure that keeps services running.",
      "I completed my ICT-Fachmann EFZ apprenticeship at Spital Zollikerberg in 2026. Alongside first- and second-level support, I automated Active Directory onboarding and offboarding with my own PowerShell scripts. I also worked on device management, Exchange tasks and smaller network jobs.",
      "Before that, I worked with Microsoft 365 and Azure Active Directory and helped with server administration during a systems internship at Huanga IT Solutions.",
      "To me, troubleshooting is a puzzle. Before you can put it together, you need to know which pieces you have. That means asking questions, talking to the people affected and testing your assumptions.",
      "Experience helps you recognise likely causes and choose the next useful test. I want to understand why a fix works, so that the next problem is a little easier to work through.",
      "IT is too broad to know everything, but that gives me plenty to work towards. I want to become more proficient and solve more problems independently.",
      "Linux, cloud and infrastructure as code are areas I want to explore further. I have basic knowledge of Ansible and Terraform, and completed TBZ's Cloud-native, DevOps and Container course in 2026. I'm interested in how cloud infrastructure works and when it makes sense to use it.",
      "I play a range of games, including competitive FPS, and enjoy anime and manga, especially manhwa and webtoons. Swimming and parkour/freerunning have also been part of my life, although I don't do them as much these days."
    ],
    "noUpdate": "No update at the moment.",
    "getInTouch": "Get in touch",
    "notFoundTitle": "Page not found",
    "notFoundDescription": "This page could not be found on voidshell.",
    "notFoundLabel": "404 / page not found",
    "notFoundHeading": "Nothing here.",
    "notFoundText": "The page may have moved, or the address may be wrong.",
    "backHome": "Back to voidshell",
    "socialAlt": "voidshell. Robin. Linux, systems and practical IT."
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
    "aboutEyebrow": "Über mich / Robin",
    "aboutHeading": [
      "Der Mensch",
      "hinter voidshell."
    ],
    "aboutIntroduction": "Ich bin Robin Schmid, ICT-Fachmann EFZ. Mich interessieren Infrastruktur und die Systeme, die hinter alltäglichen Diensten stecken.",
    "aboutPortraitAlt": "Porträt von Robin in einem schwarzen T-Shirt vor einer hellen Wand.",
    "aboutHeadings": [
      "Vom Code zur Infrastruktur.",
      "Die Teile zusammenfügen.",
      "Es gibt immer mehr zu lernen.",
      "Abseits der IT.",
      "Was als Nächstes kommt."
    ],
    "aboutParagraphs": [
      "Als ich jünger war, wollte ich Softwareentwickler werden. Ein Praktikum in der Systemtechnik und meine Lehre als ICT-Fachmann haben meinen Schwerpunkt verändert. Physische Hardware, Netzwerke und die Infrastruktur, die Dienste am Laufen hält, haben mich zunehmend interessiert.",
      "2026 habe ich meine Lehre als ICT-Fachmann EFZ am Spital Zollikerberg abgeschlossen. Neben dem First- und Second-Level-Support habe ich das Onboarding und Offboarding im Active Directory mit eigenen PowerShell-Skripten automatisiert. Ausserdem habe ich in der Geräteverwaltung gearbeitet, Aufgaben in Exchange übernommen und kleinere Netzwerkarbeiten erledigt.",
      "Davor habe ich während eines Praktikums in der Systemtechnik bei Huanga IT Solutions mit Microsoft 365 und Azure Active Directory gearbeitet und bei der Serveradministration mitgeholfen.",
      "Für mich ist Fehlersuche wie ein Puzzle. Bevor man es zusammensetzen kann, muss man wissen, welche Teile man hat. Dazu gehört, Fragen zu stellen, mit den betroffenen Personen zu sprechen und die eigenen Annahmen zu überprüfen.",
      "Mit der Erfahrung erkennt man wahrscheinliche Ursachen besser und kann gezielter entscheiden, welcher Test als Nächstes sinnvoll ist. Ich will verstehen, warum eine Lösung funktioniert, damit ich das nächste Problem etwas leichter angehen kann.",
      "Die IT ist zu breit, um alles zu wissen. Genau das gibt mir aber auch viele Ziele. Ich möchte fachlich besser werden und immer mehr Probleme selbstständig lösen können.",
      "Linux, Cloud und Infrastructure as Code sind Bereiche, in die ich mich weiter vertiefen möchte. Ich habe Grundkenntnisse in Ansible und Terraform und 2026 den Kurs Cloud-native, DevOps und Container an der TBZ abgeschlossen. Mich interessiert, wie Cloud-Infrastruktur funktioniert und wann ihr Einsatz sinnvoll ist.",
      "Ich spiele verschiedene Games, darunter auch kompetitive FPS, und mag Anime und Manga, besonders Manhwa und Webtoons. Auch Schwimmen und Parkour/Freerunning gehören zu meinen Interessen, obwohl ich heute seltener dazu komme."
    ],
    "noUpdate": "Zurzeit gibt es hier nichts Neues.",
    "getInTouch": "Kontakt aufnehmen",
    "notFoundTitle": "Seite nicht gefunden",
    "notFoundDescription": "Diese Seite wurde auf voidshell nicht gefunden.",
    "notFoundLabel": "404 / Seite nicht gefunden",
    "notFoundHeading": "Hier ist nichts.",
    "notFoundText": "Die Seite wurde möglicherweise verschoben oder die Adresse ist falsch.",
    "backHome": "Zurück zu voidshell",
    "socialAlt": "voidshell. Robin. Linux, Systeme und praktische IT."
  }
};

export function copy(language: Language = 'en') {
  return {
    ...translations[language],
    title: language === 'de' ? 'Robin Schmid · Linux, Systeme & praktische IT' : site.title,
    description: language === 'de' ? 'Robin Schmid, ICT-Fachmann EFZ. Infrastruktur, Linux, Cloud und Automatisierung, mit Kursarbeiten zu Cloud-Lösungen und Docker.' : site.description,
    introduction: language === 'de' ? 'Ich bin Robin, ICT-Fachmann EFZ mit Schwerpunkt auf Infrastruktur, Cloud und Automatisierung. Ich verstehe gerne, wie Systeme zusammenspielen.' : site.introduction,
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
