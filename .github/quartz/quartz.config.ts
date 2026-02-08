import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

const config: QuartzConfig = {
  configuration: {
    pageTitle: "Tronix",
    pageTitleSuffix: " | René Ullrich",
    enableSPA: true,
    enablePopovers: true,
    analytics: {
      provider: "plausible",
    },
    locale: "en-US",
    baseUrl: "tronix.no",
    ignorePatterns: ["private", "templates", ".obsidian"],
    defaultDateType: "modified",
    theme: {
      cdnCaching: true,
      typography: {
        fontOrigin: "googleFonts",
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#faf8f5",
          lightgray: "#e7e3dd",
          gray: "#8c867f",
          darkgray: "#3b3732",
          dark: "#1c1a18",
          secondary: "#2f5d62",
          tertiary: "#7da0a3",
          highlight: "rgba(47, 93, 98, 0.15)",
          textHighlight: "#ffead6",
        },
        darkMode: {
          light: "#1c1a18",
          lightgray: "#3b3732",
          gray: "#8c867f",
          darkgray: "#c9c4bc",
          dark: "#f6f3ee",
          secondary: "#7da0a3",
          tertiary: "#cfe1e2",
          highlight: "rgba(125, 160, 163, 0.15)",
          textHighlight: "#403428",
        },
      },
    },
  },
  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate(),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),
      Plugin.Description(),
      Plugin.Latex({
        renderEngine: "katex",
        enableErrorTracing: false,
      }),
    ],
    filters: [Plugin.RemoveDrafts()],
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
