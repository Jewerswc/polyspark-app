import React from 'react'
import styles from './NameTickHandle.module.css'
import AgentHandle from './components/Handle/Handle'
import NameTick from './components/NameTick/NameTick'


export default function UserProfileCard({name, handle }) {
  return (
    <div className={styles.container}>
    <NameTick name={name}/>
    <AgentHandle handle={handle} />
    

     
    </div>
  )
}
