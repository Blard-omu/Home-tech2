/** @format */

import React, { useState, useContext } from "react";
import StateContext from "../context/states";

const Create = () => {
  const { userDetails, setUserDetails, errorMessage, setErrorMessage } =
    useContext(StateContext);
  return (
    <div className="mb-3">
      <div className="d-flex flex-column gap-3">
        <div className="text-start">
          <input
            className="input-p ps-3"
            type="text"
            placeholder="Full name"
            onChange={(e) => {
              setErrorMessage({ ...errorMessage, fullName: "" });
              setUserDetails({ ...userDetails, fullName: e.target.value });
            }}
            value={userDetails.fullName}
          />
          <small
            className={errorMessage.fullName == "" ? "d-none" : "error-danger"}
          >
            {errorMessage.fullName}
          </small>
        </div>
        <div className="text-start">
          <input
            className="input-p ps-3"
            type="text"
            placeholder="Email Address"
            onChange={(e) => {
              setErrorMessage({ ...errorMessage, email: "" });
              setUserDetails({ ...userDetails, email: e.target.value });
            }}
            value={userDetails.email}
          />
          <small
            className={errorMessage.email == "" ? "d-none" : "error-danger"}
          >
            {errorMessage.email}
          </small>
        </div>
        <div className="text-start">
          <input
            className="input-p ps-3"
            type="password"
            placeholder="******"
            onChange={(e) => {
              setErrorMessage({ ...errorMessage, password: "" });
              setUserDetails({ ...userDetails, password: e.target.value });
            }}
            value={userDetails.password}
          />
          <small
            className={errorMessage.password == "" ? "d-none" : "error-danger"}
          >
            {errorMessage.password}
          </small>
        </div>
        <small>
          Already have an account
          <span className="text-color-primary ps-2 fw-bold">Sign In</span>
        </small>
      </div>
    </div>
  );
};

export default Create;
