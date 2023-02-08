/** @format */

import React from "react";
import { Link } from "react-router-dom";
import "../styles/style.css";
import Layout from "./Layout";

const LandingPage = () => {
  return (
    <Layout>
      <div className="landing bg-mountain pt-5 pb-5 p-4">
        <div className="bg-white p-4 rounded">
          <h1 className="text-color-primary">Welcome to HomeTech</h1>
          <p className="text-color-gray">
            We protect your credentials from any form of shoulder surfing
            attacks
          </p>
          <div className="d-flex flex-column gap-3 ">
            <Link to="/create" className="btn-p">
              Register
            </Link>
            <Link to="#" className="btn-s">
              Sign In
            </Link>
          </div>
          <div className="pt-5 d-flex justify-content-between text-color-dark-gray">
            <p>Privacy</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default LandingPage;
