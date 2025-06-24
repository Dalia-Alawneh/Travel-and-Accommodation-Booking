import Axios from "@travelia/api/config";
import { IRequestSearchParams } from "@travelia/api/types/request.dto";
import { ISearchHotelsResponse } from "@travelia/api/types/response.dto";

const endpoint = "/home/search";

export const getFilteredHotels = async (
  params: IRequestSearchParams,
): Promise<ISearchHotelsResponse[]> => {
  const config = { params };
  const response = await Axios.get(`${endpoint}`, config);
  return response.data;
};
