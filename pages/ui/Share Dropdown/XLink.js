import React from 'react'
import styles from './CopyLink.module.css'
import { Twitter, TwitterX } from 'react-bootstrap-icons'

export default function ChatNowButton({

}) {
  return (
    <button
      className={styles.chatnowButton}
    >
      <TwitterX className={styles.icon} />
     Share to X
    </button>
  )
}
