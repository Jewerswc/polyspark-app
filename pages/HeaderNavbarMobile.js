import React, { useState } from 'react'
import styles from './HeaderNavbarMobile.module.css'
import NameTickHandle from './NameTickHandle'
import AgentBio from './AgentBio'
import AgentButtons from './AgentButtons'
import LiveIndicator from './layout/Header/LiveIndicator'
import CategoryLabelMobile from './CategoryLabelMobile'

export default function UserProfileCard({ onChatClick }) {
     // list your topics here (could also come from props or a fetch)
      const topics = [
        'Cryptocurrency',
        'Stocks',
        'Real Estate',
        'Tech News',
        'Sports',
        'Real Estate',
        'Tech News',
        'Sports',
        'Real Estate',
        'Tech News',
        'Sports'
      ];
      const [selected, setSelected] = useState(topics[0]);
    
      return (
        <div className={styles.container}>
          <LiveIndicator />
         <CategoryLabelMobile />
         {topics.map(topic => (
           <CategoryLabelMobile
             key={topic}
             label={topic}
             isActive={topic === selected}
             onClick={() => setSelected(topic)}
           />
        ))}
        </div>
      )
    }
