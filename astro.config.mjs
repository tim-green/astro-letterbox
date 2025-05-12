import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  outDir: './letterbox',
  build: {
    assetsPrefix: '/letterbox'
  },
  
});