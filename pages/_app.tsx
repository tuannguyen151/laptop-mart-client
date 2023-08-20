import type { AppProps } from 'next/app'
import Head from 'next/head'

import { Provider } from 'react-redux'

import Toast from '@/components/atoms/toast'

import { BaseProvider } from '@/contexts'

import store from '@/store'

import { fontBase } from '@/lib/font'
import '@/styles/globals.css'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Head>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <main className={`${fontBase.variable} font-sans`}>
        <BaseProvider>
          <Component {...pageProps} />
        </BaseProvider>

        <Toast />
      </main>
    </Provider>
  )
}
