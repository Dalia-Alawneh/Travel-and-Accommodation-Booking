import { Grid } from "@mui/material";
import AppDrawer from "@travelia/components/Drawer";
import { adminMenuItems, DRAWER_WIDTH } from "@travelia/fixtures";
import AdminTopBar from "../../components/AdminTopBar/AdminTopBar";

const Cities = () => {
  return (
    <Grid container>
      <AdminTopBar />
    </Grid>
  );
};

export default Cities;
