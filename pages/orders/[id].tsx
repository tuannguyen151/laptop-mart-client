import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import ShowTemplate from '@/components/templates/Order/Show'

import { useAuth } from '@/contexts/auth'

import { LOGIN } from '@/constants/routes'

const Show = () => {
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    router.push(LOGIN)
    return <></>
  }

  return (
    <Layout>
      <Head>
        <title>Order Detail</title>
      </Head>

      <ShowTemplate />
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Show), {
  ssr: false
})
