import { Box, Grid, SelectChangeEvent } from "@mui/material";
import AppSelect from "@travelia/components/Inputs/Select/Select";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { adults, children } from "@travelia/fixtures";
import { useState } from "react";
import { City, SelectItem } from "@travelia/types";
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
import AppDivider from "@travelia/components/Divider/Divider";
import { useQuery } from "@tanstack/react-query";
import { getCities } from "@travelia/api/endpoints/cities";
import SearchGridItem from "../SearchGridItem";

const SearchBar = () => {
  const [checkIn, setCheckIn] = useState<string>("");
  const [checkOut, setCheckOut] = useState<string>("");
  const [selectedAdults, setSelectedAdults] = useState<SelectItem>(adults[0]);
  const [selectedChild, setSelectedChild] = useState<SelectItem>(children[0]);
  const [city, setCity] = useState<SelectItem>();

  const { data: citiesData } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });
  const mappedCities: SelectItem[] =
    citiesData?.map((city: City) => ({
      text: city.name,
      value: city.id,
    })) || [];

  const handleSelectCityChange = (event: SelectChangeEvent) => {
    const selected = mappedCities.find((c) => c.value === event.target.value);
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
    <form>
      <Grid container spacing={3} alignItems="center" justifyContent="center">
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
            onChange={handleCheckInDateChange}
            icon={<CalendarMonth sx={{ fontSize: 18, color: "#ddd" }} />}
          />
        </SearchGridItem>
        <SearchGridItem>
          <AppDateInput
            value={checkOut}
            label="Check Out"
            onChange={handleCheckOutDateChange}
            icon={<CalendarMonth sx={{ fontSize: 18, color: "#ddd" }} />}
          />
        </SearchGridItem>
        <SearchGridItem showDivider={false}>
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
              <AppDivider orientation="horizontal" />
              <AppSelect
                items={children}
                label=""
                item={selectedChild}
                onChange={handleChildrenChange}
                icon={<ChildFriendly sx={{ fontSize: 18, color: "#ddd" }} />}
              />
            </Box>
          </PopoverSelect>
        </SearchGridItem>
        <SearchGridItem showDivider={false}>
          <AppButton
            sx={{ bgcolor: "#000", color: "#fff", px: "30px", width: "100%" }}
            type="submit"
          >
            <Search sx={{ fontSize: 20, color: "#ddd" }} /> Search
          </AppButton>
        </SearchGridItem>
      </Grid>
    </form>
  );
};

export default SearchBar;
