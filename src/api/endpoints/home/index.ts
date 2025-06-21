import Axios from "@travelia/api/config";
import {
  IFeaturedDealsResponse,
  IRecentlyVisitedHotelResponse,
  ITrendingDestinationsResponse,
} from "@travelia/api/types/response.dto";

const endpoint = "/home";
export const getFeaturedDeals = async (): Promise<IFeaturedDealsResponse[]> => {
  const response = await Axios.get(`${endpoint}/featured-deals`);
  return response.data;
};

export const getTrendingDestinations = async (): Promise<
  ITrendingDestinationsResponse[]
> => {
  const response = await Axios.get(`${endpoint}/destinations/trending`);
  return response.data;
};

export const getVisitedHotels = async () // userId: number,
: Promise<IRecentlyVisitedHotelResponse[]> => {
  const response = await Axios.get(`${endpoint}/users/${1}/recent-hotels`);
  return response.data;
};
