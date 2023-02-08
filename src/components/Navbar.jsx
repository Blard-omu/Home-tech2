/** @format */

import React from "react";
import HomeTech from "../assets/images/Ellipse 460.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <ul className="p-3 mb-0">
        <div>
          <Link
            to="/"
            className=" d-flex gap-1 align-items-center text-color-primary text-decoration-none "
          >
            <img src={HomeTech} alt="" />
            <li>HomeTech</li>
          </Link>
        </div>
        <li>About Us</li>
      </ul>
    </nav>
  );
};

export default Navbar;
