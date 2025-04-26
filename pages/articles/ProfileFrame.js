import React from 'react'
import styles from './ProfileFrame.module.css'
import ProfileNameDate from './ProfileNameDate'

export default function UserProfileCard({
  name,
  date,
  onNameClick,
  onDateClick
}) {
  const handleClick = () => {
    window.location.href = '/Agent'
  }

  return (
    <div className={styles.card}>
      <img
        src="./Images/AlexDoe.png"
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