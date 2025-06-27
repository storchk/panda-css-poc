import { defineTheme } from "./theme.utils";

export const pinkTheme = defineTheme({
  tokens: {
    colors: {},
  },
  semanticTokens: {
    colors: {
      bg: {
        value: {
          base: "{colors.theme2Brand}",
          _dark: "{colors.secondary}",
        },
      },
    },
  },
});
