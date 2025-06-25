import Footer from "@travelia/areas/user/components/Footer";
import UserTopBar from "@travelia/areas/user/components/UserTopBar";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <UserTopBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
