import { HotelClass } from "@mui/icons-material";
import { Box, SxProps, Theme, Typography } from "@mui/material";

interface IRatingBadgeProps {
  starRating: number;
  sx?: SxProps<Theme>;
}
export const badgeStyle: SxProps<Theme> = {
  px: "10px",
  py: "5px",
  fontSize: 12,
  backgroundColor: "#fff",
  position: "absolute",
  top: 25,
  left: 25,
  borderRadius: "9999px",
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
};

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
