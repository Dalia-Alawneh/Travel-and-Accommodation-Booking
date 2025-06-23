import { UserType } from "@travelia/types";

export interface IFeaturedDealsResponse {
  cityName: string;
  description: string;
  discount: number;
  finalPrice: number;
  hotelId: number;
  hotelName: string;
  hotelStarRating: number;
  originalRoomPrice: number;
  roomPhotoUrl: string;
  title: string;
}

export interface ITrendingDestinationsResponse {
  cityId: number;
  cityName: string;
  countryName: string;
  description: string;
  thumbnailUrl: string;
}

export interface IAuthenticateResponse {
  userType: UserType;
  authentication: string;
}

export interface IRecentlyVisitedHotelResponse {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: string;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
}

export interface ICitiesResponse {
  id: number;
  name: string;
  description: string;
}
export interface IAmenitiesResponse {
  name: string;
  description: string;
}
export interface IAmenitySearchResponse {
  id: number;
  name: string;
  description: string;
}

export interface ISearchAmenitiesResponse extends IAmenitiesResponse {
  id: number;
}
export interface ISearchHotelsResponse {
  hotelId: number;
  hotelName: string;
  starRating: number;
  latitude: number;
  longitude: number;
  roomPrice: number;
  roomType: string;
  cityName: string;
  roomPhotoUrl: string;
  discount: number;
  amenities: IAmenitySearchResponse[];
}
export interface IHotelResponse {
  hotelName: string;
  location: string;
  description: string;
  starRating: number;
  latitude: number;
  longitude: number;
  availableRooms: number;
  imageUrl: string;
  cityId: number;
  amenities: IAmenitiesResponse[];
}

export interface IGalleryResponse {
  id: number;
  url: string;
}

export interface IRoomResponse {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: IAmenitiesResponse[];
  price: number;
  availability: boolean;
}
