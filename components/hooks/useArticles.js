// src/hooks/useArticles.js
import { useState, useEffect } from "react";

export default function useArticles({ category, search }) {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    setLoading(true);
    const params = new URLSearchParams();
    if (category) params.set("category", category);
    if (search)   params.set("search",   search);
    fetch(`https://ionbackend.com/matching/api/articles/?${params.toString()}`)
      .then(res => res.json())
      .then(data => {
        // DRF paginates by default under `.results`
        setArticles(data.results ?? data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [category, search]);

  return { articles, loading };
}
