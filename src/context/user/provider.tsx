import { USER } from "@travelia/constants";
import { User, UserActions } from "@travelia/types";
import { getFromLocalStorage } from "@travelia/utils";
import { useReducer, useEffect, useMemo } from "react";
import { userReducer, initialUserState } from "./reducer";
import { UserContext } from "./context";

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, dispatch] = useReducer(userReducer, initialUserState);

  useEffect(() => {
    const storedUser = getFromLocalStorage<User>(USER);
    if (storedUser)
      dispatch({ type: UserActions.SET_USER, payload: storedUser });
  }, []);

  const value = useMemo(() => ({ user, dispatch }), [user, dispatch]);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
