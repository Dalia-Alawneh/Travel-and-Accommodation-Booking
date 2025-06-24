import { Box, Skeleton } from "@mui/material";

const RoomCardSkeleton = () => {
  return (
    <Box sx={{ width: 350, minWidth: 300 }}>
      <Skeleton variant="rectangular" height={180} sx={{ borderRadius: 2 }} />
      <Skeleton height={24} sx={{ mt: 1, borderRadius: 1 }} />
      <Skeleton height={24} width="60%" sx={{ mt: 0.5, borderRadius: 1 }} />
    </Box>
  );
};

export default RoomCardSkeleton;
