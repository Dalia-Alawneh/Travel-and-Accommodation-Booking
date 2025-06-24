import { ReactNode } from "react";

type MenuItem = {
  title: string;
  icon?: ReactNode;
  path: string;
};

export type Menu = MenuItem[];

export type SelectItem = {
  text: string;
  value: string | number;
};

export type LoginFormValues = {
  username: string;
  password: string;
};

export type User = {
  authentication: string;
  userType: UserType;
};

export enum UserType {
  User = "User",
  Admin = "Admin",
}

export enum UserActions {
  SET_USER = "SET_USER",
  CLEAR_USER = "CLEAR_USER",
}

export type UserAction =
  | { type: UserActions.SET_USER; payload: User }
  | { type: UserActions.CLEAR_USER };

export type RecentlyVisitedHotel = {
  hotelId: number;
  hotelName: string;
  starRating: number;
  visitDate: string;
  cityName: string;
  thumbnailUrl: string;
  priceLowerBound: number;
  priceUpperBound: number;
};

export type City = {
  id: number;
  name: string;
};

export type CheckboxItem = {
  name: string;
  description: string;
};
export interface UrlSearchParams {
  checkInDate: string;
  checkOutDate: string;
  city: string;
  adults: number;
  children: number;
  numberOfRooms: number;
}

export interface SearchValues {
  checkInDate: string;
  checkOutDate: string;
  city: string;
  adults: number;
  children: number;
  numberOfRooms: number;
  starRate: number;
  sort: string;
  budget: number;
  amenities: string[];
}

export interface IAmenity {
  id: number;
  name: string;
  description: string;
}
export interface ISearchedHotel {
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
  amenities: IAmenity[];
}

export type HotelFilterValues = {
  budget: number;
  starRate: number;
  amenities: string[];
};

export enum SortOptions {
  PriceAsc = "priceAsc",
  PriceDesc = "priceDesc",
  RatingDesc = "ratingDesc",
  RatingAsc = "ratingAsc",
  NameAsc = "nameAsc",
  NameDesc = "nameDesc",
}

export interface IGalleryItem {
  id: number;
  url: string;
}

export interface IAvailableRoom {
  roomId: number;
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: Omit<IAmenity, "id">[];
  price: number;
  availability: boolean;
}

export interface IReview {
  reviewId: number;
  customerName: string;
  rating: number;
  description: string;
}
