import { DeleteTwoTone, Edit } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import Table from "@travelia/areas/admin/components/Table";
import { Column } from "@travelia/areas/admin/components/Table/type";
import { useMutation } from "@tanstack/react-query";
import ConfirmDeleteDialog from "@travelia/components/Dialogs/ConfirmDelete";
import { useState } from "react";
import toast from "react-hot-toast";
import { IRoomRow } from "./types";
import FormDrawer from "@travelia/areas/admin/components/FormDrawer";
import { fallbackImage } from "@travelia/assets";
import { deleteRoom, updateRoom } from "@travelia/api/endpoints/rooms";
import RoomForm from "../RoomForm";

interface IRoomsTableProps {
  isLoading?: boolean;
  rowsPerPageOptions?: number[];
  rowsPerPage: number;
  page: number;
  totalCount: number;
  rowData: IRoomRow[];
  onPageChange: (event: unknown, newPage: number) => void;
  onRowsPerPageChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const RoomsTable = ({
  page,
  rowData,
  rowsPerPage,
  totalCount,
  isLoading,
  rowsPerPageOptions,
  onPageChange,
  onRowsPerPageChange,
}: IRoomsTableProps) => {
  const [openConfirmDelete, setOpenConfirmDelete] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<IRoomRow | null>(null);
  const [openEditDrawer, setOpenEditDrawer] = useState(false);
  const [RoomToEdit, setRoomToEdit] = useState<IRoomRow | null>(null);

  const { mutate: mutateDelete } = useMutation({
    mutationFn: (id: number) => deleteRoom(id),
    onSuccess: () => {
      closeConfirmDeleteDialog();
      toast.success("Room Deleted Successfully");
    },
  });

  const { mutate: mutateUpdate, isPending: isUpdating } = useMutation({
    mutationFn: (data: IRoomRow) => updateRoom(data),
    onSuccess: () => {
      setOpenEditDrawer(false);
      toast.success("Room Updated Successfully");
    },
  });

  const tableRows = rowData.map((room) => ({
    id: room.roomId,
    ...room,
  }));

  const handleDeleteRoom = () => {
    if (selectedRoom) {
      mutateDelete(selectedRoom.roomId!);
    }
  };

  const openConfirmDeleteDialog = (city: IRoomRow) => {
    setSelectedRoom(city);
    setOpenConfirmDelete(true);
  };

  const closeConfirmDeleteDialog = () => {
    setOpenConfirmDelete(false);
    setSelectedRoom(null);
  };

  const openEditRoomDrawer = (room: IRoomRow) => {
    setRoomToEdit(room);
    setOpenEditDrawer(true);
  };

  const validateImageUrl = (url: string | undefined) => {
    if (!url || url.trim() === "") {
      return fallbackImage;
    }
    return url;
  };

  const columns = [
    { id: "roomId", label: "ID", align: "left", width: 50 },
    {
      id: "roomPhotoUrl",
      label: "Image",
      align: "left",
      minWidth: 150,
      render: (_value: unknown, row: IRoomRow) => {
        const img = validateImageUrl(row.roomPhotoUrl);
        return (
          <Box
            component="img"
            src={img}
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
    { id: "roomNumber", label: "Room Number", align: "left", minWidth: 150 },
    { id: "roomType", label: "Type", align: "left", minWidth: 150 },
    { id: "capacityOfAdults", label: "Adults", align: "left", width: 100 },
    {
      id: "capacityOfChildren",
      label: "Children",
      align: "left",
      width: 200,
    },
    { id: "price", label: "Price", align: "left" },
    {
      id: "roomAmenities",
      label: "Amenities",
      align: "left",
      render: (_value: unknown, row: IRoomRow) => (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
          {row.roomAmenities.map((amenity, index) => (
            <Box
              key={index}
              sx={{
                backgroundColor: "#eee",
                color: "#333",
                px: 1,
                py: 0.3,
                borderRadius: 1,
                fontSize: "0.75rem",
                maxWidth: "100%",
              }}
            >
              {amenity.name}
            </Box>
          ))}
        </Box>
      ),
    },
    {
      id: "availability",
      label: "Availability",
      align: "left",
      render: (value: boolean) => (
        <Box
          sx={{
            display: "inline-block",
            px: 1.5,
            py: 0.5,
            borderRadius: 1,
            color: "#fff",
            backgroundColor: value ? "success.main" : "error.main",
            fontSize: "0.75rem",
            textAlign: "center",
          }}
        >
          {value ? "Available" : "Unavailable"}
        </Box>
      ),
    },
    {
      id: "actions",
      label: "Actions",
      align: "left",
      render: (_value: unknown, row: IRoomRow) => (
        <Box display="flex">
          <IconButton onClick={() => openConfirmDeleteDialog(row)}>
            <DeleteTwoTone color="error" />
          </IconButton>
          <IconButton onClick={() => openEditRoomDrawer(row)}>
            <Edit color="primary" />
          </IconButton>
        </Box>
      ),
    },
  ];

  return (
    <>
      <Table
        columns={columns as Column<IRoomRow>[]}
        rows={tableRows}
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
        onConfirmDelete={handleDeleteRoom}
      />

      {RoomToEdit && (
        <FormDrawer
          open={openEditDrawer}
          onClose={() => setOpenEditDrawer(false)}
          render={(close) => (
            <RoomForm
              title="Edit Room"
              initialValues={{
                ...RoomToEdit,
                roomAmenities: RoomToEdit.roomAmenities,
              }}
              onSubmit={(values) => {
                mutateUpdate({ ...RoomToEdit, ...values });
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

export default RoomsTable;
