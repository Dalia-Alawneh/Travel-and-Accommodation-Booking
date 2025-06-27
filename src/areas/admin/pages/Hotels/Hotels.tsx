import { getHotels } from "@travelia/api/endpoints/hotel";
import AdminCrudPage from "../CrudPage";
import HotelForm from "./HotelForm";

const Hotels = () => {
  return (
    <AdminCrudPage<CityRow, Omit<CityRow, "id">>
      title="City"
      getAll={() => getHotels()}
      getPaginated={(limit, page) => getCities(limit, page)}
      addItem={(body) => addCity(body)}
      renderForm={(close, mutate, isLoading) => (
        <HotelForm
          title="Add City"
          initialValues={{ name: "", description: "" }}
          onSubmit={(values) => {
            mutate(values);
            close();
          }}
          isLoading={isLoading}
        />
      )}
      renderTable={(
        data,
        page,
        rowsPerPage,
        totalCount,
        isLoading,
        onPageChange,
        onRowsPerPageChange,
      ) => (
        <CitiesTable
          rowData={data}
          page={page}
          rowsPerPage={rowsPerPage}
          totalCount={totalCount}
          isLoading={isLoading}
          rowsPerPageOptions={PAGE_OPTIONS}
          onPageChange={onPageChange}
          onRowsPerPageChange={onRowsPerPageChange}
        />
      )}
    />
  );
};

export default Hotels;
