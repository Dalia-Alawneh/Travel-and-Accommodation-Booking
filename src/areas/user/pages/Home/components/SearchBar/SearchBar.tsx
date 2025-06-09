import { Paper, SelectChangeEvent } from "@mui/material";
import AppSelect from "@travelia/components/Inputs/Select/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { cities } from "@travelia/fixtures";
import { useState } from "react";
import { SelectItem } from "@travelia/types";

const SearchBar = () => {
  const [city, setCity] = useState<SelectItem>(cities[0]);

  const handleChange = (event: SelectChangeEvent) => {
    const selected = cities.find((c) => c.value === event.target.value);
    if (selected) {
      setCity(selected);
    }
  };

  return (
    <Paper
      sx={{
        bgcolor: "#fff",
        position: "absolute",
        left: "50%",
        bottom: -50,
        boxShadow: "0px 0px 5px -1px rgba(0, 0, 0, 0.2)",
        transform: "translateX(-50%)",
        width: { xs: "95%", md: "90%", lg: "75%" },
        borderRadius: "12px",
        p: 3,
      }}
    >
      <AppSelect
        items={cities}
        label="Location"
        item={city}
        onChange={handleChange}
        icon={<LocationOnIcon sx={{ fontSize: 18, color: "#ddd" }} />}
      />
    </Paper>
  );
};

export default SearchBar;
