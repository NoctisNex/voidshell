import { getProjects } from '../data/projects';
import { absoluteUrl } from '../data/site';

export async function GET() {
  const projects = (await getProjects()).filter(project => !project.data.example);
  const paths = ['/', '/about/', ...projects.map(project => `/work/${project.data.slug || project.id}/`)];
  const urls = paths.map(path => absoluteUrl(path)).filter(Boolean);
  const escape = (value: string) => value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  const xml = `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls.map(url => `<url><loc>${escape(url!)}</loc></url>`).join('')}</urlset>`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
}
