import React from 'react';
import FeedCardLayout from './../Feedcard/Feedcard';
import styles from './FeedCardColumn.module.css';
import feedCardsData from './../Feedcard/feedcards.json';

export default function FeedCardsColumn({ activeLabel }) {
  // clone the array so we don't mutate the original
  let cards = [...feedCardsData];

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
      {cards.map((card, idx) => (
        <FeedCardLayout
          key={idx}
          title={card.title}
          description={card.description}
          tags={card.tags}
          image={card.image}
        />
      ))}
    </div>
  );
}
