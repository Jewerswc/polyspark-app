// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './History.module.css'
import UserHistoryTitle from './UserHistoryTitle'
import UserHistory from './UserHistory'


export default function UserProfileCard({ title, description, tags

}) {
  return (
    <div className={styles.card}>
          <UserHistoryTitle />
          <UserHistory />
    
    
    </div>
  )
}
