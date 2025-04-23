import React from 'react'
import styles from './NameTick.module.css'

import AgentName from './Name'
import BlueTick from '../../ui/BlueTick'

export default function NameTick({ }) {
  return (
    <div className={styles.container}>
    <AgentName />
    <BlueTick />

    </div>
  )
}
