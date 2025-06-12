import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Hotel, LocationOn } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import DiscountBadge from "../Badges/DiscountBadge";
import RatingBadge from "../Badges/RatingBadge";
import RoomPriceWithDiscount from "../RoomPriceWithDiscount";

interface IRoomCardProps {
  title: string;
  roomPhotoUrl: string;
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  cityName: string;
  hotelName: string;
  hotelStarRating: number;
}

const cardContentStyle = {
  position: "relative",
  bgcolor: "#fff",
  top: "-25px",
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32,
  p: 3,
};

const bookButtonStyle = {
  fontWeight: 600,
  py: 1,
  bgcolor: "custom.salver",
  "&:hover": {
    bgcolor: "custom.orange",
    color: "custom.beige",
  },
};

export default function RoomCard({
  title,
  discount,
  finalPrice,
  hotelName,
  hotelStarRating,
  originalRoomPrice,
  roomPhotoUrl,
  cityName,
}: IRoomCardProps) {
  return (
    <Card sx={{ maxWidth: 345, position: "relative" }}>
      <DiscountBadge discount={discount} />
      <CardMedia
        component="img"
        height="194"
        image={roomPhotoUrl}
        alt="Paella dish"
      />
      <CardContent sx={cardContentStyle}>
        <RatingBadge hotelStarRating={hotelStarRating} />
        <Typography variant="h3">{title}</Typography>
        <Box mt={2}>
          <Box display="flex" alignItems="center" gap={1}>
            <Hotel sx={{ color: "text.disabled", fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {hotelName}
            </Typography>
          </Box>

          <Box display="flex" alignItems="center" gap={1} mt={0.5}>
            <LocationOn sx={{ color: "text.disabled", fontSize: 18 }} />
            <Typography variant="body2" color="text.secondary">
              {cityName}
            </Typography>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
        >
          <RoomPriceWithDiscount
            finalPrice={finalPrice}
            originalRoomPrice={originalRoomPrice}
          />
          <AppButton sx={bookButtonStyle}>Book Now</AppButton>
        </Box>
      </CardContent>
    </Card>
  );
}
