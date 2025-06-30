import { Box, CircularProgress, Typography } from "@mui/material";
import { motion } from "framer-motion";

const loaderSx = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100vh",
  flexDirection: "column",
};

const AppLoader = () => {
  return (
    <Box sx={loaderSx}>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <CircularProgress size={60} />
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 1,
          delay: 0.5,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      >
        <Typography sx={{ mt: 3, fontSize: 18, color: "text.secondary" }}>
          Loading...
        </Typography>
      </motion.div>
    </Box>
  );
};

export default AppLoader;
