import { SearchValues } from "@travelia/types";

const mapSearchRoomParams = (params: URLSearchParams): SearchValues => ({
  checkInDate: params.get("checkInDate") ?? "",
  checkOutDate: params.get("checkOutDate") ?? "",
  city: params.get("city") ?? "All",
  adults: Number(params.get("adults") ?? "1"),
  children: Number(params.get("children") ?? "0"),
  numberOfRooms: Number(params.get("numberOfRooms") ?? "1"),
  budget: [50, 400],
  starRate: 2,
  amenities: [],
  sort: "",
});

export default mapSearchRoomParams;
