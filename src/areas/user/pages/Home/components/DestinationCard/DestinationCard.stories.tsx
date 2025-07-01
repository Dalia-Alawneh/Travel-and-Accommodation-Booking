import type { Meta, StoryObj } from "@storybook/react-vite";
import DestinationCard from "./DestinationCard";
import { Box } from "@mui/material";
import DestinationCardSkeleton from "./DestinationCardSkeleton";
import { exampleImage } from "@travelia/fixtures";

const meta: Meta<typeof DestinationCard> = {
  title: "User/Components/Cards/DestinationCard",
  component: DestinationCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof DestinationCard>;

export const Default: Story = {
  args: {
    cityName: "Paris",
    countryName: "France",
    description:
      "Discover the romantic city of Paris with its iconic Eiffel Tower, charming streets, and rich history.",
    thumbnailUrl: exampleImage,
  },
  render: (args) => (
    <Box sx={{ width: 450 }}>
      <DestinationCard {...args} />
    </Box>
  ),
};

export const Loading: Story = {
  render: () => (
    <Box sx={{ width: 350 }}>
      <DestinationCardSkeleton />
    </Box>
  ),
};
