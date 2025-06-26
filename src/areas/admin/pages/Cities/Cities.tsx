import { Box, Typography } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import { getCities } from "@travelia/api/endpoints/cities";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import { useMemo, useState } from "react";
import Table from "../../components/Table";

const Cities = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [search, setSearch] = useState("");

  const { data = [], isLoading } = useQuery({
    queryKey: ["cities"],
    queryFn: () => getCities(),
  });

  const filteredData = useMemo(() => {
    if (!search) return data;
    return data.filter((city) =>
      city.name.toLowerCase().includes(search.toLowerCase()),
    );
  }, [data, search]);

  const visibleRows = useMemo(() => {
    const start = page * rowsPerPage;
    return filteredData.slice(start, start + rowsPerPage);
  }, [filteredData, page, rowsPerPage]);

  const columns = [
    { id: "id", label: "ID" },
    { id: "name", label: "City Name" },
    { id: "description", label: "Description" },
  ];

  return (
    <Box>
      <Typography variant="h4" mb={3}>
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

      <Table
        columns={columns}
        rows={visibleRows}
        isLoading={isLoading}
        rowsPerPageOptions={[5, 10, 25]}
        rowsPerPage={rowsPerPage}
        page={page}
        totalCount={filteredData.length}
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
