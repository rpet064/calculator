import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Calculator from '../components/Calculator'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>Hello Calculator</title>
        <meta name="description" content="Calculator powered with NodeJs, ReactJs and Cpp" />
        <meta 
          name="keywords" content="React Next Node Cpp 
          Calculator Robert Pether Junior Front-End Developer Ios "/>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="shortcut icon" href="/images/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png"/>
        <link rel="mask-icon" href="/images/favicon-32x32.png" color="white"></link>
      </Head>
      <main className={styles.main}>
        <Calculator />
      </main>
    </>
  )
}
