import type { Meta, StoryObj } from "@storybook/react-vite";
import RatingBadge from "./RatingBadge";

const meta: Meta<typeof RatingBadge> = {
  title: "Components/RatingBadge",
  component: RatingBadge,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
  },
  argTypes: {
    starRating: {
      control: { type: "number", min: 0, max: 5, step: 0.5 },
    },
    sx: {
      control: false,
    },
  },
};

export default meta;
type Story = StoryObj<typeof RatingBadge>;

export const Default: Story = {
  args: {
    starRating: 4.5,
  },
  render: (args) => (
    <div style={{ position: "relative", height: 100 }}>
      <RatingBadge {...args} />
    </div>
  ),
};

export const CustomStyle: Story = {
  args: {
    starRating: 3,
    sx: {
      top: 0,
      right: 0,
      backgroundColor: "#eee",
    },
  },
  render: (args) => (
    <div style={{ position: "relative", height: 100 }}>
      <RatingBadge {...args} />
    </div>
  ),
};
