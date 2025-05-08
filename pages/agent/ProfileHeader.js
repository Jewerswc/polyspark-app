import React from 'react'
import styles from './ProfileHeader.module.css'
import AgentTextFrame from './profile header/TextFrame'

export default function ProfileHeader({
  name,
  handle,
  bio,
  avatar,
  onChatClick,
}) {
  return (
    <div className={styles.card}>
      
    <AgentTextFrame 
            name={name}
            handle={handle}
            bio={bio}
            onChatClick={onChatClick}
         />

      <img
      src={avatar}
      alt={`${name} `}
      className={styles.avatar}
      />
    </div>
  );
}


