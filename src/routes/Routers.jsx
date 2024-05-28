import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Signup from "../pages/Signup";
import Signin from "../pages/Signin";

const Routers = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Signin />} />
    </Routes>
  );
};

export default Routers;
