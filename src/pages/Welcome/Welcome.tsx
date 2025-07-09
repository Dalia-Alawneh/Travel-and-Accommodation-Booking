import { Box, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { whiteLogo, welcome } from "@travelia/assets";
import AppButton from "@travelia/components/Button";
import { overlaySx } from "@travelia/styles";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedDeals } from "@travelia/api/endpoints/home";
import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  useMotionValue,
  useVelocity,
  useAnimationFrame,
} from "framer-motion";
import { wrap } from "@motionone/utils";
import PauseOnHoverCarousel from "@travelia/areas/user/pages/Home/components/PauseOnHoverCarousel";
interface ParallaxProps {
  children: string;
  baseVelocity: number;
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef<number>(1);
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
        <span>{children} </span>
      </motion.div>
    </div>
  );
}

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

const Welcome = () => {
  const navigate = useNavigate();

  const { data: featuredDeals } = useQuery({
    queryKey: ["featuredDeals"],
    queryFn: getFeaturedDeals,
  });

  const settings = {
    dots: false,
    infinite: true,
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
            sx={{
              mt: 5,
              px: 5,
              py: 1.5,
              bgcolor: "secondary.main",
              color: "ActiveCaption",
            }}
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
                <Box key={deal.hotelId} sx={{ px: 1 }}>
                  <img
                    src={deal.roomPhotoUrl}
                    alt={deal.title}
                    style={{
                      width: "100%",
                      height: 200,
                      objectFit: "cover",
                      borderRadius: 8,
                    }}
                  />
                </Box>
              ))
            }
          />
        </div>
      </Box>
      <section className="scrollText">
        <ParallaxText baseVelocity={-5}>Explore the World</ParallaxText>
        <ParallaxText baseVelocity={5}>
          Make your best memories with Travila
        </ParallaxText>
      </section>
    </Box>
  );
};

export default Welcome;
