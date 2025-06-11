import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Hotel, HotelClass, LocationOn } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";

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

const badgeStyle = {
  px: "10px",
  py: "5px",
  fontSize: 12,
  bgcolor: "#fff",
  position: "absolute",
  top: 25,
  left: 25,
  borderRadius: "9999px",
  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.2)",
};

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
      <CardMedia
        component="img"
        height="194"
        image={roomPhotoUrl}
        alt="Paella dish"
      />
      <CardContent sx={cardContentStyle}>
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
            {hotelStarRating}
          </Typography>
        </Box>
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

          <AppButton sx={bookButtonStyle}>Book Now</AppButton>
        </Box>
      </CardContent>
    </Card>
  );
}
