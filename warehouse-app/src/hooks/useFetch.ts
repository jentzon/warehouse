import { useEffect, useState } from "react";
import { ApiPath } from "../domain/paths";

const useFetch = <T>(fetchUrl: ApiPath) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T[]>([]);
  const [error, setError] = useState<string>();

  useEffect(() => {
    setLoading(true);
    fetch(fetchUrl)
      .then((d) => d.json() as Promise<T[]>)
      .then(setResponse)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [setLoading, fetchUrl]);

  return { loading, response, error };
};

export default useFetch;
