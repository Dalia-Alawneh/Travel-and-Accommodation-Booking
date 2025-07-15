import { http, HttpResponse } from "msw";

const BASE_URL = "https://hotel.foothilltech.net/api";
export const homeHandlers = [
  http.get(`${BASE_URL}/home/featured-deals`, () => {
    return HttpResponse.json([
      {
        hotelId: 2,
        originalRoomPrice: 150.0,
        discount: 0.4,
        finalPrice: 90.0,
        cityName: "Los Angeles",
        hotelName: "Sunset Resort",
        hotelStarRating: 4,
        title: "Ocean View Retreat",
        description:
          "Escape to the serenity of Sunset Resort's Ocean View Retreat. Enjoy the calming sounds of the waves and stunning views of the ocean from your cozy room. Perfect for a relaxing getaway.",
        roomPhotoUrl:
          "https://images.pexels.com/photos/172872/pexels-photo-172872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      },
    ]);
  }),

  http.get(`${BASE_URL}/home/destinations/trending`, () => {
    return HttpResponse.json([
      {
        cityId: 3,
        cityName: "New York",
        countryName: "United States",
        description:
          "Experience the iconic cityscape of New York, where skyscrapers touch the clouds and diverse cultures converge. Visit famous landmarks, explore Central Park, and indulge in world-class dining.",
        thumbnailUrl:
          "https://worldstrides.com/wp-content/uploads/2015/07/iStock_000040849990_Large.jpg",
      },
    ]);
  }),

  http.get(`${BASE_URL}/home/users/${1}/recent-hotels`, () => {
    return HttpResponse.json([
      {
        hotelId: 3,
        hotelName: "Sunset Resort",
        starRating: 4,
        visitDate: "2022-10-15T00:00:00",
        cityName: "Los Angeles",
        thumbnailUrl:
          "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/25/2a/c2/96/sunset-resort.jpg?w=700&h=-1&s=1",
        priceLowerBound: 300,
        priceUpperBound: 2000,
      },
    ]);
  }),
];
