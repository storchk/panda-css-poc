import { defineConfig } from "eslint/config";
import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import markdown from "@eslint/markdown";
import panda from "@pandacss/eslint-plugin";

export default defineConfig([
  {
    ignores: ["**/*.d.ts", "styled-system/", "dist/", "node_modules/"],
  },

  js.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginReact.configs.flat["jsx-runtime"],
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],

    plugins: {
      "@pandacss": panda,
    },

    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
    },

    settings: {
      react: {
        version: "detect",
      },
    },

    rules: {
      ...panda.configs.recommended.rules,
      "@pandacss/no-debug": "error",
    },
  },
  ...markdown.configs.recommended,
]);
