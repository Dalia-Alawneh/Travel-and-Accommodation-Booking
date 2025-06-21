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

export interface UrlSearchParams {
  checkIn: string;
  checkOut: string;
  city: string;
  adults: number;
  children: number;
  rooms: number;
}
