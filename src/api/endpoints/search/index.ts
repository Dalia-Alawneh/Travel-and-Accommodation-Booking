import { hotelsSearchResults } from "@travelia/api/data/searchResults";
import { IRequestSearchParams } from "@travelia/api/types/request.dto";
import { ISearchHotelsResponse } from "@travelia/api/types/response.dto";

export const getFilteredHotels = async (
  params: IRequestSearchParams & {
    budget?: [number, number];
    amenities?: string[];
  },
): Promise<ISearchHotelsResponse[]> => {
  const filtered = hotelsSearchResults.filter((hotel) => {
    if (
      params.city &&
      hotel.cityName.toLowerCase() !== params.city.toLowerCase()
    ) {
      return false;
    }

    if (params.starRate && hotel.starRating < params.starRate) {
      return false;
    }

    const availableFrom = new Date(hotel.availableFrom);
    const availableTo = new Date(hotel.availableTo);
    const checkInDate = new Date(params.checkInDate);
    const checkOutDate = new Date(params.checkOutDate);

    if (checkInDate < availableFrom || checkOutDate > availableTo) {
      return false;
    }

    if (
      params.budget &&
      (hotel.roomPrice < params.budget[0] || hotel.roomPrice > params.budget[1])
    ) {
      return false;
    }

    if (params.amenities && params.amenities.length > 0) {
      const hasAllAmenities = params.amenities.every((reqAmenity) =>
        hotel.amenities.some((a) => a.name === reqAmenity),
      );
      if (!hasAllAmenities) {
        return false;
      }
    }

    return true;
  });

  filtered.sort((a, b) => {
    switch (params.sort) {
      case "priceAsc":
        return a.roomPrice - b.roomPrice;
      case "priceDesc":
        return b.roomPrice - a.roomPrice;
      case "ratingAsc":
        return a.starRating - b.starRating;
      case "ratingDesc":
        return b.starRating - a.starRating;
      case "nameAsc":
        return a.hotelName.localeCompare(b.hotelName);
      case "nameDesc":
        return b.hotelName.localeCompare(a.hotelName);
      default:
        return 0;
    }
  });

  return new Promise((resolve) => setTimeout(() => resolve(filtered), 500));
};
