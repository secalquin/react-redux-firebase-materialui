import React, { useEffect, useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";

import { useDispatch, useSelector } from "react-redux";
import { LoginAction } from "../../redux/actions/user/loginAction";
import { auth, provider } from "../../config/firebase";
import NormalForm from "./normalForm";
import { Navigate } from "react-router-dom";
import GoogleForm from "./googleForm";

export default function Login() {
  const dispatch = useDispatch();
  const currentUser = useSelector((store) => store.user);
  const [form, setForm] = useState({
    email: "",
    password: "",
    remember: false,
  });

  const [step, setStep] = useState(0);

  const [hasError, setHasError] = useState({
    email: false,
    password: false,
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    cleanAllErrors();
    if (!form.email || !form.password) {
      return setHasError({
        ...form,
        email: !form.email ? true : false,
        password: !form.password ? true : false,
      });
    }
    handleRememberAccount(form);

    dispatch(LoginAction(form.email, form.password));
  };

  const handleClickGoogleLogin = async (event) => {
    auth
      .signInWithPopup(provider)
      .then(() => {
        if (auth.currentUser) {
          setForm({ ...form, email: auth.currentUser.email });
          setStep(1);
        }
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  const cleanAllErrors = () => {
    setHasError({
      ...form,
      email: false,
      password: false,
    });
  };

  const handleRememberAccount = ({ email, password }) => {
    if (form.remember) {
      localStorage.setItem("remember", true);
      localStorage.setItem("remember_user", email);
      localStorage.setItem("remember_user_password", password);
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
    <Grid container component="main" sx={{ height: "90vh" }}>
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
          {!step ? (
            <NormalForm
              handleSubmit={handleSubmit}
              hasError={hasError}
              setForm={setForm}
              form={form}
              handleClickGoogleLogin={handleClickGoogleLogin}
              setStep={setStep}
            />
          ) : (
            <GoogleForm
              handleSubmit={handleSubmit}
              hasError={hasError}
              setForm={setForm}
              form={form}
              setStep={setStep}
            />
          )}
        </Box>
      </Grid>
    </Grid>
  );
}
