import { Box, Typography } from "@mui/material";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";

const Cities = () => {
  return (
    <Box>
      <Typography variant="h3" my={3}>
        Manage Cities
      </Typography>
      <Box mb={4}>
        <AppTextField name="Search" placeholder="Search City" />
      </Box>
    </Box>
  );
};

export default Cities;
