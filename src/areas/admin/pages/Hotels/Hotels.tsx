import {
  addHotel,
  getHotels,
  getHotelsPaginated,
} from "@travelia/api/endpoints/hotel";
import AdminCrudPage from "../CrudPage";
import type { IHotelDetailedResponse } from "@travelia/api/types/response.dto";
import HotelsTable from "./components/HotelsTable";
import type { IHotelRow } from "./components/HotelsTable/types";
import HotelForm from "./components/HotelForm";
interface IAddHotelPayload {
  hotelName: string;
  location: string;
  description: string;
  starRating: number;
  imageUrl: string;
  availableRooms: number;
}
const Hotels = () => {
  return (
    <AdminCrudPage<IHotelDetailedResponse, IAddHotelPayload>
      title="Hotels"
      getAll={() => getHotels()}
      getPaginated={(limit, page) => getHotelsPaginated(limit, page)}
      addItem={(body) => addHotel(body)}
      renderForm={(close, mutate, isLoading) => (
        <HotelForm
          isLoading={isLoading}
          title="Add Hotel"
          initialValues={{
            hotelName: "",
            location: "",
            description: "",
            starRating: 0,
            imageUrl: "",
            availableRooms: 0,
          }}
          onSubmit={(values) => {
            mutate(values);
            close();
          }}
          showImage={false}
        />
      )}
      renderTable={(
        rawData: IHotelDetailedResponse[] | { data: IHotelDetailedResponse[] },
        page,
        rowsPerPage,
        totalCount,
        isLoading,
        onPageChange,
        onRowsPerPageChange,
      ) => {
        const actualData = Array.isArray(rawData)
          ? rawData
          : rawData?.data || [];

        const tableRows = actualData.map((hotel) => ({
          id: hotel.id,
          hotelName: hotel.hotelName,
          location: hotel.location,
          description: hotel.description,
          starRating: hotel.starRating,
          imageUrl: hotel.imageUrl,
          availableRooms: hotel.availableRooms,
        }));

        return (
          <HotelsTable
            rowData={tableRows as IHotelRow[]}
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

export default Hotels;
