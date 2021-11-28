import {
  Button,
  Checkbox,
  FormControlLabel,
  Grid,
  Link,
  TextField,
} from "@mui/material";
import { Box } from "@mui/system";
import { ButtonGmail } from "../../components/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { Link as LinkRedirect } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";

import Copyright from "../../components/Copyright";

function NormalForm({
  handleSubmit,
  hasError,
  setForm,
  form,
  handleClickGoogleLogin,
}) {
  return (
    <>
      <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ p: 1.5 }}>
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
              onChange={(e) => setForm({ ...form, remember: e.target.checked })}
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
        <ButtonGmail
          type="button"
          fullWidth
          variant="contained"
          sx={{ mt: 0, mb: 2 }}
          onClick={handleClickGoogleLogin}
        >
          Sign In With <GoogleIcon sx={{ ml: "5px" }} />
        </ButtonGmail>
        <Grid container>
          <Grid item xs>
            <Link
              component={LinkRedirect}
              to="/forgot-password"
              variant="body2"
            >
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link component={LinkRedirect} to="/signup" variant="body2">
              {"Don't have an account? Sign Up"}
            </Link>
          </Grid>
        </Grid>
        <Copyright sx={{ mt: 5 }} />
      </Box>
    </>
  );
}

export default NormalForm;
