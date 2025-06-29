import { Box, IconButton, Tooltip, Typography, useTheme } from "@mui/material";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useMemo, useState } from "react";
import useDebounce from "@travelia/hooks/useDebounce";
import { AddCircle } from "@mui/icons-material";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import toast from "react-hot-toast";
import { PAGE_SIZE } from "@travelia/constants";
import FormDrawer from "../../components/FormDrawer";

interface AdminPageProps<T, FormPayload> {
  title: string;
  searchPlaceholder?: string;
  getAll: () => Promise<T[]>;
  getPaginated: (limit: number, page: number) => Promise<T[]>;
  addItem: (body: FormPayload) => Promise<T>;
  renderForm: (
    close: () => void,
    mutate: (body: FormPayload) => void,
    isLoading: boolean,
  ) => React.ReactNode;
  renderTable: (
    data: T[],
    page: number,
    rowsPerPage: number,
    totalCount: number,
    isLoading: boolean,
    onPageChange: (e: unknown, newPage: number) => void,
    onRowsPerPageChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
  ) => React.ReactNode;
}

const AdminCrudPage = <T, FormPayload>({
  title,
  searchPlaceholder,
  getAll,
  getPaginated,
  addItem,
  renderForm,
  renderTable,
}: AdminPageProps<T, FormPayload>) => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(PAGE_SIZE);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const [openAddDrawer, setOpenAddDrawer] = useState(false);
  const theme = useTheme();
  const { data } = useQuery({
    queryKey: [title.toLowerCase()],
    queryFn: getAll,
  });

  const { data: paginatedData, isLoading } = useQuery({
    queryKey: [`paginated-${title.toLowerCase()}`, page, rowsPerPage],
    queryFn: () => getPaginated(rowsPerPage, page + 1),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: addItem,
    onSuccess: () => {
      toast.success(`${title} Added Successfully`);
    },
  });

  const filterData = (
    data: T[] | undefined,
    search: string,
  ): T[] | undefined => {
    if (!search || !data?.length) return data;

    return data.filter((item) =>
      Object.values(item as unknown as Record<string, unknown>).some(
        (val) =>
          typeof val === "string" &&
          val.toLowerCase().includes(search.toLowerCase()),
      ),
    );
  };

  const filteredData = useMemo(() => {
    return filterData(data, debouncedSearch);
  }, [data, debouncedSearch]);

  return (
    <Box>
      <Typography variant="h3" mb={3}>
        Manage {title}
      </Typography>

      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        mb={4}
      >
        <Box width={{ xs: "80%", md: "50%" }}>
          <AppTextField
            name="search"
            placeholder={searchPlaceholder ?? `Search ${title}`}
            sx={{ boxShadow: theme.customShadows.light }}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setPage(0);
            }}
          />
        </Box>
        <Tooltip title={`Add ${title}`} onClick={() => setOpenAddDrawer(true)}>
          <IconButton>
            <AddCircle fontSize="large" color="primary" />
          </IconButton>
        </Tooltip>
      </Box>

      <FormDrawer
        open={openAddDrawer}
        onClose={() => setOpenAddDrawer(false)}
        render={(close) => renderForm(close, mutate, isPending)}
      />

      {renderTable(
        search ? (filteredData ?? []) : (paginatedData ?? []),
        search ? 0 : page,
        rowsPerPage,
        data?.length ?? 0,
        isLoading,
        (_e, newPage) => !search && setPage(newPage),
        (e) => {
          setRowsPerPage(parseInt(e.target.value, 10));
          setPage(0);
        },
      )}
    </Box>
  );
};

export default AdminCrudPage;
