import React from 'react'
import styles from './TextFrame.module.css'
import NameTickHandle from './NameTickHandle'
import AgentBio from './Bio'
import AgentButtons from './Buttons'


export default function TextFrame({
  name,
  handle,
  bio,
  onChatClick
}) {
  return (
    <div className={styles.container}>
      <NameTickHandle name={name} handle={handle} />
      <AgentBio bio={bio} />
      <AgentButtons
      name={name}
      onChatClick={onChatClick}
       />
    </div>
  );
}

