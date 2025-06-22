import { useSearchParams } from "react-router";
import PageHero from "../../components/PageHero";
import SearchBar from "../../components/SearchBar";
import withContainer from "@travelia/HOC/withContainer";
import { ReactNode, useEffect, useMemo, useState } from "react";
import { Box, Grid, Skeleton, useTheme } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getAmenities } from "@travelia/api/endpoints/amenities";
import { getFilteredHotels } from "@travelia/api/endpoints/search";
import { HotelFilterValues, SearchValues } from "@travelia/types";
import HotelCard from "./components/HotelCard";
import { useSearchNavigation } from "@travelia/hooks/useSearchNavigation";
import HotelFilterForm from "./components/HotelFilterForm/HotelFilterForm";
import SortMenu from "@travelia/components/Inputs/Sort/Sort";
import { sortOptions } from "@travelia/fixtures";
import mapSearchParams from "@travelia/utils/mapSearchParams";

const SearchPage = () => {
  const [params] = useSearchParams();
  const { onSearch } = useSearchNavigation("");

  const [searchValues, setSearchValues] = useState<SearchValues>(() =>
    mapSearchParams(params),
  );
  const theme = useTheme();

  const { data: amenitiesData = [] } = useQuery({
    queryKey: ["amenities"],
    queryFn: getAmenities,
  });

  const { data: filteredHotels = [], isLoading: isSearchLoading } = useQuery({
    queryKey: ["filteredHotels", searchValues],
    queryFn: () => getFilteredHotels(searchValues),
  });

  useEffect(() => {
    setSearchValues((prev) => ({
      ...mapSearchParams(params),
      budget: prev.budget,
      starRate: prev.starRate,
      amenities: prev.amenities,
      sort: prev.sort,
    }));
  }, [params]);

  const onFilterFormSubmit = (values: HotelFilterValues) => {
    setSearchValues((prev) => ({
      ...prev,
      ...values,
      amenities: values.amenities,
    }));
  };

  const amenities = useMemo(
    () =>
      amenitiesData.map((a, index) => ({
        id: index,
        name: a.name,
        description: a.description,
      })),
    [amenitiesData],
  );
  const Main = withContainer(({ children }: { children: ReactNode }) => {
    return <main>{children}</main>;
  });

  return (
    <>
      <PageHero title="Search" />
      <Box sx={{ p: 3, mb: 5, boxShadow: theme.customShadows.light }}>
        <Box maxWidth="85%" m="auto">
          <SearchBar onSearch={onSearch} initialValues={searchValues} />
        </Box>
      </Box>
      <Main>
        <Box display="flex" justifyContent="end" mb={3} maxWidth="100%">
          <SortMenu
            value={searchValues.sort}
            sortOptions={sortOptions}
            onChange={(newSort) =>
              setSearchValues((prev) => ({ ...prev, sort: newSort }))
            }
          />
        </Box>
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
                <HotelFilterForm
                  amenities={amenities}
                  initialValues={{
                    amenities: searchValues.amenities,
                    budget: searchValues.budget,
                    starRate: searchValues.starRate,
                  }}
                  onSubmit={onFilterFormSubmit}
                />
              </aside>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, md: 6, lg: 8 }}>
            {isSearchLoading ? (
              <Box display="grid" gap={2}>
                {[...Array(3)].map((_, i) => (
                  <Skeleton
                    key={i}
                    variant="rectangular"
                    sx={{ borderRadius: 1 }}
                    height={500}
                  />
                ))}
              </Box>
            ) : (
              <Box>
                {filteredHotels.length !== 0 ? (
                  filteredHotels.map((hotel) => (
                    <HotelCard key={hotel.hotelId} hotel={hotel} />
                  ))
                ) : (
                  <Box py={8} display="flex" justifyContent={"center"}>
                    No Data Found
                  </Box>
                )}
              </Box>
            )}
          </Grid>
        </Grid>
      </Main>
    </>
  );
};

export default SearchPage;
