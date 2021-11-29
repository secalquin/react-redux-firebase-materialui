import { Avatar, Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { ButtonGmail } from "../../components/Button";
import { auth } from "../../config/firebase";

function GoogleForm({ handleSubmit, setForm, hasError, form, setStep }) {
  const handleLogout = async (event) => {
    await auth
      .signOut()
      .then(() => {
        setStep(0);
        return setForm({
          email: "",
          password: "",
          remember: false,
        });
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Avatar
        src={auth.currentUser.photoURL}
        sx={{ m: 1, bgcolor: "secondary.main" }}
      />
      <Typography component="h1" variant="h6">
        Welcome, {auth.currentUser.displayName}
      </Typography>
      <Box component="form" noValidate onSubmit={handleSubmit} sx={{ p: 1.5 }}>
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
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
        <ButtonGmail
          fullWidth
          variant="contained"
          sx={{ mt: 0, mb: 1 }}
          onClick={handleLogout}
        >
          Logout
        </ButtonGmail>
      </Box>
    </>
  );
}

export default GoogleForm;
