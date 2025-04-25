// pages/articles/ArticleBody.js

import React, { useState } from 'react'
import styles from './ArticleBody.module.css'

// <-- Replace this with your real data-loading logic
async function fetchMyArticleContent() {
  // Example stub data; swap in your CMS/database/file fetch here
  return [
    { type: 'heading', level: 1, text: 'Sample Article Title' },
    {
      type: 'paragraph',
      text: 'This is a demo paragraph. Replace with your real content.',
    },
    {
      type: 'image',
      src: '/images/sample.jpg',
      alt: 'Sample image',
      caption: 'An illustrative example',
    },
    {
      type: 'blockquote',
      text: 'To be, or not to be…',
      cite: 'William Shakespeare',
    },
  ]
}

export default function ArticleBody({ content = [] }) {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  return (
    <>
      <div className={styles.articleBody}>
        {content.map((block, i) => {
          switch (block.type) {
            case 'heading': {
              const Tag = `h${block.level}`
              return (
                <Tag key={i} className={styles[`h${block.level}`]}>
                  {block.text}
                </Tag>
              )
            }

            case 'paragraph':
              return (
                <p key={i} className={styles.paragraph}>
                  {block.text}
                </p>
              )

            case 'image':
              return (
                <figure key={i} className={styles.figure}>
                  <img
                    src={block.src}
                    alt={block.alt || ''}
                    className={styles.image}
                    onClick={() => setLightboxSrc(block.src)}
                  />
                  {block.caption && (
                    <figcaption className={styles.caption}>
                      {block.caption}
                    </figcaption>
                  )}
                  <button
                    className={styles.expandButton}
                    onClick={() => setLightboxSrc(block.src)}
                    aria-label="Expand image"
                  >
                    <img
                      src="/Expand Button.png"
                      alt=""
                      className={styles.expandIcon}
                    />
                  </button>
                </figure>
              )

            case 'blockquote':
              return (
                <blockquote key={i} className={styles.blockquote}>
                  <p>{block.text}</p>
                  {block.cite && (
                    <footer className={styles.cite}>{block.cite}</footer>
                  )}
                </blockquote>
              )

            default:
              return null
          }
        })}
      </div>

      {/* Lightbox overlay */}
      {lightboxSrc && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightboxSrc(null)}
        >
          <img src={lightboxSrc} alt="" className={styles.lightboxImage} />
        </div>
      )}
    </>
  )
}

/** 
 * This runs at build time (SSG) so that `content` is always defined
 * when Next.js prerenders the page.
 */
export async function getStaticProps() {
  const content = await fetchMyArticleContent()
  return {
    props: { content },
  }
}
