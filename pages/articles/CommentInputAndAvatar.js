import React from 'react'
import styles from './CommentInputAndAvatar.module.css'
import CommentsInput from './CommentsInput'

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
        src="./Images/Avatars.png"
        alt={`${name} avatar`}
        className={styles.avatar}
      />
      <CommentsInput/>

        

    </div>
  )
}
