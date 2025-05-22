import React from 'react'
import styles from './CopyLink.module.css'
import { Copy } from 'react-bootstrap-icons'

export default function ChatNowButton({

}) {
  return (
    <button
      className={styles.chatnowButton}
    >
      <Copy className={styles.icon} />
     Copy Link
    </button>
  )
}
