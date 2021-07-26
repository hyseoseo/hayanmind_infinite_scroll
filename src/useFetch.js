import React, { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (query, page) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(flase);
  const [list, setList] = useState([]);

  useEffect(() => {
    const sendQuery = async () => {
      try {
        await setLoading(true);
        await setError(false);
        const response = await axios.get(url);
        await setList(prev => [...prev, ...response.data]);
        setLoading(false);
      } catch (error) {
        setError(error);
      }
    };
    sendQuery();
  }, [query, page]);

  return { loading, error, list };
};

export default useFetch;
