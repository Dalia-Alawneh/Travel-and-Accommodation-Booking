import { getHotels, getHotelsPaginated } from "@travelia/api/endpoints/hotel";
import AdminCrudPage from "../CrudPage";
// import HotelForm from "./HotelForm";
import { IHotelDetailedResponse } from "@travelia/api/types/response.dto";
import HotelsTable from "./HotelsTable";
import { IHotelRow } from "./HotelsTable/types";

const Hotels = () => {
  return (
    <AdminCrudPage<IHotelDetailedResponse, Omit<IHotelDetailedResponse, "id">>
      title="Hotels"
      getAll={() => getHotels()}
      getPaginated={(limit, page) => getHotelsPaginated(limit, page)}
      addItem={(body) => {}}
      renderForm={() => {
        return <></>;
      }}
      // renderForm={(close, mutate, isLoading) => (
      //   <HotelForm
      //     title="Add Hotel"
      //     initialValues={{
      //       hotelName: "",
      //       location: "",
      //       description: "",
      //       starRating: 0,
      //       imageUrl: ""
      //     }}
      //     onSubmit={(values) => {
      //       console.log(values);
      //     }}
      //   />
      // )}
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
