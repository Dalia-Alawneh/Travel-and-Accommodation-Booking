import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedDeals } from "@travelia/api/endpoints/home";
import RoomCard from "@travelia/areas/user/components/RoomCard";
import PauseOnHoverCarousel from "../PauseOnHoverCarousel/PauseOnHoverCarousel";

const FeaturedDeals = () => {
  const { isLoading, data: featureDeals } = useQuery({
    queryKey: ["featuredDeals"],
    queryFn: getFeaturedDeals,
  });

  return (
    <Container maxWidth="lg" sx={{ my: 10 }}>
      <Typography variant="h2" mb={5}>
        Featured Deals
      </Typography>
      {!isLoading && featureDeals?.length === 0 ? (
        <Box textAlign="center" color="text.secondary">
          No data found
        </Box>
      ) : (
        <PauseOnHoverCarousel
          render={() =>
            featureDeals?.map((item) => (
              <Box key={item.hotelId} px={{ xs: 1, sm: 2 }}>
                <RoomCard {...item} />
              </Box>
            ))
          }
        />
      )}
    </Container>
  );
};

export default FeaturedDeals;
