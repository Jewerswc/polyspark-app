import React from 'react';
import ActivityResultRow from './ActivityResult';
import styles from './ActivityResultList.module.css';

const ActivityResultList = () => {
  const rows = Array.from({ length: 20 }, (_, index) => (
    <ActivityResultRow key={index} />
  ));
  
  return (
    <div className={styles.activityList}>
      {rows}
    </div>
  );
};

export default ActivityResultList;
