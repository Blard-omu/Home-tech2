/** @format */

import { createContext, useRef, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useFetch } from "../hooks/useFetch";
import axios from "axios";

const StateContext = createContext();

export default StateContext;

export const StateProvider = ({ children }) => {

  const [user, setUser] = useState(null);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [colors, setColors] = useState([]);
  const [userDetails, setUserDetails] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const [pageIndex, setPageIndex] = useState(0);
  const pageTitle = [
    {
      heading: "Create an Account",
      detail: "Fill in your details below to create an account with us",
      buttonText: "Next",
    },
    {
      heading: "Verify Your Email",
      detail:
        "Enter the code sent to salihuahmedrufai@gmail.com to verify your email address",
      buttonText: "Verify",
    },
    {
      heading: "Select Your Color Combination",
      detail: "Please select the colors below according to your choice",
      buttonText: "Next",
    },
    {
      heading: "Select Any Image Below",
      detail: "Please select any image below to generate a pattern from it",
      buttonText: "Next",
    },
    {
      heading: "Select Your Image Pattern",
      detail:
        "Please select three iamge Sequence to complete your registration",
      buttonText: "Submit",
    },
    {
      heading: "Congratulations",
      detail: "Your account has been created successfully",
      buttonText: "Goto Log In",
    },
  ];

  const resetColors = () => {
    setColors([]);
    console.log(colors);
  };

  // Auth Handling

  const handleRegister = async (userInfo) => {
    axios
      .post("https://home-tech.vercel.app/api/register", userInfo)
      .then((res) => {
        console.log(res);
        setData(res.data);
        if (res.data.success == true) {
          setPageIndex(pageIndex + 1);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setError(err);
        setLoading(false);
      });

    return { data, error, loading };
  };

  // Form Handling
  const handlePageMoveForward = () => {
    setPageIndex(pageIndex + 1);
    console.log(pageIndex);

    // if (pageIndex == 2) {
    //   return;
    // } else {
    //   if (
    //     userDetails.fullName == "" ||
    //     userDetails.email == "" ||
    //     userDetails.password == ""
    //   ) {
    //     if (userDetails.fullName == "") {
    //       setErrorMessage({
    //         ...errorMessage,
    //         fullName: "Name is required!",
    //       });
    //     } else if (userDetails.email == "") {
    //       setErrorMessage({
    //         ...errorMessage,
    //         email: "Email is required!",
    //       });
    //     } else if (userDetails.password == "") {
    //       setErrorMessage({
    //         ...errorMessage,
    //         password: "Enter your password",
    //       });
    //     }
    //   } else {
    //     // console.log(pageIndex);
    //     console.log(userDetails);
    //     if (data == null) {
    //       handleRegister(userDetails);
    //     } else {
    //       setPageIndex(pageIndex + 1);
    //     }
    //   }
    // }
  };

  const handlePageMoveBackword = () => {
    if (pageIndex == 0) {
      return;
    } else {
      setPageIndex(pageIndex - 1);
    }
  };

  let stateData = {
    user,
    handleRegister,
    pageIndex,
    setPageIndex,
    pageTitle,
    userDetails,
    setUserDetails,
    handlePageMoveBackword,
    handlePageMoveForward,
    errorMessage,
    setErrorMessage,
    colors,
    setColors,
    resetColors,
  };

  return (
    <StateContext.Provider value={stateData}>{children}</StateContext.Provider>
  );
};
