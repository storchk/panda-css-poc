import { defineTokens } from "@pandacss/dev";

const defaultSpacingRelative = 0.25; // in rem

export const tokens = defineTokens({
  colors: {
    brand: {
      primary: { value: "#69BE28" },
      secondary: { value: "#002244" },
      accent: { value: "#A5ACAF" },
    },
    transparent: { value: "transparent" },
    white: { value: "#FFFFFF" },
    black: { value: "#000000" },
    grey: {
      50: { value: "#f9fafb" },
      100: { value: "#f3f4f6" },
      200: { value: "#e5e7eb" },
      300: { value: "#d1d5db" },
      400: { value: "#9ca3af" },
      500: { value: "#6b7280" },
      600: { value: "#4b5563" },
      700: { value: "#374151" },
      800: { value: "#1f2937" },
      900: { value: "#111827" },
    },
  },
  spacing: {
    xxxs: { value: `${0.5 * defaultSpacingRelative}rem` }, //    2px    0.125rem
    xxs: { value: `${defaultSpacingRelative}rem` }, //           4px    0.25rem
    xs: { value: `${2 * defaultSpacingRelative}rem` }, //        8px    0.5rem
    s: { value: `${3 * defaultSpacingRelative}rem` }, //         12px   0.75rem
    sm: { value: `${4 * defaultSpacingRelative}rem` }, //        16px   1rem
    md: { value: `${6 * defaultSpacingRelative}rem` }, //        24px   1.5rem
    lg: { value: `${8 * defaultSpacingRelative}rem` }, //        32px   2rem
    xl: { value: `${10 * defaultSpacingRelative}rem` }, //       40px   2.5rem
    xxl: { value: `${12 * defaultSpacingRelative}rem` }, //      48px   3rem
    xxxl: { value: `${14 * defaultSpacingRelative}rem` }, //     56px   3.5rem
    xxxxl: { value: `${16 * defaultSpacingRelative}rem` }, //    64px   4rem
    xxxxxl: { value: `${24 * defaultSpacingRelative}rem` }, //   96px   6rem
  },
  fontSizes: {
    xs: { value: "0.75rem" }, // 12px
    sm: { value: "0.875rem" }, // 14px
    md: { value: "1rem" }, // 16px
    lg: { value: "1.125rem" }, // 18px
    xl: { value: "1.25rem" }, // 20px
    xxl: { value: "1.5rem" }, // 24px
    xxxl: { value: "2rem" }, // 32px
  },
});

export const semanticTokens = defineTokens({
  colors: {
    primary: {
      value: {
        base: "{colors.brand.primary}",
        _dark: "{colors.brand.primary}",
      },
    },
    secondary: {
      value: {
        base: "{colors.brand.secondary}",
        _dark: "{colors.brand.secondary}",
      },
    },
    tertiary: {
      value: {
        base: "{colors.grey.500}",
        _dark: "{colors.grey.700}",
      },
    },
  },
});
