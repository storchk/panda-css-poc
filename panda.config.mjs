import { defineConfig } from "@pandacss/dev";
import {
  blueTheme,
  pinkTheme,
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
  themes: { blueTheme, pinkTheme },

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
    pinkTheme: "[data-panda-theme=pinkTheme] &",
    blueTheme: "[data-panda-theme=blueTheme] &",
  },

  staticCss: {
    themes: ["pinkTheme", "blueTheme"],
  },
});
