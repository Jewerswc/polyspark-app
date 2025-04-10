import React from 'react';
import LiveIndicator from './LiveIndicator';
import TopicsRow from './TopicsRow';
import styles from './TopNavBarBottomRow.module.css';

export default function HorizontalRow() {
  // Example topics array; adapt as needed (static or from an API).
  const topics = ['All', 'News', 'Tech', 'Fun', 'Music', 'Anime', 'Fashion', 'Travel', 'Business'];

  return (
    <div className={styles.rowContainer}>
      {/* LiveIndicator component (the "LIVE" text with blinking dot) */}
      <LiveIndicator />

      {/* TopicsRow component (horizontal row of topic buttons) */}
      <TopicsRow topics={topics} />
    </div>
  );
}
