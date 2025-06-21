import { Navigate, Outlet } from "react-router-dom";
import { UserType } from "@travelia/types";

const GuestRoute = () => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
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
