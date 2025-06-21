import { Box, Grid, SelectChangeEvent } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import { useEffect, useMemo, useState } from "react";
import { City, SearchValues, SelectItem } from "@travelia/types";
import AppDateInput from "@travelia/components/Inputs/DatePicker";
import { CalendarMonth, People, Search } from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import { useQuery } from "@tanstack/react-query";
import { getCities } from "@travelia/api/endpoints/cities";
import SearchGridItem from "../../pages/Home/components/SearchGridItem";
import PopoverSelect from "@travelia/components/Inputs/PopoverSelect";
import AppSelect from "@travelia/components/Inputs/Select/Select";
import Counter from "../Counter/Counter";

interface ISearchBarProps {
  onSearch: (params: Partial<SearchValues>) => void;
  initialValues?: Partial<SearchValues>;
}
const SearchBar = ({ onSearch, initialValues }: ISearchBarProps) => {
  const [checkIn, setCheckIn] = useState(initialValues?.checkInDate ?? "");
  const [checkOut, setCheckOut] = useState(initialValues?.checkOutDate ?? "");
  const [city, setCity] = useState<SelectItem>();
  const [adults, setAdults] = useState(initialValues?.adults ?? 1);
  const [children, setChildren] = useState(initialValues?.children ?? 0);
  const [rooms, setRooms] = useState(initialValues?.numberOfRooms ?? 1);

  const { data: citiesData } = useQuery({
    queryKey: ["cities"],
    queryFn: getCities,
  });

  const mappedCities: SelectItem[] = useMemo(() => {
    return (
      citiesData?.map((city: City) => ({
        text: city.name,
        value: city.id,
      })) || []
    );
  }, [citiesData]);

  useEffect(() => {
    if (initialValues?.city && mappedCities.length > 0) {
      const foundCity = mappedCities.find((c) => c.text === initialValues.city);
      if (foundCity) setCity(foundCity);
    }
  }, [initialValues?.city, mappedCities]);

  const handleSelectCityChange = (e: SelectChangeEvent) => {
    const selected = mappedCities.find((c) => c.value === e.target.value);
    if (selected) setCity(selected);
  };

  const handleOnSearch = () => {
    onSearch({
      checkInDate: checkIn,
      checkOutDate: checkOut,
      adults,
      children,
      city: city?.text || "",
      numberOfRooms: rooms,
    });
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
            onClick={handleOnSearch}
          >
            <Search sx={{ fontSize: 20, color: "#ddd" }} /> Search
          </AppButton>
        </Grid>
      </Grid>
    </form>
  );
};

export default SearchBar;
