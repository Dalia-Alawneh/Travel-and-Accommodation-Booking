import Axios from "@travelia/api/config";
import { IBookingPayload } from "@travelia/api/types/request.dto";
import { IBookingResponse } from "@travelia/api/types/response.dto";

const endpoint = "/bookings";

export const submitBooking = async (
  data: IBookingPayload,
): Promise<IBookingResponse> => {
  const response = await Axios.post(`${endpoint}`, data);
  return response.data;
};
