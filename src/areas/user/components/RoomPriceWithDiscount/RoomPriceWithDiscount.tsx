import { Box, Typography } from "@mui/material";

interface IRoomPriceWithDiscountProps {
  originalRoomPrice: number;
  finalPrice: number;
}

const RoomPriceWithDiscount = ({
  originalRoomPrice,
  finalPrice,
}: IRoomPriceWithDiscountProps) => {
  return (
    <Box display="flex" alignItems="baseline" gap={1}>
      <Typography
        sx={{
          fontSize: 14,
          color: "text.disabled",
          textDecoration: "line-through",
        }}
      >
        ${originalRoomPrice}
      </Typography>
      <Typography
        sx={{
          fontSize: 18,
          color: "custom.orange",
          fontWeight: 700,
        }}
      >
        ${finalPrice}
      </Typography>
      <Typography sx={{ color: "text.secondary", fontSize: 12 }}>
        / Person
      </Typography>
    </Box>
  );
};

export default RoomPriceWithDiscount;
