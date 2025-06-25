import { Grid } from "@mui/material";
import AppDrawer from "@travelia/components/Drawer";
import { adminMenuItems, DRAWER_WIDTH } from "@travelia/fixtures";

const Cities = () => {
  return (
    <Grid container>
      <AppDrawer
        drawerWidth={DRAWER_WIDTH}
        menuItems={adminMenuItems}
        handleDrawerToggle={() => {}}
        isOpen={true}
        variant="persistent"
      />
    </Grid>
  );
};

export default Cities;
