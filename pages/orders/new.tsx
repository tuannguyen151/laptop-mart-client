import dynamic from 'next/dynamic'
import Head from 'next/head'

import Layout from '@/components/Layout'
import NewTemplate from '@/components/templates/Order/new'

const New = () => {
  return (
    <Layout>
      <Head>
        <title>Order New</title>
      </Head>

      <NewTemplate />
    </Layout>
  )
}

// TODO: Set Authenticated
export default dynamic(() => Promise.resolve(New), {
  ssr: false
})
