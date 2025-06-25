import { LoginFormValues } from "@travelia/types";

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
  hotelName: string;
  roomNumber: string;
  roomType: string;
  bookingDateTime: string;
  totalCost: number;
  paymentMethod: string;
}
