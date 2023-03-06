import '@/styles/globals.css'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { Fragment } from 'react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>

      <Head>
        <meta name='viewport' content='width=device-widthm initial-scale=1' />
      </Head>
      <SessionProvider session={pageProps.session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Fragment>
  )
}
