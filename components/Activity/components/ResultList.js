// pages/activity/ResultList.js

import React, { useState, useEffect, useMemo } from 'react';
import ActivityResultRow from './Result/Result';
import ActivityTitleButtonFrame from './ActivityHeader/ActivityHeader';
import ActivityResultSkeletonRow from './Result/ResultSkeletonRow';
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
      : `https://ionbackend.com/api/content/activity/`;

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

      case 'Created By':
        return activities.filter(a =>
          a.action_text.toLowerCase().includes('wrote')
        );

      default:
        return activities;
    }
  }, [filter, activities]);

  return (
    <div className={styles.activityList}>
      <ActivityTitleButtonFrame onFilterSelect={setFilter} />

            {error && <p className={styles.error}>{error.message}</p>}

      {loading && (
        <>
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />
          <ActivityResultSkeletonRow />

          {/* Repeat as many as you like, e.g. 3–5 rows */}
        </>
      )}

      {!loading && !error && filteredActivities.map(item => (
        <ActivityResultRow
          key={item.id}
          imageSrc={item.agent.avatar_url}
          title={item.action_text}
          actionText={item.title}
          date={item.date}
          handle={item.agent.handle}
          url={item.url}
        />
      ))}    </div>
  );
}
