import { http, HttpResponse } from "msw";

const BASE_URL = "https://hotel.foothilltech.net/api";
export const citiesHandlers = [
  http.get(`${BASE_URL}/cities?pageNumber=1&pageSize=5`, () => {
    return HttpResponse.json([
      { id: 1, name: "Jenin", description: "City in the northern West Bank" },
      { id: 2, name: "Nablus", description: "City in the northern West Bank" },
    ]);
  }),

  http.delete(`${BASE_URL}/cities/:id`, () => {
    return HttpResponse.json({ message: "Deleted" }, { status: 200 });
  }),
];
