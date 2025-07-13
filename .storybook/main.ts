import type { StorybookConfig } from "@storybook/react-vite";
import path from "path";

const config: StorybookConfig = {
  stories: ["../src/**/*.stories.@(js|jsx|mjs|ts|tsx)"],
  addons: [
    "@chromatic-com/storybook",
    "@storybook/addon-docs",
    "@storybook/addon-onboarding",
    "@storybook/addon-a11y",
    "@storybook/addon-vitest",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  viteFinal: async (config) => {
    return {
      ...config,
      resolve: {
        alias: {
          ...config.resolve?.alias,
          "@travelia/assets": path.resolve(__dirname, "../src/assets"),
          "@travelia/styles": path.resolve(__dirname, "../src/styles"),
          "@travelia/components": path.resolve(__dirname, "../src/components"),
        },
      },
    };
  },
};
export default config;
