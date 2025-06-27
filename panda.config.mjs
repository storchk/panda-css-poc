import { defineConfig } from "@pandacss/dev";
import {
  blueTheme,
  redTheme,
  tokens,
  semanticTokens,
  themeExtend,
} from "./src/styles/themes";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  prefix: "poc",
  outdir: "styled-system",

  strictPropertyValues: true,
  strictTokens: true,
  jsxFramework: "react",
  presets: [],

  // Define the global tokens
  theme: {
    extend: themeExtend,
    tokens,
    semanticTokens,
  },

  // Define the theme variants
  themes: { blueTheme, redTheme },

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
    redTheme: "[data-panda-theme=redTheme] &",
    blueTheme: "[data-panda-theme=blueTheme] &",
  },

  staticCss: {
    themes: ["redTheme", "blueTheme"],
  },

  globalCss: {
    extend: {
      body: {
        backgroundColor: "bg",
        padding: "md",
      },
    },
  },
});
