import { Box, CardMedia } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { MutableRefObject } from "react";
import Slider from "react-slick";

interface ICarouselThumbnailsProps {
  currentSlide: number;
  thumbnails: string[];
  sliderRef: MutableRefObject<Slider | null>;
}

const thumbnailStyle = {
  borderRadius: "12px",
  overflow: "hidden",
  width: 190,
  height: 110,
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
};

const CarouselThumbnails = ({
  thumbnails,
  currentSlide,
  sliderRef,
}: ICarouselThumbnailsProps) => {
  const theme = useTheme();

  return (
    <Box
      position="absolute"
      right={"10%"}
      top="50%"
      sx={{
        transform: "translateY(-50%)",
        display: { xs: "none", lg: "flex" },
        flexDirection: "column",
        gap: 2,
      }}
    >
      {thumbnails.slice(0, 3).map((src, index) => (
        <Box
          key={index}
          sx={{
            ...thumbnailStyle,
            border: `3px solid ${currentSlide === index ? theme.palette.secondary.main : "#fff"}`,
            boxShadow: currentSlide === index ? 4 : 1,
          }}
          onClick={() => sliderRef.current?.slickGoTo(index)}
        >
          <CardMedia
            component="img"
            image={src}
            alt={`thumb-${index}`}
            sx={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default CarouselThumbnails;
