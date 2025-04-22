import React, { useState, useMemo } from 'react';
import ActivityResultRow from './ActivityResult';
import ActivityTitleButtonFrame from './ActivityTitleButtonFrame';
import styles from './ActivityResultList.module.css';
import activities from './activities.json';

export default function ActivityResultList() {
  // track filter selection
  const [filter, setFilter] = useState('None');

  // derive filtered activities
  const filteredActivities = useMemo(() => {
    switch (filter) {
      case 'Comments':
        return activities.filter(a => a.action.includes('Commented'));
      case 'Created By':
        return activities.filter(a => a.action.includes('Created an article'));
      case 'Likes':
        return activities.filter(a => a.action.includes('Liked'));
      default:
        return activities;
    }
  }, [filter]);

  return (
    <div className={styles.activityList}>
      {/* pass setFilter down to the frame */}
      <ActivityTitleButtonFrame onFilterSelect={setFilter} />

      {filteredActivities.map(({ id, image, title, action, timeAgo }) => (
        <ActivityResultRow
          key={id}
          imageSrc={image}
          title={title}
          actionText={action}
          timeAgo={timeAgo}
        />
      ))}
    </div>
  );
}