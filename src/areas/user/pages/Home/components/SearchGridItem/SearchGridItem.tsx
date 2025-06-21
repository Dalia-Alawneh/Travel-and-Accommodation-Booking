import { Grid } from "@mui/material";
import AppDivider from "@travelia/components/Divider/Divider";
import { ReactNode } from "react";

interface SearchGridItemProps {
  children: ReactNode;
  showDivider?: boolean;
}

const SearchGridItem = ({
  children,
  showDivider = true,
}: SearchGridItemProps) => (
  <Grid size={{ xs: 12, sm: 6, lg: 2.4 }} sx={{ display: "flex", gap: 1 }}>
    {children}
    {showDivider && <AppDivider />}
  </Grid>
);
export default SearchGridItem;
