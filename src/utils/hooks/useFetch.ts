import { useEffect, useState } from "react";

interface FetchFunc<P, T> {
  (params?: P): Promise<T>;
}

interface UseFetchResult<T> {
  data: T | null | undefined;
  isLoading: boolean;
  error: Error | null;
}

export function useFetch<T, P>(fetchFunc: FetchFunc<P, T>, params?: P): UseFetchResult<T> {
  const [data, setData] = useState<T | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const stringParams = params ? new URLSearchParams(params).toString() : "";

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const res = await fetchFunc(params);
        setData(res);
      } catch (err) {
        setError(err as Error);
      } finally {
        setIsLoading(false);
      }
    })();
  }, [fetchFunc, stringParams]);

  return {
    data,
    isLoading,
    error,
  };
}