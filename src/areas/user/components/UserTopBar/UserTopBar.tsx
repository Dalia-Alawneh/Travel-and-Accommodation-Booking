import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, IconButton } from "@mui/material";
import AppLink from "@travelia/components/Link";
import TopBar from "@travelia/components/TopBar";
import { selectCartCount } from "@travelia/Ducks/selectors/cart";
import { userMenuItems } from "@travelia/fixtures";
import { useSelector } from "react-redux";

const UserTopBar = () => {
  const cartCount = useSelector(selectCartCount);
  return (
    <TopBar
      menuLinks={userMenuItems}
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
            <IconButton aria-label="cart">
              <Badge badgeContent={cartCount} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </AppLink>
        </>
      )}
    />
  );
};

export default UserTopBar;
