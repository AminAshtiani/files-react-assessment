import { useState, useEffect, useRef } from "react";

type UseApiProps = {
  url: string;
  refGuard?: boolean;
};
type UseApiReturn<T> = {
  data: T | null;
  error: Error | null;
  loading: boolean;
};

export function useApi<T>(props: UseApiProps): UseApiReturn<T> {
  const { url, refGuard = false } = props;
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState(false);
  const hasFetchedRef = useRef(false);

  const fetchData = async () => {
    try {
      const response = await fetch(url);
      const { items } = await response.json();
      setData(items as T);
    } catch (error) {
      setError(error as Error);
    }
    finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (refGuard && hasFetchedRef.current) {
      return;
    }
    
    setLoading(true);
    fetchData();
    
    if (refGuard) {
      hasFetchedRef.current = true;
    }
  }, [url, refGuard]);

  return { data, error, loading };
}