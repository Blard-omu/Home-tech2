/** @format */

import React from "react";
import wolf from "../assets/images/wolf.png";
import car from "../assets/images/car.png";
import bookShelf from "../assets/images/book-shelf.png";
import shoe from "../assets/images/shoe.png";
import bird from "../assets/images/bird.png";
import astronaut from "../assets/images/astronaut.png";
import gadgets from "../assets/images/gadgets.png";
import building from "../assets/images/building.png";
import people from "../assets/images/people.png";

const SelectImage = () => {
  const style = {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr",
    gap: '2%'
  };

  const imgStyle = {
    width: '100%'
  }
  return (
    <div style={style} className="pb-5">
      <img style={imgStyle} src={wolf} alt="" />
      <img style={imgStyle} src={car} alt="" />
      <img style={imgStyle} src={bookShelf} alt="" />
      <img style={imgStyle} src={shoe} alt="" />
      <img style={imgStyle} src={bird} alt="" />
      <img style={imgStyle} src={astronaut} alt="" />
      <img style={imgStyle} src={gadgets} alt="" />
      <img style={imgStyle} src={building} alt="" />
      <img style={imgStyle} src={people} alt="" />
    </div>
  );
};

export default SelectImage;