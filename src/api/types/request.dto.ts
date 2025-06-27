import { IAvailableRoom, LoginFormValues } from "@travelia/types";

export interface ILoginPayload extends LoginFormValues {}

export interface IRequestSearchParams {
  checkInDate: string;
  checkOutDate: string;
  city: string;
  adults: number;
  children: number;
  numberOfRooms: number;
  starRate: number;
  sort: string;
}

export interface IBookingPayload {
  customerName: string;
  rooms: Partial<IAvailableRoom>[];
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}

export interface ICityPayload {
  name: string;
  description: string;
}

export interface IHotelPayload {
  hotelName: string;
  location: string;
  description: string;
  starRating: number;
  latitude: number;
  longitude: number;
  availableRooms: number;
  imageUrl: string;
}
