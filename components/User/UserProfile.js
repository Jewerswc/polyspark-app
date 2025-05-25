import React, { useState } from 'react';
import styles from './UserProfile.module.css';
import ProfileTabs from './components/Tabs/ProfileTabs';
import ProfileSettings from './components/Settings/ProfileSettings';
import HistoryContent from './components/History/History';

export default function UserProfile() {
  const [activeTab, setActiveTab] = useState('profile');

  return (
    <div className={styles.container}>
      <ProfileTabs activeTab={activeTab} onTabClick={setActiveTab} />
      {activeTab === 'profile' ? <ProfileSettings /> : <HistoryContent />}
    </div>
  );
}