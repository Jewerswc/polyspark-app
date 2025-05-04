import React from 'react'
import styles from './AgentFrame.module.css'
import ProfileNameDate from './NameDate'

export default function UserProfileCard({
  name,
  date,
  onDateClick
}) {
  const handleClick = () => {
    window.location.href = '/Agent'
  }

  return (
    <div className={styles.card}>
      <img
        src="/Images/profileimages/AlexDoe.png"
        alt={`${name} avatar`}
        className={styles.avatar}
        onClick={handleClick}
        style={{ cursor: 'pointer' }}
      />
      <ProfileNameDate
        name={name}
        date={date}
        onNameClick={handleClick}
        onDateClick={onDateClick}
      />
    </div>
  )
}