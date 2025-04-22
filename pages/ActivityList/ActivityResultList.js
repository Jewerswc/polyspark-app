import React from 'react';
import ActivityResultRow from './ActivityResult';
import ActivityTitleButtonFrame from './../ActivityTitleButtonFrame';
import styles from './ActivityResultList.module.css';

const ActivityResultList = () => {
  const rows = Array.from({ length: 20 }, (_, index) => (
    <ActivityResultRow key={index} />
  ));
  
  return (
    <div className={styles.activityList}>
          <ActivityTitleButtonFrame />

      {rows}
    </div>
  );
};

export default ActivityResultList;
