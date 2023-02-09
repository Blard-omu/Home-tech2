/** @format */

import React, { useRef, useState, useContext } from "react";
import StateContext from "../context/states";
import blue from "../assets/images/blue.png";
import orange from "../assets/images/orange.png";
import pink from "../assets/images/pink.png";

const ColorCombination = () => {
  const [img1, setImg1] = useState(false);
  const [img2, setImg2] = useState(false);
  const [img3, setImg3] = useState(false);
  const { colors, setColors, pageIndex, setPageIndex } =
    useContext(StateContext);

  return (
    <div className="d-flex justify-content-around pt-3 pb-5">
      <img
        className={img1 ? "colors active" : "colors"}
        onClick={() => {
          setImg1(true);
          if (colors.length > 2) {
          } else {
            setColors([...colors, "#115FDB"]);
          }
        }}
        src={blue}
        alt=""
      />
      <img
        className={img2 ? "colors active" : "colors"}
        onClick={() => {
          setImg2(true);
          if (colors.length > 2) {
          } else {
            setColors([...colors, "#F65B2B"]);
          }
        }}
        src={orange}
        alt=""
      />
      <img
        className={img3 ? "colors active" : "colors"}
        onClick={() => {
          setImg3(true);
          if (colors.length > 2) {
          } else {
            setColors([...colors, "#E5017C"]);
          }

          console.log(colors);
        }}
        src={pink}
        alt=""
      />
    </div>
  );
};

export default ColorCombination;
