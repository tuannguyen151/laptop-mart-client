import Head from 'next/head'

import Layout from '@/components/Layout'
import RegisterTemplate from '@/components/templates/Auth/Register'

const Register = () => {
  return (
    <Layout>
      <Head>
        <title>Đăng ký</title>
      </Head>

      <RegisterTemplate />
    </Layout>
  )
}

export default Register
