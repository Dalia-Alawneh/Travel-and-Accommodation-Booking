import { useSearchParams } from "react-router";
import PageHero from "../../components/PageHero";
import SearchBar from "../../components/SearchBar";

const SearchPage = () => {
  const [params] = useSearchParams();

  const searchValues = {
    checkIn: params.get("checkIn") ?? "",
    checkOut: params.get("checkOut") ?? "",
    city: params.get("city") ?? "",
    adults: Number(params.get("adults") ?? "1"),
    children: Number(params.get("children") ?? "0"),
    rooms: Number(params.get("rooms") ?? "1"),
  };

  const handleSearch = (values) => {
    console.log("Send search request with:", values);
  };
  return (
    <>
      <PageHero title="Search" />
      <SearchBar onSearch={handleSearch} initialValues={searchValues} />
    </>
  );
};

export default SearchPage;
