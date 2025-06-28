/* eslint-disable @pandacss/no-config-function-in-source */

import { defineTokens, defineSemanticTokens } from "@pandacss/dev";
import type { Tokens, SemanticTokens } from "@pandacss/types";
import { colors } from "./colors";
import { spacing } from "./spacing";
import { fontSizes } from "./font";

export const tokens: Tokens = defineTokens({
  colors,
  spacing,
  fontSizes,
});

export const semanticTokens: SemanticTokens = defineSemanticTokens({
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
