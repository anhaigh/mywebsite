import Head from 'next/head'
import Image from 'next/image'
import Footer from '../comps/Footer'
import Navbar from '../comps/Navbar'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <h1 className={styles.title}>Home Page</h1>
      <p className={styles.text}>Lots of text for paragraph 1.Lots of text for paragraph 1.Lots of text for paragraph 1.Lots of text for paragraph 1.</p>
      <p className={styles.text}>Lots of text for paragraph 2.Lots of text for paragraph 2.Lots of text for paragraph 2.Lots of text for paragraph 2.</p>
      <Link href='/professionalgrowth'><a className={styles.btn}>Go to Professional Growth Page</a></Link>
    </div>
  )
}
