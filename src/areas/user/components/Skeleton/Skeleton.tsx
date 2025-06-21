import { Box, Skeleton } from "@mui/material";

const AppSkeleton = () => {
  return (
    <Box
      height="100%"
      display="flex"
      justifyContent="center"
      gap={1}
      alignItems="center"
    >
      <Skeleton width="8px" height="16px" />
      <Skeleton width="8px" height="16px" />
      <Skeleton width="8px" height="16px" />
    </Box>
  );
};

export default AppSkeleton;
