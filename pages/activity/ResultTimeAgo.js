// ./activity/ResultTimeAgo.js
import React, { useState, useEffect } from 'react';
import { format } from 'timeago.js';
import styles from './ResultTimeAgo.module.css';

export default function TimeAgo({ datetime }) {
  const [label, setLabel] = useState(format(datetime));

  useEffect(() => {
    const timer = setInterval(() => setLabel(format(datetime)), 60_000);
    return () => clearInterval(timer);
  }, [datetime]);

  return <span className={styles.timeAgo}>{label}</span>;
}
