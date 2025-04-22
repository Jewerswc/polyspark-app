import Head from 'next/head';
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link 
          rel="stylesheet" 
          href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&display=swap" 
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
