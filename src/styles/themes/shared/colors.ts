import type { Tokens } from "@pandacss/types";
import { blueTheme } from "../theme-blue";

export const colors: Tokens["colors"] = {
  // Use the colors from the blue theme as a base since it is the default theme
  ...blueTheme.tokens?.colors,
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
};
