import { defineTheme } from "./theme.utils";

export const blueTheme = defineTheme({
  tokens: {
    colors: {},
  },
  semanticTokens: {
    colors: {
      bg: {
        value: {
          base: "{colors.theme1Brand}",
          _dark: "{colors.secondary}",
        },
      },
    },
  },
});
