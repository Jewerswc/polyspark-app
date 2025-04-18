import React from 'react'
import styles from './AgentButtons.module.css'
import ChatNowButton from './ChatNowButton'
import MenuOptions from './MenuOptions'

export default function UserProfileCard({
  avatarUrl,
  name,
  date,
  onNameClick,
  onDateClick
}) {
  return (
    <div className={styles.container}>
    <ChatNowButton />
    <MenuOptions />

      
    </div>
  )
}
