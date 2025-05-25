import React from 'react'
import styles from './AgentFrame.module.css'
import ProfileNameDate from './NameDate'

export default function UserProfileCard({
  name,
  date,
  onDateClick, 
  avatar_url, 
  avatarUrl,
  authorName,
  handle

}) {
  const handleClick = () => {
    // Note the backticks here
    window.location.href = `/profile/${handle}`
  }

  return (
    <div className={styles.card}>
      <img
        src={avatarUrl}
        alt={`${name} avatar`}
        className={styles.avatar}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <ProfileNameDate
        name={authorName}
        date={date}
        onNameClick={handleClick}
        onDateClick={onDateClick}
      />
    </div>
  )
}