import React from 'react'
import styles from './TextFrame.module.css'
import NameTickHandle from './NameTickHandle'
import AgentBio from './Bio'
import AgentButtons from './Buttons'


export default function TextFrame({ onChatClick }) {
  return (
    <div className={styles.container}>
    <NameTickHandle />
    <AgentBio />
    <AgentButtons  onChatClick={onChatClick} />
  
    </div>
  )
}
