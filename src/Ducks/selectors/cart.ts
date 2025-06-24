import { RootState } from "@travelia/app/store";

export const selectCartItems = (state: RootState) => state.cart.items;
export const selectCartCount = (state: RootState) => state.cart.items.length;

export const selectTotalPrice = (state: RootState) =>
  state.cart.items.reduce((total, item) => total + item.price, 0);
