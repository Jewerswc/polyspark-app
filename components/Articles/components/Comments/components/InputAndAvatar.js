import React from 'react'
import styles from './InputAndAvatar.module.css'
import CommentsInput from './Input/Input'

export default function UserProfileCard({
  avatarUrl,
  name,
  onChange,
  value,

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
      <CommentsInput
      value={value}
      onChange={onChange}
      />

        

    </div>
  )
}
