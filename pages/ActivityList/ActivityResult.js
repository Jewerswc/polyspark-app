import React from 'react';
import styles from './ActivityResult.module.css';
import ActivityResultTitle from './ActivityResultTitle';
import ActivityResultAction from './ActivityResultAction';
import TimeAgo from './ActivityResultTime';

const ActivityResultRow = () => {
  return (
    <div className={styles.activityRow}>
      <img
        className={styles.activityImage}
        src="./Images/AlexDoe.png" 
        alt="Profile"
      />

      <div className={styles.activityContent}>
        <div className={styles.componentWrapper}>
          <ActivityResultTitle />
        </div>
        <div className={styles.componentWrapper}>
          <ActivityResultAction />
        </div>
      </div>

      <div className={styles.timeAgoWrapper}>
        <TimeAgo />
      </div>
    </div>
  );
};

export default ActivityResultRow;
