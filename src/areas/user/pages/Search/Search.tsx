import { useSearchParams } from "react-router";
import PageHero from "../../components/PageHero";
import SearchBar from "../../components/SearchBar";
import withContainer from "@travelia/HOC/withContainer";
import { ReactNode, useState } from "react";
import {
  Box,
  CardMedia,
  Divider,
  FormGroup,
  Grid,
  InputLabel,
  Rating,
  Slider,
  Typography,
  useTheme,
} from "@mui/material";
import AppForm from "@travelia/components/Form";
import { useQuery } from "@tanstack/react-query";
import { getAmenities } from "@travelia/api/endpoints/amenities";
import AppCheckbox from "@travelia/components/Inputs/Checbox";
import { getFilteredHotels } from "@travelia/api/endpoints/search";
import { SearchValues } from "@travelia/types";
import AppDivider from "@travelia/components/Divider/Divider";
import {
  Bed,
  LocationCity,
  LocationOn,
  Room,
  RoomOutlined,
} from "@mui/icons-material";
import AppButton from "@travelia/components/Button";
import { bookButtonStyle } from "@travelia/styles";
import HotelCard from "./components/HotelCard";

const SearchPage = () => {
  const [params] = useSearchParams();
  const [searchValues, setSearchValues] = useState<SearchValues>({
    checkInDate: params.get("checkIn") ?? "",
    checkOutDate: params.get("checkOut") ?? "",
    city: params.get("city") ?? "",
    adults: Number(params.get("adults") ?? "1"),
    children: Number(params.get("children") ?? "0"),
    numberOfRooms: Number(params.get("rooms") ?? "1"),
    budget: 50,
    starRate: 2,
    amenities: [],
    sort: "",
  });
  const theme = useTheme();

  const handleSearch = (values) => {
    console.log("Send search request with:", values);
  };

  const { data: amenities = [] } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAmenities,
  });
  const { data: filteredHotels = [] } = useQuery({
    queryKey: ["filteredHotels"],
    queryFn: () => getFilteredHotels(searchValues),
  });

  console.log({ filteredHotels });

  const Main = withContainer(({ children }: { children: ReactNode }) => {
    return <main>{children}</main>;
  });
  return (
    <>
      <PageHero title="Search" />
      <Box sx={{ p: 3, mb: 5, boxShadow: theme.customShadows.light }}>
        <Box maxWidth="85%" m="auto">
          <SearchBar onSearch={handleSearch} initialValues={searchValues} />
        </Box>
      </Box>
      <Main>
        <Grid container spacing={5} alignItems="stretch">
          <Grid size={{ xs: 12, md: 6, lg: 4 }} height="100%">
            <Box
              sx={{
                p: 3,
                boxShadow: theme.customShadows.light,
                borderRadius: 1,
                height: "100%",
              }}
            >
              <aside>
                <AppForm
                  initialValues={{
                    budget: 50,
                    starRate: 2,
                    amenities: [],
                  }}
                  onSubmit={() => {}}
                  render={(formik) => (
                    <Box display="flex" flexDirection="column" gap={2}>
                      <Box>
                        <Box
                          display={"flex"}
                          justifyContent="space-between"
                          alignItems="center"
                        >
                          <InputLabel sx={{ fontWeight: 600, fontSize: 14 }}>
                            Budget per night
                          </InputLabel>
                          <Typography
                            variant="body2"
                            mt={1}
                            fontWeight={700}
                            color="custom.orange"
                          >
                            {formik.values.budget}$
                          </Typography>
                        </Box>
                        <Slider
                          getAriaLabel={() => "Budget"}
                          value={formik.values.budget}
                          onChange={(_, value) =>
                            formik.setFieldValue("budget", value)
                          }
                          valueLabelDisplay="auto"
                          min={0}
                          max={500}
                        />
                      </Box>
                      <Box>
                        <InputLabel
                          sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}
                        >
                          Amenities
                        </InputLabel>
                        <FormGroup>
                          {amenities.map((amenity) => (
                            <AppCheckbox hasToolTip={true} option={amenity} />
                          ))}
                        </FormGroup>
                      </Box>
                      <Box>
                        <InputLabel
                          sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}
                        >
                          Star rating
                        </InputLabel>
                        <Rating
                          value={formik.values.starRate}
                          onChange={(_, value) =>
                            formik.setFieldValue("starRate", value)
                          }
                        />
                      </Box>
                    </Box>
                  )}
                />
              </aside>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Box>
              {filteredHotels.length !== 0 ? (
                filteredHotels.map((hotel) => <HotelCard hotel={hotel} />)
              ) : (
                <Box>No Data Found</Box>
              )}
            </Box>
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default SearchPage;
