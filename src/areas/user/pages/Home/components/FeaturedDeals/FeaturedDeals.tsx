import { Container, Typography } from "@mui/material";
import RoomCard from "@travelia/areas/user/components/RoomCard/RoomCard";

const room = {
  hotelId: 1,
  originalRoomPrice: 200.0,
  discount: 0.5,
  finalPrice: 100.0,
  cityName: "Ramallah",
  hotelName: "Plaza Hotel",
  hotelStarRating: 5,
  title: "Luxury South Suite",
  roomPhotoUrl:
    "https://images.pexels.com/photos/271618/pexels-photo-271618.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
};
const FeaturedDeals = () => {
  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Typography variant="h2" mb={5}>
        Featured Deals
      </Typography>
      <RoomCard {...room} />
    </Container>
  );
};

export default FeaturedDeals;
