import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Home from "./pages/Home";
import ForgotPassword from "./pages/ForgotPassword";
import SignUp from "./pages/SignUp";

function App() {
  const stateUser = useSelector((state) => state.user);

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Login />} />
        <Route
          exact
          path="/home"
          element={!stateUser.isLoggedIn ? <Navigate to={"/"} /> : <Home />}
        ></Route>
        <Route
          exact
          path="/forgot-password"
          element={!stateUser.isLoggedIn ? <ForgotPassword /> : <Home />}
        ></Route>
        <Route
          exact
          path="/signup"
          element={!stateUser.isLoggedIn ? <SignUp /> : <Home />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
