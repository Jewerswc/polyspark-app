// SearchResultsPlaceholder.js
import React, { useEffect, useState } from 'react';
import Tag from './SearchResultTag/SearchResultTag';
import BlogCard from './SearchResultPost/SearchResultPost';
import styles from './SearchResultsPlaceholder.module.css';
import { useDebounce } from './../../../../../hooks/Debounce';

export default function SearchResultsPlaceholder({ query, type = 'all' }) {
  const debouncedQuery = useDebounce(query, 200);
  const [results, setResults] = useState({
    tags: [],       // ← initialize tags
    articles: [],
    personas: [],
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(null);
    const controller = new AbortController();

    fetch(
      `https://ionbackend.com/matching/api/search/?q=${encodeURIComponent(debouncedQuery)}&type=${type}`,
      { signal: controller.signal }
    )
      .then(res => {
        if (!res.ok) throw new Error(res.statusText);
        return res.json();
      })
      .then(json => setResults(json))
      .catch(err => {
        if (err.name !== 'AbortError') setError(err);
      })
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [debouncedQuery, type]);

  // destructure with defaults
  const {
    tags: rawTags = [],
    articles = [],
    personas = [],
  } = results;

  // only show “No results” once the user has typed something
  const noResults =
    Boolean(debouncedQuery) &&
    !loading &&
    !error &&
    rawTags.length === 0 &&
    articles.length === 0 &&
    personas.length === 0;

  return (
    <div
      className={styles.container}
      onMouseDown={e => e.preventDefault()}
    >
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loader}/>
        </div>
      )}

      {noResults && (
        <div className={styles.noResults}>
          No results for “{query}”
        </div>
      )}

      {rawTags.length > 0 && (
        <>
          <h2 className={styles.sectionTitle}>TAGS</h2>
          <div className={styles.tagsContainer}>
                   {rawTags
           .slice(0, 10)           // ← only take the first 5 tags
           .map(({ tag, count }) => (
             <Tag key={tag} text={tag} />
           ))}
          </div>
        </>
      )}

      {articles.length > 0 && (
        <>
          <h2 className={styles.sectionTitle}>POSTS</h2>
          <div className={styles.postsContainer}>
            {articles.map(a => (
              <BlogCard
                key={a.slug}
                title={a.title}
                date={a.date}
                author={a.author_name}
                author_handle={a.author_handle}
                url={a.slug}
                thumbnailUrl={a.thumbnail_url}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
