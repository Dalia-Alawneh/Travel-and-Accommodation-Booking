import Footer from "@travelia/areas/user/components/Footer";
import TopBar from "@travelia/components/TopBar";
import { menuItems } from "@travelia/fixtures";
import { Outlet } from "react-router";

const RootLayout = () => {
  return (
    <>
      <TopBar menuLinks={menuItems} />
      <Outlet />
      <Footer />
    </>
  );
};

export default RootLayout;
