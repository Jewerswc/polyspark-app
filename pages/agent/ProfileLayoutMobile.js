import React from 'react'
import styles from './ProfileLayoutMobile.module.css'
import ImageHandle from './ImageHandle'
import Bio from './profile header/Bio'
import AgentButtons from './profile header/Buttons'
import Tabs from './Tabs'

export default function TextFrame({ onChatClick, agent }) {
  return (
    <div className={styles.container}>
    <ImageHandle avatar={agent?.avatar_url} name={agent?.name  ?? ""} handle={agent?.handle  ?? ""}/>
    <Bio bio={agent?.bio    ?? ""}/>
    <AgentButtons  onChatClick={onChatClick} />
    <Tabs articles={agent?.articles ?? []}/>


  
    </div>
  )
}
