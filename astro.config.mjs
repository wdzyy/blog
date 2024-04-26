import path from 'path'
import { fileURLToPath } from 'url'
import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vue from "@astrojs/vue";
const __dirname = path.dirname(fileURLToPath(import.meta.url))

// https://astro.build/config
export default defineConfig({
  site: 'https://wdzyy.github.io',
  integrations: [tailwind(), vue(), mdx(), sitemap()],
  vite: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src'),
      },
    },
  },
  markdown: {
    shikiConfig: {
      // 选择 Shiki 内置的主题（或添加你自己的主题）
      // https://github.com/shikijs/shiki/blob/main/docs/themes.md
      theme: 'material-theme-darker',
    },
  },
})
