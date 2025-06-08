import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CardMedia } from "@mui/material";
import { carouselItems, thumbnails } from "@travelia/fixtures";
import { useRef, useState } from "react";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";

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

const thumbnailStyle = {
  borderRadius: "9px",
  overflow: "hidden",
  width: 190,
  height: 110,
  cursor: "pointer",
  transition: "all 0.3s ease-in-out",
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
        {carouselItems.map((src, index) => (
          <Box key={index} sx={{ position: "relative", height: "100%" }}>
            <CardMedia
              component="img"
              image={src}
              alt={`image-${index}`}
              sx={{ height: "100%", width: "100%", objectFit: "cover" }}
            />
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
        <AppButton
          sx={arrowBtnStyle}
          onClick={previous}
          label={<ArrowLeftRounded fontSize="large" />}
        />
        <AppButton
          sx={arrowBtnStyle}
          onClick={next}
          label={<ArrowRightRounded fontSize="large" />}
        />
      </Box>
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
              border: `2px solid ${currentSlide === index ? "yellow" : "#ccc"}`,
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
    </Box>
  );
};

export default ImageCarousel;
