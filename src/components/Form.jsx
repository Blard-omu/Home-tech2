/** @format */

import React, { useState, useContext } from "react";
import StateContext from "../context/states";
import CurPage from "./CurPage";
import Progress from "./Progress";

const Form = () => {
  const { setPageIndex, pageIndex, pageTitle, handlePageMoveForward } =
    useContext(StateContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // handleRegister(userDetails);
        console.log("form submitted");
        // setPageIndex(pageIndex + 1);
        handlePageMoveForward();
      }}
    >
      <h1 className="text-color-primary">{pageTitle[pageIndex].heading}</h1>
      <p>{pageTitle[pageIndex].detail}</p>
      <Progress />
      <CurPage />
      <button className="btn-p">Next</button>
    </form>
  );
};

export default Form;
