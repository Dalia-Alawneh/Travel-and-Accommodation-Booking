import {
  Box,
  Container,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import AppForm from "@travelia/components/Form";
import AppTextField from "@travelia/components/Inputs/TextField/TextField";
import { LoginFormValues } from "@travelia/types";
import { loginSchema } from "../../schemas/login";
import AppButton from "@travelia/components/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { loginBg } from "@travelia/assets";

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
        // backgroundPositionY: "-200px",
      }}
    >
      <Grid container sx={{ height: "100%" }}>
        <Grid size={{ lg: 7 }}></Grid>
        <Grid size={{ sm: 5 }}>
          <AppForm
            initialValues={initialValues}
            onSubmit={() => {}}
            validationSchema={loginSchema}
            render={(formik) => (
              <Box
                sx={{
                  py: 10,
                  px: 5,
                  backgroundColor: "rgb(255,255,255)",
                  // backdropFilter: "blur(10px)",
                  // boxShadow: "0 0 15px 5px #e4e6e869",
                  height: "100%",
                }}
              >
                <form onSubmit={formik.handleSubmit} autoComplete="off">
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      gap: 2,
                      flexDirection: "column",
                      alignItems: "center",
                      width: "100%",
                    }}
                  >
                    <Typography variant="h4" fontWeight={700}>
                      Login
                    </Typography>
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
                      sx={{ bgcolor: "custom.skyBlue", color: "white", px: 4 }}
                    >
                      Login
                    </AppButton>
                  </Box>
                </form>
              </Box>
            )}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
