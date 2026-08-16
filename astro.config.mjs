import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kashalotik.ru',
  base: process.env.GITHUB_ACTIONS === 'true' ? '/kashalotik' : '/',
  output: 'static',
  build: { format: 'directory' },
});
