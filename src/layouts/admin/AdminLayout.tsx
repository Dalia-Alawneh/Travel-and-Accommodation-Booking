import AdminTopBar from "@travelia/areas/admin/components/AdminTopBar/AdminTopBar";
import Main from "@travelia/components/MainSection";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <AdminTopBar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default AdminLayout;
