import React from 'react'
import styles from './Buttons.module.css'
import ChatNowButton from './components/ChatNowButton'
import OptionsButton from './components/OptionsButton'

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
