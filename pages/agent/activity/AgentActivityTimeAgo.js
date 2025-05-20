// src/components/UserProfileCard/activity/AgentActivityTimeAgo.js
import React, { useState, useEffect } from 'react'
import TimeAgo from 'javascript-time-ago'
import en from 'javascript-time-ago/locale/en'
import styles from './timeago.module.css'

// register the locale once
TimeAgo.addDefaultLocale(en)

export default function AgentActivityTimeAgo({ date }) {
  const [label, setLabel] = useState('')

  useEffect(() => {
    if (!date) return
    try {
      const ta = new TimeAgo('en-GB')
      setLabel(ta.format(new Date(date)))
    } catch (err) {
      console.error('Invalid date for TimeAgo:', date, err)
    }
  }, [date])

  // Render nothing (or a placeholder) until we have a valid label
  if (!label) return null

  return <span className={styles.activityTimeAgo}>{label}</span>
}
