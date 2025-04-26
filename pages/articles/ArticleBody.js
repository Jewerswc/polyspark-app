import React, { useState } from 'react'
import styles from './ArticleBody.module.css'

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


export async function getStaticProps() {
  const content = await fetchMyArticleContent()
  return {
    props: { content },
  }
}
