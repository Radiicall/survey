import Head from 'next/head'
import '../styles/globals.css'

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <Head>
        <title>Survey</title>
        <link href="/favicon.ico" />
      </Head>
    </>
  )
}
