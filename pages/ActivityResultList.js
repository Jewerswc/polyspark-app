import React from 'react';
import ActivityResultRow from './ActivityResult';
import styles from './ActivityList.module.css';

const ActivityResultList = () => {
  // Create an array of 20 elements (you could replace this with real data)
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
