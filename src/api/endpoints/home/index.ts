import Axios from "@travelia/api/config";
import { IFeaturedDealsResponse } from "@travelia/api/types";

const endpoint = "/home";
export const getFeaturedDeals = async (): Promise<IFeaturedDealsResponse[]> => {
  const response = await Axios.get(`${endpoint}/featured-deals`);
  return response.data;
};
