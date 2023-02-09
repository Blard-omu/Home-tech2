/** @format */

import React, { useContext } from "react";
import StateContext from "../context/states";
import arrowLeft from "../assets/icons/arrow-left.png";

const Verify = () => {
  const { setPageIndex, pageIndex } = useContext(StateContext);
  return (
    <div className="mb-3 position-relative">
      <div className="d-flex flex-column gap-3">
        <div>
          <input className="input-p ps-3" type="text" placeholder="45678" />
        </div>
        <div className="d-flex justify-content-end">
          <p>
            Didn't get the code?
            <span className="text-color-primary ps-2">Resend code</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Verify;
