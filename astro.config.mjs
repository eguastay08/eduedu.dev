import { defineConfig } from "astro/config"
import mdx from "@astrojs/mdx"
import sitemap from "@astrojs/sitemap"
import tailwind from "@astrojs/tailwind"
import solidJs from "@astrojs/solid-js"
import vercel from "@astrojs/vercel/serverless"

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://eduedu.dev",
  integrations: [mdx(), sitemap(), solidJs(), tailwind({ applyBaseStyles: false })],
  adapter: vercel({
    webAnalytics: { enabled: true }
  })
})