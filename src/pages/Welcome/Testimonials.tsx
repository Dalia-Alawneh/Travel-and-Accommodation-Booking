import { Box, Typography } from "@mui/material";
import PauseOnHoverCarousel from "@travelia/areas/user/pages/Home/components/PauseOnHoverCarousel";
import Review from "@travelia/components/Review";
import withContainer from "@travelia/HOC/withContainer";
import { ITestimonialsReview } from "@travelia/types";
import { motion } from "framer-motion";

interface ITestimonialsProps {
  testimonials: ITestimonialsReview[];
}
const Testimonials = ({ testimonials }: ITestimonialsProps) => {
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
                <Box mx={1}>
                  <Typography variant="h5" fontWeight={900} ml={2}>
                    {testimonial.hotelName}
                  </Typography>
                  <Review review={testimonial} />
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
