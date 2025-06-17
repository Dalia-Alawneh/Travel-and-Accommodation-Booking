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
