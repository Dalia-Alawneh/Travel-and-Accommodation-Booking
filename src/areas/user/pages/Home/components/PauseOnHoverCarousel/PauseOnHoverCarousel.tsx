import { Box } from "@mui/material";
import { ReactNode } from "react";
import Slider, { Settings } from "react-slick";

interface IPauseOnHoverCarouselProps {
  render: () => ReactNode;
  responsiveBreakpoints: Settings["responsive"];
  slidesToShow: number;
}

function PauseOnHoverCarousel({
  render,
  responsiveBreakpoints,
  slidesToShow,
}: IPauseOnHoverCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: responsiveBreakpoints,
  };
  return (
    <Box
      sx={{
        ".slick-prev, .slick-next": {
          position: "static !important",
        },
      }}
      className="slider-container"
    >
      <Slider {...settings}>{render()}</Slider>
    </Box>
  );
}

export default PauseOnHoverCarousel;
