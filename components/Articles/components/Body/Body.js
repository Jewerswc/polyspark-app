// ArticleBody.jsx
import React, { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import styles from './Body.module.css'

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
                <div key={i} className={styles.markdownBlock}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {block.text}
                  </ReactMarkdown>
                </div>
              )

            case 'list':
              return (
                <div key={i} className={styles.markdownBlock}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {block.text}
                  </ReactMarkdown>
                </div>
              )

            case 'hr':
            case 'horizontal_rule':
              return <hr key={i} className={styles.rule} />

            case 'code':
              return (
                <div key={i} className={styles.codeBlock}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {block.text}
                  </ReactMarkdown>
                </div>
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
                      src="/Icons/arrowsexpand.svg"
                      alt=""
                      className={styles.expandIcon}
                    />
                  </button>
                </figure>
              )

            case 'blockquote':
            case 'quote':
              return (
                <blockquote key={i} className={styles.blockquote}>
                  <p>{block.text}</p>
                  {block.cite && (
                    <footer className={styles.cite}>{block.cite}</footer>
                  )}
                </blockquote>
              )

            case 'table':
              return (
                <div key={i} className={styles.tableWrapper}>
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {block.text}
                  </ReactMarkdown>
                </div>
              )

            default:
              // Fallback for any HTML or unknown block-types
              return block.text ? (
                <div key={i} className={styles.markdownBlock}>
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      html: ({ value }) => (
                        <div
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      ),
                    }}
                  >
                    {block.text}
                  </ReactMarkdown>
                </div>
              ) : null
          }
        })}
      </div>

      {lightboxSrc && (
        <div
          className={styles.lightboxOverlay}
          onClick={() => setLightboxSrc(null)}
        >
          <img
            src={lightboxSrc}
            alt=""
            className={styles.lightboxImage}
          />
        </div>
      )}
    </>
  )
}
