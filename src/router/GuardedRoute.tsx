import { Navigate, Outlet } from "react-router";
interface GuardedRouteProps {
  allowedRoles: string[];
}

const GuardedRoute = ({ allowedRoles }: GuardedRouteProps) => {
  const user = JSON.parse(localStorage.getItem("user") || "{}");
  const isAuthenticated = !!user?.authentication;
  const role = user?.userType;

  if (!isAuthenticated) return <Navigate to="/login" />;
  if (!allowedRoles.includes(role)) return <Navigate to="/unauthorized" />;

  return <Outlet />;
};

export default GuardedRoute;
