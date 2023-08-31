import Head from 'next/head'

import Layout from '@/components/Layout'
import PageWithAuth from '@/components/PageWithAuth'
import ProfileTemplate from '@/components/templates/Profile'

const Profile = () => {
  return (
    <Layout>
      <Head>
        <title>Profile</title>
      </Head>

      <ProfileTemplate />
    </Layout>
  )
}

export default PageWithAuth(Profile)
