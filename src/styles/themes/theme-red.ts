import { defineTheme } from "./theme.utils";

export const redTheme = defineTheme({
  tokens: {
    colors: {
      brand: {
        primary: { value: "#E31837" },
        secondary: { value: "#FFB81C" },
        accent: { value: "#FFB81C" },
      },
    },
  },
  semanticTokens: {
    colors: {
      bg: {
        value: {
          base: "{colors.grey.200}",
          _dark: "{colors.grey.900}",
        },
      },
    },
  },
});
