import { DeleteTwoTone, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Table from "@travelia/areas/admin/components/Table";
import { CityRow } from "./types";
import { Column } from "@travelia/areas/admin/components/Table/type";

interface ICitiesTableProps {
  isLoading?: boolean;
  rowsPerPageOptions?: number[];
  rowsPerPage: number;
  page: number;
  totalCount: number;
  rowData: CityRow[];
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const CitiesTable = ({
  page,
  rowData,
  rowsPerPage,
  totalCount,
  isLoading,
  rowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
}: ICitiesTableProps) => {
  const columns = [
    { id: "id", label: "ID", align: "left", width: 50 },
    { id: "name", label: "Name", align: "left", minWidth: 150 },
    { id: "description", label: "Description", align: "left" },
    {
      id: "actions",
      label: "Actions",
      align: "left",
      render: (row: CityRow) => {
        return (
          <Box display="flex">
            <IconButton>
              <DeleteTwoTone color="error" />
            </IconButton>
            <IconButton>
              <Edit color="primary" />
            </IconButton>
          </Box>
        );
      },
    },
  ];

  return (
    <Table
      columns={columns as Column<CityRow>[]}
      rows={rowData}
      isLoading={isLoading}
      rowsPerPageOptions={rowsPerPageOptions}
      rowsPerPage={rowsPerPage}
      page={page}
      totalCount={totalCount}
      onPageChange={onPageChange}
      onRowsPerPageChange={onRowsPerPageChange}
      skeletonRowsCount={5}
    />
  );
};

export default CitiesTable;
