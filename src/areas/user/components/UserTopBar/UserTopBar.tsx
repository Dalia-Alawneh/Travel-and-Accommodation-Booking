import { ShoppingCart } from "@mui/icons-material";
import { Box } from "@mui/material";
import AppLink from "@travelia/components/Link";
import TopBar from "@travelia/components/TopBar";
import { menuItems } from "@travelia/fixtures";

const UserTopBar = () => {
  return (
    <TopBar
      menuLinks={menuItems}
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
          <AppLink path="cart">
            <ShoppingCart />
          </AppLink>
        </>
      )}
    />
  );
};

export default UserTopBar;
