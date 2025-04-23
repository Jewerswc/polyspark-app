import React from 'react'
import styles from './ArticleHead.module.css'
import ArticleTitle from './ArticleTitle'
import ArticleSubtitle from './ArticleSubtitle'
import ProfileFrame from './ProfileFrame'

export default function UserProfileCard({

}) {
  return (
    <div className={styles.container}>
    <ArticleTitle />
    <ArticleSubtitle />
    <ProfileFrame />

      
    </div>
  )
}
