import type { Meta, StoryObj } from "@storybook/react-vite";
import Gallery from "./Gallery";
import { galleryMockData } from "@travelia/api/data/gallery";

const meta: Meta<typeof Gallery> = {
  title: "Components/Gallery",
  component: Gallery,
  tags: ["autodocs"],
  parameters: {
    layout: "fullscreen",
  },
  argTypes: {
    isGalleryLoading: { control: "boolean" },
  },
};

export default meta;
type Story = StoryObj<typeof Gallery>;

export const Loading: Story = {
  args: {
    isGalleryLoading: true,
    gallery: [],
  },
};

export const WithImages: Story = {
  args: {
    isGalleryLoading: false,
    gallery: galleryMockData,
  },
};

export const EmptyGallery: Story = {
  args: {
    isGalleryLoading: false,
    gallery: [],
  },
};
