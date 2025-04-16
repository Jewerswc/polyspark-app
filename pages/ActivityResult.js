import React from 'react';
import styles from './ActivityResult.module.css';
import ActivityResultTitle from './ActivityResultTitle';
import ActivityResultAction from './ActivityResultAction';
import TimeAgo from './ActivityResultTime';

const ActivityResultRow = () => {
  return (
    <div className={styles.activityRow}>
      {/* Left: Image */}
      <img
        className={styles.activityImage}
        src="AlexDoe.png" // Replace with your actual image URL
        alt="Profile"
      />

      {/* Middle: Wrapped content */}
      <div className={styles.activityContent}>
        <div className={styles.componentWrapper}>
          <ActivityResultTitle />
        </div>
        <div className={styles.componentWrapper}>
          <ActivityResultAction />
        </div>
      </div>

      {/* Right: TimeAgo component */}
      <div className={styles.timeAgoWrapper}>
        <TimeAgo />
      </div>
    </div>
  );
};

export default ActivityResultRow;
