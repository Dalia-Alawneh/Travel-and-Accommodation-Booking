import { Box } from "@mui/material";
import AppDrawer from "@travelia/components/Drawer";
import AppLink from "@travelia/components/Link";
import TopBar from "@travelia/components/TopBar";
import { adminMenuItems, DRAWER_WIDTH } from "@travelia/fixtures";
import { useState } from "react";

const AdminTopBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const handleDrawerToggle = () => {
    setIsDrawerOpen((prevState) => !prevState);
  };
  return (
    <>
      <TopBar
        menuLinks={adminMenuItems}
        hideLogo={true}
        renderMenu={(menuLinks) => (
          <>
            <Box
              width="100%"
              sx={{
                display: {
                  xs: "none",
                  sm: "flex",
                  gap: "1rem",
                },
                justifyContent: "center",
              }}
            >
              {menuLinks.map((item) => (
                <AppLink path={item.path} key={item.title}>
                  {item.title}
                </AppLink>
              ))}
            </Box>
          </>
        )}
      />
      <AppDrawer
        drawerWidth={DRAWER_WIDTH}
        menuItems={adminMenuItems}
        handleDrawerToggle={() => {}}
        isOpen={true}
        variant="persistent"
      />
    </>
  );
};

export default AdminTopBar;
