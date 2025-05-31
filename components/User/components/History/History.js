// src/components/UserProfileCard/UserProfileCard.js
import React from 'react'
import styles from './History.module.css'
import Title from './components/Title/Title'
import UserHistory from './components/Post/Post'


export default function UserProfileCard({ title, description, tags

}) {
  return (
    <div className={styles.card}>
          <Title />
          <UserHistory />
    
    
    </div>
  )
}
