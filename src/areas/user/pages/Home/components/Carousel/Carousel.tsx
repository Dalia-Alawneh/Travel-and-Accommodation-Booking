import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CardMedia, Typography } from "@mui/material";
import { carouselItems, thumbnails } from "@travelia/fixtures/index.tsx";
import { useRef, useState } from "react";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import CarouselThumbnails from "../CarouselThumbnails/CarouselThumbnails";
import { Link } from "react-router";

const arrowBtnStyle = {
  bgcolor: "#fff",
  width: 50,
  height: 50,
  borderRadius: "50%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  minWidth: 0,
  boxShadow: 2,
};

const ImageCarousel = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  return (
    <Box position="relative" sx={{ height: "100vh", overflow: "hidden" }}>
      <Slider ref={sliderRef} {...settings}>
        {carouselItems.map((item, index) => (
          <Box key={index} sx={{ position: "relative", height: "100%" }}>
            <Link to="search">
              <CardMedia
                component="img"
                image={item.src}
                alt={`image-${index}`}
                sx={{ height: "100vh", width: "100%", objectFit: "cover" }}
              />
            </Link>
            <Box
              sx={{
                position: "absolute",
                top: "35%",
                left: "13%",
                color: "#fff",
                textShadow: "0 0 10px rgba(0,0,0,0.7)",
              }}
            >
              <Typography variant="h1" sx={{ mb: 4 }}>
                {item.title}
              </Typography>
              <Typography variant="h3">{item.subtitle}</Typography>
            </Box>
          </Box>
        ))}
      </Slider>

      <Box
        sx={{ display: { xs: "none", lg: "flex" } }}
        gap={1}
        position="absolute"
        bottom="18%"
        left="13%"
      >
        <AppButton sx={arrowBtnStyle} onClick={previous}>
          <ArrowLeftRounded fontSize="large" />
        </AppButton>
        <AppButton sx={arrowBtnStyle} onClick={next}>
          <ArrowRightRounded fontSize="large" />
        </AppButton>
      </Box>
      <CarouselThumbnails
        thumbnails={thumbnails}
        sliderRef={sliderRef}
        currentSlide={currentSlide}
      />
    </Box>
  );
};

export default ImageCarousel;
