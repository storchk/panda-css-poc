import { defineTokens } from "@pandacss/dev";

const defaultSpacingRelative = 0.25; // in rem

export const tokens = defineTokens({
  colors: {
    theme1Brand: { value: "blue" },
    theme2Brand: { value: "pink" },
    grey: {
      50: { value: "#f9fafb" },
      900: { value: "#111827" },
    },
    secondary: {
      value: "#00c9a7",
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
});

export const semanticTokens = defineTokens({
  colors: {},
});
