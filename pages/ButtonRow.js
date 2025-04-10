import React from 'react';
import styles from './ButtonRow.module.css';
import ActivityButton from './ActivityButton';
import TrendingButton from './TrendingButton';
import ShuffleButton from './ShuffleButton';
import ActionsButton from './ActionsButton';
import PersonasButton from './PersonasButton';

export default function ButtonRow() {
  return (
    <div className={styles.buttonRow}>
      <ActivityButton onClick={() => console.log('Activity button clicked')} />
      <TrendingButton onClick={() => console.log('Trending button clicked')} />
      <ShuffleButton onClick={() => console.log('Shuffle button clicked')} />
      <ActionsButton onClick={() => console.log('Icon button clicked')} />
      <PersonasButton onClick={() => console.log('Grid button clicked')} />
      {/* Add more buttons as desired */}
    </div>
  );
}
