// pages/articles/[slug].js
import React, { useState, useEffect } from 'react'
import Header from '../../components/Articles/components/Header'
import HeaderMobileSecondary from './../../components/Header/HeaderMobileSecondary'
import UserProfileCard from './../../components/Articles/components/Head/Head'
import ArticleBody from './../../components/Articles/components/Body/Body'
import styles from './[slug].module.css'
import LoginOverlayMobile from './../../components/LoginOverlay/components/LoginOverlayMobile'
import Comments from './../../components/Articles/components/Comments/Comments'
import CommentsFooter from './../../components/Articles/components/Comments/components/Footer/Footer'
import Commentsout from './../../components/Articles/components/Comments/components/Commentsout'

// import your auth helper
import { isLoggedIn } from './../api/auth'

export default function ArticlePage({ article, error }) {
  const [overlay, setOverlay] = useState(null)
  const [isMobile, setIsMobile] = useState(false)

  // <-- NEW: track login status on the client
  const [loggedIn, setLoggedIn] = useState(false)

  useEffect(() => {
    // 1) detect viewport size
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    onResize()
    window.addEventListener('resize', onResize)

    // 2) detect login state (only runs on the client)
    setLoggedIn(isLoggedIn())

    return () => {
      window.removeEventListener('resize', onResize)
    }
  }, [])

  if (error) {
    return <div className={styles.error}>Error loading article: {error}</div>
  }

  const { created_at, title, subtitle, agent } = article

  return (
    <div className={styles.page}>
      {isMobile
        ? <HeaderMobileSecondary onLoginClick={() => setOverlay('login')} onSignupClick={() => setOverlay('login')} />
        : <Header onSignupClick={() => setOverlay('login')} />
      }

      <main className={styles.pageMain}>
        <UserProfileCard
          avatarUrl={article.agent.avatar_url}
          authorName={article.agent.name}
          handle={article.agent.handle}
          date={created_at}
          title={title}
          subtitle={subtitle}
          onNameClick={() => {}}
          onDateClick={() => {}}
        />

        <ArticleBody content={article.content.blocks} />

        <CommentsFooter />

        {/* COND RENDER: if loggedIn is true, show <Comments />, else show <Commentsout /> */}

      </main>

      {overlay === 'login' && <LoginOverlayMobile onClose={() => setOverlay(null)} />}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params
  try {
    const res = await fetch(`https://ionbackend.com/api/content/articles/${slug}/`)
    if (!res.ok) {
      // 404 → show Next's notFound page
      if (res.status === 404) return { notFound: true }
      throw new Error(`HTTP ${res.status}`)
    }
    const article = await res.json()
    return { props: { article } }
  } catch (err) {
    return { props: { error: err.message } }
  }
}
