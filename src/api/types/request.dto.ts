import { IAmenity, IAvailableRoom, LoginFormValues } from "@travelia/types";

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
  imageUrl: string;
  availableRooms: number;
}

export interface IRoomPayload {
  roomNumber: number;
  roomPhotoUrl: string;
  roomType: string;
  capacityOfAdults: number;
  capacityOfChildren: number;
  roomAmenities: Omit<IAmenity, "id">[];
  price: number;
  availability: boolean;
}
