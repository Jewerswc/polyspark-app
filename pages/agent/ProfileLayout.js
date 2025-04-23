// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './ProfileLayout.module.css'
import AgentHeader from './ProfileHeader'
import Navbar from './Tabs'

export default function ProfileLayout({ onChatClick

}) {
  return (
    <div className={styles.profileLayout}>
        <AgentHeader      
      onChatClick={onChatClick}
    />
        <Navbar />
    </div>
  )
}
