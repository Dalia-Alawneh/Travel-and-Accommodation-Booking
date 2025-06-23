import Axios from "@travelia/api/config";
import { IHotelResponse } from "@travelia/api/types/response.dto";

const endpoint = "/hotels";

export const getHotel = async (id: number): Promise<IHotelResponse> => {
  const response = await Axios.get(`${endpoint}/${id}`);
  return response.data;
};
