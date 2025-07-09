import { Navigate, Outlet } from "react-router-dom";
import { User, UserType } from "@travelia/types";
import { USER } from "@travelia/constants";
import { getFromStorage } from "@travelia/utils";

const GuestRoute = () => {
  const user: User | null = getFromStorage(USER, "session");
  const isAuthenticated = !!user?.authentication;
  const role = user?.userType;
  if (isAuthenticated) {
    if (role === UserType.Admin) return <Navigate to="/admin" replace />;
    if (role === UserType.User) return <Navigate to="/user" replace />;
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default GuestRoute;
