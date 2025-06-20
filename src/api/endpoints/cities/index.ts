import Axios from "@travelia/api/config";
import { ICitiesResponse } from "@travelia/api/types/response.dto";

const endpoint = "/cities";
export const getCities = async (): Promise<ICitiesResponse[]> => {
  const response = await Axios.get(`${endpoint}`);
  return response.data;
};
