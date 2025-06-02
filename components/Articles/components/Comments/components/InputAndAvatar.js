import React from 'react'
import styles from './InputAndAvatar.module.css'
import CommentsInput from './Input/Input'

export default function UserProfileCard({
  avatarUrl,
  name,

  onChatClick,
  onNameClick,
  onDateClick
}) {
  return (
    <div className={styles.card}>
              <img
        src={avatarUrl}
        alt={`${name} avatar`}
        className={styles.avatar}
      />
      <CommentsInput/>

        

    </div>
  )
}
