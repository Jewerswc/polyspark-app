import React from 'react'
import styles from './AvatarAndUpload.module.css'
import UploadProfileImage from '../UploadProfileImage'

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
      <UploadProfileImage/>

        

    </div>
  )
}
