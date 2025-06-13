import { Box } from "@mui/material";
import SectionTitle from "@travelia/areas/user/components/SectionTitle/SectionTitle";
import withContainer from "@travelia/HOC/withContainer";
import PauseOnHoverCarousel from "../PauseOnHoverCarousel/PauseOnHoverCarousel";
import { useQuery } from "@tanstack/react-query";
import { getTrendingDestinations } from "@travelia/api/endpoints/home";
import DestinationCard from "@travelia/areas/user/components/DestinationCard/DestinationCard";
import DestinationCardSkeleton from "@travelia/areas/user/components/DestinationCard/DestinationCardSkeleton";

const carouselResponsive = [
  {
    breakpoint: 1400,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 1,
      dots: true,
    },
  },
  {
    breakpoint: 1100,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 1,
    },
  },
];

const TrendingDestinations = () => {
  const { isLoading, data: trendingDestinations } = useQuery({
    queryKey: ["trendingDestinations"],
    queryFn: getTrendingDestinations,
  });

  return (
    <>
      <SectionTitle
        title="Trending Destinations"
        subTitle="Favorite destinations based on customer reviews"
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
          {Array.from({ length: 2 }, (_, index) => (
            <DestinationCardSkeleton key={index} />
          ))}
        </Box>
      ) : trendingDestinations?.length === 0 ? (
        <Box textAlign="center" color="text.secondary">
          No data found
        </Box>
      ) : (
        <PauseOnHoverCarousel
          slidesToShow={2}
          responsiveBreakpoints={carouselResponsive}
          render={() =>
            trendingDestinations?.map((item) => (
              <Box key={item.cityId} px={{ xs: 1, sm: 2 }} height="100%">
                <DestinationCard {...item} />
              </Box>
            ))
          }
        />
      )}
    </>
  );
};

const WrappedTrendingDestinations = withContainer(TrendingDestinations);
export default WrappedTrendingDestinations;
