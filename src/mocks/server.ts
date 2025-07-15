import { setupServer } from "msw/node";
import { authHandlers, citiesHandlers } from "./apiMocks";
import { homeHandlers } from "./apiMocks/home";

export const BASE_URL = "https://hotel.foothilltech.net/api";

export const server = setupServer(
  ...citiesHandlers,
  ...authHandlers,
  ...homeHandlers,
);
