import Axios from "@travelia/api/config";
import { galleryMockData } from "@travelia/api/data";
import {
  IGalleryResponse,
  IHotelResponse,
  IReviewResponse,
  IRoomResponse,
} from "@travelia/api/types/response.dto";

const endpoint = "/hotels";

export const getHotel = async (id: number): Promise<IHotelResponse> => {
  const response = await Axios.get(`${endpoint}/${id}`);
  return response.data;
};

export const getHotelGallery = async (
  id: number,
): Promise<IGalleryResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(galleryMockData);
    }, 300);
  });
};

export const getHotelAvailableRooms = async (
  id: number,
  checkInDate?: string,
  checkOutDate?: string,
): Promise<IRoomResponse[]> => {
  const config = {
    params: {
      checkInDate: checkInDate,
      CheckOutDate: checkOutDate,
    },
  };

  const response = await Axios.get(`${endpoint}/${id}/available-rooms`, config);
  return response.data;
};

export const getHotelReviews = async (
  id: number,
): Promise<IReviewResponse[]> => {
  const response = await Axios.get(`${endpoint}/${id}/reviews`);
  return response.data;
};
