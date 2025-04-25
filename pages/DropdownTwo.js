import React, { useState } from 'react';
import ReportDropdown from './ReportDropdownOne';

export default function ReportDropdownPage() {
  const [issue, setIssue] = useState(null);
  const options = [
    { value: 'ui',   label: 'Home Page'   },
    { value: 'ui',   label: 'Personas Page'},
    { value: 'perf', label: 'Agent Page' },
    { value: 'ui',   label: 'Activity Page'},
    { value: 'ui',   label: 'Post Page'},
    { value: 'ui',   label: 'Profile Page'},


  ];

  return (
      <ReportDropdown
        options={options}
        selected={issue}
        onSelect={setIssue}
      />
  );
}
