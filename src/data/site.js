// Start here. Empty contact URLs are deliberately hidden from the website.
export const site = {
  name: 'Robin Schmid',
  brand: 'voidshell',
  // The canonical public domain. DNS and hosting are configured separately.
  url: 'https://voidshell.ch',
  // Use '/' on a custom domain. Use '/repository-name/' for GitHub project Pages.
  base: '/',
  title: 'Robin Schmid · Linux, systems & practical IT',
  description: 'Robin Schmid, ICT-Fachmann EFZ. Infrastructure, Linux, cloud and automation, with coursework in cloud solutions and Docker.',
  introduction: "I'm Robin, an ICT-Fachmann EFZ focused on infrastructure, cloud and automation. I like understanding how systems fit together.",
  email: 'robin.schmid@ik.me',
  profiles: [
    { label: 'GitHub', url: 'https://github.com/NoctisNex' },
    { label: 'GitLab', url: 'https://gitlab.com/NoctisNex' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/robin-s-881055231/' },
  ],
  // Add a sentence here to update the About page's "What's next" section.
  // An empty value keeps the section with a neutral "No update" message.
  currentFocus: '',
  navigation: [
    { label: 'work', href: '/#work' },
    { label: 'about', href: '/about/' },
    { label: 'contact', href: '/#contact' },
  ],
  // Example projects remain visibly labelled. Turn this off to hide them all.
  showExamples: false,
  // Private previews and unconfigured domains stay out of search indexes.
  allowIndexing: false,
};

// Internal URLs share the same prefix, including assets and Markdown images.
export function localUrl(path = '/') {
  return `${site.base.replace(/\/$/, '')}/${path.replace(/^\//, '')}`;
}

export function absoluteUrl(path = '/') {
  const origin = site.url || process.env.SITE_URL;
  return origin ? new URL(localUrl(path), origin).href : undefined;
}
