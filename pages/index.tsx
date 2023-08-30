import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layout'
import HomeTemplate from '@/components/templates/Home'

import { fetcherListProduct } from '@/services/products/list'
import { IProductListItem } from '@/types/response/product'

interface IProps {
  listNewProducts: IProductListItem[]
  listBestSellerProducts: IProductListItem[]
}

export default function Home(props: IProps) {
  return (
    <Layout>
      <Head>
        <title>HOME</title>
        <meta name='description' content='HOME description' />
      </Head>

      <HomeTemplate {...props} />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const { rows: listNewProducts } = await fetcherListProduct({
    page: 1,
    pageSize: 8,
    sort: 'createdAt:desc'
  })

  const { rows: listBestSellerProducts } = await fetcherListProduct({
    page: 1,
    pageSize: 8,
    sort: 'quantitySold:desc'
  })

  return {
    props: {
      listNewProducts,
      listBestSellerProducts
    }
  }
}
