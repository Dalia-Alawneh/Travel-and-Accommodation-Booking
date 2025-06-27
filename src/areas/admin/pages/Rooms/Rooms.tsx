import {
  addHotel,
  getHotels,
  getHotelsPaginated,
} from "@travelia/api/endpoints/hotel";
import AdminCrudPage from "../CrudPage";
import {
  IHotelDetailedResponse,
  IRoomResponse,
} from "@travelia/api/types/response.dto";
import { IRoomRow } from "./RoomsTable/types";
import {
  addRoom,
  getRooms,
  getRoomsPaginated,
} from "@travelia/api/endpoints/rooms";
import RoomsTable from "./RoomsTable";

const Rooms = () => {
  return (
    <AdminCrudPage<IRoomResponse, IRoomRow>
      title="Hotels"
      getAll={() => getRooms()}
      getPaginated={(limit, page) => getRoomsPaginated(limit, page)}
      addItem={(body) => addRoom(body)}
      renderForm={(close, mutate, isLoading) => <></>}
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
