import { defineThemeContract } from "@pandacss/dev";

/**
 * This function utilizes `defineThemeContract` to establish a theme structure
 */
export const defineTheme = defineThemeContract({
  tokens: {
    colors: {
      brand: {
        primary: { value: "" },
        secondary: { value: "" },
        accent: { value: "" },
      },
    },
  },
  semanticTokens: {
    colors: {
      bg: {
        value: {
          base: "",
          _dark: "",
        },
      },
    },
  },
});
