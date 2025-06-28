import { IRoomResponse } from "@travelia/api/types/response.dto";
import roomsData from "@travelia/api/data/rooms.json";
import { IRoomPayload } from "@travelia/api/types/request.dto";

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

export const addRoom = async (body: IRoomPayload): Promise<IRoomResponse> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        roomId: Math.floor(Math.random() * 1000),
        ...body,
      });
    }, 300);
  });
};

export const updateRoom = async (body: IRoomPayload) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(body);
    }, 300);
  });
};

export const deleteRoom = async (_id: number): Promise<void> => {
  void _id;
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
};
