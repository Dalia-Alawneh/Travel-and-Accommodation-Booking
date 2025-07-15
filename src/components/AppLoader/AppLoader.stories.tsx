import type { Meta, StoryObj } from "@storybook/react-vite";
import AppLoader from "./AppLoader";

const meta: Meta<typeof AppLoader> = {
  title: "Components/Loading/AppLoader",
  component: AppLoader,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
};

export default meta;
type Story = StoryObj<typeof AppLoader>;

export const Default: Story = {
  render: () => <AppLoader />,
};
