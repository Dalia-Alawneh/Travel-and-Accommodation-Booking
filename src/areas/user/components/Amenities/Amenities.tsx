import { Box } from "@mui/material";
import { IAmenity } from "@travelia/types";

interface IAmenitiesProps {
  amenities: Omit<IAmenity, "id">[];
}

const Amenities = ({ amenities }: IAmenitiesProps) => {
  return (
    <Box>
      <Box sx={{ display: "flex", gap: 1, my: 1, flexWrap: "wrap" }}>
        {amenities.map((amenity) => (
          <Box
            key={amenity.name}
            bgcolor="success.light"
            color="white"
            px={1}
            py={0.2}
            sx={{ fontSize: 11, borderRadius: 999 }}
          >
            {amenity.name}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Amenities;
