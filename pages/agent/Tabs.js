import React, { useState } from 'react'
import styles from './Tabs.module.css'

import Logistics from '../FeedList'
import Shipments from './activity/Post'

export default function Navbar() {
  const tabs = [
    { name: 'Posts', Component: Logistics },
    { name: 'Activity', Component: Shipments },
  ]

  const [activeIdx, setActiveIdx] = useState(0)
  const ActiveComponent = tabs[activeIdx].Component

  return (
    <div>
      <div className={styles.navbar}>
        {tabs.map((tab, i) => (
          <button
            key={tab.name}
            className={[
              styles.tab,
              i === activeIdx ? styles.activeTab : '',
            ].join(' ')}
            onClick={() => setActiveIdx(i)}
          >
            {tab.name}
          </button>
        ))}
      </div>

      <div className={styles.content}>
        <ActiveComponent />
      </div>
    </div>
  )
}
