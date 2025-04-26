import React from 'react'
import ProfilePubDate from './PublicationDate'
import AgentName from './AgentName'
import styles from './NameDate.module.css'

export default function ProfileHeader(props) {
  return (
    <div className={styles.container}>
      <AgentName onClick={props.onNameClick} />
      <ProfilePubDate onClick={props.onDateClick} />
    </div>
  )
}


