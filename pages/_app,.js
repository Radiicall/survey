import Head from 'next/head'
import '../styles/global.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <link href="/favicon.ico" />
      </Head>
    </>
  )
}
