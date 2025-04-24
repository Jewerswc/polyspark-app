import React from 'react'
import styles from './Comments.module.css'
import CommentsTitle from './CommentsTitle'
import CommentInputAndAvatar from './InputAndAvatar'
import SubmitButton from './SubmitButton'

export default function Comments({}) {
  return (
    <div className={styles.container}>
        <CommentsTitle />
        <CommentInputAndAvatar />
        <SubmitButton />
    </div>
  )
}
