import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import { Box, Container, Typography } from "@mui/material";

const Skeleton = styled("div")<{ height: number }>(({ theme, height }) => ({
  backgroundColor: theme.palette.action.hover,
  borderRadius: theme.shape.borderRadius,
  height,
  content: '" "',
}));

export default function Dashboard() {
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={1}>
          <Grid size={12}>
            <Typography variant="h3" mb={3}>
              <Box component="span" sx={{ color: "custom.orange" }}>
                Travila
              </Box>{" "}
              Dashboard! 😎
            </Typography>

            <Skeleton height={14} />
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
