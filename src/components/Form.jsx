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
    colors,
  } = useContext(StateContext);

  return (
    <form
      className=" position-relative ps-3 pe-3"
      onSubmit={(e) => {
        e.preventDefault();
        // handleRegister(userDetails);
        console.log("form submitted");
        // setPageIndex(pageIndex + 1);
        handlePageMoveForward();
      }}
    >
      <img
        style={{
          width: "20px",
          position: "absolute",
          left: "-1%",
          top: "15px",
        }}
        className={pageIndex === 0 ? "d-none" : "arrow-left"}
        src={arrowLeft}
        alt="arrow"
        onClick={() => {
          handlePageMoveBackword();
        }}
      />
      <h1 className="text-color-primary">{pageTitle[pageIndex].heading}</h1>
      <p>{pageTitle[pageIndex].detail}</p>
      <Progress />
      <CurPage />
      <button
        // disabled={pageIndex == 2 && colors.length < 2 ? false : true}
        // disabled={false}
        className="btn-p"
      >
        {pageTitle[pageIndex].buttonText}
      </button>
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
