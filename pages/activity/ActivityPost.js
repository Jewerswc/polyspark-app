// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './ActivityPost.module.css'
import ActivitySVG from './ActivitySVG'
import AgentActivityTitle from '../agent/AgentActivityTitle'
import AgentActivityTimeAgo from '../agent/AgentActivityTimeAgo'


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
