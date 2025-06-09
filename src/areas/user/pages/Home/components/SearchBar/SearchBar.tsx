import { Box, Divider, Paper, SelectChangeEvent } from "@mui/material";
import AppSelect from "@travelia/components/Inputs/Select/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { cities } from "@travelia/fixtures";
import { useState } from "react";
import { SelectItem } from "@travelia/types";
import AppDateInput from "@travelia/components/Inputs/DatePicker";
import { CalendarMonth } from "@mui/icons-material";

const paperStyle = {
  bgcolor: "#fff",
  position: "absolute",
  left: "50%",
  bottom: -50,
  boxShadow: "0px 0px 5px -1px rgba(0, 0, 0, 0.2)",
  transform: "translateX(-50%)",
  width: { xs: "95%", md: "90%", lg: "75%" },
  borderRadius: "12px",
  p: 5,
};

const SearchBar = () => {
  const [city, setCity] = useState<SelectItem>(cities[0]);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");

  const handleSelectCityChange = (event: SelectChangeEvent) => {
    const selected = cities.find((c) => c.value === event.target.value);
    if (selected) {
      setCity(selected);
    }
  };

  const handleCheckInDateChange = (date: string) => {
    setCheckIn(date);
  };

  const handleCheckOutDateChange = (date: string) => {
    setCheckOut(date);
  };

  return (
    <Paper sx={paperStyle}>
      <Box display="flex" alignItems="center" gap="20px">
        <AppSelect
          items={cities}
          label="Location"
          item={city}
          onChange={handleSelectCityChange}
          icon={<LocationOnIcon sx={{ fontSize: 18, color: "#ddd" }} />}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "50px", width: "1px" }}
        />
        <AppDateInput
          value={checkIn}
          label="Check In"
          onChange={handleCheckInDateChange}
          icon={<CalendarMonth sx={{ fontSize: 18, color: "#ddd" }} />}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "50px", width: "1px" }}
        />
        <AppDateInput
          value={checkOut}
          label="Check Out"
          onChange={handleCheckOutDateChange}
          icon={<CalendarMonth sx={{ fontSize: 18, color: "#ddd" }} />}
        />
        <Divider
          orientation="vertical"
          flexItem
          sx={{ height: "50px", width: "1px" }}
        />
      </Box>
    </Paper>
  );
};

export default SearchBar;
