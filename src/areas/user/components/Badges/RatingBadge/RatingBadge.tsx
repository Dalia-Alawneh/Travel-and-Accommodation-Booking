import { HotelClass } from "@mui/icons-material";
import { Box, SxProps, Theme, Typography } from "@mui/material";
import { badgeStyle } from "../badgeStyle";

interface IRatingBadgeProps {
  starRating: number;
  sx?: SxProps<Theme>;
}

const RatingBadge = ({ starRating, sx }: IRatingBadgeProps) => {
  return (
    <Box
      sx={{
        ...badgeStyle,
        left: "initial",
        px: 2,
        right: 20,
        top: -20,
        ...sx,
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
