import React from 'react'
import ProfilePubDate from './PublicationDate'
import AgentName from './AgentName'
import styles from './NameDate.module.css'

export default function ProfileHeader({ date, onNameClick, onDateClick, name }) {
  return (
    <div className={styles.container}>
      <AgentName onClick={onNameClick} name={name} />
      <ProfilePubDate name={name} date={date} onClick={onDateClick} />
    </div>
  )
}



