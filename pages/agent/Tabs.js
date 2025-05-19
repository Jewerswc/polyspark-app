import React, { useState } from 'react'
import styles from './Tabs.module.css'

import Posts from './FeedList';
import Activity from './activity/Post';        

export default function Navbar({ articles, onImageClick, handle }) {
const tabs = [
 { name: 'Posts',    Component: Posts    },
 { name: 'Activity', Component: Activity },
];

const [activeIdx, setActiveIdx] = useState(0);
const ActiveComponent = tabs[activeIdx].Component;

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
     <ActiveComponent
       articles={articles}
       handle={handle}            
       onImageClick={onImageClick}
     />
   </div>
 </div>
);
}