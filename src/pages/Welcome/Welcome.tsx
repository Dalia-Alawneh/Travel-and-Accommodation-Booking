import { Box, Typography, useTheme } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { whiteLogo, welcome } from "@travelia/assets";
import AppButton from "@travelia/components/Button";
import { overlaySx } from "@travelia/styles";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedDeals } from "@travelia/api/endpoints/home";
import { motion } from "framer-motion";

import PauseOnHoverCarousel from "@travelia/areas/user/pages/Home/components/PauseOnHoverCarousel";
import ParallaxText from "./ParallaxText";
import DiscoverHotels from "./DiscoverHotels";
import { getTestimonialsReviews } from "@travelia/api/endpoints/hotel";
import Testimonials from "./Testimonials";

const heroSx = {
  height: "100vh",
  backgroundImage: `url(${welcome})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  position: "relative",
  color: "white",
};

const contentSx = {
  position: "relative",
  zIndex: 1,
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  textAlign: "center",
  px: 3,
};

const cardContainerSx = {
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  "&:hover .content": {
    opacity: 1,
  },
};

const cardOverlayContentSx = {
  position: "absolute",
  inset: 0,
  backdropFilter: "blur(10px)",
  opacity: 0,
  transition: "all 0.4s ease",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
};

const welcomeBtnSx = {
  mt: 5,
  px: 5,
  py: 1.5,
  bgcolor: "secondary.main",
  color: "ActiveCaption",
};

const Welcome = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const overlayColor = theme.palette.custom.overlay;
  const { data: featuredDeals } = useQuery({
    queryKey: ["featuredDeals"],
    queryFn: getFeaturedDeals,
  });
  const { data: testimonials } = useQuery({
    queryKey: ["testimonials"],
    queryFn: getTestimonialsReviews,
  });

  const settings = {
    dots: false,
    infinite: true,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    margin: 2,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <Box>
      <Box sx={heroSx}>
        <Box sx={overlaySx} />
        <Box sx={contentSx}>
          <Box sx={{ width: 180, mb: 4 }}>
            <img src={whiteLogo} alt="Travelia Logo" width="100%" />
          </Box>
          <Typography variant="h1" fontWeight={900}>
            Welcome to Travelia
          </Typography>
          <Typography variant="h6" mt={4} maxWidth={600}>
            Discover the world with ease. Book your journeys, explore
            destinations, and enjoy the ride.
          </Typography>
          <AppButton
            variant="contained"
            sx={welcomeBtnSx}
            onClick={() => navigate("/login")}
          >
            Start Now
          </AppButton>
        </Box>
      </Box>
      <Box component="section" my={10}>
        <div className="slider-container">
          <PauseOnHoverCarousel
            slidesToShow={3}
            customSettings={settings}
            responsiveBreakpoints={[
              {
                breakpoint: 960,
                settings: {
                  slidesToShow: 2,
                },
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 1,
                },
              },
            ]}
            render={() =>
              featuredDeals?.map((deal) => (
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, type: "spring", bounce: 0.7 }}
                  viewport={{ once: true, amount: 0.5 }}
                >
                  <Box
                    key={deal.hotelId}
                    sx={{
                      ...cardContainerSx,
                      px: 1,
                      height: 250,
                    }}
                  >
                    <img
                      src={deal.roomPhotoUrl}
                      alt={deal.title}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 8,
                        objectFit: "cover",
                      }}
                    />
                    <Box
                      className="content"
                      sx={{
                        ...cardOverlayContentSx,
                        borderRadius: 1,
                        bgColor: overlayColor,
                        mx: 1,
                      }}
                    >
                      <Typography
                        variant="h3"
                        fontWeight={900}
                        mb={2}
                        color="white"
                      >
                        {deal.hotelName}
                      </Typography>
                      <AppButton
                        variant="contained"
                        sx={welcomeBtnSx}
                        onClick={() => navigate("/login")}
                      >
                        See More
                      </AppButton>
                    </Box>
                  </Box>
                </motion.div>
              ))
            }
          />
        </div>
      </Box>
      <DiscoverHotels />
      <section className="scrollText">
        <ParallaxText baseVelocity={-5}>Explore the World</ParallaxText>
        <ParallaxText baseVelocity={5}>
          Make your best memories with Travila
        </ParallaxText>
      </section>
      <Box component="section" my={10}>
        <Typography variant="h2" textAlign="center">
          Testimonials
        </Typography>
        {testimonials && <Testimonials testimonials={testimonials} />}
      </Box>
    </Box>
  );
};

export default Welcome;
