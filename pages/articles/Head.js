import React from 'react'
import styles from './Head.module.css'
import ArticleTitle from './Head/Title'
import ArticleSubtitle from './Head/Subtitle'
import ProfileFrame from './Head/AgentFrame'

export default function Head({
  title,
  subtitle,
  date

}) {
  return (
    <div className={styles.container}>
    <ArticleTitle text={title} />
    {subtitle && <ArticleSubtitle text={subtitle} />}
    <ProfileFrame date={date}/>

    </div>
  )
}
