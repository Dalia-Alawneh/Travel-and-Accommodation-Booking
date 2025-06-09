import { Box, Divider, Paper, SelectChangeEvent } from "@mui/material";
import AppSelect from "@travelia/components/Inputs/Select/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { adults, children, cities } from "@travelia/fixtures";
import { useState } from "react";
import { SelectItem } from "@travelia/types";
import AppDateInput from "@travelia/components/Inputs/DatePicker";
import {
  CalendarMonth,
  ChildFriendly,
  People,
  Person,
  Search,
} from "@mui/icons-material";
import PopoverSelect from "@travelia/components/Inputs/PopoverSelect";
import AppButton from "@travelia/components/Button";

const paperStyle = {
  bgcolor: "#fff",
  position: "absolute",
  left: "50%",
  bottom: { xs: -20, sm: -50, md: -20, xl: -60 },
  transform: "translateX(-50%)",
  width: { xs: "95%", sm: "90%", md: "80%", lg: "70%" },
  borderRadius: "12px",
  p: { xs: 2, sm: 3, md: 4, lg: 5 },
  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.1)",
};

const SearchBar = () => {
  const [city, setCity] = useState<SelectItem>(cities[0]);
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [selectedAdults, setSelectedAdults] = useState<SelectItem>(adults[0]);
  const [selectedChild, setSelectedChild] = useState<SelectItem>(children[0]);

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

  const handleAdultsChange = (event: SelectChangeEvent) => {
    const selected = adults.find((adult) => adult.value === event.target.value);
    if (selected) {
      setSelectedAdults(selected);
    }
  };

  const handleChildrenChange = (event: SelectChangeEvent) => {
    const selected = children.find(
      (child) => child.value === event.target.value,
    );
    if (selected) {
      setSelectedChild(selected);
    }
  };

  return (
    <Paper sx={paperStyle}>
      <form>
        <Box flexWrap="wrap" display="flex" alignItems="center" gap="20px">
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
          <PopoverSelect
            label="Guest"
            icon={<People sx={{ fontSize: 18, color: "#ddd" }} />}
            displayValue={`${selectedAdults.value} Adults, ${selectedChild.value} Children`}
          >
            <Box px={3}>
              <AppSelect
                items={adults}
                label=""
                item={selectedAdults}
                onChange={handleAdultsChange}
                icon={<Person sx={{ fontSize: 18, color: "#ddd" }} />}
              />
              <Divider orientation="horizontal" flexItem />
              <AppSelect
                items={children}
                label=""
                item={selectedChild}
                onChange={handleChildrenChange}
                icon={<ChildFriendly sx={{ fontSize: 18, color: "#ddd" }} />}
              />
            </Box>
          </PopoverSelect>
          <AppButton
            sx={{ bgcolor: "#000", color: "#fff", px: "30px" }}
            type="submit"
          >
            <Search sx={{ fontSize: 20, color: "#ddd" }} /> Search
          </AppButton>
        </Box>
      </form>
    </Paper>
  );
};

export default SearchBar;
