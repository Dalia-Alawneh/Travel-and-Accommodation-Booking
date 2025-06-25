import { IAvailableRoom } from "@travelia/types";

export type CartItem = Omit<IAvailableRoom, "availability">;

export interface CartState {
  items: CartItem[];
}
