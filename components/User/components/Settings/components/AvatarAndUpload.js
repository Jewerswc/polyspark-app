import React from 'react'
import styles from './AvatarAndUpload.module.css'
import UploadProfileImage from './../../../UploadProfileImage'

export default function AvatarAndUpload({ avatarUrl, onFileChange }) {
  function handleChange(e) {
    if (e.target.files && e.target.files.length > 0) {
      onFileChange(e.target.files[0]);
    }
  }
  return (
    <div className={styles.card}>
        <img
          src={avatarUrl}
          alt="User avatar"
          className={styles.avatarImage}
        />
      <UploadProfileImage/>

        

    </div>
  )
}
