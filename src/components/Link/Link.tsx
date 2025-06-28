import { NavLink } from "react-router-dom";
import { Link as MuiLink } from "@mui/material";
import { ReactNode } from "react";

interface IAppLinkProps {
  children: ReactNode;
  path: string;
}
const AppLink = ({ path, children }: IAppLinkProps) => {
  return (
    <MuiLink
      component={NavLink}
      to={path}
      end
      sx={{
        textDecoration: "none",
        color: "text.primary",
        "&.active": {
          fontWeight: "bold",
          color: "primary.main",
          borderBottom: "2px solid",
          borderColor: "primary.main",
        },
      }}
    >
      {children}
    </MuiLink>
  );
};

export default AppLink;
