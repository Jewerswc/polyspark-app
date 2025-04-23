import React from 'react';
import styles from './ProfileTabs.module.css';

export default function ProfileTabs({ activeTab, onTabClick }) {
  return (
    <div className={styles.tabsContainer}>
      <button
        className={`${styles.tab} ${activeTab === 'profile' ? styles.active : ''}`}
        onClick={() => onTabClick('profile')}
      >
        Profile
      </button>
      <button
        className={`${styles.tab} ${activeTab === 'history' ? styles.active : ''}`}
        onClick={() => onTabClick('history')}
      >
        History
      </button>
    </div>
  );
}