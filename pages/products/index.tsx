import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layout'
import List from '@/components/templates/Product/List'

import { fetcherListProduct } from '@/services/products/list'
import { IProductList } from '@/types/response/product'

interface IProps {
  count: IProductList['count']
  rows: IProductList['rows']
}

const index = (props: IProps) => {
  return (
    <Layout>
      <Head>
        <title>Products List</title>
        <meta name='description' content='Products List description' />
      </Head>

      <List {...props} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const { count, rows } = await fetcherListProduct()

  return {
    props: {
      count,
      rows
    }
  }
}

export default index
