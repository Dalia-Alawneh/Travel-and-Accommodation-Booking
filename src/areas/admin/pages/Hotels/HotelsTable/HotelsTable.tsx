import { DeleteTwoTone, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Table from "@travelia/areas/admin/components/Table";
import { Column } from "@travelia/areas/admin/components/Table/type";
import { useMutation } from "@tanstack/react-query";
import ConfirmDeleteDialog from "@travelia/components/Dialogs/ConfirmDelete";
import { useState } from "react";
import toast from "react-hot-toast";
import { IHotelRow } from "./types";
import { deleteHotel, updateHotel } from "@travelia/api/endpoints/hotel";
import AdminDrawer from "@travelia/areas/admin/components/AdminDrawer";
import HotelForm from "../HotelForm";
import { fallbackImage } from "@travelia/assets";

interface IHotelsTableProps {
  isLoading?: boolean;
  rowsPerPageOptions?: number[];
  rowsPerPage: number;
  page: number;
  totalCount: number;
  rowData: IHotelRow[];
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const HotelsTable = ({
  page,
  rowData,
  rowsPerPage,
  totalCount,
  isLoading,
  rowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
}: IHotelsTableProps) => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [selectedHotel, setSelectedHotel] = useState<IHotelRow | null>(null);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [hotelToEdit, setHotelToEdit] = useState<IHotelRow | null>(null);

  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: number) => deleteHotel(id),
    onSuccess: () => {
      closeConfirmDeleteDialog();
      toast.success("Hotel Deleted Successfully");
    },
  });

  const { mutate: mutateUpdate, isPending: isUpdating } = useMutation({
    mutationFn: (data: IHotelRow) => updateHotel(data.id, { ...data }),
    onSuccess: () => {
      setOpenEditDrawer(false);
      toast.success("Hotel Updated Successfully");
    },
  });

  const handleDeleteHotel = () => {
    if (selectedHotel) {
      mutateDelete(selectedHotel.id);
    }
  };

  const openConfirmDeleteDialog = (city: IHotelRow) => {
    setSelectedHotel(city);
    setOpenConfirmDelete(true);
  };

  const closeConfirmDeleteDialog = () => {
    setOpenConfirmDelete(false);
    setSelectedHotel(null);
  };

  const openEditCityDrawer = (city: IHotelRow) => {
    setHotelToEdit(city);
    setOpenEditDrawer(true);
  };

  const validateImageUrl = (url: string | undefined) => {
    if (!url || url.trim() === "") {
      return fallbackImage;
    }
    return url;
  };

  const columns = [
    { id: "id", label: "ID", align: "left", width: 50 },
    { id: "hotelName", label: "Hotel Name", align: "left", minWidth: 150 },
    {
      id: "imageUrl",
      label: "Image",
      align: "left",
      minWidth: 150,
      render: (_value: unknown, row: IHotelRow) => {
        const img = validateImageUrl(row.imageUrl);
        return (
          <Box
            component="img"
            src={img}
            alt={row.hotelName}
            onError={(e: React.SyntheticEvent<HTMLImageElement, Event>) => {
              e.currentTarget.src = fallbackImage;
            }}
            sx={{
              width: 100,
              height: 50,
              objectFit: "cover",
              borderRadius: 0.3,
            }}
          />
        );
      },
    },
    { id: "location", label: "Location", align: "left", minWidth: 150 },
    { id: "starRating", label: "Rating", align: "left", width: 100 },
    {
      id: "availableRooms",
      label: "Rooms",
      align: "left",
      width: 200,
    },
    { id: "description", label: "Description", align: "left" },
    {
      id: "actions",
      label: "Actions",
      align: "left",
      render: (_value: unknown, row: IHotelRow) => (
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
        columns={columns as Column<IHotelRow>[]}
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
        onConfirmDelete={handleDeleteHotel}
      />

      {hotelToEdit && (
        <AdminDrawer
          open={openEditDrawer}
          onClose={() => setOpenEditDrawer(false)}
          render={(close) => (
            <HotelForm
              title="Edit City"
              initialValues={{
                ...hotelToEdit,
              }}
              onSubmit={(values) => {
                mutateUpdate({ ...hotelToEdit, ...values });
                close();
              }}
              isLoading={isUpdating}
            />
          )}
        />
      )}
    </>
  );
};

export default HotelsTable;
