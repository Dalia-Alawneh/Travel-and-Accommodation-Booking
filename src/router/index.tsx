import Home from "@travelia/areas/user/pages/Home";
import Login from "@travelia/pages/Login";
import { Route, Routes } from "react-router";
import GuardedRoute from "./GuardedRoute";
import Welcome from "@travelia/pages/Welcome";
import { UserType } from "@travelia/types";
import GuestRoute from "./GuestRoute";
import SearchPage from "@travelia/areas/user/pages/Search";
import NotFound from "@travelia/pages/NotFound/NotFound";
import ServerError from "@travelia/pages/ServerError";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/500" element={<ServerError />} />

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route
        path="/user"
        element={<GuardedRoute allowedRoles={[UserType.User]} />}
      >
        <Route index element={<Home />} />
        <Route path="search" element={<SearchPage />} />
      </Route>
      <Route
        path="/admin"
        element={<GuardedRoute allowedRoles={[UserType.Admin]} />}
      >
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
