import type { APIRoute } from 'astro';

const pages = ['', 'programs/', 'prices/', 'schedule/', 'team/', 'safety/', 'rules/', 'contacts/'];

export const GET: APIRoute = () => {
  const urls = pages.map(path => `  <url><loc>https://kashalotik.ru/${path}</loc></url>`).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>`;

  return new Response(xml, {
    headers: { 'Content-Type': 'application/xml; charset=utf-8' },
  });
};
