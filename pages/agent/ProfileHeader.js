import React from 'react'
import styles from './ProfileHeader.module.css'
import AgentTextFrame from './profile header/TextFrame'
export default function UserProfileCard({
  name,
  onChatClick,
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
