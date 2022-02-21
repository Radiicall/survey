import Link from 'next/link'
import Script from 'next/script';

export default function Home() {
  const answer = event => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const exp = document.getElementById("exp").value;
    console.log(name, exp)
  }
  return (
    <>
      <h1>Spørreundersøkelse</h1>
      <form onSubmit={answer}>
        <p>Name:</p>
        <input id="name" type="text" placeholder='Ex: John Doe' autoComplete="name" required />
        <p>d</p>
        <label htmlFor="Experience">Rate your Experience with the program.</label>
        <select defaultValue={"5"} name="exp" id="exp">
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
        <button type="submit">Send Response</button>
      </form>
      <footer>
        Created by{' '}
        <Link href="https://github.com/Radiicall">Radical</Link>
      </footer>
    </>
  )
}
