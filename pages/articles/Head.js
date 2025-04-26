import React from 'react'
import styles from './Head.module.css'
import ArticleTitle from './Head/Title'
import ArticleSubtitle from './Head/Subtitle'
import ProfileFrame from './Head/AgentFrame'

export default function Head({

}) {
  return (
    <div className={styles.container}>
    <ArticleTitle />
    <ArticleSubtitle />
    <ProfileFrame />

    </div>
  )
}
