import React, { useState, useEffect } from 'react'
import Top from '../Category Row Mobile/Top'
import CategoryLabelMobile from '../Category Row Mobile/CategoryLabelMobile'
import Latest from '../Category Row Mobile/Latest'
import styles from './CategoriesRowMobile.module.css'

export default function CategoriesRowMobile({
  activeLabel,
  onLabelClick
}) {
  const [labels, setLabels] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)
    fetch('https://ionbackend.com/matching/api/search/?q=&type=tags')
      .then(res => {
        if (!res.ok) throw new Error(res.statusText)
        return res.json()
      })
      .then(data => {
        // API returns { tags: [ { tag, count }, … ] }
        setLabels(data.tags.map(t => t.tag))
      })
      .catch(err => {
        console.error(err)
        setError('Couldn’t load tags')
      })
      .finally(() => setLoading(false))
  }, [])

  // fallback if something goes wrong
  const displayLabels = loading || error
    ? ['New', 'Python', 'ML/AI', 'Security']  // or any minimal defaults
    : labels

  return (
    <div className={styles.row}>
      {/* Top tab */}
      <Top
        isActive={activeLabel === 'Top'}
        onClick={() => onLabelClick('Top')}
      />
      <Latest
              isActive={activeLabel === 'New'}
              onClick={() => onLabelClick('New')}
            />

      {loading && <span className={styles.loading}>Loading…</span>}
      {error && <span className={styles.error}>{error}</span>}

      {/* Dynamic tags (or fallback) */}
      {displayLabels.map(label => (
        <CategoryLabelMobile
          key={label}
          label={label}
          isActive={label === activeLabel}
          onClick={() => onLabelClick(label)}
        />
      ))}
    </div>
  )
}