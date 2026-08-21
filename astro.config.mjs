import { defineConfig } from 'astro/config';

const isPagesPreview = process.env.DEPLOY_TARGET === 'github-pages';

export default defineConfig({
  site: 'https://kashalotik.ru',
  base: isPagesPreview ? '/kashalotik/' : '/',
  output: 'static',
  build: { format: 'directory' },
});
