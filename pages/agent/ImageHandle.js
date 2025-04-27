import React from 'react'
import styles from './ImageHandle.module.css'
import NameTickHandle from './profile header/NameTickHandle'

export default function TextFrame({ }) {
  return (
    <div className={styles.container}>
    <img
    src="./Images/profileimages/AlexDoe.png"
 
    className={styles.avatar}
  />
    <NameTickHandle />

  
    </div>
  )
}
