import { http, HttpResponse } from "msw";
import { citiesMockedResponse } from "./../data";
import { ICityPayload } from "@travelia/api/types/request.dto";

export const BASE_URL = "https://hotel.foothilltech.net";
export const handlers = [
  http.get(`${BASE_URL}/cities`, () => {
    return HttpResponse.json({
      cities: citiesMockedResponse,
    });
  }),

  http.post(`${BASE_URL}/cities`, async ({ request }) => {
    const body = (await request.json()) as ICityPayload;
    return HttpResponse.json(
      {
        message: "City added successfully",
        note: {
          ...body,
          _id: "2",
        },
      },
      { status: 201 },
    );
  }),

  http.delete(`${BASE_URL}/cities/:id`, () => {
    return HttpResponse.json({ message: "Deleted" }, { status: 200 });
  }),

  http.put(`${BASE_URL}/cities/:id`, async ({ request }) => {
    const body = await request.json();
    return HttpResponse.json(body, { status: 200 });
  }),
];
