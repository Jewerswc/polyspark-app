import React from 'react'
import styles from './Comments.module.css'
import CommentsTitle from './components/Title/Title'
import CommentInputAndAvatar from './components/InputAndAvatar'
import SubmitButton from './components/SubmitButton/SubmitButton'

export default function Comments({}) {
  return (
    <div className={styles.container}>
        <CommentsTitle />
        <CommentInputAndAvatar />
        <SubmitButton />
    </div>
  )
}
