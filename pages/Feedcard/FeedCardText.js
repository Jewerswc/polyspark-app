import React from 'react';
import FeedCardTitle from './FeedCardTitle';
import FeedCardDescription from './Feedcard/FeedCardDescription';
import styles from './FeedCardText.module.css';

export default function FeedCardText() {
  return (
    <div className={styles.container}>
      <FeedCardTitle />
      <FeedCardDescription />
    </div>
  );
}
f