import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import Login from "./pages/Login";
import Home from "./pages/Home";
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
      </Routes>
    </BrowserRouter>
  );
}

export default App;
