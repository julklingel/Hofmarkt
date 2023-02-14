import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
  <Fragment>
  <Head>
    <meta name='viewport' content='width=device-widthm initial-scale=1'/>
  </Head>
  <Component {...pageProps} />
  </Fragment>
)}
