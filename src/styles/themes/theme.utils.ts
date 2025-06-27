import { defineThemeContract } from "@pandacss/dev";

/**
 * This function utilizes `defineThemeContract` to establish a theme structure
 */
export const defineTheme = defineThemeContract({
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
