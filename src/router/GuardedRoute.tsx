import { USER } from "@travelia/constants";
import { User } from "@travelia/types";
import { getFromLocalStorage } from "@travelia/utils";
import { Navigate, Outlet } from "react-router";
interface GuardedRouteProps {
  allowedRoles: string[];
}

const GuardedRoute = ({ allowedRoles }: GuardedRouteProps) => {
  const user: User | null = getFromLocalStorage(USER);
  const isAuthenticated = !!user?.authentication;
  const role = user?.userType;

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (role && !allowedRoles.includes(role)) return <Navigate to="/401" />;

  return <Outlet />;
};

export default GuardedRoute;
