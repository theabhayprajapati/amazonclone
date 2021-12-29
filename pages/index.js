import Head from 'next/head'
import Image from 'next/image'
import Header from '../src/Components/Header'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <header>
        <title>Amazon 2.0</title>
      </header>
      <Header />
    </div>
  )
}
