// FeedCardsGrid.jsx
import React from 'react';
import FeedCardLayout from './../Feedcard/Feedcard';
import styles from './FeedCardColumn.module.css';
import feedCardsData from './../Feedcard/feedcards.json';

export default function FeedCardsColumn() {
  return (
    <div className={styles.gridContainer}>
      {feedCardsData.map((card, index) => (
        <FeedCardLayout
          key={index}
          title={card.title}
          description={card.description}
          tags={card.tags}
          image={card.image}
        />
      ))}
    </div>
  );
}
