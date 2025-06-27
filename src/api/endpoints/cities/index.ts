import Axios from "@travelia/api/config";
import { ICityPayload } from "@travelia/api/types/request.dto";
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

export const updateCity = async (
  id: number,
  body: ICityPayload,
): Promise<ICitiesResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, ...body });
    }, 300);
  });
};

export const addCity = async (body: ICityPayload): Promise<ICitiesResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.floor(Math.random() * 10000),
        name: body.name,
        description: body.description,
      });
    }, 300);
  });
};
