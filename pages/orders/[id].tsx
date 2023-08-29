import Head from 'next/head'

import Layout from '@/components/Layout'
import ShowTemplate from '@/components/templates/Order/Show'

const Show = () => {
  return (
    <Layout>
      <Head>
        <title>Order Detail</title>
      </Head>

      <ShowTemplate />
    </Layout>
  )
}

// TODO: Set Authenticated
export default Show
