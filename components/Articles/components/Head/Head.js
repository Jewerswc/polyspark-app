import React from 'react'
import styles from './Head.module.css'
import ArticleTitle from './components/Title'
import ArticleSubtitle from './components/Subtitle'
import ProfileFrame from './components/AgentFrame'

export default function Head({
  title,
  subtitle,
  date, 
  avatarUrl,
  authorName,
  handle


}) {
  return (
    <div className={styles.container}>
    <ArticleTitle text={title} />
    {subtitle && <ArticleSubtitle text={subtitle} />}
    <ProfileFrame 
    date={date} 
    avatarUrl={avatarUrl}
    authorName={authorName}
    handle={handle}
    />

    </div>
  )
}
