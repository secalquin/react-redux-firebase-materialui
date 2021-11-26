import {
  Avatar,
  Button,
  CircularProgress,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Link as LinkRedirect } from "react-router-dom";
import { Box } from "@mui/system";
import PasswordIcon from "@mui/icons-material/Password";
import Copyright from "../../components/Copyright";
import { useState } from "react";

const ForgotPassword = () => {
  const [loading, setLoading] = useState({
    isloading: false,
    message: "Reset Password",
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setLoading({
      ...loading,
      isloading: true,
      message: "Loading...",
    });

    setTimeout(() => {
      setLoading({
        isloading: false,
        message: "Reset Password",
      });
    }, 2000);
  };

  return (
    <Grid
      container
      component="main"
      sx={{
        width: "100%",
        height: "90vh",
        display: "flex",
        alignContent: "center",
        justifyContent: "center",
      }}
    >
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 3,
            mx: 3,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          border="none"
          boxShadow="0 0 25px gray"
          borderRadius="3px"
        >
          <Avatar sx={{ m: 2, bgcolor: "main" }}>
            <PasswordIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Forgot Password
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 3, p: 1 }}
          >
            <TextField
              required
              fullWidth
              name="email"
              label="Email"
              id="password"
              autoComplete="off"
            />
            <Button
              disabled={loading.isloading ?? false}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {loading.message}
              {loading.isloading && <CircularProgress size={20} />}
            </Button>
            <Grid container>
              <Grid item xs>
                <Link component={LinkRedirect} to="/" variant="button">
                  Back
                </Link>
              </Grid>
            </Grid>
            <Copyright sx={{ mt: 5, mb: 5 }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default ForgotPassword;
