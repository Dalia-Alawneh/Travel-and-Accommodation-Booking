import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getFeaturedDeals } from "@travelia/api/endpoints/home";
import RoomCard from "@travelia/areas/user/pages/Home/components/RoomCard";
import PauseOnHoverCarousel from "../PauseOnHoverCarousel/PauseOnHoverCarousel";
import RoomCardSkeleton from "@travelia/areas/user/pages/Home/components/RoomCard/RoomCardSkeleton";
import SectionTitle from "@travelia/areas/user/components/SectionTitle/SectionTitle";
import withContainer from "@travelia/HOC/withContainer";

const carouselResponsive = [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 3,
      slidesToScroll: 3,
      dots: true,
    },
  },
  {
    breakpoint: 1024,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      initialSlide: 2,
    },
  },
  {
    breakpoint: 730,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
];

const FeaturedDeals = () => {
  const { isLoading, data: featureDeals } = useQuery({
    queryKey: ["featuredDeals"],
    queryFn: getFeaturedDeals,
  });

  return (
    <Box pt={{ xs: 1, md: 5 }}>
      <SectionTitle
        title="Featured Deals"
        subTitle="Deals you don’t want to miss"
      />
      {isLoading ? (
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            gap: 2,
            px: { xs: 1, sm: 2 },
          }}
        >
          {Array.from({ length: 3 }, (_, index) => (
            <RoomCardSkeleton key={index} />
          ))}
        </Box>
      ) : featureDeals?.length === 0 ? (
        <Box textAlign="center" color="text.secondary">
          No data found
        </Box>
      ) : (
        <PauseOnHoverCarousel
          slidesToShow={3}
          responsiveBreakpoints={carouselResponsive}
          render={() =>
            featureDeals?.map((item) => (
              <Box key={item.hotelId} px={{ xs: 1, sm: 2 }}>
                <RoomCard {...item} />
              </Box>
            ))
          }
        />
      )}
    </Box>
  );
};

const WrappedFeaturedDeals = withContainer(FeaturedDeals);
export default WrappedFeaturedDeals;
