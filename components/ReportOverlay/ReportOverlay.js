import React, { useState } from 'react';
import styles from './ReportOverlay.module.css';

import ReportTitle from './components/ReportTitle/ReportTitle';
import ReportDropdown from './components/ReportDropdown/ReportDropdown';
import ReportInput from './components/ReportInput/ReportInput';
import TermsPrivacy from './components/TermsPrivacy/TermsPrivacy';

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

export default function TextFrame({ onClose, userId, authToken }) {
  // Default to "issue" so both page dropdown and issue input show immediately
  const [mode, setMode] = useState(modeOptions[0].value);
  const [page, setPage] = useState('');
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Compute placeholder based only on actual mode
  const placeholder =
    mode === 'suggestion'
      ? 'Please describe your suggestion'
      : 'Please describe the issue you encountered';

  const handleSubmit = async () => {
    setLoading(true);
    setError(null);

    const payload = {
      description: text,
      ticket_type: mode,
      affected_page: mode === 'issue' ? page : '',
      created_by: userId || null,
    };

    try {
      const res = await fetch('http://127.0.0.1:8000/api/ticketing/submit/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(authToken && { Authorization: `Bearer ${authToken}` }),
        },
        body: JSON.stringify(payload),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error || 'Failed to submit ticket');
      }

      // success
      onClose();
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.overlay} onClick={onClose}>
      <div className={styles.container} onClick={e => e.stopPropagation()}>
        <ReportTitle />

        {/* Mode dropdown */}
        <ReportDropdown
          options={modeOptions}
          selected={mode}
          onSelect={val => {
            setMode(val);
            setPage('');
            setText('');
          }}
          placeholder="Select a Type"
        />

        {/* Page dropdown for 'issue' mode */}
        {mode === 'issue' && (
          <ReportDropdown
            options={pageOptions}
            selected={page}
            onSelect={setPage}
            placeholder="Select a Page"
          />
        )}

        {/* Input for issue or suggestion */}
        <ReportInput
          placeholder={placeholder}
          value={text}
          onChange={e => setText(e.target.value)}
        />

        {error && <div className={styles.error}>{error}</div>}

        <button
          className={styles.submitButton}
          onClick={handleSubmit}
          disabled={loading || !text || (mode === 'issue' && !page)}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>

        <TermsPrivacy />
      </div>
    </div>
  );
}
