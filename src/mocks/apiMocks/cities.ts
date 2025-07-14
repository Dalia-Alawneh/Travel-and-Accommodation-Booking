import { http, HttpResponse } from "msw";
import { citiesMockedResponse } from "./../data";
import { ICityPayload } from "@travelia/api/types/request.dto";
import { BASE_URL } from "../server";

export const citiesHandlers = [
  http.get(`${BASE_URL}/cities??pageNumber=1&pageSize=5`, () => {
    console.log("Mock for GET /cities was called");
    return HttpResponse.json({
      cities: citiesMockedResponse,
    });
  }),

  http.post(`${BASE_URL}/cities`, async ({ request }) => {
    const body = (await request.json()) as ICityPayload;
    return HttpResponse.json(
      {
        message: "City added successfully",
        city: {
          ...body,
          id: 3,
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
