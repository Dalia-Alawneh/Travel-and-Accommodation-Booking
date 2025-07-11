import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { about1, about2, about3, about4 } from "@travelia/assets";
import AppButton from "@travelia/components/Button";
import withContainer from "@travelia/HOC/withContainer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const AnimatedImageBox = ({
  src,
  alt,
  height,
  top = 0,
  left = 0,
  mb = 0,
  isStatic = false,
}: {
  src: string;
  alt: string;
  height: number;
  top?: number;
  left?: number;
  mb?: number;
  isStatic: boolean;
}) => (
  <motion.div
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, type: "tween", bounce: 0.7 }}
    viewport={{ once: true, amount: 0.5 }}
  >
    <Box
      component="img"
      src={src}
      alt={alt}
      sx={{
        width: "100%",
        height,
        objectFit: "cover",
        borderRadius: 2,
        position: isStatic ? "static" : "relative",
        top: isStatic ? 0 : top,
        left: isStatic ? 0 : left,
        mb,
      }}
    />
  </motion.div>
);

const DiscoverHotels = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  const images = [
    { src: about1, alt: "about1", height: 250, top: -10, left: -10, size: 6 },
    { src: about2, alt: "about2", height: 250, top: 10, size: 6 },
    { src: about4, alt: "about4", height: 180, top: 5, size: 5 },
    { src: about3, alt: "about3", height: 200, top: 30, mb: 3, size: 7 },
  ];

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid size={{ xs: 12, md: 6 }} py={{ xs: 10, md: 0 }}>
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, type: "keyframes", bounce: 0.7 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <Typography variant="h2" mb={5}>
            Perfect Stay for Every Journey
          </Typography>
          <Typography variant="body2" mb={6}>
            Whether you're planning a relaxing getaway, a family vacation, or a
            business trip — we've got the perfect hotel waiting for you. Browse
            our hand-picked accommodations, enjoy exclusive deals, and make
            every trip unforgettable.
          </Typography>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 2, type: "spring", bounce: 0.9 }}
          viewport={{ once: true, amount: 0.5 }}
        >
          <AppButton sx={{ px: 6 }} onClick={() => navigate("/login")}>
            Discover Hotels
          </AppButton>
        </motion.div>
      </Grid>

      <Grid size={{ xs: 12, md: 6 }}>
        <Box
          sx={{
            px: 4,
            py: 5,
            borderRadius: 2,
            bgcolor: "custom.lightBlue",
          }}
        >
          <Grid container spacing={2} px={3}>
            {images.map((img, index) => (
              <Grid key={index} size={{ xs: 12, sm: img.size }}>
                <AnimatedImageBox
                  src={img.src}
                  alt={img.alt}
                  height={img.height}
                  top={img.top}
                  left={img.left}
                  mb={img.mb}
                  isStatic={isSmallScreen}
                />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const DiscoverHotelsSection = withContainer(DiscoverHotels);
export default DiscoverHotelsSection;
