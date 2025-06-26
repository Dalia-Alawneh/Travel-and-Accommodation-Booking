import AdminTopBarDrawer from "@travelia/areas/admin/components/AdminTopBar/AdminTopBar";
import Main from "@travelia/components/MainSection";
import { Outlet } from "react-router";

const AdminLayout = () => {
  return (
    <>
      <AdminTopBarDrawer>
        <Main>
          <Outlet />
        </Main>
      </AdminTopBarDrawer>
    </>
  );
};

export default AdminLayout;
