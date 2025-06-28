import Axios from "@travelia/api/config";
import { galleryMockData } from "@travelia/api/data/gallery";
import {
  IGalleryResponse,
  IHotelDetailedResponse,
  IHotelResponse,
  IReviewResponse,
  IRoomResponse,
} from "@travelia/api/types/response.dto";
import hotelsData from "@travelia/api/data/hotels.json";
import { mapHotelData } from "@travelia/api/utils";
import { IHotelPayload } from "@travelia/api/types/request.dto";

const endpoint = "/hotels";

export const getHotel = async (id: number): Promise<IHotelResponse> => {
  const response = await Axios.get(`${endpoint}/${id}`);
  return response.data;
};

export const getHotelGallery = async (
  _id: number,
): Promise<IGalleryResponse[]> => {
  void _id;
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

export const getHotels = async (): Promise<IHotelDetailedResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const filteredHotels = hotelsData.map(mapHotelData);
      resolve(filteredHotels);
    }, 300);
  });
};

export const getHotelsPaginated = async (
  limit: number,
  page: number,
): Promise<IHotelDetailedResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginatedData = hotelsData.slice(start, end).map(mapHotelData);

      resolve(paginatedData);
    }, 300);
  });
};

export const updateHotel = async (_id: number, body: IHotelPayload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(body);
    }, 300);
  });
};

export const deleteHotel = async (_id: number): Promise<void> => {
  void _id;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
};

export const addHotel = async (
  body: IHotelPayload,
): Promise<IHotelDetailedResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: Math.floor(Math.random() * 1000),
        hotelName: body.hotelName,
        location: body.location,
        description: body.description,
        starRating: body.starRating,
        imageUrl: body.imageUrl,
        hotelType: "Resort",
        latitude: 0,
        longitude: 0,
        rooms: [],
        availableRooms: 0,
        cityId: 0,
        amenities: [],
      });
    }, 300);
  });
};
