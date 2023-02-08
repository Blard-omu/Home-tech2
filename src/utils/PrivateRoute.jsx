/** @format */

import React, { useContext } from "react";
import { Outlet, Navigate } from "react-router-dom";
import StateContext from "../context/states";

const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(StateContext);
  console.log(user);
  return user ? <Outlet /> : <Navigate to="/" />;
};

export default PrivateRoute;
