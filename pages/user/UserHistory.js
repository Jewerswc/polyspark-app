// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './UserHistory.module.css'
import ActivitySVG from './../activity/ActivitySVG'
import AgentActivityTitle from '../agent/activity/AgentActivityTitle'
import AgentActivityTimeAgo from '../agent/activity/AgentActivityTimeAgo'


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
