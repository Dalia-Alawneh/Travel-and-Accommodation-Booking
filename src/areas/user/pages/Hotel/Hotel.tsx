import { useQuery } from "@tanstack/react-query";
import {
  getHotel,
  getHotelAvailableRooms,
  getHotelGallery,
  getHotelReviews,
} from "@travelia/api/endpoints/hotel";
import { useParams } from "react-router";
import PageHero from "../../components/PageHero";
import Main from "../../components/MainSection";
import {
  Box,
  Grid,
  Rating,
  Skeleton,
  Typography,
  useTheme,
} from "@mui/material";
import IconWithText from "../../components/IconWithText";
import { LocationOn, Reviews, Stars } from "@mui/icons-material";
import Amenities from "../../components/Amenities";
import Gallery from "./components/Gallery";
import { hotelBoxSx } from "@travelia/styles";
import AvailableRoomCard from "./components/AvailableRoomCard";
import Review from "./components/Review/Review";
import { useState } from "react";
// import Map from "../../components/Map/Map";

const HotelPage = () => {
  const { id } = useParams();
  const theme = useTheme();
  const [showAllReviews, setShowAllReviews] = useState(false);

  const { data: hotelInfo, isLoading: isHotelLoading } = useQuery({
    queryKey: ["hotel", id],
    queryFn: () => getHotel(Number(id)),
  });

  const { data: gallery, isLoading: isGalleryLoading } = useQuery({
    queryKey: ["gallery", id],
    queryFn: () => getHotelGallery(Number(id)),
  });

  const { data: reviews, isLoading: isReviewsLoading } = useQuery({
    queryKey: ["reviews", id],
    queryFn: () => getHotelReviews(Number(id)),
  });

  const today = new Date();
  const nextWeek = new Date();
  nextWeek.setDate(today.getDate() + 7);

  const { data: availableRooms, isLoading: isAvailableRoomsLoading } = useQuery(
    {
      queryKey: ["availableRooms", id],
      queryFn: () =>
        getHotelAvailableRooms(
          Number(id),
          today.toISOString(),
          nextWeek.toISOString(),
        ),
    },
  );

  return (
    <>
      <PageHero title={hotelInfo?.hotelName || "Hotel"} />
      <Main>
        <Grid container spacing={5} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6, lg: 5 }}>
            <Box
              sx={{
                ...hotelBoxSx,
                boxShadow: theme.customShadows.light,
              }}
            >
              {isHotelLoading ? (
                <>
                  <Skeleton variant="text" width="60%" height={40} />
                  <Skeleton variant="text" width="30%" height={20} />
                  <Skeleton variant="rectangular" height={100} sx={{ my: 2 }} />
                  <Skeleton variant="text" width="90%" />
                  <Skeleton variant="text" width="70%" />
                </>
              ) : (
                <Box sx={{ display: "flex", gap: 2, flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Typography variant="h3" fontWeight={600}>
                      {hotelInfo?.hotelName}
                    </Typography>
                    <Rating
                      value={hotelInfo?.starRating}
                      readOnly
                      size="small"
                    />
                  </Box>

                  {hotelInfo?.location && (
                    <IconWithText
                      text={hotelInfo.location}
                      icon={
                        <LocationOn
                          sx={{ color: "custom.orange", fontSize: 18 }}
                        />
                      }
                    />
                  )}
                  <Typography variant="caption">
                    {hotelInfo?.description}
                  </Typography>

                  {hotelInfo?.amenities && (
                    <>
                      <IconWithText
                        text="Amenities"
                        icon={
                          <Stars
                            sx={{ color: "custom.orange", fontSize: 18 }}
                          />
                        }
                      />
                      <Amenities amenities={hotelInfo?.amenities || []} />
                    </>
                  )}
                </Box>
              )}
              <Box>
                <Box>
                  {isReviewsLoading ? (
                    <>
                      <Skeleton
                        variant="rectangular"
                        height={50}
                        sx={{ mb: 1 }}
                      />
                      <Skeleton
                        variant="rectangular"
                        height={50}
                        sx={{ mb: 1 }}
                      />
                      <Skeleton variant="rectangular" height={50} />
                    </>
                  ) : reviews?.length ? (
                    <>
                      <IconWithText
                        text="Reviews"
                        icon={
                          <Reviews
                            sx={{ color: "custom.orange", fontSize: 18 }}
                          />
                        }
                      />
                      {reviews
                        .slice(0, showAllReviews ? reviews.length : 3)
                        .map((review) => (
                          <Review review={review} key={review.reviewId} />
                        ))}

                      {reviews.length > 3 && !showAllReviews && (
                        <Typography
                          sx={{
                            mt: 1,
                            color: "primary.main",
                            cursor: "pointer",
                            textDecoration: "underline",
                            fontSize: 14,
                          }}
                          onClick={() => setShowAllReviews(true)}
                        >
                          View All Reviews
                        </Typography>
                      )}
                    </>
                  ) : (
                    <Typography variant="body2">
                      No reviews available.
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>

          {gallery?.length && (
            <Grid size={{ xs: 12, md: 6, lg: 7 }}>
              <Gallery gallery={gallery} isGalleryLoading={isGalleryLoading} />
              {isAvailableRoomsLoading ? (
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, lg: 6 }}>
                    <Skeleton height={500} />
                  </Grid>
                  <Grid size={{ xs: 12, lg: 6 }}>
                    <Skeleton height={500} />
                  </Grid>
                </Grid>
              ) : (
                availableRooms?.length && (
                  <Box
                    sx={{
                      ...hotelBoxSx,
                      mt: 4,
                      boxShadow: theme.customShadows.light,
                    }}
                  >
                    <Typography variant="h3" mb={3}>
                      Available Rooms
                    </Typography>

                    <Grid container spacing={3} alignItems="stretch">
                      {availableRooms.map((room) => (
                        <Grid size={{ xs: 12, lg: 6 }} key={room.roomId}>
                          <AvailableRoomCard room={room} />
                        </Grid>
                      ))}
                    </Grid>
                  </Box>
                )
              )}
            </Grid>
          )}
        </Grid>
      </Main>
    </>
  );
};

export default HotelPage;
