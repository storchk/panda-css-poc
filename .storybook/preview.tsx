import "../styled-system/styles.css";

import type { Preview } from "@storybook/react-webpack5";

const preview: Preview = {
  initialGlobals: {
    theme: "theme1",
    mode: "light",
  },
  globalTypes: {
    mode: {
      name: "Mode",
      description: "Global modes for components",
      defaultValue: "light",
      toolbar: {
        // The icon for the toolbar item
        title: "Mode",
        icon: "mirror",
        // Array of options
        items: [
          { value: "light", title: "light" },
          { value: "dark", title: "dark" },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        dynamicTitle: true,
      },
    },
    theme: {
      name: "Theme",
      description: "Global theme for components",
      defaultValue: "theme1",
      toolbar: {
        // The icon for the toolbar item
        title: "Theme",
        icon: "paintbrush",
        // Array of options
        items: [
          { value: "theme1", title: "Theme 1" },
          { value: "theme2", title: "Theme 2" },
        ],
        // Property that specifies if the name of the item will be displayed
        showName: true,
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, ctx) => {
      if (typeof document !== "undefined") {
        document.documentElement.setAttribute(
          "data-theme",
          ctx.globals.theme || "theme1"
        );

        document.documentElement.setAttribute(
          "data-color-mode",
          ctx.globals.mode || "light"
        );
      }
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default preview;
