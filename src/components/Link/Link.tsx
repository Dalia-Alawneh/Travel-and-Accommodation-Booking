import { Link as RouterLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { ReactNode } from "react";

interface IAppLinkProps {
  children: ReactNode;
  path: string;
}
const AppLink = ({ path, children }: IAppLinkProps) => {
  return (
    <MuiLink component={RouterLink} to={{ pathname: path }}>
      {children}
    </MuiLink>
  );
};

export default AppLink;
