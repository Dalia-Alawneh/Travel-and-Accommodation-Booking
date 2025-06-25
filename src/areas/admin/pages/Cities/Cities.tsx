import { Box, Typography } from "@mui/material";
import AppTextFieldFormik from "@travelia/components/Inputs/TextField/TextField";

const Cities = () => {
  return (
    <Box>
      <Typography variant="h3" my={3}>
        Manage Cities
      </Typography>
      <AppTextFieldFormik name="Search" placeholder="Search City" />
    </Box>
  );
};

export default Cities;
