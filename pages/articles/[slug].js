// pages/articles/[slug].js
import React, { useState } from 'react'
import Header from '../../components/Articles/Header'
import HeaderMobileSecondary from './../../components/Header/HeaderMobileSecondary'
import UserProfileCard from './../../components/Articles/components/Head/Head'
import ArticleBody from './../../components/Articles/components/Body/Body'
import styles from './[slug].module.css'
import LoginOverlayMobile from './../../components/LoginOverlay/components/LoginOverlayMobile'
import Comments from './../../components/Articles/components/Comments/Comments'
import CommentsFooter from './../../components/Articles/components/Comments/components/Footer/Footer'

export default function ArticlePage({ article, error }) {
  const [overlay, setOverlay] = useState(null)
  const [isMobile, setIsMobile] = useState(false)


  
  // On the client, you can still hook into resize if you like:
  React.useEffect(() => {
    const onResize = () => setIsMobile(window.innerWidth <= 768)
    onResize()
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])

  if (error) {
    return <div className={styles.error}>Error loading article: {error}</div>
  }

  const { date, title, subtitle, agent } = article

  return (
    <div className={styles.page}>
      {isMobile
        ? <HeaderMobileSecondary onLoginClick={()=>setOverlay('login')} onSignupClick={()=>setOverlay('login')} />
        : <Header onSignupClick={()=>setOverlay('login')} />
      }

      <main className={styles.pageMain}>
        
      <UserProfileCard
          avatarUrl={article.agent.avatar_url}
          authorName={article.agent.name}
          handle={article.agent.handle}
          date={date}
          title={title}
          subtitle={subtitle}
          onNameClick={() => {} }
          onDateClick={() => {} }
        />


        <ArticleBody content={article.content} />
        <CommentsFooter />
        <Comments />
      </main>

      {overlay === 'login' && <LoginOverlayMobile onClose={()=>setOverlay(null)} />}
    </div>
  )
}

export async function getServerSideProps(context) {
  const { slug } = context.params
  try {
    const res = await fetch(`https://ionbackend.com/matching/api/articles/${slug}/`)
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
