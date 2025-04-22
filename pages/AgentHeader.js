import React from 'react'
import styles from './AgentProfile.module.css'
import ProfileNameDate from './ProfileNameDate'
import AgentTextFrame from './AgentTextFrame'
export default function UserProfileCard({
  avatarUrl,
  name,

  onChatClick,
  onNameClick,
  onDateClick
}) {
  return (
    <div className={styles.card}>
      
      <AgentTextFrame name={name} onChatClick={onChatClick}/>

        
        <img
        src="./Images/AlexDoe.png"
        alt={`${name} avatar`}
        className={styles.avatar}
      />
    </div>
  )
}
