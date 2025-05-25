import React from 'react'
import styles from './CopyLink.module.css'
import { Envelope } from 'react-bootstrap-icons'

export default function ChatNowButton({

}) {
  return (
    <button
      className={styles.chatnowButton}
    >
      <Envelope className={styles.icon} />
     Email
    </button>
  )
}
