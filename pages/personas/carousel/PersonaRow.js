import React from 'react';
import styles from './PersonaRow.module.css';
import Name from '../Card';

/**
 * Renders a row of persona cards.
 *
 * Props:
 * - personas: Array of persona objects (id, name, imageUrl, description, isActive, lastActive, etc.)
 */
export default function PersonaRow({
    personas = [],
    onChatClick,
    actionType,
    profileUrlFn
    }) {
  return (
    <div className={styles.row}>
      {personas.map(person => (
        <Name
          key={person.id}
          {...person}
          actionType={actionType}
          profileUrl={ actionType === 'profile' ? profileUrlFn(person) : undefined }
          onChatClick={() => onChatClick(person)}
        />
      ))}
    </div>
  );
}