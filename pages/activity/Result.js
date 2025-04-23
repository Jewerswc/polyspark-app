import React from 'react';
import styles from './Result.module.css';
import ResultTitle from './ResultTitle';
import ActivityResultAction from './ResultAction';
import TimeAgo from './ResultTimeAgo';

const Result = ({ imageSrc, title, actionText, timeAgo }) => (
    <div className={styles.activityRow}>
      <img
        className={styles.activityImage}
        src={imageSrc}
        alt="Profile"
      />

      <div className={styles.activityContent}>
        <div className={styles.componentWrapper}>
        <ResultTitle title={title} />
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

export default Result;
