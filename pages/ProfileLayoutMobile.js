import React from 'react'
import styles from './ProfileLayoutMobile.module.css'
import ImageHandle from './ImageHandle'
import Bio from './agent/profile header/Bio'
import AgentButtons from './agent/profile header/Buttons'
import Tabs from './agent/Tabs'

export default function TextFrame({ onChatClick }) {
  return (
    <div className={styles.container}>
    <ImageHandle />
    <Bio />
    <AgentButtons  onChatClick={onChatClick} />
    <Tabs />


  
    </div>
  )
}
