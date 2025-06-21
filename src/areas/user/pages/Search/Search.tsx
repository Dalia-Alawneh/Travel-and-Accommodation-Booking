import { useSearchParams } from "react-router";
import PageHero from "../../components/PageHero";
import SearchBar from "../../components/SearchBar";
import withContainer from "@travelia/HOC/withContainer";
import { ReactNode } from "react";
import {
  Box,
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
import { getAmenities } from "@travelia/api/endpoints/search";
import AppCheckbox from "@travelia/components/Inputs/Checbox";

const SearchPage = () => {
  const [params] = useSearchParams();
  const theme = useTheme();
  const searchValues = {
    checkIn: params.get("checkIn") ?? "",
    checkOut: params.get("checkOut") ?? "",
    city: params.get("city") ?? "",
    adults: Number(params.get("adults") ?? "1"),
    children: Number(params.get("children") ?? "0"),
    rooms: Number(params.get("rooms") ?? "1"),
  };

  const handleSearch = (values) => {
    console.log("Send search request with:", values);
  };

  const { data: amenities = [] } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAmenities,
  });
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
        <Grid container spacing={5}>
          <Grid size={{ xs: 12, md: 6, lg: 4 }}>
            <Box sx={{ p: 3, boxShadow: theme.customShadows.light }}>
              <aside>
                <AppForm
                  initialValues={{
                    budget: 50,
                    starRate: 0,
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
                        <Rating />
                      </Box>
                    </Box>
                  )}
                />
              </aside>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            <Box
              sx={{
                p: 3,
                boxShadow: theme.customShadows.light,
              }}
            ></Box>
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default SearchPage;
