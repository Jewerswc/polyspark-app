// src/components/FeedCardsGrid.jsx
import React, { useMemo } from 'react';
import FeedCardLayout from './../Feedcard/Feedcard';
import styles from './FeedCardGrid.module.css';
import feedCardsData from './../Feedcard/feedcards.json';
import { TRENDING, FILE, CATEGORIES } from './../constants/CategoryConstants';

export default function FeedCardsGrid({ activeCategory, searchQuery }) {
  const filteredAndSorted = useMemo(() => {
    let cards = [...feedCardsData];

    // 1) If Trending or File: show all in original order
    if (activeCategory === TRENDING || activeCategory === FILE) {
      // no-op
    }
    // 2) If New: sort by publishedAt desc
    else if (activeCategory === 'New') {
      cards.sort((a, b) => 
        new Date(b.publishedAt) - new Date(a.publishedAt)
      );
    }
    // 3) Otherwise: filter by tag
    else {
      cards = cards.filter(card =>
        card.tags?.includes(activeCategory)
      );
    }

    // 4) Then apply search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      cards = cards.filter(card =>
        card.title.toLowerCase().includes(q) ||
        card.description.toLowerCase().includes(q)
      );
    }

    return cards;
  }, [activeCategory, searchQuery]);

  if (filteredAndSorted.length === 0) {
  }

  return (
    <div className={styles.gridContainer}>
      {filteredAndSorted.map((card, idx) => (
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
