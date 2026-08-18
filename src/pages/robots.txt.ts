import type { APIRoute } from 'astro';

export const GET: APIRoute = () => {
  const previewBuild = import.meta.env.BASE_URL !== '/';
  const body = previewBuild
    ? 'User-agent: *\nDisallow: /\n'
    : 'User-agent: *\nAllow: /\n\nSitemap: https://kashalotik.ru/sitemap.xml\n';

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
