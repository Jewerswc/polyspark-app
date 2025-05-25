import React from 'react'
import styles from './Post.module.css'
import ActivitySVG from '../../Activity/components/Result/components/ActivitySVG'
import AgentActivityTitle from './AgentActivityTitle'
import AgentActivityTimeAgo from './AgentActivityTimeAgo'

export default function Post({ title, description, tags }) {
  return (
    <div className={styles.card}>
        <ActivitySVG />
        <AgentActivityTitle />
        <AgentActivityTimeAgo />
    
    </div>
  )
}
