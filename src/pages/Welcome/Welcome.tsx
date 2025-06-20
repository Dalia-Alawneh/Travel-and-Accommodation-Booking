import { Box, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { whiteLogo, welcome } from "@travelia/assets"; // adjust as needed
import AppButton from "@travelia/components/Button";

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        height: "100vh",
        backgroundImage: `url(${welcome})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        color: "white",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          bgcolor: "rgba(0, 0, 0, 0.5)",
        }}
      />

      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",
          px: 3,
        }}
      >
        <Box sx={{ width: 180, mb: 4 }}>
          <img src={whiteLogo} alt="Travelia Logo" width="100%" />
        </Box>
        <Typography variant="h1" fontWeight={900}>
          Welcome to Travelia
        </Typography>
        <Typography variant="h6" mt={4} maxWidth={600}>
          Discover the world with ease. Book your journeys, explore
          destinations, and enjoy the ride.
        </Typography>
        <AppButton
          variant="contained"
          sx={{ mt: 5, px: 5, py: 1.5, bgcolor: "secondary.main" }}
          onClick={() => navigate("/login")}
        >
          Start Now
        </AppButton>
      </Box>
    </Box>
  );
};

export default Welcome;
