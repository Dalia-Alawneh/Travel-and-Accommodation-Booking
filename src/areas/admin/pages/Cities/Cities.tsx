import { Box, IconButton, Tooltip, Typography } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { addCity, getCities } from "@travelia/api/endpoints/cities";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import { useMemo, useState } from "react";
import CitiesTable from "./components/CitiesTable";
import { PAGE_OPTIONS, PAGE_SIZE } from "@travelia/fixtures";
import useDebounce from "@travelia/hooks/useDebounce";
import { AddCircle } from "@mui/icons-material";
import AdminDrawer from "../../components/AdminDrawer/AdminDrawer";
import CityForm from "./components/CityForm";
import { CityRow } from "./components/CitiesTable/types";
import toast from "react-hot-toast";

const Cities = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZE);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [openAddDrawer, setOpenAddDrawer] = useState(false);
  const { data } = useQuery({
    queryKey: ["cities"],
    queryFn: () => getCities(),
  });

  const { data: paginatedData, isLoading: isPaginatedLoading } = useQuery({
    queryKey: ["paginatedCities", page, rowsPerPage],
    queryFn: () => getCities(rowsPerPage, page + 1),
  });

  const { mutate: mutateAdd, isPending: isAdding } = useMutation({
    mutationFn: (body: Omit<CityRow, "id">) => addCity(body),
    onSuccess: () => {
      toast.success("City Added Successfully");
    },
  });
  const filteredData = useMemo(() => {
    if (!debouncedSearch) return data;
    return data?.filter(
      (city) =>
        city.name.toLowerCase().includes(debouncedSearch.toLowerCase()) ||
        city.description.toLowerCase().includes(debouncedSearch.toLowerCase()),
    );
  }, [data, debouncedSearch]);

  const openAdd = () => {
    setOpenAddDrawer(true);
  };

  const closeAdd = () => {
    setOpenAddDrawer(false);
  };

  return (
    <Box>
      <Typography variant="h3" mb={3}>
        Manage Cities
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box width="300px">
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
        <Tooltip title="Add City" onClick={openAdd}>
          <IconButton>
            <AddCircle fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>
      </Box>
      <AdminDrawer
        open={openAddDrawer}
        onClose={closeAdd}
        render={(close) => (
          <CityForm
            title="Add City"
            initialValues={{
              name: "",
              description: "",
            }}
            onSubmit={(values) => {
              mutateAdd({ ...values });
              close();
            }}
            isLoading={isAdding}
          />
        )}
      />
      <CitiesTable
        rowData={search ? (filteredData ?? []) : (paginatedData ?? [])}
        page={search ? 0 : page}
        rowsPerPage={rowsPerPage}
        totalCount={data?.length ?? 0}
        isLoading={isPaginatedLoading}
        rowsPerPageOptions={PAGE_OPTIONS}
        onPageChange={(_, newPage: number) => !search && setPage(newPage)}
        onRowsPerPageChange={(e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        }}
      />
    </Box>
  );
};

export default Cities;
