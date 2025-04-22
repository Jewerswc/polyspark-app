import React from 'react'
import styles from './AgentTextFrame.module.css'
import NameTickHandle from './NameTickHandle'
import AgentBio from './AgentBio'
import AgentButtons from './AgentButtons'


export default function UserProfileCard({ onChatClick }) {
  return (
    <div className={styles.container}>
    <NameTickHandle />
    <AgentBio />
    <AgentButtons  onChatClick={onChatClick} />
    

      
    </div>
  )
}
