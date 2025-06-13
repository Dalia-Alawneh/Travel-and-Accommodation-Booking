import { Box, Skeleton } from "@mui/material";

const DestinationCardSkeleton = () => {
  return (
    <Box sx={{ minWidth: 400, display: "flex", gap: 2, alignItems: "center" }}>
      <Skeleton
        variant="rectangular"
        width={150}
        height={180}
        sx={{
          borderBottomLeftRadius: 32,
          borderTopLeftRadius: 32,
        }}
      />
      <Box>
        <Skeleton height={24} width={250} sx={{ mt: 1, borderRadius: 1 }} />
        <Skeleton height={24} width="60%" sx={{ mt: 0.5, borderRadius: 1 }} />
      </Box>
    </Box>
  );
};

export default DestinationCardSkeleton;
