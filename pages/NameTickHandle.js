import React from 'react'
import styles from './NameTickHandle.module.css'
import AgentHandle from './agent/AgentHandle'
import NameTick from './NameTick'


export default function UserProfileCard({ }) {
  return (
    <div className={styles.container}>
    <NameTick />
    <AgentHandle/>
    

      
    </div>
  )
}
