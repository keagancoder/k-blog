import Head from 'next/head'
import Image from 'next/image'
import Link from 'next'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Layout from '../components/layout'
import utilStyles from '../styles/utils.module.css'

const inter = Inter({ subsets: ['latin'] })
const siteTitle = 'TTTT'
export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Your Self Introduction]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://www.nextjs.cn/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
