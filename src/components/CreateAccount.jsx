/** @format */

import React from "react";
import Layout from "./Layout";
import Form from "./Form";
import Create from "./Create";

const CreateAccount = () => {
  return (
    <Layout>
      <div className="landing bg-mountain pt-5 pb-5 p-4">
        <div className="bg-white p-4 rounded">
          <Form />
          <div className="pt-5 d-flex justify-content-between text-color-dark-gray">
            <p>Privacy</p>
            <p>FAQ</p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default CreateAccount;
