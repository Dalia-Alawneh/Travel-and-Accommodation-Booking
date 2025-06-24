import { Box, Grid, Typography, useTheme, Rating } from "@mui/material";
import { LocationOn, Bed } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import { ISearchedHotel } from "@travelia/types";
import { bookButtonStyle } from "@travelia/styles";
import { useNavigate } from "react-router";
import Amenities from "@travelia/areas/user/components/Amenities";

interface IHotelCard {
  hotel: ISearchedHotel;
}

const discountBadgeSx = {
  position: "absolute",
  color: "white",
  fontSize: 12,
  top: 12,
  left: -27,
  px: 4,
  py: 0.5,
  transform: "rotate(-45deg)",
  boxShadow: "customShadows.light",
};

const cardSx = {
  mb: 5,
  cursor: "pointer",
  borderRadius: 1,
  p: 4,
};

const HotelCard = ({ hotel }: IHotelCard) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const handleNavigateToHotel = () => {
    navigate(`/user/hotel/${hotel.hotelId}`);
  };

  return (
    <Box
      onClick={handleNavigateToHotel}
      sx={{ ...cardSx, boxShadow: theme.customShadows.light }}
    >
      <Grid container>
        <Grid
          size={{ xs: 12, lg: 7 }}
          borderRight={1}
          borderColor="custom.salver"
          position="relative"
          overflow="hidden"
        >
          <Box
            component="img"
            src={hotel.roomPhotoUrl}
            alt={hotel.hotelName}
            sx={{
              height: 380,
              width: { xs: "100%", md: 380 },
              objectFit: "cover",
              borderRadius: 0.3,
            }}
          />
          {hotel.discount > 0 && (
            <Box bgcolor="custom.danger" sx={discountBadgeSx} fontWeight={600}>
              {Math.round(hotel.discount * 100)}% OFF
            </Box>
          )}
        </Grid>

        <Grid size={{ xs: 12, lg: 5 }}>
          <Box
            sx={{
              p: 3,
              display: "flex",
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box>
              <Typography variant="h3" fontWeight={700}>
                {hotel.hotelName}
              </Typography>

              <Box display="flex" alignItems="center" gap={1} my={1}>
                <LocationOn sx={{ color: "custom.orange", fontSize: 18 }} />
                <Typography variant="body2">{hotel.cityName}</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <Bed sx={{ color: "custom.orange", fontSize: 18 }} />
                <Typography variant="body2">{hotel.roomType}</Typography>
              </Box>

              <Box display="flex" alignItems="center" gap={1} mb={2}>
                <Rating value={hotel.starRating} readOnly size="small" />
                <Typography variant="body2">
                  ({hotel.starRating} stars)
                </Typography>
              </Box>
              <Typography variant="body1" color="primary" fontWeight={700}>
                ${hotel.roomPrice.toFixed(2)} / Night
              </Typography>

              {hotel.amenities.length > 0 && (
                <Amenities amenities={hotel.amenities} />
              )}
            </Box>
            <AppButton
              sx={{
                ...bookButtonStyle,
                bgcolor: "custom.beige",
                fontWeight: 900,
                mt: 3,
                px: 5,
                py: 2,
              }}
            >
              Book Now
            </AppButton>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default HotelCard;
