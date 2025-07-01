import type { Meta, StoryObj } from "@storybook/react-vite";
import DestinationCard from "./DestinationCard";
import { Box } from "@mui/material";
import DestinationCardSkeleton from "./DestinationCardSkeleton";

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
    thumbnailUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/33143786.jpg?k=4d0bca9d9795b80beb2cd9786946e043b23d1372eb633d5855d3aba6343d68d4&o=&hp=1",
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
