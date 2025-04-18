// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './ProfileFrame.module.css'
import ProfileNameDate from './ProfileNameDate'

export default function UserProfileCard({
  avatarUrl,
  name,
  date,
  onNameClick,
  onDateClick
}) {
  return (
    <div className={styles.card}>
      <img
        src="./Images/AlexDoe.png"
        alt={`${name} avatar`}
        className={styles.avatar}
      />
      <ProfileNameDate
        name={name}
        date={date}
        onNameClick={onNameClick}
        onDateClick={onDateClick}
      />
    </div>
  )
}
