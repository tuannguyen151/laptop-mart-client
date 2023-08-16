import Head from 'next/head'

import Layout from '@/components/Layout'
import ToggleTheme from '@/components/molecules/ToggleTheme'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HOME</title>
        <meta name='description' content='HOME description' />
      </Head>

      <h1>Home</h1>

      <ToggleTheme />
    </Layout>
  )
}
