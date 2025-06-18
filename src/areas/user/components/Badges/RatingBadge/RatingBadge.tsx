import { HotelClass } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";
import { badgeStyle } from "../badgeStyle";

interface IRatingBadgeProps {
  starRating: number;
}

const RatingBadge = ({ starRating }: IRatingBadgeProps) => {
  return (
    <Box
      sx={{
        ...badgeStyle,
        left: "initial",
        px: 2,
        right: 20,
        top: -20,
      }}
      display="flex"
      alignItems="center"
      gap="3px"
    >
      <HotelClass sx={{ color: "custom.gold", fontSize: 18 }} />
      <Typography variant="body2" fontWeight={700}>
        {starRating}
      </Typography>
    </Box>
  );
};

export default RatingBadge;
