import Axios from "@travelia/api/config";
import { ICitiesResponse } from "@travelia/api/types/response.dto";

const endpoint = "/cities";
export const getCities = async (
  pageSize?: number,
  pageNumber?: number,
): Promise<ICitiesResponse[]> => {
  const config = {
    params: {
      ...(pageNumber !== undefined && { pageNumber }),
      ...(pageSize !== undefined && { pageSize }),
    },
  };

  const response = await Axios.get(`${endpoint}`, config);
  return response.data;
};

export const deleteCity = async (id: number): Promise<ICitiesResponse[]> => {
  const response = await Axios.delete(`${endpoint}/${id}`);
  return response.data;
};
