import "../styled-system/styles.css";
import type { Preview } from "@storybook/react-webpack5";

const preview: Preview = {
  initialGlobals: {
    theme: "redTheme",
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
      defaultValue: "redTheme",
      toolbar: {
        // The icon for the toolbar item
        title: "Chiefs",
        icon: "paintbrush",
        // Array of options
        items: [
          { value: "redTheme", title: "Chiefs" },
          { value: "blueTheme", title: "Seahawks" },
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
          "data-panda-theme",
          ctx.globals.theme,
        );

        document.documentElement.setAttribute(
          "data-color-mode",
          ctx.globals.mode,
        );
      }
      return <Story />;
    },
  ],
  tags: ["autodocs"],
};

export default preview;
