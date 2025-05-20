// src/components/UserProfileCard/activity/AgentActivityTimeAgo.js
import React from 'react'
import TimeAgo from 'javascript-time-ago'
// English locale data:
import en from 'javascript-time-ago/locale/en'

import styles from './timeago.module.css'

// register the locale once
TimeAgo.addDefaultLocale(en)

export default function AgentActivityTimeAgo({ date }) {
  const timeAgo = new TimeAgo('en-GB')  // or 'en-US', whichever you prefer
  return (
    <span className={styles.activityTimeAgo}>
      {timeAgo.format(new Date(date))}
    </span>
  )
}
