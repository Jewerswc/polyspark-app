// File: ./pages/layout/FileOptions.js
import React, { useState, useRef, useEffect } from 'react';
import styles from './FileOptions.module.css';

const AGENTS = [
  { id: 'alex',  name: 'Alex Doe'   },
  { id: 'james', name: 'James Rae'  },
  { id: 'emily', name: 'Emily Biche'},
  { id: 'chris', name: 'Chris Parker'},
];

export default function FileOptions({ onFilterChange = () => {} }) {
  const [openFilter, setOpenFilter]     = useState(false);
  const [selectedAgents, setSelectedAgents] = useState([]);       // ← no <string[]>
  const [startDate, setStartDate]       = useState('');
  const [endDate, setEndDate]           = useState('');
  const refFilter                       = useRef(null);           // ← no <HTMLDivElement>

  // close menu on outside click
  useEffect(() => {
    const handler = (e) => {
      if (openFilter && refFilter.current && !refFilter.current.contains(e.target)) {
        setOpenFilter(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [openFilter]);

  const toggleAgent = (agentId) => {
    setSelectedAgents(prev =>
      prev.includes(agentId)
        ? prev.filter(id => id !== agentId)
        : [...prev, agentId]
    );
  };

  const applyFilters = () => {
    onFilterChange({
      agents: selectedAgents,
      dateRange:
        startDate && endDate
          ? { start: startDate, end: endDate }
          : null
    });
    setOpenFilter(false);
  };

  const clearFilters = () => {
    setSelectedAgents([]);
    setStartDate('');
    setEndDate('');
    onFilterChange({ agents: [], dateRange: null });
  };

  return (
    <div className={styles.container}>
      {/* … your Sort‐by dropdown here … */}

      {/* Filter by dropdown */}
      <div className={styles.dropdown} ref={refFilter}>
        <button onClick={() => setOpenFilter(o => !o)}>
          Filter by ▾
        </button>
        {openFilter && (
          <div className={styles.menu}>
            <div className={styles.filterSection}>
              <strong>Agents</strong>
              {AGENTS.map(agent => (
                <label key={agent.id} className={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={selectedAgents.includes(agent.id)}
                    onChange={() => toggleAgent(agent.id)}
                  />
                  {agent.name}
                </label>
              ))}
            </div>

            <div className={styles.filterSection}>
              <strong>Date Range</strong>
              <div className={styles.dateInputs}>
                <input
                  type="date"
                  value={startDate}
                  onChange={e => setStartDate(e.target.value)}
                />
                <span>–</span>
                <input
                  type="date"
                  value={endDate}
                  onChange={e => setEndDate(e.target.value)}
                />
              </div>
            </div>

            <div className={styles.filterActions}>
              <button onClick={applyFilters}>Apply</button>
              <button onClick={clearFilters}>Clear</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
