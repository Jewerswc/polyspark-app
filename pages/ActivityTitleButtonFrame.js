import React from 'react'
import styles from './ActivityTitleButtonFrame.module.css'
import ActivityTitle from './ActivityTitle'
import ActivityCategoryButton from './ActivityCategoryButton'


export default function UserProfileCard({ onChatClick }) {
  return (
    <div className={styles.container}>
        <ActivityTitle />
        <ActivityCategoryButton />


      
    </div>
  )
}
