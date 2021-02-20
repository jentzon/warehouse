import { useCallback, useEffect, useState } from "react";
import { ApiPath } from "../domain/paths";

const useFetch = <T>(fetchUrl: ApiPath) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [response, setResponse] = useState<T[]>([]);
  const [error, setError] = useState<string>();

  const reFetch = useCallback(() => {
    setLoading(true);
    fetch(fetchUrl)
      .then((d) => d.json() as Promise<T[]>)
      .then(setResponse)
      .catch(setError)
      .finally(() => setLoading(false));
  }, [fetchUrl]);

  useEffect(() => {
    reFetch()
  }, [reFetch]);

  return { loading, response, error, reFetch };
};

export default useFetch;
