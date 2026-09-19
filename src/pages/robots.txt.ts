import { site, absoluteUrl } from '../data/site';

export function GET() {
  const sitemap = absoluteUrl('/sitemap.xml');
  const indexing = site.allowIndexing && Boolean(site.url);
  return new Response(`User-agent: *\n${indexing ? 'Allow: /' : 'Disallow: /'}\n${sitemap ? `Sitemap: ${sitemap}\n` : ''}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
