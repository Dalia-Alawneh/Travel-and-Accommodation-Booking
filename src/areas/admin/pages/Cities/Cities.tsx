import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCities } from "@travelia/api/endpoints/cities";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import { useMemo, useState } from "react";
import CitiesTable from "./components/CitiesTable";

const Cities = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const { data } = useQuery({
    queryKey: ["cities"],
    queryFn: () => getCities(),
  });

  const { data: paginatedData, isLoading: isPaginatedLoading } = useQuery({
    queryKey: ["paginatedCities", page, rowsPerPage],
    queryFn: () => getCities(rowsPerPage, page + 1),
  });

  const filteredData = useMemo(() => {
    if (!search) return data;
    return data?.filter((city) =>
      city.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  return (
    <Box>
      <Typography variant="h3" mb={3}>
        Manage Cities
      </Typography>

      <Box mb={4} width="300px">
        <AppTextField
          name="search"
          placeholder="Search City"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
        />
      </Box>
      <CitiesTable
        rowData={paginatedData ?? []}
        page={page}
        rowsPerPage={rowsPerPage}
        totalCount={data?.length ?? 0}
        isLoading={isPaginatedLoading}
        rowsPerPageOptions={[5, 10, 20]}
        onPageChange={(_, newPage: number) => setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </Box>
  );
};

export default Cities;
