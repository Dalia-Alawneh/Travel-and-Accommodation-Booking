import Axios from "@travelia/api/config";

const endpoint = "/home";
export const getFeaturedDeals = async () => {
  const response = await Axios.get(`${endpoint}/featured-deals`);
  return response.data;
};
