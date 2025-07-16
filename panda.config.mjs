import { defineConfig } from "@pandacss/dev";
import { blueTheme, redTheme, preset } from "./src/styles/themes";

const isProduction = process.env.NODE_ENV === "production";

export default defineConfig({
  preflight: true,
  include: ["./src/**/*.{js,jsx,ts,tsx}"],
  exclude: [],
  prefix: "poc",
  outdir: "styled-system",

  strictPropertyValues: true,
  strictTokens: true,
  jsxFramework: "react",
  shorthands: false,
  presets: [preset],

  minify: isProduction,
  optimize: isProduction,
  themes: { blueTheme, redTheme },

  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
    redTheme: "[data-panda-theme=redTheme] &",
    blueTheme: "[data-panda-theme=blueTheme] &",
  },

  staticCss: {
    themes: ["redTheme", "blueTheme"],
    recipes: {
      button: ["*"],
    },
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
