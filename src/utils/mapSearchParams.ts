import { SearchValues } from "@travelia/types";

const mapSearchParams = (params: URLSearchParams): SearchValues => ({
  checkInDate: params.get("checkInDate") ?? "",
  checkOutDate: params.get("checkOutDate") ?? "",
  city: params.get("city") ?? "",
  adults: Number(params.get("adults") ?? "1"),
  children: Number(params.get("children") ?? "0"),
  numberOfRooms: Number(params.get("numberOfRooms") ?? "1"),
  budget: 100,
  starRate: 2,
  amenities: [],
  sort: "",
});

export default mapSearchParams;
