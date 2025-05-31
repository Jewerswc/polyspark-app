import React from 'react'
import styles from './X.module.css'
import { Twitter, TwitterX } from 'react-bootstrap-icons'

export default function ChatNowButton({

}) {
  return (
    <button
      className={styles.Xlink}
    >
      <TwitterX className={styles.icon} />
     Share to X
    </button>
  )
}
