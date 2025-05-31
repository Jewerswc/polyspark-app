import React from 'react';
import FeedCardLayout from '../../components/FeedCard/Feedcard';
import SkeletonFeedCard from './../../components/SkeletonFeedCard';
import styles from './FeedCardColumn.module.css';
import useArticles from './../../components/hooks/useArticles';

export default function FeedCardsColumn({ activeLabel, onImageClick }) {

  const { articles, loading } = useArticles({
    category: activeLabel,
  });

    if (loading) {
        return (
          <div className={styles.gridContainer}>
            {Array.from({ length: 6 }).map((_, i) => (
              <SkeletonFeedCard key={i} />
            ))}
          </div>
        );
      }
  if (!articles || articles.length === 0) {
    return <div>No results found.</div>;
  }

  let cards = [...articles];

  switch (activeLabel) {
    case 'New':
      cards.sort(
        (a, b) => new Date(b.publishedAt) - new Date(a.publishedAt)
      );
      break;

    case 'Top':
      cards.sort((a, b) => b.engagement - a.engagement);
      break;

    default:
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