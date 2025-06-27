import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { Hotel, LocationOn } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import DiscountBadge from "../../../../components/Badges/DiscountBadge";
import RatingBadge from "../../../../components/Badges/RatingBadge";
import RoomPriceWithDiscount from "../../../../components/RoomPriceWithDiscount";
import useValidateImage from "@travelia/hooks/useValidateImage";
import AppSkeleton from "../../../../components/Skeleton/Skeleton";
import { bookButtonStyle } from "@travelia/styles";
import { useNavigate } from "react-router";

interface IRoomCardProps {
  title: string;
  roomPhotoUrl: string;
  originalRoomPrice: number;
  discount: number;
  finalPrice: number;
  cityName: string;
  hotelName: string;
  hotelStarRating: number;
  hotelId: number;
}

const cardContentStyle = {
  position: "relative",
  bgcolor: "#fff",
  top: "-25px",
  borderTopLeftRadius: 32,
  borderTopRightRadius: 32,
  p: 3,
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
  hotelId,
}: IRoomCardProps) {
  const { isLoading, src: imageUrl } = useValidateImage(roomPhotoUrl);
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/user/hotel/${hotelId}`);
  };

  return (
    <Card sx={{ position: "relative", overflow: "hidden" }}>
      <DiscountBadge discount={discount} />
      {isLoading ? (
        <AppSkeleton />
      ) : (
        <CardMedia
          component="img"
          height="194"
          loading="lazy"
          image={imageUrl}
          alt={title}
          sx={{
            transition: "transform 0.4s ease",
            "&:hover": {
              transform: "scale(1.2)",
            },
          }}
        />
      )}
      <CardContent sx={cardContentStyle}>
        <RatingBadge starRating={hotelStarRating} />
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
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          mt={2}
          gap={{ xs: 2, sm: 0 }}
        >
          <RoomPriceWithDiscount
            finalPrice={finalPrice}
            originalRoomPrice={originalRoomPrice}
          />
          <AppButton onClick={handleClick} sx={bookButtonStyle}>
            Book Now
          </AppButton>
        </Box>
      </CardContent>
    </Card>
  );
}
