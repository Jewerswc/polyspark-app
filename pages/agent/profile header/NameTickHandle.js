import React from 'react'
import styles from './NameTickHandle.module.css'
import AgentHandle from './Handle'
import NameTick from './NameTick'


export default function UserProfileCard({name, handle }) {
  return (
    <div className={styles.container}>
    <NameTick name={name}/>
    <AgentHandle handle={handle} />
    

     
    </div>
  )
}
