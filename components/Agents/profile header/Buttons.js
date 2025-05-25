import React from 'react'
import styles from './Buttons.module.css'
import ChatNowButton from './../../../pages/ui/ChatNowButton'
import OptionsButton from './OptionsButton'

export default function Buttons({

  name,
  onChatClick,
}) {
  return (
    <div className={styles.container}>
    <ChatNowButton onClick={() => onChatClick(name)} />
    <OptionsButton />
    </div>
  )
}
