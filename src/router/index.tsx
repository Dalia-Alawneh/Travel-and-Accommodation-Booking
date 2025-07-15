import { lazy } from "react";
import Welcome from "@travelia/pages/Welcome";
import Home from "@travelia/areas/user/pages/Home";
import Login from "@travelia/pages/Login";
import { Route, Routes } from "react-router";
import GuardedRoute from "./GuardedRoute";
import { UserType } from "@travelia/types";
import GuestRoute from "./GuestRoute";
import UserLayout from "@travelia/layouts/user";
import AdminLayout from "@travelia/layouts/admin/AdminLayout";
const HotelPage = lazy(() => import("@travelia/areas/user/pages/Hotel"));
const Dashboard = lazy(() => import("@travelia/areas/admin/pages/Dashboard"));
const CartPage = lazy(() => import("@travelia/areas/user/pages/Cart"));
const OrderPage = lazy(() => import("@travelia/areas/user/pages/Order"));
const SearchPage = lazy(() => import("@travelia/areas/user/pages/Search"));
const ContactPage = lazy(() => import("@travelia/areas/user/pages/Contact"));
const Cities = lazy(() => import("@travelia/areas/admin/pages/Cities"));
const Hotels = lazy(() => import("@travelia/areas/admin/pages/Hotels"));
const Rooms = lazy(() => import("@travelia/areas/admin/pages/Rooms"));
const NotFound = lazy(() => import("@travelia/pages/NotFound/NotFound"));
const ServerError = lazy(() => import("@travelia/pages/ServerError"));
const UnAuthorize = lazy(() => import("@travelia/pages/UnAuthorize"));

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
          <Route path="contact" element={<ContactPage />} />
        </Route>
      </Route>
      <Route
        path="/admin"
        element={<GuardedRoute allowedRoles={[UserType.Admin]} />}
      >
        <Route element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="cities" element={<Cities />} />
          <Route path="hotels" element={<Hotels />} />
          <Route path="rooms" element={<Rooms />} />
        </Route>
      </Route>
    </Routes>
  );
};

export default AppRouter;
