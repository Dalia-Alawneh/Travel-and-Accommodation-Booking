import { http, HttpResponse } from "msw";

const BASE_URL = "https://hotel.foothilltech.net/api";
export const amenitiesHandlers = [
  http.get(`${BASE_URL}/search-results/amenities`, () => {
    return HttpResponse.json([
      {
        name: "Free Wi-Fi",
        description:
          "Stay connected with complimentary high-speed Wi-Fi available in all rooms.",
      },
      {
        name: "Air Conditioning",
        description:
          "Enjoy a comfortable stay with individually controlled air conditioning in every room.",
      },
    ]);
  }),
];
