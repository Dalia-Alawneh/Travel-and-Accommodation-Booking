import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  InputLabel,
  Typography,
} from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import { LoginFormValues } from "@travelia/types";
import { loginSchema } from "../../schemas/login";
import AppButton from "@travelia/components/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { loginBg, logo } from "@travelia/assets";

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };
  return (
    <Box
      bgcolor="white"
      sx={{
        width: "100%",
        height: "100vh",
        backgroundImage: `url(${loginBg})`,
        backgroundSize: "cover",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid
          size={{ lg: 8 }}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
        <Grid size={{ xs: 12, md: 8, lg: 4 }}>
          <Box
            sx={{
              p: 5,
              backgroundColor: "rgba(255,255,255.1)",
              backdropFilter: "blur(10px)",
              height: "100%",
            }}
          >
            <img src={logo} />
            <Typography variant="h4" fontWeight={700} mt={5}>
              Nice to see you again!
            </Typography>
            <AppForm
              initialValues={initialValues}
              onSubmit={() => {}}
              validationSchema={loginSchema}
              render={(formik) => (
                <Box mt={4} height={"100&"}>
                  <form onSubmit={formik.handleSubmit} autoComplete="off">
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        gap: 2,
                        flexDirection: "column",
                      }}
                    >
                      <AppTextField
                        name="username"
                        placeholder="Enter Username"
                      />
                      <AppTextField
                        name="password"
                        placeholder="Enter Password"
                        type={showPassword ? "text" : "password"}
                        slotProps={{
                          input: {
                            endAdornment: (
                              <InputAdornment position="end">
                                <IconButton
                                  onClick={toggleShowPassword}
                                  edge="end"
                                >
                                  {showPassword ? (
                                    <VisibilityOff />
                                  ) : (
                                    <Visibility />
                                  )}
                                </IconButton>
                              </InputAdornment>
                            ),
                          },
                        }}
                      />
                      <AppButton
                        sx={{
                          bgcolor: "custom.skyBlue",
                          color: "white",
                          px: 4,
                          mt: 5,
                        }}
                      >
                        Login
                      </AppButton>
                    </Box>
                  </form>
                </Box>
              )}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
