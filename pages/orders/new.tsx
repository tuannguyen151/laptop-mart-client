import dynamic from 'next/dynamic'
import Head from 'next/head'
import { useRouter } from 'next/router'

import Layout from '@/components/Layout'
import NewTemplate from '@/components/templates/Order/new'

import { useAuth } from '@/contexts/auth'

import { LOGIN } from '@/constants/routes'

const New = () => {
  const router = useRouter()
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    router.push(LOGIN)
    return <></>
  }

  return (
    <Layout>
      <Head>
        <title>Order New</title>
      </Head>

      <NewTemplate />
    </Layout>
  )
}

export default dynamic(() => Promise.resolve(New), {
  ssr: false
})
