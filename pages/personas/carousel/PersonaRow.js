import React from 'react';
import styles from './PersonaRow.module.css';
import Name from '../Card';

export default function PersonaRow({
  personas = [],
  onChatClick,
  actionType,
  profileUrlFn
}) {
  return (
    <div className={styles.row}>
      {personas.map(person => {
        // only call profileUrlFn if we're in profile mode and it really is a function
        const profileUrl =
          actionType === 'profile' && typeof profileUrlFn === 'function'
            ? profileUrlFn(person)
            : undefined;

        return (
          <Name
            key={person.id}
            {...person}
            actionType={actionType}
            profileUrl={profileUrl}
            onChatClick={() => onChatClick(person)}
          />
        );
      })}
    </div>
  );
}
