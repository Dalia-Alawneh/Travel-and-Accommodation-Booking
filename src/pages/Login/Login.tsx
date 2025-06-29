import {
  Box,
  Grid,
  IconButton,
  InputAdornment,
  Typography,
} from "@mui/material";
import AppForm from "@travelia/components/Form";
import FormikTextField from "@travelia/components/Inputs/TextField/FormikTextField";
import { LoginFormValues, UserActions, UserType } from "@travelia/types";
import { loginSchema } from "../../schemas/login";
import AppButton from "@travelia/components/Button";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { loginBg, logo } from "@travelia/assets";
import { login } from "@travelia/api/endpoints/auth";
import { useMutation } from "@tanstack/react-query";
import { saveToLocalStorage } from "@travelia/utils/localstorage";
import { TOKEN_KEY, USER } from "@travelia/constants";
import { useNavigate } from "react-router";
import toast from "react-hot-toast";
import useUser from "@travelia/context/user/useContext";

const initialValues: LoginFormValues = {
  username: "",
  password: "",
};

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { dispatch } = useUser();
  const { mutate: loginMutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (res) => {
      const user = {
        authentication: res.authentication,
        userType: res.userType,
      };
      dispatch({ type: UserActions.SET_USER, payload: user });
      saveToLocalStorage(TOKEN_KEY, res.authentication);
      saveToLocalStorage(USER, user);
      setTimeout(() => {
        if (user.userType === UserType.User) navigate("/user");
        else if (user.userType === UserType.Admin) navigate("/admin");
      }, 800);
      toast.success("Login succeed, Navigating to Home page...");
    },
  });

  const toggleShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLoginSubmit = async (data: LoginFormValues) => {
    loginMutate(data);
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
          size={{ md: 6, lg: 8 }}
          sx={{ display: { xs: "none", md: "block" } }}
        ></Grid>
        <Grid size={{ xs: 12, md: 6, lg: 4 }}>
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
              onSubmit={handleLoginSubmit}
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
                      <FormikTextField
                        name="username"
                        placeholder="Enter Username"
                      />
                      <FormikTextField
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
                        type="submit"
                        sx={{
                          bgcolor: "custom.skyBlue",
                          color: "white",
                          px: 4,
                          mt: 4,
                        }}
                        loading={isPending}
                        disabled={isPending}
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
