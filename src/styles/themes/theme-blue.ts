import { defineTheme } from "./theme.utils";

export const blueTheme = defineTheme({
  tokens: {
    colors: {
      brand: {
        primary: { value: "#69BE28" },
        secondary: { value: "#002244" },
        accent: { value: "#A5ACAF" },
      },
    },
  },
  semanticTokens: {
    colors: {
      bg: {
        value: {
          base: "{colors.white}",
          _dark: "{colors.black}",
        },
      },
    },
  },
});
