import { createContext, useContext, useEffect, useMemo, useState } from "react";
import { getFromLocalStorage } from "@travelia/utils";
import { USER } from "@travelia/fixtures";
import { UserType } from "@travelia/types";

interface IUser {
  authentication: string;
  userType: UserType;
}

const UserContext = createContext<IUser | null>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);

  useEffect(() => {
    const storedUser = getFromLocalStorage<IUser>(USER);
    if (storedUser) setUser(storedUser);
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
