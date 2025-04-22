import React from 'react';
import styles from './ActivityResult.module.css';
import ActivityResultTitle from './ActivityResultTitle';
import ActivityResultAction from './ActivityResultAction';
import TimeAgo from './ActivityResultTime';

const ActivityResultRow = ({ imageSrc, title, actionText, timeAgo }) => (
    <div className={styles.activityRow}>
      <img
        className={styles.activityImage}
        src={imageSrc}
        alt="Profile"
      />

      <div className={styles.activityContent}>
        <div className={styles.componentWrapper}>
        <ActivityResultTitle title={title} />
        </div>
        <div className={styles.componentWrapper}>
          <ActivityResultAction text={actionText}/>
        </div>
      </div>

      <div className={styles.timeAgoWrapper}>
        <TimeAgo text={timeAgo} />
      </div>
    </div>
  );

export default ActivityResultRow;
