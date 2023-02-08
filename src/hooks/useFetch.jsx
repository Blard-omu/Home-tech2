/** @format */

import { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (endpoint, method, body) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const baseURL = "https://home-tech.vercel.app/api/";

  useEffect(() => {
    if (method == "GET") {
      axios
        .get(`${baseURL}${endpoint}`)
        .then((res) => {
          console.log(res);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setLoading(false);
        });
    } else if (method == "POST") {
      axios
        .post(`${baseURL}${endpoint}`, body)
        .then((res) => {
          console.log(res);
          setData(res.data);
          setLoading(false);
        })
        .catch((err) => {
          console.log(err);
          setError(err);
          setLoading(false);
        });
    }

    // fetch(baseURL)
    //   .then((res) => res.json())
    //   .then((json) => {
    //     setData(json);
    //     console.log(json);
    //     setLoading(false);
    //   })
    //   .catch((err) => setError(err));
  }, []);
  return { data, error, loading };
};
