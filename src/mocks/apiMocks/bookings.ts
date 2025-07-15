import { http, HttpResponse } from "msw";

const BASE_URL = "https://hotel.foothilltech.net/api";
export const bookingsHandlers = [
  http.get(`${BASE_URL}/bookings`, () => {
    return HttpResponse.json({
      customerName: "Mazen",
      hotelName: "Gaza Hotel",
      roomNumber: "313",
      roomType: "Suite",
      bookingDateTime: "2023-10-07T06:25:00",
      totalCost: 2000.0,
      paymentMethod: "Cash",
      bookingStatus: "Confirmed",
      confirmationNumber: "20250715-2826",
    });
  }),
];
