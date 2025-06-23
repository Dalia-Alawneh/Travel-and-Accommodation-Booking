import { Box, Typography } from "@mui/material";
import { IAmenity } from "@travelia/types";

interface IAmenitiesProps {
  amenities: Omit<IAmenity, "id">[];
}

const Amenities = ({ amenities }: IAmenitiesProps) => {
  return (
    <Box mt={2}>
      <Typography variant="subtitle2" fontWeight={600} mb={1}>
        Amenities
      </Typography>
      <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
        {amenities.map((amenity) => (
          <Box
            key={amenity.name}
            bgcolor="success.light"
            color="white"
            px={1}
            py={0.2}
            sx={{ fontSize: 12, borderRadius: 999 }}
          >
            {amenity.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Amenities;
