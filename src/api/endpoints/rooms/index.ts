import { IRoomResponse } from "@travelia/api/types/response.dto";
import roomsData from "@travelia/api/data/rooms.json";

export const getRooms = async (): Promise<IRoomResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(roomsData);
    }, 300);
  });
};

export const getRoomsPaginated = async (
  limit: number,
  page: number,
): Promise<IRoomResponse[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const start = (page - 1) * limit;
      const end = start + limit;
      const paginatedData = roomsData.slice(start, end);

      resolve(paginatedData);
    }, 300);
  });
};
