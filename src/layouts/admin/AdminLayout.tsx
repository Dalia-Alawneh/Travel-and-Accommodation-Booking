import AdminDrawerLayout from "@travelia/areas/admin/components/AdminDrawerLayout/AdminDrawerLayout";
import withContainer from "@travelia/HOC/withContainer";
import { ReactNode } from "react";
import { Outlet } from "react-router";

const Main = withContainer(
  ({ children }: { children: ReactNode }) => <main>{children}</main>,
  {
    maxWidth: "xl",
    sx: { my: 2, px: 2 },
  },
);

const AdminLayout = () => {
  return (
    <>
      <AdminDrawerLayout>
        <Main>
          <Outlet />
        </Main>
      </AdminDrawerLayout>
    </>
  );
};

export default AdminLayout;
