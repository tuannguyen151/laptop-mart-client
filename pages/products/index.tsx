import Head from 'next/head'

import Layout from '@/components/Layout'
import List from '@/components/templates/Product/List'

const index = () => {
  return (
    <Layout>
      <Head>
        <title>Products List</title>
        <meta name='description' content='Products List description' />
      </Head>

      <List />
    </Layout>
  )
}

export default index
