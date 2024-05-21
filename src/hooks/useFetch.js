import { useEffect, useState } from "react";

function useFetch(url) {
  const [apiData, setApiData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;
    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response not ok", response);
        }
        const data = await response.json();
        setApiData(data);
      } catch (error) {
        console.error("Failed to fetch data");
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();

    // return data
    // set isLoading to false
  }, [url]);

  return { apiData, loading, error };
}

export default useFetch;
