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
      primary: {
        value: {
          base: "",
          _dark: "",
        },
      },
      secondary: {
        value: {
          base: "",
          _dark: "",
        },
      },
      tertiary: {
        value: {
          base: "",
          _dark: "",
        },
      },
    },
  },
});
