import type { APIRoute } from 'astro';
import { services } from '@/data/services';
import { builders } from '@/data/builders';
import { projects } from '@/data/projects';

export const GET: APIRoute = async () => {
  const baseUrl = 'https://craftgrid.test';

  const staticPages = [
    '',
    '/services',
    '/talent',
    '/projects',
    '/how-it-works',
    '/about',
    '/trust-safety',
    '/help',
    '/contact',
    '/terms',
    '/privacy'
  ];

  const serviceUrls = services.map(s => `/services/${s.slug}`);
  const builderUrls = builders.map(b => `/talent/${b.username}`);
  const projectUrls = projects.map(p => `/projects/${p.slug}`);

  const allUrls = [...staticPages, ...serviceUrls, ...builderUrls, ...projectUrls];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${allUrls
  .map(
    url => `  <url>
    <loc>${baseUrl}${url}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${url === '' ? '1.0' : '0.8'}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(sitemap, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600'
    }
  });
};
