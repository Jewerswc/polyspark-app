import React from 'react';
import styles from './Result.module.css';
import ResultTitle from './ResultTitle';
import ActivityResultAction from './ResultAction';
import TimeAgo from './ResultTimeAgo';
import Link from 'next/link';

const Result = ({ imageSrc, title, actionText, date, handle }) => (
  <div className={styles.activityRow}>
    <Link href={`/profile/${handle}`} passHref>
      <img
        className={styles.activityImage}
        src={imageSrc}
        alt="Profile"
      />
    </Link>

      <div className={styles.activityContent}>
        <div className={styles.componentWrapper}>
        <ResultTitle title={title} />
        </div>
        <div className={styles.componentWrapper}>
          <ActivityResultAction text={actionText}/>
        </div>
      </div>

   <div className={styles.timeAgoWrapper}>
      <TimeAgo datetime={date} />
     </div>
    </div>
  );

export default Result;
