// ProfileHeader.js
import React from 'react'
import ProfilePubDate from './ProfilePubDate'
import ProfileAgentName from './ProfileAgentName'
import styles from './ProfileNameDate.module.css'

export default function ProfileHeader(props) {
  return (
    <div className={styles.container}>
      <ProfileAgentName onClick={props.onNameClick} />
      <ProfilePubDate onClick={props.onDateClick} />
    </div>
  )
}
