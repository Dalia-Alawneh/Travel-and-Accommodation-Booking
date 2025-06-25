import AdminTopBar from "@travelia/areas/admin/components/AdminTopBar/AdminTopBar";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <AdminTopBar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
