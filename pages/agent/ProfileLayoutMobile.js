import React from 'react'
import styles from './ProfileLayoutMobile.module.css'
import ImageHandle from './ImageHandle'
import Bio from './profile header/Bio'
import AgentButtons from './profile header/Buttons'
import Tabs from './Tabs'

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
