import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { ReactNode } from "react";

interface IAppLink {
  children: ReactNode;
  path: string;
}
const AppLink = ({ path, children }: IAppLink) => {
  return (
    <MuiLink component={RouterLink} to={{ pathname: path }}>
      {children}
    </MuiLink>
  );
};

export default AppLink;
