import { useEffect, useState } from "react";
export default function useQuery(fn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  useEffect(() => {
    let on = true;
    setLoading(true);
    fn()
      .then((d) => on && setData(d))
      .catch((e) => on && setError(e))
      .finally(() => on && setLoading(false));
    return () => {
      on = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);
  return { data, loading, error, refetch: () => fn().then(setData) };
}
