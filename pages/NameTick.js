import React from 'react'
import styles from './NameTick.module.css'

import AgentName from './agent/AgentName'
import BlueTick from './ui/BlueTick'

export default function UserProfileCard({ }) {
  return (
    <div className={styles.container}>
    <AgentName />
    <BlueTick />
    

      
    </div>
  )
}
