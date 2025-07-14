import { setupServer } from "msw/node";
import { authHandlers, citiesHandlers } from "./apiMocks";

export const BASE_URL = "https://hotel.foothilltech.net/api";

export const server = setupServer(...citiesHandlers, ...authHandlers);
