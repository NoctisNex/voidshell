import { getCollection } from 'astro:content';
import { site } from './site';
import type { Language } from './i18n';

// One shared filter keeps the homepage, project routes and sitemap in sync.
export async function getProjects(language: Language = 'en') {
  const projects = await getCollection('projects', ({ data }) =>
    data.language === language && !data.draft && (site.showExamples || !data.example)
  );
  return projects.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}
