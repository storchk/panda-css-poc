[![Netlify Status](https://api.netlify.com/api/v1/badges/7d836e3e-c4fa-460d-8559-f056f122332e/deploy-status)](https://app.netlify.com/projects/beamish-mermaid-bc400e/deploys)

# 🐼 Panda CSS - Proof of Concept

This repository demonstrates a **Proof of Concept (PoC)** for integrating **🐼 Panda CSS** with **Storybook** in a React project. The PoC showcases:

- **Props-based styling**: Dynamically change a React component's styling based on its props.
- **Custom theming**: Create and apply themes using 🐼 Panda CSS to define colors, spacings, and other design tokens.
- **Color schemes**: Implement multiple color schemes to show how global styles can adapt based on a selected theme or scheme.

## Features

1. **React Component with Dynamic Styling**  
   Includes a `Button` component styled dynamically based on props such as `variant` (e.g., primary, secondary, tertiary) and integrates with the 🐼 Panda theme for consistent styling.

2. **Theming with 🐼 Panda CSS**  
   Demonstrates how to define a custom theme in 🐼 Panda CSS and apply it globally across components.

3. **Color Schemes**  
   Illustrates how to implement and switch between different color schemes within the same theme, providing flexibility for design systems.

4. **Storybook Integration**  
   Configures Storybook to showcase components styled with 🐼 Panda CSS and use the defined theme and color schemes consistently.

## Getting Started

To get started with this PoC, follow these steps:

1. **Install dependencies**:

   ```bash
   pnpm install
   ```

2. **Run Storybook**:

   ```bash
   pnpm storybook
   ```

3. **Run panda watch mode**:

   ```bash
   pnpm panda --watch
   ```

4. **Explore the components**:
   Open your browser and navigate to the Storybook URL provided in the terminal to explore the components styled with 🐼 Panda CSS.

## 🐼 Panda CSS Studio

Panda Studio is a live documentation for design tokens (colors, fonts, etc.).

To run Panda studio execute

```bash
pnpm panda studio build
```

## Screenshots

![Panda CSS Welcome screen](./public/images/panda-studio-welcome.png)
![Panda CSS colors](./public/images/panda-studio-colors.png)
![Panda CSS spacings](./public/images/panda-studio-spacings.png)

## 🐼 Panda analyze

Analyze design token and recipe usage.

To analyze codebase run

```bash
pnpm panda analyze
```

By default, it will analyze your project based on the include and exclude config options.

```bash
# analyze a specific file
pnpm panda analyze src/components/Button.tsx

# analyze a specific glob
pnpm panda analyze "src/components/**"
```

### Example

**Token usage report 🎨**

| Token                | Usage %           | Most used                                     | Hardcoded | Found in |
| -------------------- | ----------------- | --------------------------------------------- | --------- | -------- |
| spacing (24 tokens)  | 20.83% (5 tokens) | sm, md, xxs, xs, lg                           | 0         | 2 files  |
| colors (34 tokens)   | 20.59% (7 tokens) | primary, secondary, grey.800, white, grey.200 | 0         | 1 file   |
| fontSizes (7 tokens) | 14.29% (1 token)  | md                                            | 0         | 1 file   |

## References

- [🐼 Panda CSS](https://panda-css.com/)
- [ESLint plugin for 🐼 Panda CSS](https://github.com/chakra-ui/eslint-plugin-panda)
- [Panda Studio](https://www.npmjs.com/package/@pandacss/studio)
