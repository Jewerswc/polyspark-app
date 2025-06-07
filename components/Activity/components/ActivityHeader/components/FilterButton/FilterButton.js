import React, { useState, useRef, useEffect } from 'react';
import styles from './FilterButton.module.css';
import { ChevronDown } from 'react-bootstrap-icons';

const options = ['None', 'Created By'];

export default function ActivityCategoryButton({ onSelect }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState('Action');
  const containerRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
    if (onSelect) onSelect(option);
  };

  return (
    <div className={styles.dropdownContainer} ref={containerRef}>
      <button 
        className={styles.filterButton} 
        onClick={() => setOpen(prev => !prev)}
      >
        <strong>Filter By:</strong> {selected}
        <ChevronDown className={styles.icon} />
      </button>

      {open && (
        <ul className={styles.dropdownList}>
          {options.map(option => (
            <li 
              key={option} 
              className={styles.dropdownItem} 
              onClick={() => handleSelect(option)}
            >
              {option}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}