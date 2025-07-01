import type { Meta, StoryObj } from "@storybook/react-vite";
import AppSkeleton from "./Skeleton";

const meta: Meta<typeof AppSkeleton> = {
  title: "Components/Feedback/AppSkeleton",
  component: AppSkeleton,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof AppSkeleton>;

export const Default: Story = {
  render: () => <AppSkeleton />,
};
