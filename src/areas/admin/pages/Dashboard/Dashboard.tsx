import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getHotels } from "@travelia/api/endpoints/hotel";
import { Bar, Doughnut } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import ChartWrapper from "./components/ChartWrapper";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
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

  return (
    <>
      <Container maxWidth="xl">
        <Typography variant="h3" mb={3}>
          <Box component="span" sx={{ color: "custom.orange" }}>
            Travila
          </Box>{" "}
          Dashboard! 😎
        </Typography>
        <Grid container spacing={1}>
          <Grid size={{ xs: 12, lg: 6 }}>
            <ChartWrapper title="Available Hotel Rooms">
              <Bar data={availableRoomsData} />
              {isLoading && <Skeleton height={400} />}
            </ChartWrapper>
          </Grid>
          <Grid size={{ xs: 12, lg: 3 }}>
            <Skeleton height={400} />
          </Grid>
          <Grid size={12}>
            <Skeleton height={14} />
          </Grid>
          <Grid size={4}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={8}>
            <Skeleton height={100} />
          </Grid>

          <Grid size={12}>
            <Skeleton height={150} />
          </Grid>
          <Grid size={12}>
            <Skeleton height={14} />
          </Grid>

          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
          <Grid size={3}>
            <Skeleton height={100} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
