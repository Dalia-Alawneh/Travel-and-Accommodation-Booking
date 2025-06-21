import { useContext } from "react";
import { UserContext, UserContextUser } from "./context";

const useUser = (): UserContextUser => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};

export default useUser;
