import AdminCrudPage from "../CrudPage";
import { IRoomResponse } from "@travelia/api/types/response.dto";
import { IRoomRow } from "./RoomsTable/types";
import {
  addRoom,
  getRooms,
  getRoomsPaginated,
} from "@travelia/api/endpoints/rooms";
import RoomsTable from "./RoomsTable";
import RoomForm from "./RoomForm";

const Rooms = () => {
  return (
    <AdminCrudPage<IRoomResponse, IRoomRow>
      title="Rooms"
      getAll={() => getRooms()}
      getPaginated={(limit, page) => getRoomsPaginated(limit, page)}
      addItem={(body) => addRoom(body)}
      renderForm={(close, mutate, isLoading) => (
        <RoomForm
          showImage={false}
          title="Add Room"
          initialValues={{
            roomNumber: 0,
            roomAmenities: [],
            availability: false,
            capacityOfAdults: 0,
            capacityOfChildren: 0,
            price: 0,
            roomPhotoUrl: "",
            roomType: "",
          }}
          onSubmit={(values) => {
            mutate(values);
            close();
          }}
          isLoading={isLoading}
        />
      )}
      renderTable={(
        rawData: IRoomRow[],
        page,
        rowsPerPage,
        totalCount,
        isLoading,
        onPageChange,
        onRowsPerPageChange,
      ) => {
        return (
          <RoomsTable
            rowData={rawData}
            page={page}
            rowsPerPage={rowsPerPage}
            totalCount={totalCount}
            isLoading={isLoading}
            onPageChange={onPageChange}
            onRowsPerPageChange={onRowsPerPageChange}
          />
        );
      }}
    />
  );
};

export default Rooms;
