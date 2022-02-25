import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <>
      <h1>Survey</h1>
      <div>
        <form>
          <label>Name *:</label><br /><br />
          <input className={styles.input} id="name" type="text" placeholder='Ex: John Doe' autoComplete="name" required /><br /><br /><br />
          <label>Email *:</label><br /><br />
          <input className={styles.input} id="email" type="text" placeholder='email@email.com' autoComplete='email' /><br /><br /><br />
          <label htmlFor="Experience">Rate your Experience with the program *:</label><br /><br />
          <select required className={styles.button} defaultValue={"5"} name="exp" id="exp">
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
          </select><br /><br /><br />
          <label>Why did you delete the program? *</label><br /><br />
          <select 
          required
          className={styles.button} 
          name="why" 
          id="why">
            <option value="I didn't like it">I didn&apos;t like it</option>
            <option value="It was too expensive">It was too expensive</option>
            <option value="I didn't mean to!">I didn&apos;t mean to!</option>
            <option value="The program was too hard to use">The program was too hard to use</option>
            <option value="It was taking up a lot of storage">It was taking up a lot of storage</option>
            <option value="Other">Other</option>
          </select><br /><br /><br />
          <label>Did you have any other issues?</label><br /><br />
          <textarea className={styles.textarea} minLength={50} cols={40} rows={5}></textarea><br /><br /><br />
          <button className={styles.button} type="submit">Send Response</button>
        </form>
      </div>
      <footer><br /><br />
        Created by{' '}
        <Link href="https://github.com/Radiicall">Benjamin</Link>
      </footer>
    </>
  )
}
