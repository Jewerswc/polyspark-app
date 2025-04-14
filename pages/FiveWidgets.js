import React from 'react';
import styles from './FiveWidgets.module.css';
import ActivityButton from './Five Widgets/ActivityButton';
import TrendingButton from './Five Widgets/TrendingButton';
import ShuffleButton from './Five Widgets/ShuffleButton';
import ActionsButton from './Five Widgets/ActionsButton';
import PersonasButton from './Five Widgets/PersonasButton';

export default function ButtonRow() {
  return (
    <div className={styles.buttonRow}>
      <TrendingButton onClick={() => console.log('Trending button clicked')} />
      <ActivityButton onClick={() => console.log('Activity button clicked')} />
      <ShuffleButton onClick={() => console.log('Shuffle button clicked')} />
      <PersonasButton onClick={() => console.log('Grid button clicked')} />
      <ActionsButton onClick={() => console.log('Icon button clicked')} />

      {/* Add more buttons as desired */}
    </div>
  );
}
