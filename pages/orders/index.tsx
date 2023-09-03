import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import ListTemplate from '@/components/templates/Order/List'

import { useAuth } from '@/contexts/auth'

import { LOGIN } from '@/constants/routes'

const Index = () => {
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    router.push(LOGIN)
    return <></>
  }

  return (
    <Layout>
      <Head>
        <title>Order List</title>
      </Head>

      <ListTemplate />
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(Index), {
  ssr: false
})
