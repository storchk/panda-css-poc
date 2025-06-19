import type { StorybookConfig } from "@storybook/react-webpack5";

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.story.@(js|jsx|mjs|ts|tsx)"],
  addons: ["@storybook/addon-webpack5-compiler-swc", "@storybook/addon-docs"],
  framework: {
    name: "@storybook/react-webpack5",
    options: {},
  },
  typescript: {
    reactDocgen: "react-docgen-typescript",
    check: false,
    checkOptions: {},
    skipCompiler: false,
  },
};
export default config;
