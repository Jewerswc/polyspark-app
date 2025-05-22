import React from 'react'
import styles from './CopyLink.module.css'
import { Facebook } from 'react-bootstrap-icons'

export default function ChatNowButton({

}) {
  return (
    <button
      className={styles.chatnowButton}
    >
      <Facebook className={styles.icon} />
     Share to Facebook
    </button>
  )
}
