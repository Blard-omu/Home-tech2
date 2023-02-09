/** @format */
import React, { useContext } from "react";
import StateContext from "../context/states";

const Progress = () => {
  const { pageIndex } = useContext(StateContext);

  return (
    <div
      className={
        pageIndex == 1 || pageIndex == 5
          ? "form-progress pb-3 d-flex justify-content-around align-items-center d-none"
          : "form-progress pb-3 d-flex justify-content-around align-items-center"
      }
    >
      <small className={pageIndex == 0 ? "pt-2" : "pt-2 active"}>1</small>
      <small className={pageIndex >= 3 ? "pt-2 active" : "pt-2"}>2</small>
      <small className="pt-2">3</small>
    </div>
  );
};

export default Progress;
