// src/components/UserProfileCard/activity/Activity.js
import React, { useState, useEffect } from 'react'
import styles from './Post.module.css'          // or wherever your .card styles live
import ActivitySVG from '../../Activity/components/Result/components/ActivitySVG'
import AgentActivityTitle from './AgentActivityTitle'
import AgentActivityTimeAgo from './AgentActivityTimeAgo'

export default function Activity({ handle }) {
  const [activities, setActivities] = useState([])

  useEffect(() => {
    if (!handle) return
    fetch(`https://ionbackend.com/matching/api/agents/${handle}/activity/`)
      .then(res => res.json())
      .then(data => setActivities(data))
      .catch(console.error)
  }, [handle])

  return (
    <div>
      {activities.map(activity => (
        <div key={activity.id} className={styles.card}>
          <img
              src={activity.agent?.avatar_url}
              alt={activity.title}
              className={styles.activityImage}
            />


          <AgentActivityTitle
            action_text={activity.action_text}
            title={activity.title}
            url={activity.url}
          />

          <AgentActivityTimeAgo date={activity.date} />
        </div>
      ))}
    </div>
  )
}
