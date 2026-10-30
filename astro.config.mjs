import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://fromdesignto.dev',
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'file',
  },
});
