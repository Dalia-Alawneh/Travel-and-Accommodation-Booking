import { DeleteTwoTone, Edit } from "@mui/icons-material";
import { Box, Drawer, IconButton, Typography } from "@mui/material";
import Table from "@travelia/areas/admin/components/Table";
import { CityRow } from "./types";
import { Column } from "@travelia/areas/admin/components/Table/type";
import { useMutation } from "@tanstack/react-query";
import { deleteCity, updateCity } from "@travelia/api/endpoints/cities";
import ConfirmDeleteDialog from "@travelia/components/Dialogs/ConfirmDelete";
import { useState } from "react";
import toast from "react-hot-toast";
import AppButton from "@travelia/components/Button";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import AppForm from "@travelia/components/Form";
import * as Yup from "yup";

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
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [selectedCity, setSelectedCity] = useState<CityRow | null>(null);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [cityToEdit, setCityToEdit] = useState<CityRow | null>(null);

  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: number) => deleteCity(id),
    onSuccess: () => {
      closeConfirmDeleteDialog();
      toast.success("City Deleted Successfully");
    },
  });

  const { mutate: mutateUpdate } = useMutation({
    mutationFn: (data: CityRow) => updateCity(data.id, data),
    onSuccess: () => {
      setOpenEditDrawer(false);
      toast.success("City Updated Successfully");
    },
  });

  const handleDeleteCity = () => {
    if (selectedCity) {
      mutateDelete(selectedCity.id);
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

  const openEditCityDrawer = (city: CityRow) => {
    setCityToEdit(city);
    setOpenEditDrawer(true);
  };

  const columns = [
    { id: "id", label: "ID", align: "left", width: 50 },
    { id: "name", label: "Name", align: "left", minWidth: 150 },
    { id: "description", label: "Description", align: "left" },
    {
      id: "actions",
      label: "Actions",
      align: "left",
      render: (_value: unknown, row: CityRow) => (
        <Box display="flex">
          <IconButton onClick={() => openConfirmDeleteDialog(row)}>
            <DeleteTwoTone color="error" />
          </IconButton>
          <IconButton onClick={() => openEditCityDrawer(row)}>
            <Edit color="primary" />
          </IconButton>
        </Box>
      ),
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

      <Drawer
        anchor="right"
        open={openEditDrawer}
        onClose={() => setOpenEditDrawer(false)}
      >
        {cityToEdit && (
          <AppForm
            initialValues={{
              name: cityToEdit.name,
              description: cityToEdit.description,
            }}
            validationSchema={Yup.object({
              name: Yup.string().required("Name is required"),
              description: Yup.string().required("Description is required"),
            })}
            onSubmit={(values) => {
              mutateUpdate({ ...cityToEdit, ...values });
            }}
            render={(formik) => (
              <Box width={400} p={3} mt={10}>
                <Typography variant="h4" mb={2}>
                  Edit City
                </Typography>

                <AppTextField
                  name="name"
                  label="Name"
                  value={formik.values.name}
                />

                <AppTextField
                  name="description"
                  label="Description"
                  value={formik.values.description}
                  multiline
                  minRows={5}
                />

                <AppButton
                  sx={{ bgcolor: "primary.main", color: "white", px: 4, mt: 2 }}
                  fullWidth
                  type="submit"
                  disabled={formik.isSubmitting}
                >
                  Save
                </AppButton>
              </Box>
            )}
          />
        )}
      </Drawer>
    </>
  );
};

export default CitiesTable;
