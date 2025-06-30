import type { Meta, StoryObj } from "@storybook/react-vite";
import AppTextField from "./TextField";

const meta: Meta<typeof AppTextField> = {
  title: "Components/AppTextField",
  component: AppTextField,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AppTextField>;

export const Text: Story = {
  args: {
    label: "Username",
    type: "text",
    placeholder: "Enter your username",
  },
};
