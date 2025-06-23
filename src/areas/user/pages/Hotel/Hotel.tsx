import { useQuery } from "@tanstack/react-query";
import { getHotel } from "@travelia/api/endpoints/hotel";
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
import { LocationOn } from "@mui/icons-material";
import Amenities from "../../components/Amenities";

const hotelBoxSx = {
  p: 3,
  borderRadius: 1,
  display: "flex",
  flexDirection: "column",
  gap: 1,
};

const HotelPage = () => {
  const { id } = useParams();
  const theme = useTheme();

  const { data: hotelInfo, isLoading } = useQuery({
    queryKey: ["hotel"],
    queryFn: () => getHotel(Number(id)),
  });

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
              {isLoading ? (
                <>
                  <Skeleton variant="text" width="60%" height={40} />
                  <Skeleton variant="text" width="30%" height={20} />
                  <Skeleton variant="rectangular" height={100} sx={{ my: 2 }} />
                  <Skeleton variant="text" width="90%" />
                  <Skeleton variant="text" width="70%" />
                </>
              ) : (
                <>
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
                    <Amenities amenities={hotelInfo?.amenities || []} />
                  )}
                </>
              )}
            </Box>
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default HotelPage;
