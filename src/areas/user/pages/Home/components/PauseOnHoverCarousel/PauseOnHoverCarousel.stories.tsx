import type { Meta, StoryObj } from "@storybook/react-vite";
import PauseOnHoverCarousel from "./PauseOnHoverCarousel";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Typography, Card, CardMedia, CardContent } from "@mui/material";
import { exampleImage } from "@travelia/fixtures";

const meta: Meta<typeof PauseOnHoverCarousel> = {
  title: "User/Components/Carousel/PauseOnHoverCarousel",
  component: PauseOnHoverCarousel,
  tags: ["autodocs"],
};

export default meta;
type Story = StoryObj<typeof PauseOnHoverCarousel>;

const slides = Array.from({ length: 5 }).map((_, i) => (
  <Card
    key={i}
    sx={{
      width: "95%",
      borderRadius: 2,
      overflow: "hidden",
      boxShadow: 3,
      mx: "auto",
    }}
  >
    <CardMedia
      component="img"
      height="140"
      image={exampleImage}
      alt={`Slide ${i + 1}`}
    />
    <CardContent>
      <Typography variant="h6">Slide {i + 1}</Typography>
      <Typography variant="body2" color="text.secondary">
        Discover amazing places around the world.
      </Typography>
    </CardContent>
  </Card>
));
export const Default: Story = {
  args: {
    slidesToShow: 2,
    responsiveBreakpoints: [
      { breakpoint: 1024, settings: { slidesToShow: 1 } },
    ],
    render: () => slides,
  },
  render: (args) => (
    <Box sx={{ width: "100%", maxWidth: 900, mx: "auto", mt: 5 }}>
      <PauseOnHoverCarousel {...args} />
    </Box>
  ),
};
