import { http, HttpResponse } from "msw";
import { ILoginPayload } from "@travelia/api/types/request.dto";
import { UserType } from "@travelia/types";

const BASE_URL = "https://hotel.foothilltech.net/api";

export const authHandlers = [
  http.post(`${BASE_URL}/auth/authenticate`, async ({ request }) => {
    const body = (await request.json()) as ILoginPayload;

    const users = {
      user: UserType.User,
      admin: UserType.Admin,
    } as const;

    if (body.username in users && body.password === body.username) {
      return HttpResponse.json(
        {
          userType: users[body.username as keyof typeof users],
          authentication: "mocked-jwt-token",
        },
        { status: 200 },
      );
    }

    return HttpResponse.json(
      { message: "Invalid credentials" },
      { status: 401 },
    );
  }),
];
