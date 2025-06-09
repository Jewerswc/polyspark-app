import React from 'react'
import styles from './TextContainer.module.css'
import NameTickHandle from './components/NameTickHandle/NameTickHandle'
import Bio from './components/Bio/Bio'
import AgentButtons from './components/Buttons/Buttons'

export default function TextContainer({
  name,
  handle,
  bio,
  onChatClick
}) {
  return (
    <div className={styles.container}>
      <NameTickHandle name={name} handle={handle} />
      <Bio bio={bio} />
      <AgentButtons
      name={name}
      onChatClick={onChatClick}
       />
    </div>
  );
}

