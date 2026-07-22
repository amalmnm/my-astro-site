import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://amalmnm.github.io',
  base: import.meta.env.PROD ? '/my-astro-site' : '/',

  vite: {
    plugins: [tailwindcss()]
  }
});