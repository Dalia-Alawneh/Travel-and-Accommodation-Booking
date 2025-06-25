import { Box, Typography } from "@mui/material";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";

const Cities = () => {
  return (
    <Box>
      <Typography variant="h3" my={3}>
        Manage Cities
      </Typography>
      <FormikTextField name="Search" placeholder="Search City" />
    </Box>
  );
};

export default Cities;
