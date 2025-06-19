import { defineConfig } from "@pandacss/dev";

export default defineConfig({
  // Whether to use css reset
  preflight: true,

  // Where to look for your css declarations
  include: ["./src/**/*.{js,jsx,ts,tsx}", "./stories/**/*.{js,jsx,ts,tsx}"],

  // Files to exclude
  exclude: [],
  conditions: {
    light: "[data-color-mode=light] &",
    dark: "[data-color-mode=dark] &",
    theme1: "[data-theme=theme1] &",
    theme2: "[data-theme=theme2] &",
  },

  // Useful for theme customization
  theme: {
    extend: {
      tokens: {
        colors: {
          theme1: {
            light: {
              grey0: { value: "#ffffff" },
              grey1: { value: "#f5f5f5" },
              grey3: { value: "#e0e0e0" },
              grey6: { value: "#757575" },
              grey9: { value: "#212121" },
              brand: { value: "#845ec2" },
              success: { value: "#22c55e" },
              warning: { value: "#facc15" },
              error: { value: "#ef4444" },
              info: { value: "#3b82f6" },
            },
            dark: {
              grey0: { value: "#18181b" },
              grey1: { value: "#27272a" },
              grey3: { value: "#52525b" },
              grey6: { value: "#a1a1aa" },
              grey9: { value: "#fafafa" },
              brand: { value: "#845ec2" },
              success: { value: "#4ade80" },
              warning: { value: "#fde047" },
              error: { value: "#f87171" },
              info: { value: "#60a5fa" },
            },
          },
          theme2: {
            light: {
              grey0: { value: "#ffffff" },
              grey1: { value: "#f5f5f5" },
              grey3: { value: "#e0e0e0" },
              grey6: { value: "#757575" },
              grey9: { value: "#212121" },
              brand: { value: "#FFB81C" },
              success: { value: "#22c55e" },
              warning: { value: "#facc15" },
              error: { value: "#ef4444" },
              info: { value: "#3b82f6" },
            },
            dark: {
              grey0: { value: "#18181b" },
              grey1: { value: "#27272a" },
              grey3: { value: "#52525b" },
              grey6: { value: "#a1a1aa" },
              grey9: { value: "#fafafa" },
              brand: { value: "#FFB81C" },
              success: { value: "#4ade80" },
              warning: { value: "#fde047" },
              error: { value: "#f87171" },
              info: { value: "#60a5fa" },
            },
          },
        },
      },
      semanticTokens: {
        colors: {
          bg: {
            value: {
              _theme1: {
                base: "{colors.theme1.light.brand}",
                _dark: "{colors.theme1.dark.brand}",
              },
            },
          },
          text: {
            value: {
              _theme1: {
                base: "{colors.theme1.light.grey3}",
                _dark: "{colors.theme1.dark.grey3}",
              },
            },
            _theme2: {
              base: "{colors.theme2.light.grey3}",
              _dark: "{colors.theme2.dark.grey3}",
            },
          },
        },
      },
    },
  },

  // The output directory for your css system
  outdir: "styled-system",
});
