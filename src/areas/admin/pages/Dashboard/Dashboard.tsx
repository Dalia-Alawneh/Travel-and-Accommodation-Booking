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
  Title,
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
  content: '" "',
}));

export default function Dashboard() {
  const { data, isLoading } = useQuery({
    queryKey: ["Hotel"],
    queryFn: () => getHotels(),
  });
  const { data: reviews, isReviewsLoading } = useQuery({
    queryKey: ["reviews"],
    queryFn: () => getHotelReviews(1),
  });
  const { data: rooms, isRoomsLoading } = useQuery({
    queryKey: ["rooms"],
    queryFn: () => getRooms(),
  });

  const availableRoomsData = {
    labels: data
      ?.filter((hotel) => !!hotel.hotelName)
      .map((hotel) => hotel.hotelName),
    datasets: [
      {
        label: "Available Rooms",
        data: data
          ?.filter((hotel) => !!hotel.hotelName)
          .map((hotel) => hotel.availableRooms || 0),
        backgroundColor: "rgba(75, 192, 192, 0.5)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
    ],
  };

  const doughnutData = {
    labels: data?.map((hotel) => hotel.hotelName),
    datasets: [
      {
        label: "Number of Amenities",
        data: data?.map((hotel) => hotel.amenities?.length || 0),
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
    labels: rooms?.map((room) => `Room ${room.roomNumber}`),
    datasets: [
      {
        label: "Room Price (USD)",
        data: rooms?.map((room) => room.price),
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        tension: 0.3,
        fill: true,
      },
      {
        label: "Number of Amenities",
        data: rooms?.map((room) => room.roomAmenities.length),
        borderColor: "rgba(255, 99, 132, 1)",
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        tension: 0.3,
        fill: true,
      },
    ],
  };

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h3" mb={3}>
          <Box component="span" sx={{ color: "custom.orange" }}>
            Travila
          </Box>{" "}
          Dashboard! 😎
        </Typography>
        <Grid container spacing={2}>
          <Grid
            size={{ xs: 12, lg: 9 }}
            container
            spacing={2}
            direction="column"
          >
            <Grid container spacing={2}>
              <Grid size={{ xs: 12, lg: 8 }}>
                <ChartWrapper title="Available Hotel Rooms">
                  <Bar data={availableRoomsData} />
                  {isLoading && <Skeleton height={400} />}
                </ChartWrapper>
              </Grid>
              <Grid size={{ xs: 12, lg: 4 }}>
                <ChartWrapper title="Hotel Amenities">
                  <Doughnut
                    width={300}
                    data={doughnutData}
                    options={{
                      plugins: {
                        legend: { display: false },
                        tooltip: {
                          callbacks: {
                            label: function (context) {
                              const label = context.label || "";
                              const value = context.formattedValue || 0;
                              return `${label}: ${value} Amenities`;
                            },
                          },
                        },
                      },
                    }}
                  />
                  {isLoading && <Skeleton height={400} />}
                </ChartWrapper>
              </Grid>
            </Grid>

            <Grid size={{ xs: 12 }}>
              <ChartWrapper title="Room Prices & Amenities">
                <Line data={lineChartData} />
                {isLoading && <Skeleton height={400} />}
              </ChartWrapper>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, lg: 3 }}>
            <ChartWrapper title="Reviews">
              {reviews?.slice(0, 6).map((review) => (
                <Review key={review.reviewId} review={review} />
              ))}
            </ChartWrapper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
