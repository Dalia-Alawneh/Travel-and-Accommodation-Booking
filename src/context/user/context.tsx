import { createContext } from "react";
import { User, UserAction } from "@travelia/types";

export interface UserContextUser {
  user: User | null;
  dispatch: React.Dispatch<UserAction>;
}

export const UserContext = createContext<UserContextUser | null>(null);
