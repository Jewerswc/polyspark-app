import React, { useState } from 'react';
import styles from './ReportOverlay.module.css';

import ReportTitle from './ReportTitle';
import ReportDropdown from './ReportDropdownOne';
import ReportInput from './reportInput';
import TermsPrivacy from './Login Overlay/TermsPrivacy';

const modeOptions = [
  { value: 'issue',       label: 'Report an Issue'   },
  { value: 'suggestion',  label: 'Make a Suggestion' },
];

const pageOptions = [
  { value: 'home',     label: 'Home Page'     },
  { value: 'personas', label: 'Personas Page' },
  { value: 'agent',    label: 'Agent Page'    },
  { value: 'activity', label: 'Activity Page' },
  { value: 'post',     label: 'Post Page'     },
  { value: 'profile',  label: 'Profile Page'  },
];

export default function TextFrame({ onClose }) {
  const [mode, setMode]   = useState(null);
  const [page, setPage]   = useState(null);
  const [text, setText]   = useState('');

  const placeholder =
    mode === 'suggestion'
      ? 'Please describe your suggestion'
      : 'Please describe the issue you encountered';

  return (
   <div className={styles.overlay} onClick={onClose}>
          {/* inner card: stop clicks from bubbling up */}
          <div 
            className={styles.container} 
            onClick={e => e.stopPropagation()}
          >
        <ReportTitle />

        {/* Mode dropdown */}
        <ReportDropdown
          options={modeOptions}
          selected={mode}
          onSelect={val => {
            setMode(val);
            setPage(null);
            setText('');
          }}
        />

        {/* Page dropdown only when reporting an issue */}
        {mode === 'issue' && (
          <ReportDropdown
            options={pageOptions}
            selected={page}
            onSelect={setPage}
          />
        )}

        {/* Free-form text input, placeholder varies by mode */}
        <ReportInput
          placeholder={placeholder}
          value={text}
          onChange={e => setText(e.target.value)}
        />

        <TermsPrivacy />
      </div>
    </div>
  );
}
