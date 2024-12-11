import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://elevraben.github.io',
  base: '/elevra-a',
  integrations: [react(), tailwind()],
});
