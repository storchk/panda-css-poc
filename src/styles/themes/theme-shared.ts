import type { PartialTheme } from "@pandacss/types";

export const themeExtend: PartialTheme = {
  breakpoints: {
    xsScreen: "0rem", //   0px
    smScreen: "32rem", //  512px    assuming 1rem = 16px
    mdScreen: "47rem", //  752px    assuming 1rem = 16px
    lgScreen: "63rem", //  1008px   assuming 1rem = 16px
    xlScreen: "77rem", //  1232px   assuming 1rem = 16px
    xxlScreen: "92rem", // 1472px   assuming 1rem = 16px
  },
};
