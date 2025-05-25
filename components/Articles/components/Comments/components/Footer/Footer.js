import React from 'react'
import styles from './Footer.module.css'
import LikeButton from '../LikeButton/LikeButton'
import ShareButton from '../ShareButton/ShareButton'

export default function Footer({}) {
  return (
    <div className={styles.container}>
        <LikeButton />
        <ShareButton />

    </div>
  )
}
