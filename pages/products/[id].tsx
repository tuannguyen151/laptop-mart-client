import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layout'
import ShowTemplate from '@/components/templates/Product/Show'

import { fetchProduct } from '@/services/products/detail'
import { fetchAllProduct } from '@/services/products/list'
import { IProduct } from '@/types/response/product'

interface IProps {
  product: IProduct
}

const Show = ({ product }: IProps) => {
  return (
    <Layout>
      <Head>
        <title>{product.name}</title>
        <meta name='description' content={product.description} />
      </Head>

      <ShowTemplate product={product} />
    </Layout>
  )
}

export async function getStaticPaths() {
  const listProducts = await fetchAllProduct()

  const paths = listProducts.map((product) => ({
    params: { id: product.id.toString() }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps<IProps> = async ({ params }) => {
  const product = await fetchProduct((params?.id as number | undefined) ?? 0)

  return {
    props: {
      product
    },
    revalidate: 60
  }
}

export default Show
