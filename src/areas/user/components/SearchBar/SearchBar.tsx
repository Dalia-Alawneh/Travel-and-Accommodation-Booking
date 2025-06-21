import { Box, Grid, SelectChangeEvent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useState } from "react";
import { City, SelectItem } from "@travelia/types";
import AppDateInput from "@travelia/components/Inputs/DatePicker";
import { CalendarMonth, People, Search } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import { useQuery } from "@tanstack/react-query";
import { getCities } from "@travelia/api/endpoints/cities";
import SearchGridItem from "../../pages/Home/components/SearchGridItem";
import PopoverSelect from "@travelia/components/Inputs/PopoverSelect";
import AppSelect from "@travelia/components/Inputs/Select/Select";
import Counter from "../Counter/Counter";

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState("");
  const [checkOut, setCheckOut] = useState("");
  const [city, setCity] = useState<SelectItem>();
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [rooms, setRooms] = useState(1);

  const { data: citiesData } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  const mappedCities: SelectItem[] =
    citiesData?.map((city: City) => ({
      text: city.name,
      value: city.id,
    })) || [];

  const handleSelectCityChange = (e: SelectChangeEvent) => {
    const selected = mappedCities.find((c) => c.value === e.target.value);
    if (selected) setCity(selected);
  };

  return (
    <form>
      <Grid container spacing={2} alignItems="center" justifyContent="center">
        <SearchGridItem>
          <AppSelect
            items={mappedCities}
            label="Location"
            item={city ?? mappedCities[0] ?? { value: "", text: "" }}
            onChange={handleSelectCityChange}
            icon={<LocationOnIcon sx={{ fontSize: 18, color: "#ddd" }} />}
          />
        </SearchGridItem>

        <SearchGridItem>
          <AppDateInput
            value={checkIn}
            label="Check In"
            onChange={setCheckIn}
            icon={<CalendarMonth sx={{ fontSize: 18, color: "#ddd" }} />}
          />
        </SearchGridItem>

        <SearchGridItem>
          <AppDateInput
            value={checkOut}
            label="Check Out"
            onChange={setCheckOut}
            icon={<CalendarMonth sx={{ fontSize: 18, color: "#ddd" }} />}
          />
        </SearchGridItem>

        <Grid size={{ xs: 12, sm: 6, lg: 3 }} sx={{ display: "flex", gap: 1 }}>
          <PopoverSelect
            label="Guest"
            icon={
              <People sx={{ fontSize: 18, color: "#ddd", width: "100%" }} />
            }
            displayValue={`${adults} Adults, ${children} Children, ${rooms} Rooms`}
          >
            <Box px={2} py={1}>
              <Counter label="Adults" value={adults} onClick={setAdults} />
              <Counter
                label="Children"
                value={children}
                onClick={setChildren}
              />
              <Counter label="Rooms" value={rooms} onClick={setRooms} />
            </Box>
          </PopoverSelect>
        </Grid>
        <Grid
          size={{ xs: 12, sm: 6, lg: 1.8 }}
          sx={{ display: "flex", gap: 1 }}
        >
          <AppButton
            sx={{ bgcolor: "#000", color: "#fff", px: "30px", width: "100%" }}
            type="submit"
          >
            <Search sx={{ fontSize: 20, color: "#ddd" }} /> Search
          </AppButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
