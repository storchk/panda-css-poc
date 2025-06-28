import { Tokens } from "@pandacss/types";
import { BASE_SPACING } from "./constants";

export const spacing: Tokens["spacing"] = {
  xxxs: { value: `${0.5 * BASE_SPACING}rem` }, //    2px    0.125rem
  xxs: { value: `${BASE_SPACING}rem` }, //           4px    0.25rem
  xs: { value: `${2 * BASE_SPACING}rem` }, //        8px    0.5rem
  s: { value: `${3 * BASE_SPACING}rem` }, //         12px   0.75rem
  sm: { value: `${4 * BASE_SPACING}rem` }, //        16px   1rem
  md: { value: `${6 * BASE_SPACING}rem` }, //        24px   1.5rem
  lg: { value: `${8 * BASE_SPACING}rem` }, //        32px   2rem
  xl: { value: `${10 * BASE_SPACING}rem` }, //       40px   2.5rem
  xxl: { value: `${12 * BASE_SPACING}rem` }, //      48px   3rem
  xxxl: { value: `${14 * BASE_SPACING}rem` }, //     56px   3.5rem
  xxxxl: { value: `${16 * BASE_SPACING}rem` }, //    64px   4rem
  xxxxxl: { value: `${24 * BASE_SPACING}rem` }, //   96px   6rem
};
