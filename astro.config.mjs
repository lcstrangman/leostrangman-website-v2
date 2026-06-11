// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import cloudflare from '@astrojs/cloudflare'

const isProd = import.meta.env.PROD;

// https://astro.build/config
export default defineConfig({
  site: 'https://leostrangman.com',
    output: 'static',
    vite: {
        plugins: [tailwindcss()],
        esbuild: {
            drop: isProd ? ['console', 'debugger'] : []
        }
    },
    devToolbar: { enabled: false },
    image: {
        domains: ['leostrangman.com'],
        remotePatterns: [{ protocol: 'https' }]
    }
});