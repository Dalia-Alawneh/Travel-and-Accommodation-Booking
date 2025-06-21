import { Box } from "@mui/material";
import { badgeStyle } from "../badgeStyle";

const DiscountBadge = ({ discount }: { discount: number }) => {
  return (
    <Box
      sx={{
        ...badgeStyle,
        color: "custom.orange",
        fontSize: 12,
        fontWeight: 700,
      }}
    >
      {discount * 100} % Off
    </Box>
  );
};

export default DiscountBadge;
