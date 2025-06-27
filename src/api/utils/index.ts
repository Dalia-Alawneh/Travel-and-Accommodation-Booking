import { IHotelDetailedResponse, IHotelJsonData } from "../types/response.dto";

export const mapHotelData = (
  hotel: IHotelJsonData,
): IHotelDetailedResponse => ({
  id: hotel.id,
  hotelName: hotel.hotelName || "",
  location: hotel.location || "",
  description: hotel.description || "",
  hotelType: hotel.hotelType || "",
  starRating: hotel.starRating || 0,
  latitude: hotel.latitude || 0,
  longitude: hotel.longitude || 0,
  rooms: hotel.rooms || [],
  imageUrl: hotel.imageUrl || "",
  availableRooms: hotel.availableRooms || 0,
  cityId: hotel.cityId || 0,
  amenities: hotel.amenities || [],
});
