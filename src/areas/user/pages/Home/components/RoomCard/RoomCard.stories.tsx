import type { Meta, StoryObj } from "@storybook/react-vite";
import RoomCard from "./RoomCard";
import RoomCardSkeleton from "./RoomCardSkeleton";
import { Box } from "@mui/material";
import { exampleImage } from "@travelia/fixtures";

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
    roomPhotoUrl: exampleImage,
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
