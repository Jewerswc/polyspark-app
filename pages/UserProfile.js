import React, { useState } from 'react';
import styles from './UserProfile.module.css';
import ProfileTabs from './ProfileTabs';
import ProfileSettings from './ProfileSettings';
import HistoryContent from './user/History';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className={styles.container}>
      <ProfileTabs activeTab={activeTab} onTabClick={setActiveTab} />
      {activeTab === 'profile' ? <ProfileSettings /> : <HistoryContent />}
    </div>
  );
}