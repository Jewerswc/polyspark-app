import React from 'react'
import styles from './NameTick.module.css'

import AgentName from './Name'
import BlueTick from './BlueTick'

export default function NameTick({name }) {
  return (
    <div className={styles.container}>
    <AgentName name={name}/>
    <BlueTick />

    </div>
  )
}
