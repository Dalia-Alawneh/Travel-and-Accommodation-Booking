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
    <Box bgcolor="white">
      <Container maxWidth="sm">
        <AppForm
          initialValues={initialValues}
          onSubmit={() => {}}
          validationSchema={loginSchema}
          render={(formik) => (
            <Box
              sx={{
                py: 10,
                px: 5,
                borderRadius: "10px",
                backgroundColor: "rgba(255,240,240,0.4)",
                backdropFilter: "blur(10)",
                boxShadow: "0 0 15px 5px #e4e6e869",
              }}
            >
              <form onSubmit={formik.handleSubmit}>
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
                  <AppTextField name="username" placeholder="Enter Username" />
                  <AppTextField
                    name="password"
                    placeholder="Enter Password"
                    type={showPassword ? "text" : "password"}
                    slotProps={{
                      input: {
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton onClick={toggleShowPassword} edge="end">
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
      </Container>
    </Box>
  );
};

export default Login;
