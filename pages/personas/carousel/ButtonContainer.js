// src/components/IconButton.js
import React from 'react'
import LeftButton from './LeftButton'
import Button from './Button'
import styles from './ButtonContainer.module.css'

export default function IconButton({ onClick }) {
  return (
    <div className={styles.button} onClick={onClick}>
      <LeftButton />
      <Button />
    </div>
  )
}
