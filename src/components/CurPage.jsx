/** @format */

import React, { useState, useContext } from "react";
import Create from "./Create";
import Verify from "./Verify";
import ColorCombination from "./ColorCombination";
import StateContext from "../context/states";
import SelectImage from "./SelectImage";
import ImagePattern from "./ImagePattern";
import Congratulations from "./Congratulations";

const CurPage = () => {
  const { pageIndex } = useContext(StateContext);
  if (pageIndex == 0) {
    return <Create />;
  } else if (pageIndex == 1) {
    return <Verify />;
  } else if (pageIndex == 2) {
    return <ColorCombination />;
  } else if (pageIndex == 3) {
    return <SelectImage />;
  } else if (pageIndex == 4) {
    return <ImagePattern />;
  } else if (pageIndex == 5) {
    return <Congratulations />;
  } else {
    return;
  }
};

export default CurPage;
