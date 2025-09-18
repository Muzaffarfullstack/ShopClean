import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const req = await fetch(url);
        if (!req.ok) throw new Error(req.statusText);
        const data = await req.json();
        setData(data);
        setIsLoading(false);
      } catch (err) {
        setError(err);
        console.log(err.message);
        setIsLoading(false);
      }
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export { useFetch };
