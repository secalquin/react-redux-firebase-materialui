import {
  Avatar,
  Button,
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

const SignUp = () => {
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
            Sign Up
          </Typography>
          <Box component="form" noValidate sx={{ mt: 3, p: 1 }}>
            <TextField
              required
              fullWidth
              name="name"
              label="Name"
              id="name"
              autoComplete="off"
            />
            <TextField
              sx={{ mt: 1 }}
              required
              fullWidth
              name="email"
              label="Email"
              id="email"
              autoComplete="off"
            />
            <TextField
              sx={{ mt: 1 }}
              required
              fullWidth
              name="password"
              label="Password"
              id="password"
              autoComplete="off"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Reset Password
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

export default SignUp;
