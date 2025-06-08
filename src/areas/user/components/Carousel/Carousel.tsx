import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, CardMedia, Container } from "@mui/material";
import { carouselImages } from "@travelia/fixtures";
import { useRef, useState } from "react";
import { ArrowLeftRounded, ArrowRightRounded } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";

const ImageCarousel = () => {
  const sliderRef = useRef<Slider | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const next = () => sliderRef.current?.slickNext();
  const previous = () => sliderRef.current?.slickPrev();

  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    fade: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
    beforeChange: (_oldIndex: number, newIndex: number) =>
      setCurrentSlide(newIndex),
  };

  return (
    <Box position="relative" sx={{ height: "90vh", overflow: "hidden" }}>
      <Slider ref={sliderRef} {...settings}>
        {carouselImages.map((src, index) => (
          <Box key={index} sx={{ height: "100%" }}>
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
        sx={{ display: { sm: "none", lg: "flex" } }}
        gap={1}
        position="absolute"
        bottom="18%"
        left="20%"
      >
        <AppButton
          sx={{
            bgcolor: "#fff",
            width: 50,
            height: 50,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            boxShadow: 2,
          }}
          onClick={previous}
          label={<ArrowLeftRounded />}
        />
        <AppButton
          sx={{
            bgcolor: "#fff",
            width: 50,
            height: 50,
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minWidth: 0,
            boxShadow: 2,
          }}
          onClick={next}
          label={<ArrowRightRounded />}
        />
      </Box>

      <Container maxWidth="xl">
        <Box
          position="absolute"
          right={26}
          top="50%"
          sx={{
            transform: "translateY(-50%)",
            display: { sm: "none", lg: "flex" },
            flexDirection: "column",
            gap: 2,
          }}
        >
          {carouselImages.slice(0, 3).map((src, index) => (
            <Box
              key={index}
              sx={{
                borderRadius: "9px",
                overflow: "hidden",
                border: `2px solid ${currentSlide === index ? "yellow" : "#ccc"}`,
                width: 190,
                height: 110,
                cursor: "pointer",
                boxShadow: currentSlide === index ? 4 : 1,
                transition: "all 0.3s ease-in-out",
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
      </Container>
    </Box>
  );
};

export default ImageCarousel;
