import { IAvailableRoom } from "@travelia/types";

export interface IRoomRow extends Omit<IAvailableRoom, "roomId"> {
  roomId?: number;
}
