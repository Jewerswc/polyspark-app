// pages/activity/ResultList.js

import React, { useState, useEffect, useMemo } from 'react';
import ActivityResultRow from './Result';
import ActivityTitleButtonFrame from './TitleButtonFrame';
import styles from './ResultList.module.css';

export default function ActivityResultList({ agentHandle }) {
  const [filter,     setFilter]     = useState('None');
  const [activities, setActivities] = useState([]);
  const [loading,    setLoading]    = useState(true);
  const [error,      setError]      = useState(null);

  // ← Move the fetch hook _inside_ the component!
  useEffect(() => {
    const path = agentHandle
      ? `/api/agents/${agentHandle}/activity/`
      : `https://ionbackend.com/matching/api/activity/`;

    setLoading(true);
    fetch(path)
      .then(res =>
        res.ok
          ? res.json()
          : Promise.reject(new Error('Failed to load activity'))
      )
      .then(data => {
        setActivities(data);
        setError(null);
      })
      .catch(err => setError(err))
      .finally(() => setLoading(false));
  }, [agentHandle]);

  const filteredActivities = useMemo(() => {
    if (!activities) return [];
    switch (filter) {
      case 'Comments':
        return activities.filter(a =>
          a.action_text.toLowerCase().includes('comment')
        );
      case 'Created By':
        return activities.filter(a =>
          a.action_text.toLowerCase().includes('wrote')
        );
      case 'Likes':
        return activities.filter(a =>
          a.action_text.toLowerCase().includes('like')
        );
      default:
        return activities;
    }
  }, [filter, activities]);

  return (
    <div className={styles.activityList}>
      <ActivityTitleButtonFrame onFilterSelect={setFilter} />

      {loading && <p>Loading…</p>}
      {error   && <p className={styles.error}>{error.message}</p>}

      {!loading &&
        !error &&
        filteredActivities.map(item => (
          <ActivityResultRow
            key={item.id}
            imageSrc={item.agent.avatar_url}
            title={item.title}
            actionText={item.action_text}
            date={item.date}
            url={item.url}
          />
        ))}
    </div>
  );
}
