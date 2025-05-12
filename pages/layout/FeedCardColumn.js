import React from 'react';
import FeedCardLayout from './../Feedcard/Feedcard';
import styles from './FeedCardColumn.module.css';
import useArticles from './../hooks/useArticles';

export default function FeedCardsColumn({ activeLabel, onImageClick }) {

  const { articles, loading } = useArticles({
    category: activeLabel,
    // no search in a simple column view
  });

  // 2) loading & empty states
  if (loading) {
    return <div>Loading…</div>;
  }
  if (!articles || articles.length === 0) {
    return <div>No results found.</div>;
  }

  // 3) clone & sort/filter exactly like your old logic
  let cards = [...articles];

  switch (activeLabel) {
    case 'New':
      // sort *all* cards by publishedAt descending
      cards.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      break;

    case 'Top':
      // sort *all* cards by engagement descending
      cards.sort((a, b) => b.engagement - a.engagement);
      break;

    default:
      // for real tags: filter first, then sort by recency
      cards = cards
        .filter(c => c.tags.includes(activeLabel))
        .sort(
          (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
        );
      break;
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
