/** @format */

import React, { useState, useContext } from "react";
import StateContext from "../context/states";
import CurPage from "./CurPage";
import Progress from "./Progress";
import arrowLeft from "../assets/icons/arrow-left.png";

const Form = () => {
  const {
    setPageIndex,
    pageIndex,
    pageTitle,
    handlePageMoveForward,
    handlePageMoveBackword,
    resetColors,
  } = useContext(StateContext);

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
      <h1 className="text-color-primary position-relative">
        <img
          style={{
            width: "30px",
            position: "absolute",
            left: "10px",
            top: "5px",
          }}
          className={pageIndex === 0 ? "d-none" : "arrow-left"}
          src={arrowLeft}
          alt="arrow"
          onClick={() => {
            handlePageMoveBackword();
          }}
        />
        {pageTitle[pageIndex].heading}
      </h1>
      <p>{pageTitle[pageIndex].detail}</p>
      <Progress />
      <CurPage />
      <button className="btn-p">{pageTitle[pageIndex].buttonText}</button>
      <button
        onClick={() => {
          resetColors();
        }}
        className={pageIndex == 2 ? "btn-s" : "d-none"}
        style={{ border: "none" }}
      >
        Reset
      </button>
    </form>
  );
};

export default Form;
