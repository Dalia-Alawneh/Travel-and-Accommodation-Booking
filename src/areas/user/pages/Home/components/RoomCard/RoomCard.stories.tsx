import type { Meta, StoryObj } from "@storybook/react-vite";
import RoomCard from "./RoomCard";
import RoomCardSkeleton from "./RoomCardSkeleton";
import { Box } from "@mui/material";

const meta: Meta<typeof RoomCard> = {
  title: "User/Components/Cards/RoomCard",
  component: RoomCard,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof RoomCard>;

export const Default: Story = {
  args: {
    title: "Luxury Room",
    roomPhotoUrl:
      "https://cf.bstatic.com/xdata/images/hotel/max1280x900/33143786.jpg?k=4d0bca9d9795b80beb2cd9786946e043b23d1372eb633d5855d3aba6343d68d4&o=&hp=1",
    originalRoomPrice: 200,
    discount: 20,
    finalPrice: 160,
    cityName: "Paris",
    hotelName: "Paris Hotel",
    hotelStarRating: 4,
    hotelId: 1,
  },
};

export const Loading: Story = {
  render: () => (
    <Box width={350}>
      <RoomCardSkeleton />
    </Box>
  ),
};
