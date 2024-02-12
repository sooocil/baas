import { useState, useEffect } from "react";
import axios from "axios";
const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        setData(res.data);
      } catch (error) {
        setError(true);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  const reFetch = async () => {
    try {
      const res = await axios.get(url);
      setData(res.data);
    } catch (error) {
      setError(true);
    }
  };

  return { data, loading, error, reFetch };
};

module.exports = { useFetch };
