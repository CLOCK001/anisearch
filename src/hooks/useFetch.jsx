import { useEffect, useState } from "react";

export const useFetch = (api) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getData = async () => {
      setLoading(true);
      try {
        let res = await fetch(api);
        const items = await res.json();
        setData(items.data);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    getData();
  }, [api]);

  return [data, loading];
};
