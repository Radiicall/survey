import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  const answer = event => {
    event.preventDefault();

    console.log(answer.toString());
  }
  return (
    <>
      <Head>
        <title>Spørreundersøkelse</title>
      </Head>
      <h1>Spørreundersøkelse</h1>
      <form onSubmit={answer}>
        <p>Name:</p>
        <label htmlFor="name" />
        <input id="name" type="text" placeholder='Ex: John Doe' autoComplete="name" required />
        <button type="submit">Send Response</button>
      </form>
      <footer>
        Created by{' '}
        <Link href="https://github.com/Radiicall">Radical</Link>
      </footer>
    </>
  )
}
