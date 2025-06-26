import { DeleteTwoTone, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Table from "@travelia/areas/admin/components/Table";
import { CityRow } from "./types";
import { Column } from "@travelia/areas/admin/components/Table/type";
import { useMutation } from "@tanstack/react-query";
import { deleteCity } from "@travelia/api/endpoints/cities";
import ConfirmDeleteDialog from "@travelia/components/Dialogs/ConfirmDelete";
import { useState } from "react";
import toast from "react-hot-toast";

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
  const [openConfirmDelete, setOpenConfirmDelete] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<CityRow | null>();
  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: number) => deleteCity(id),
    onSuccess: () => {
      closeConfirmDeleteDialog();
      toast.success("City Deleted Successfully ");
    },
  });

  const handleDeleteCity = () => {
    if (selectedCity) {
      mutateDelete(selectedCity?.id);
    }
  };

  const openConfirmDeleteDialog = (city: CityRow) => {
    setSelectedCity(city);
    setOpenConfirmDelete(true);
  };
  const closeConfirmDeleteDialog = () => {
    setOpenConfirmDelete(false);
    setSelectedCity(null);
  };

  const columns = [
    { id: "id", label: "ID", align: "left", width: 50 },
    { id: "name", label: "Name", align: "left", minWidth: 150 },
    { id: "description", label: "Description", align: "left" },
    {
      id: "actions",
      label: "Actions",
      align: "left",
      render: (_value: unknown, row: CityRow) => {
        return (
          <Box display="flex">
            <IconButton onClick={() => openConfirmDeleteDialog(row)}>
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
    <>
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
      <ConfirmDeleteDialog
        open={openConfirmDelete}
        handleClose={closeConfirmDeleteDialog}
        onConfirmDelete={handleDeleteCity}
      />
    </>
  );
};

export default CitiesTable;
