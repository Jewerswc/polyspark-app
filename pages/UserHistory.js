// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './UserHistory.module.css'
import ActivitySVG from './ActivitySVG'
import AgentActivityTitle from './AgentActivityTitle'
import AgentActivityTimeAgo from './AgentActivityTimeAgo'


export default function UserProfileCard({ title, description, tags

}) {
  return (
    <div className={styles.card}>
        <ActivitySVG />
        <AgentActivityTitle />
        <AgentActivityTimeAgo />
    
    </div>
  )
}
