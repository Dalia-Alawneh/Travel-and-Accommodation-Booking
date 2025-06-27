import { addCity, getCities } from "@travelia/api/endpoints/cities";
import CitiesTable from "./components/CitiesTable";
import CityForm from "./components/CityForm";
import { CityRow } from "./components/CitiesTable/types";
import AdminCrudPage from "../CrudPage";
import { PAGE_OPTIONS } from "@travelia/constants";

const Cities = () => {
  return (
    <AdminCrudPage<CityRow, Omit<CityRow, "id">>
      title="City"
      getAll={() => getCities()}
      getPaginated={(limit, page) => getCities(limit, page)}
      addItem={(body) => addCity(body)}
      renderForm={(close, mutate, isLoading) => (
        <CityForm
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

export default Cities;
