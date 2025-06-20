import Home from "@travelia/areas/user/pages/Home";
import Login from "@travelia/pages/Login";
import { TOKEN_KEY } from "@travelia/fixtures";
import { getFromLocalStorage } from "@travelia/utils";
import { Route, Routes } from "react-router";
import GuardedRoute from "./GuardedRoute";
import Welcome from "@travelia/pages/Welcome";

const AppRouter = () => {
  const getRedirectPath = () => {
    if (!user?.authentication) return "/login";
    if (user?.UserType === "admin") return "/admin";
    if (user?.UserType === "user") return "/user";
    return "/unauthorized";
  };

  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/user" element={<GuardedRoute allowedRoles={["user"]} />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="/admin" element={<GuardedRoute allowedRoles={["admin"]} />}>
        <Route index element={<Home />} />
      </Route>
      <Route path="login" element={<Login />} />
    </Routes>
  );
};

export default AppRouter;
