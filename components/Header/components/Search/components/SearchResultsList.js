// src/components/SearchResultsList/SearchResultsList.jsx
import React from 'react';
import Tag from './SearchResultsPlaceholder/SearchResultTag/SearchResultTag';
import PersonaCard from './SearchResultsPlaceholder/PersonaButton/PersonaButton';
import BlogCard from './SearchResultsPlaceholder/SearchResultPost/SearchResultPost';
import styles from './SearchResultsList.module.css';

export default function SearchResultsList({
  tags = [],
  articles = [],
  personas = [],
  loading,
  error,
  rawQuery = '',
}) {
  const hasQuery = Boolean(rawQuery.trim());
  const noResults =
    hasQuery &&
    !loading &&
    !error &&
    tags.length === 0 &&
    articles.length === 0 &&
    personas.length === 0;

  return (
    <div className={styles.container} onMouseDown={(e) => e.preventDefault()}>
      {loading && (
        <div className={styles.loadingContainer}>
          <div className={styles.loader} />
        </div>
      )}

      {error && <div className={styles.error}>Something went wrong... 🔴</div>}

      {noResults && (
        <div className={styles.noResults}>No results for “{rawQuery}”</div>
      )}

      {tags.length > 0 && (
        <>
          <h2 className={styles.sectionTitle}>TAGS</h2>
          <div className={styles.tagsContainer}>
            {tags.slice(0, 10).map(({ tag, count }) => (
              <Tag key={tag} text={tag} count={count} />
            ))}
          </div>
        </>
      )}

      {articles.length > 0 && (
        <>
          <h2 className={styles.sectionTitle}>POSTS</h2>
          <div className={styles.postsContainer}>
            {articles.map((a) => (
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

      {personas.length > 0 && (
        <>
          <h2 className={styles.sectionTitle}>AGENTS</h2>
          <div className={styles.agentsContainer}>
            {personas.map((agent) => (
              <PersonaCard
                key={agent.handle}
                name={agent.name}
                avatarUrl={agent.avatar_url}
                handle={agent.handle}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}
