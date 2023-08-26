import Head from 'next/head'

import Layout from '@/components/Layout'
import LoginTemplate from '@/components/templates/Auth/Login'

const login = () => {
  return (
    <Layout>
      <Head>
        <title>Đăng nhập </title>
      </Head>

      <LoginTemplate />
    </Layout>
  )
}

export default login
