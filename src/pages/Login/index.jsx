import React, { useEffect, useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Copyright from "../../components/Copyright";
import { useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { LoginAction } from "../../redux/actions/user/loginAction";

const theme = createTheme();

export default function Login() {
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user);
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [hasError, setHasError] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    cleanAllErrors();
    handleRememberAccount();
    if (!form.email || !form.password) {
      return setHasError({
        ...form,
        email: !form.email ? true : false,
        password: !form.password ? true : false,
      });
    }

    dispatch(LoginAction(form.email, form.password));
  };

  const cleanAllErrors = () => {
    setHasError({
      ...form,
      email: false,
      password: false,
    });
  };

  const handleRememberAccount = () => {
    if (form.remember) {
      localStorage.setItem("remember", true);
      localStorage.setItem("remember_user", form.email);
      localStorage.setItem("remember_user_password", form.password);
    } else {
      //setForm({ ...form, remember: false });
      localStorage.setItem("remember", false);
      localStorage.removeItem("remember_user");
      localStorage.removeItem("remember_user_password");
    }
  };

  useEffect(() => {
    const remember = localStorage.getItem("remember") === "true" ? true : false;
    if (remember) {
      const remember_user = localStorage.getItem("remember_user");
      const remember_user_password = localStorage.getItem(
        "remember_user_password"
      );
      setForm({
        email: remember_user,
        password: remember_user_password,
        remember: remember,
      });
    }
  }, []);

  if (currentUser.isLoggedIn) {
    return <Navigate to="/home" />;
  }

  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: "url(https://source.unsplash.com/random)",
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
            border="none"
            boxShadow="0 0 25px gray"
            borderRadius="3px"
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit}
              sx={{ p: 1.5 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                error={hasError.email}
                value={form.email}
                autoComplete="off"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                error={hasError.password}
                id="password"
                value={form.password}
                autoComplete="off"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
              <FormControlLabel
                control={
                  <Checkbox
                    onChange={(e) =>
                      setForm({ ...form, remember: e.target.checked })
                    }
                    value="remember"
                    color="primary"
                    checked={form.remember}
                  />
                }
                label="Remember me"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Sign In
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="#" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Copyright sx={{ mt: 5 }} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}
