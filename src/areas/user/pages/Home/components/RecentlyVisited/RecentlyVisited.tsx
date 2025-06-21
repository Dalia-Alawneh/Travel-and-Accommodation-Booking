import { Box } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import RoomCardSkeleton from "@travelia/areas/user/components/RoomCard/RoomCardSkeleton";
import SectionTitle from "@travelia/areas/user/components/SectionTitle/SectionTitle";
import withContainer from "@travelia/HOC/withContainer";
import PauseOnHoverCarousel from "../PauseOnHoverCarousel/PauseOnHoverCarousel";
import RecentlyVisitedCard from "../RecentlyVisitedCard/RecentlyVisitedCard";
import { getVisitedHotels } from "@travelia/api/endpoints/home";

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
    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
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

const RecentlyVisited = () => {
  const { isLoading, data: hotels } = useQuery({
    queryKey: ["visitedHotels"],
    queryFn: getVisitedHotels,
  });

  return (
    <>
      <SectionTitle title="Recently Visited Hotels" subTitle="" />
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
      ) : hotels?.length === 0 ? (
        <Box textAlign="center" color="text.secondary">
          No data found
        </Box>
      ) : (
        <PauseOnHoverCarousel
          slidesToShow={2}
          responsiveBreakpoints={carouselResponsive}
          render={() =>
            hotels?.map((item) => (
              <Box key={item.hotelId} px={{ xs: 1, sm: 2 }}>
                <RecentlyVisitedCard {...item} />
              </Box>
            ))
          }
        />
      )}
    </>
  );
};

const WrappedRecentlyVisited = withContainer(RecentlyVisited);

export default WrappedRecentlyVisited;
