// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './AgentandNavbar.module.css'
import AgentHeader from './AgentHeader'
import Navbar from './Navbar'

export default function UserProfileCard({ onChatClick

}) {
  return (
    <div className={styles.card}>
        <AgentHeader      
      onChatClick={onChatClick}
    />
        <Navbar />
    </div>
  )
}
