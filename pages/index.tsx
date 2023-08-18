import Head from 'next/head'

import Layout from '@/components/Layout'
import HomeTemplate from '@/components/templates/Home'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>HOME</title>
        <meta name='description' content='HOME description' />
      </Head>

      <HomeTemplate />
    </Layout>
  )
}
