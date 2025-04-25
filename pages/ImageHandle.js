import React from 'react'
import styles from './ImageHandle.module.css'
import NameTickHandle from './agent/profile header/NameTickHandle'

export default function TextFrame({ }) {
  return (
    <div className={styles.container}>
    <img
    src="./Images/AlexDoe.png"
 
    className={styles.avatar}
  />
    <NameTickHandle />

  
    </div>
  )
}
