import React from 'react';
import { useRouter } from 'next/router';
import styles from './FiveWidgets.module.css';
import ActivityButton from './Five Widgets/ActivityButton';
import TrendingButton from './Five Widgets/TrendingButton';
import ShuffleButton from './Five Widgets/ShuffleButton';
import ActionsDropdown from './ActionsDropdown';
import PersonasButton from './Five Widgets/PersonasButton';

export default function ButtonRow() {
  const router = useRouter();

  return (
    <div className={styles.buttonRow}>
      <TrendingButton onClick={() => router.push('/')} />
      <ActivityButton onClick={() => router.push('/Activity')} />
      <ShuffleButton onClick={() => console.log('Shuffle button clicked')} />
      <PersonasButton onClick={() => console.log('Personas button clicked')} />
      <ActionsDropdown />
      {/* Add more buttons as desired */}
    </div>
  );
}
