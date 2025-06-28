import { definePreset } from '@pandacss/dev'

import { colors } from "./colors";
import { spacing } from "./spacing";
import { fontSizes } from "./font";

export const preset = definePreset({
  name: 'poc-preset',
  theme: {
    tokens: {
      colors,
      spacing,
      fontSizes,
    }
  },
  semanticTokens: {
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
  }
})
