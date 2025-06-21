import Axios from "@travelia/api/config";
import { IAmenitiesResponse } from "@travelia/api/types/response.dto";

const endpoint = "search-results/amenities";

export const getAmenities = async (): Promise<IAmenitiesResponse[]> => {
  const response = await Axios.get(`${endpoint}`);
  return response.data;
};
