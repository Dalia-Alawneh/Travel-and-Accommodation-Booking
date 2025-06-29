import { EmailRounded, LocationOn, AccessTime } from "@mui/icons-material";
import { Box, Container, Grid, Typography } from "@mui/material";
import {
  footerBg,
  masterCardIcon,
  paypalIcon,
  visaIcon,
  whiteLogo,
} from "@travelia/assets";
import AppLink from "@travelia/components/Link/Link";
import { userMenuItems } from "@travelia/fixtures/index.tsx";

const Footer = () => {
  return (
    <footer>
      <Box
        bgcolor="primary.dark"
        color="white"
        py={5}
        position="relative"
        zIndex={10}
        overflow="hidden"
      >
        <Box
          sx={{
            position: "absolute",
            width: "100%",
            height: "100%",
            bgcolor: "rgba(0,0,0,0.4)",
            zIndex: -1,
            top: 0,
          }}
        ></Box>
        <Box
          sx={{
            position: "absolute",
            width: { xs: 200, md: 300 },
            bottom: -10,
            left: 0,
            zIndex: -2,
          }}
        >
          <img src={footerBg} width="100%" alt="footer bg" />
        </Box>
        <Container maxWidth="lg">
          <Grid container spacing={4}>
            <Grid size={{ sm: 12, md: 6 }}>
              <img
                src={whiteLogo}
                alt="Travila Logo"
                style={{ marginBottom: 16 }}
              />
              <Box display="flex" gap={1} alignItems="center">
                <LocationOn sx={{ color: "custom.salver" }} fontSize="small" />
                <Typography variant="body2" color="custom.salver">
                  Jenin, Palestine
                </Typography>
              </Box>
              <Box display="flex" gap={1} alignItems="center" mt={1}>
                <AccessTime sx={{ color: "custom.salver" }} fontSize="small" />
                <Typography variant="body2" color="custom.salver">
                  Hours: 8:00 - 17:00, Mon - Sat
                </Typography>
              </Box>
              <Box display="flex" gap={1} alignItems="center" mt={1}>
                <EmailRounded
                  sx={{ color: "custom.salver" }}
                  fontSize="small"
                />
                <Typography variant="body2" color="custom.salver">
                  support@travilia.com
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ sm: 12, md: 3 }}>
              <Typography
                variant="subtitle1"
                mb={3}
                fontWeight="bold"
                gutterBottom
              >
                Quick Links
              </Typography>
              {userMenuItems.map((item) => (
                <AppLink key={item.title} path={item.path}>
                  <Typography
                    key={item.title}
                    variant="body2"
                    color="custom.salver"
                    sx={{ mb: 0.5 }}
                  >
                    {item.title}
                  </Typography>
                </AppLink>
              ))}
            </Grid>
            <Grid size={{ sm: 12, md: 3 }}>
              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                gap={2}
                mt={2}
                flexWrap="wrap"
              >
                <img
                  src={masterCardIcon}
                  alt="MasterCard"
                  style={{ height: 30 }}
                />
                <img src={visaIcon} alt="Visa" style={{ height: 30 }} />
                <img src={paypalIcon} alt="PayPal" style={{ height: 30 }} />
              </Box>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="center"
            mt={5}
            flexDirection={{ xs: "column", md: "row" }}
            alignItems="center"
          >
            <Typography variant="body2" color="custom.salver">
              © 2025 Travila All rights reserved.
            </Typography>
          </Box>
        </Container>
      </Box>
    </footer>
  );
};

export default Footer;
