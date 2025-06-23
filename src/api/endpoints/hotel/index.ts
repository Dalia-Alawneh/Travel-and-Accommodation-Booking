import Axios from "@travelia/api/config";
import { galleryMockData } from "@travelia/api/data";
import {
  IGalleryResponse,
  IHotelResponse,
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
