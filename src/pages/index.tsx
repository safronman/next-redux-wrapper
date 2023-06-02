import type { NextPage } from 'next'
import Head from 'next/head'

import Counter from '../features/counter/Counter'
import styles from '../styles/Home.module.css'
import Link from 'next/link';

const IndexPage: NextPage = () => {
  return (
    <div className={styles.container}>
			<Link href={'/posts'}><h1>posts</h1></Link>
      <Head>
        <title>Redux Toolkit</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <img src="/logo.svg" className={styles.logo} alt="logo" />
        <Counter />
      </header>
    </div>
  )
}

export default IndexPage
