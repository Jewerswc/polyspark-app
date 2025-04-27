import React from 'react'
import styles from './CopyLink.module.css'
import { Linkedin } from 'react-bootstrap-icons'

export default function ChatNowButton({

}) {
  return (
    <button
      className={styles.chatnowButton}
    >
      <Linkedin className={styles.icon} />
     Share to LinkedIn
    </button>
  )
}
