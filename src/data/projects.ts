import { getCollection } from 'astro:content';
import { site } from './site';

// One shared filter keeps the homepage, project routes and sitemap in sync.
export async function getProjects() {
  const projects = await getCollection('projects', ({ data }) =>
    !data.draft && (site.showExamples || !data.example)
  );
  return projects.sort((a, b) => a.data.order - b.data.order || a.id.localeCompare(b.id));
}
