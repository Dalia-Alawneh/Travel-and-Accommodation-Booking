import Axios from "@travelia/api/config";
import { ILoginPayload } from "@travelia/api/types/request.dto";
import { IAuthenticateResponse } from "@travelia/api/types/response.dto";

const endpoint = "/auth";
export const login = async (
  data: ILoginPayload,
): Promise<IAuthenticateResponse> => {
  const response = await Axios.post(`${endpoint}/authenticate`, data);
  return response.data;
};
