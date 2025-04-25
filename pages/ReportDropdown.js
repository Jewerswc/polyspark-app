import React, { useState } from 'react';
import ReportDropdown from './ReportDropdownOne';

export default function ReportDropdownPage() {
  const [issue, setIssue] = useState(null);
  const options = [
    { value: 'ui',   label: 'Report an Issue'   },
    { value: 'perf', label: 'Make a Suggestion' },
  ];

  return (
      <ReportDropdown
        options={options}
        selected={issue}
        onSelect={setIssue}
      />
  );
}
