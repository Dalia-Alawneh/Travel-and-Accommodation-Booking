import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getHotelReviews, getHotels } from "@travelia/api/endpoints/hotel";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
  ArcElement,
  PointElement,
  LineElement,
  Filler,
} from "chart.js";
import ChartWrapper from "./components/ChartWrapper";
import Review from "@travelia/components/Review";
import { getRooms } from "@travelia/api/endpoints/rooms";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
  Filler,
);

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  width: "100%",
}));

export default function Dashboard() {
  const { data: hotels, isLoading: isHotelsLoading } = useQuery({
    queryKey: ["Hotel"],
    queryFn: getHotels,
  });

  const { data: reviews, isLoading: isReviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getHotelReviews(1),
  });

  const { data: rooms, isLoading: isRoomsLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  const availableRoomsData = {
    labels: hotels?.filter((h) => h.hotelName).map((h) => h.hotelName) || [],
    datasets: [
      {
        label: "Available Rooms",
        data:
          hotels
            ?.filter((h) => h.hotelName)
            .map((h) => h.availableRooms || 0) || [],
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: hotels?.map((h) => h.hotelName) || [],
    datasets: [
      {
        label: "Number of Amenities",
        data: hotels?.map((h) => h.amenities?.length || 0) || [],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
        borderWidth: 1,
      },
    ],
  };

  const lineChartData = {
    labels: rooms?.map((r) => `Room ${r.roomNumber}`) || [],
    datasets: [
      {
        label: "Room Price (USD)",
        data: rooms?.map((r) => r.price) || [],
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Number of Amenities",
        data: rooms?.map((r) => r.roomAmenities.length) || [],
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <Container maxWidth="xl">
      <Typography variant="h3" mb={3}>
        <Box component="span" sx={{ color: "custom.orange" }}>
          Travila
        </Box>{" "}
        Dashboard! 😎
      </Typography>

      <Grid container spacing={2}>
        <Grid
          size={{ xs: 12, lg: 8, xl: 9 }}
          container
          spacing={2}
          direction="column"
        >
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, lg: 8 }}>
              <ChartWrapper title="Available Hotel Rooms">
                {isHotelsLoading ? (
                  <Skeleton height={400} />
                ) : (
                  <Bar data={availableRoomsData} />
                )}
              </ChartWrapper>
            </Grid>
            <Grid size={{ xs: 12, lg: 4 }}>
              <ChartWrapper title="Hotel Amenities">
                {isHotelsLoading ? (
                  <Skeleton height={400} />
                ) : (
                  <Doughnut
                    data={doughnutData}
                    options={{
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          callbacks: {
                            label: (context) =>
                              `${context.label || ""}: ${context.formattedValue || 0} Amenities`,
                          },
                        },
                      },
                    }}
                  />
                )}
              </ChartWrapper>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12 }}>
            <ChartWrapper title="Room Prices & Amenities">
              {isRoomsLoading ? (
                <Skeleton height={520} />
              ) : (
                <Line data={lineChartData} />
              )}
            </ChartWrapper>
          </Grid>
        </Grid>

        <Grid size={{ xs: 12, lg: 4, xl: 3 }}>
          <ChartWrapper title="Reviews">
            {isReviewsLoading || !reviews
              ? Array.from({ length: 5 }).map((_, i) => (
                  <Skeleton
                    key={i}
                    height={150}
                    style={{ marginTop: i ? 16 : 0 }}
                  />
                ))
              : reviews
                  .slice(0, 6)
                  .map((review) => (
                    <Review key={review.reviewId} review={review} />
                  ))}
          </ChartWrapper>
        </Grid>
      </Grid>
    </Container>
  );
}
