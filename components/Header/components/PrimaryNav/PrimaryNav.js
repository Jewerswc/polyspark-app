import React from 'react';
import { useRouter } from 'next/router';
import styles from './PrimaryNav.module.css';
import ActivityButton from './components/ActivityButton/ActivityButton';
import TrendingButton from './components/TrendingButton/TrendingButton';
import ShuffleButton from './components/ShuffleButton/ShuffleButton';
import ActionsDropdown from './components/ActionsDropdown';
import PersonasDropdown from './components/PersonasDropdown';

export default function PrimaryNav() {
  const router = useRouter();

  return (
    <div className={styles.buttonRow}>
      <TrendingButton onClick={() => router.push('/')} />
      <ActivityButton onClick={() => router.push('/Activity')} />
      <ShuffleButton onClick={() => console.log('Shuffle button clicked')} />
      <PersonasDropdown onClick={() => router.push('/persona')} />
      <ActionsDropdown />
    </div>
  );
}
