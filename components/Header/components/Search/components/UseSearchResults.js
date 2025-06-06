// src/hooks/useSearchResults.js
import { useState, useEffect } from 'react';
import { useDebounce } from './../../../../hooks/Debounce';

export default function useSearchResults(query, type = 'all') {
  const debouncedQuery = useDebounce(query, 200);
  const [results, setResults] = useState({
    tags: [],
    articles: [],
    personas: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // If the debouncedQuery is empty, you might choose to treat it as “no fetch”
    // or hit the “default” branch of your SearchAPIView (which returns top tags, recent articles, recent agents).
    // Here we’ll always hit it—your API already checks for empty q.
    setLoading(true);
    setError(null);

    const controller = new AbortController();
    const encodedQ = encodeURIComponent(debouncedQuery.trim());
    const url = `https://ionbackend.com/matching/api/search/?q=${encodedQ}&type=${type}`;

    fetch(url, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then((json) => {
        // Ensure we always have arrays, even if the backend doesn’t send them:
        setResults({
          tags: Array.isArray(json.tags) ? json.tags : [],
          articles: Array.isArray(json.articles) ? json.articles : [],
          personas: Array.isArray(json.personas) ? json.personas : [],
        });
      })
      .catch((err) => {
        if (err.name !== 'AbortError') {
          setError(err);
          setResults({ tags: [], articles: [], personas: [] });
        }
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [debouncedQuery, type]);

  return { results, loading, error };
}
