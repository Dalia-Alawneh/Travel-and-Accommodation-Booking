import { Box, Typography, Rating } from "@mui/material";
import { IReview } from "@travelia/types";

interface IReviewCardProps {
  review: IReview;
}

const Review = ({ review }: IReviewCardProps) => {
  return (
    <Box
      sx={{
        p: 3,
        mb: 3,
        borderRadius: 1,
        height: 140,
        backgroundColor: "background.paper",
      }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={1}
      >
        <Typography variant="h5" fontWeight={700} mb={1}>
          {review.customerName}
        </Typography>
        <Rating value={review.rating} precision={0.5} readOnly size="small" />
      </Box>
      <Box
        component="span"
        sx={{
          display: "inline-block",
          fontSize: "13px",
          lineHeight: 1.5,
          color: "text.secondary",
        }}
      >
        {review.description}
      </Box>
    </Box>
  );
};

export default Review;
