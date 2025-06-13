import { Box } from "@mui/material";
import { ReactNode } from "react";
import Slider from "react-slick";

interface IPauseOnHoverCarouselProps {
  render: () => ReactNode;
}

function PauseOnHoverCarousel({ render }: IPauseOnHoverCarouselProps) {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 730,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
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
