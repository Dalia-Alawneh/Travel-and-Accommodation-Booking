import type { Meta, StoryObj } from "@storybook/react-vite";
import RecentlyVisitedCard from "./RecentlyVisitedCard";
import AppSkeleton from "@travelia/areas/user/components/Skeleton";
import { Box } from "@mui/material";

const meta: Meta<typeof RecentlyVisitedCard> = {
  title: "User/Components/Cards/RecentlyVisitedCard",
  component: RecentlyVisitedCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RecentlyVisitedCard>;

export const Default: Story = {
  args: {
    hotelName: "Travelia Hotel",
    starRating: 4,
    visitDate: "2024-06-01T12:00:00Z",
    cityName: "London",
    thumbnailUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/33143786.jpg?k=4d0bca9d9795b80beb2cd9786946e043b23d1372eb633d5855d3aba6343d68d4&o=&hp=1",
    priceLowerBound: 100,
    priceUpperBound: 200,
    hotelId: 5,
  },
};

export const Loading: Story = {
  render: () => (
    <Box sx={{ width: 350, height: 350 }}>
      <AppSkeleton />
    </Box>
  ),
};
