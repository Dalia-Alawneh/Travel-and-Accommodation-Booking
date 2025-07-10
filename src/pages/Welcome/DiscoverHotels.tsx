import { Box, Grid, Typography, useTheme, useMediaQuery } from "@mui/material";
import { about1, about2, about3, about4 } from "@travelia/assets";
import AppButton from "@travelia/components/Button";
import withContainer from "@travelia/HOC/withContainer";
import { motion } from "framer-motion";
import { useNavigate } from "react-router";

const DiscoverHotels = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const navigate = useNavigate();

  return (
    <Grid container spacing={4} alignItems="center">
      <Grid size={{ xs: 12, md: 6 }}>
        <Typography variant="h2" mb={5}>
          Perfect Stay for Every Journey
        </Typography>
        <Typography variant="body2" mb={6}>
          Whether you're planning a relaxing getaway, a family vacation, or a
          business trip — we've got the perfect hotel waiting for you. Browse
          our hand-picked accommodations, enjoy exclusive deals, and make every
          trip unforgettable.
        </Typography>
        <AppButton sx={{ px: 6 }} onClick={() => navigate("/login")}>
          Discover Hotels
        </AppButton>
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
            <Grid size={{ xs: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "tween", bounce: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Box
                  component="img"
                  src={about1}
                  alt="about1"
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    borderRadius: 2,
                    position: isSmallScreen ? "static" : "relative",
                    top: isSmallScreen ? 0 : -10,
                    left: isSmallScreen ? 0 : -10,
                  }}
                />
              </motion.div>
            </Grid>
            <Grid size={{ xs: 6 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "tween", bounce: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Box
                  component="img"
                  src={about2}
                  alt="about2"
                  sx={{
                    width: "100%",
                    height: 250,
                    objectFit: "cover",
                    borderRadius: 2,
                    position: isSmallScreen ? "static" : "relative",
                    top: isSmallScreen ? 0 : 10,
                  }}
                />
              </motion.div>
            </Grid>
            <Grid size={{ xs: 5 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "tween", bounce: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Box
                  component="img"
                  src={about4}
                  alt="about4"
                  sx={{
                    width: "100%",
                    height: 180,
                    objectFit: "cover",
                    borderRadius: 2,
                    position: isSmallScreen ? "static" : "relative",
                    top: isSmallScreen ? 0 : 5,
                  }}
                />
              </motion.div>
            </Grid>
            <Grid size={{ xs: 7 }}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "tween", bounce: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Box
                  component="img"
                  src={about3}
                  alt="about3"
                  sx={{
                    width: "100%",
                    height: 200,
                    objectFit: "cover",
                    borderRadius: 2,
                    position: isSmallScreen ? "static" : "relative",
                    top: isSmallScreen ? 0 : 30,
                    mb: 3,
                  }}
                />
              </motion.div>
            </Grid>
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

const DiscoverHotelsSection = withContainer(DiscoverHotels);
export default DiscoverHotelsSection;
