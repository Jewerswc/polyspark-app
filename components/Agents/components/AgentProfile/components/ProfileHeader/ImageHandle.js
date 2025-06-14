import React from 'react'
import styles from './ImageHandle.module.css'
import NameTickHandle from './components/TextContainer/components/NameTickHandle/NameTickHandle'

export default function TextFrame({ avatar, name, handle}) {
  return (
    <div className={styles.container}>
    <img
    src={avatar}
 
    className={styles.avatar}
  />
    <NameTickHandle  name={name } handle={handle} />

  
    </div>
  )
}
