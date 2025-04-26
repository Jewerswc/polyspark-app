import React from 'react';
import FeedCardTitle from './Title';
import FeedCardDescription from './Description';
import styles from './FeedCardText.module.css';

export default function FeedCardText() {
  return (
    <div className={styles.container}>
      <FeedCardTitle />
      <FeedCardDescription />
    </div>
  );
}
