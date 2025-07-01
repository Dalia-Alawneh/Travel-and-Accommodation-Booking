import type { Meta, StoryObj } from "@storybook/react-vite";
import PageHero from "./PageHero";
import { hero1 } from "@travelia/assets";

const meta: Meta<typeof PageHero> = {
  title: "Components/PageHero",
  component: PageHero,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PageHero>;

export const Default: Story = {
  args: {
    title: "Welcome to Travelia",
  },
};

export const WithCustomImage: Story = {
  args: {
    title: "Explore Destinations",
    img: hero1,
  },
};
