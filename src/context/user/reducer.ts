import { USER } from "@travelia/constants";
import { User, UserAction, UserActions } from "@travelia/types";
import { getFromStorage } from "@travelia/utils";

export const initialUserState: User | null = getFromStorage<User>(USER) || null;

export const userReducer = (
  state: User | null,
  action: UserAction,
): User | null => {
  switch (action.type) {
    case UserActions.SET_USER:
      return action.payload;
    case UserActions.CLEAR_USER:
      return null;
    default:
      return state;
  }
};
