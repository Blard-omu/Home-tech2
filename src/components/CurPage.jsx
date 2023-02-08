/** @format */

import React, { useState, useContext } from "react";
import Create from "./Create";
import Verify from "./Verify";
import StateContext from "../context/states";

const CurPage = () => {
  const { pageIndex } = useContext(StateContext);
  if (pageIndex == 0) {
    return <Create />;
  } else if (pageIndex == 1) {
    return <Verify />;
  } else {
    return;
  }
};

export default CurPage;
