import React from 'react'
import styles from './ReportOverlay.module.css'
import ReportTitle from './ReportTitle'
import ReportDropdown from './ReportDropdownOne'
import DropdownTwo from './DropdownTwo'
import TermsPrivacy from './Login Overlay/TermsPrivacy'
import ReportInput from './reportInput'

export default function TextFrame({ onChatClick }) {
  return (
    <div className={styles.container}>
        <ReportTitle />
        <DropdownTwo />
        <DropdownTwo />
        <ReportInput />
      <TermsPrivacy />
    </div>
  )
}
