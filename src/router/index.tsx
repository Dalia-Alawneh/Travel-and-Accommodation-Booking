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
import UserLayout from "@travelia/layouts/user/UserLayout";
import HotelPage from "@travelia/areas/user/pages/Hotel";
import CartPage from "@travelia/areas/user/pages/Cart";
import OrderPage from "@travelia/areas/user/pages/Order";
import UnAuthorize from "@travelia/pages/UnAuthorize";
import Cities from "@travelia/areas/admin/pages/Cities";
import AdminLayout from "@travelia/layouts/admin/AdminLayout";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={<NotFound />} />
      <Route path="/500" element={<ServerError />} />
      <Route path="/401" element={<UnAuthorize />} />

      <Route element={<GuestRoute />}>
        <Route path="/login" element={<Login />} />
      </Route>
      <Route
        path="/user"
        element={<GuardedRoute allowedRoles={[UserType.User]} />}
      >
        <Route element={<UserLayout />}>
          <Route index element={<Home />} />
          <Route path="search" element={<SearchPage />} />
          <Route path="hotel/:id" element={<HotelPage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="order" element={<OrderPage />} />
        </Route>
      </Route>
      <Route
        path="/admin"
        element={<GuardedRoute allowedRoles={[UserType.Admin]} />}
      >
        <Route element={<AdminLayout />}>
          <Route path="cities" element={<Cities />} />
          <Route path="hotels" element={<Cities />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
