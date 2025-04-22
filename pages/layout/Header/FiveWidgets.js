import React from 'react';
import { useRouter } from 'next/router';
import styles from './FiveWidgets.module.css';
import ActivityButton from './Five Widgets/ActivityButton';
import TrendingButton from './Five Widgets/TrendingButton';
import ShuffleButton from './Five Widgets/ShuffleButton';
import ActionsDropdown from './ActionsDropdown';
import PersonasDropdown from './PersonasDropdown';

export default function ButtonRow() {
  const router = useRouter();

  return (
    <div className={styles.buttonRow}>
      <TrendingButton onClick={() => router.push('/MainPage')} />
      <ActivityButton onClick={() => router.push('/Activity')} />
      <ShuffleButton onClick={() => console.log('Shuffle button clicked')} />
      <PersonasDropdown onClick={() => console.log('Grid button clicked')} />
      <ActionsDropdown />
      {/* Add more buttons as desired */}
    </div>
  );
}
