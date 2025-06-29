import { http, HttpResponse } from "msw";
import { citiesMockedResponse } from "./../data";

export const BASE_URL = "https://hotel.foothilltech.net";
export const handlers = [
  http.get(`${BASE_URL}/cities`, () => {
    return HttpResponse.json({
      cities: citiesMockedResponse,
    });
  }),
];
