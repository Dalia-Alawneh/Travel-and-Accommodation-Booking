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

export interface IReviewResponse {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}

export interface IBookingResponse {
  customerName: string;
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
  bookingStatus: string;
  confirmationNumber: string;
}

export interface IRoom {
  id: number;
  name: string;
  type: string;
  price: number;
  available: boolean;
  maxOccupancy: number;
}
export interface IHotelDetailedResponse extends IHotelResponse {
  id: number;
  hotelType: string;
  rooms: IRoom[];
}
export interface IHotelJsonData {
  id: number;
  hotelName?: string;
  location?: string;
  description?: string;
  hotelType?: string;
  starRating?: number;
  latitude?: number;
  longitude?: number;
  rooms?: IRoom[];
  imageUrl?: string;
  availableRooms?: number;
  cityId?: number;
  amenities?: IAmenitiesResponse[];
  name?: string;
}
