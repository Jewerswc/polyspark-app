import React from 'react'
import styles from './Facebook.module.css'
import { Facebook } from 'react-bootstrap-icons'

export default function FacebookLink({

}) {
  return (
    <button
      className={styles.Facebook}
    >
      <Facebook className={styles.icon} />
     Share to Facebook
    </button>
  )
}
