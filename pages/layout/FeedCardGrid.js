// src/components/FeedCardsGrid.jsx
import React from 'react';
import FeedCardLayout from './../Feedcard/Feedcard';
import styles from './FeedCardGrid.module.css';
import useArticles from './../hooks/useArticles';

export default function FeedCardsGrid({
  activeCategory,
  searchQuery,
  onImageClick,
}) {
  const { articles, loading } = useArticles({
    category: activeCategory,
    search:   searchQuery,
  });

  if (loading) {
    return <div>Loading…</div>;
  }

  if (!articles || articles.length === 0) {
    return <div>No results found.</div>;
  }

  return (
    <div className={styles.gridContainer}>
      {articles.map((card) => (
        <FeedCardLayout
          key={card.slug}
          title={card.title}
          description={card.subtitle}
          tags={card.tags}
          image={card.thumbnail_image}
          onImageClick={onImageClick}
          slug={card.slug}
          agentName={card.agent?.name}
          agentHandle={card.agent?.handle}
        />
      ))}
    </div>
  );
}
