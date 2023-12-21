import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = () => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw Error("Error! Couldn't fetch the data")
        }
        return response.json();
      })
      .then(data => {
        setData(data);
        setIsPending(false);
        setError(null);
      })
      .catch(err => {
        setError(err.message);
        setIsPending(false);
      })
  }

  useEffect(fetchData, [url]);

  return { data, isPending, error };
}
 
export default useFetch;