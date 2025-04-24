import React from 'react'
import styles from './Footer.module.css'
import LikeButton from './LikeButton'
import ShareButton from './ShareButton'

export default function Comments({}) {
  return (
    <div className={styles.container}>
        <LikeButton />
        <ShareButton />

    </div>
  )
}
