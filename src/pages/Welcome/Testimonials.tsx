import { Avatar, Box, Typography, useTheme } from "@mui/material";
import PauseOnHoverCarousel from "@travelia/areas/user/pages/Home/components/PauseOnHoverCarousel";
import Review from "@travelia/components/Review";
import withContainer from "@travelia/HOC/withContainer";
import { ITestimonialsReview } from "@travelia/types";
import { motion } from "framer-motion";

interface ITestimonialsProps {
  testimonials: ITestimonialsReview[];
}

const avatarSx = {
  width: 50,
  height: 50,
  position: "absolute",
  top: -32,
  left: "50%",
  transform: "translateX(-50%)",
};

const Testimonials = ({ testimonials }: ITestimonialsProps) => {
  const theme = useTheme();
  return (
    <Box component="section" my={10}>
      <div className="slider-container">
        <PauseOnHoverCarousel
          slidesToShow={3}
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
            testimonials?.length !== 0 &&
            testimonials?.map((testimonial) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, type: "spring", bounce: 0.7 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <Box py={4}>
                  <Box
                    m={2}
                    p={3}
                    sx={{
                      bgcolor: "white",
                      boxShadow: theme.customShadows.light,
                      borderRadius: 1,
                      position: "relative",
                      textAlign: "center",
                    }}
                  >
                    <Avatar
                      sx={{
                        ...avatarSx,
                        boxShadow: theme.shadows[3],
                      }}
                    />
                    <Typography variant="h6" fontWeight={700} mt={1}>
                      {testimonial.hotelName}
                    </Typography>
                    <Box mt={2}>
                      <Review review={testimonial} />
                    </Box>
                  </Box>
                </Box>
              </motion.div>
            ))
          }
        />
      </div>
    </Box>
  );
};

const TestimonialsSection = withContainer(Testimonials);
export default TestimonialsSection;
