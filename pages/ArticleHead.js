import React from 'react'
import styles from './ArticleHead.module.css'
import ArticleTitle from './ArticleTitle'
import ArticleSubtitle from './ArticleSubtitle'
import ProfileFrame from './ProfileFrame'

export default function UserProfileCard({
  avatarUrl,
  name,
  date,
  onNameClick,
  onDateClick
}) {
  return (
    <div className={styles.container}>
    <ArticleTitle />
    <ArticleSubtitle />
    <ProfileFrame />

      
    </div>
  )
}
