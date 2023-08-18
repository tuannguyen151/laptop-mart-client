import { GetStaticProps } from 'next'
import Head from 'next/head'

import Layout from '@/components/Layout'
import ShowTemplate from '@/components/templates/Product/Show'

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
  // TODO Fetch list products
  const listProducts: any = []

  const paths = listProducts.map((product: any) => ({
    params: { id: product.id.toString() }
  }))

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  // TODO: Fetch product by id
  const product: IProduct = {
    id: 1,
    parentId: null,
    name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 1',
    price: 1100,
    inventory: 32,
    quantitySold: 0,
    weight: 1.1,
    description: `<h2>Lenovo Laptop - Đối tác hoàn hảo cho công việc và giải trí</h2><p>  Lenovo Laptop là dòng sản phẩm laptop đa năng, mạnh mẽ và hiệu quả, mang lại trải nghiệm tuyệt vời cho cả công việc và giải trí. Với thiết kế chất lượng và hiệu suất ấn tượng, Lenovo Laptop đã khẳng định vị thế của mình trong thị trường công nghệ.</p><p>  Với màn hình chất lượng cao, Lenovo Laptop mang đến hình ảnh sắc nét và màu sắc trung thực. Được trang bị bộ vi xử lý mạnh mẽ và dung lượng RAM đáng kinh ngạc, bạn có thể xử lý nhiều tác vụ cùng lúc mà không gặp trở ngại.</p><p>  Không chỉ về hiệu suất, Lenovo Laptop còn chú trọng đến thiết kế mỏng nhẹ và bền bỉ. Với vật liệu cao cấp, sản phẩm này không chỉ là một công cụ làm việc mà còn là một biểu tượng thời trang.</p><h2>Tính năng nổi bật</h2><ul>  <li><strong>Màn hình chất lượng:</strong> Hiển thị hình ảnh sắc nét và màu sắc trung thực.</li>  <li><strong>Hiệu suất ấn tượng:</strong> Bộ vi xử lý mạnh mẽ và RAM đáng kinh ngạc cho khả năng xử lý tốt.</li>  <li><strong>Thiết kế mỏng nhẹ:</strong> Dễ dàng mang theo và sử dụng trong mọi tình huống.</li>  <li><strong>Độ bền cao:</strong> Vật liệu cao cấp mang lại độ bền và sự bảo vệ cho sản phẩm.</li></ul><p>  Với Lenovo Laptop, bạn không chỉ có một công cụ làm việc hiệu quả mà còn là một người bạn đồng hành trong mọi chặng đường của cuộc sống.</p>`,
    createdAt: '2023-08-14T07:35:52.000Z',
    images: [
      {
        url: 'https://picsum.photos/800/800'
      },
      {
        url: 'https://picsum.photos/600/600'
      }
    ],
    color: {
      id: 2,
      name: 'Trắng',
      hex_code: 'F5F5F5'
    },
    display: {
      id: 1,
      size: 13.4
    },
    graphicsCard: {
      id: 1,
      name: 'VGA NVIDIA'
    },
    manufacturer: {
      id: 1,
      name: 'ACER'
    },
    operatingSystem: {
      id: 1,
      name: 'Windows'
    },
    processor: {
      id: 1,
      name: 'Intel Core i3'
    },
    ram: {
      id: 1,
      size: 4
    },
    refreshRate: {
      id: 1,
      rate: 60
    },
    resolution: {
      id: 2,
      name: 'Full HD (1920x1080)'
    },
    storage: {
      id: 1,
      type: 'SSD',
      size: 128
    },
    variants: [
      {
        id: 2,
        parentId: 1,
        name: '82SH002TVN - Đen',
        price: 1000,
        inventory: 0,
        quantitySold: 0,
        weight: 1,
        description: 'description',
        createdAt: '2023-08-14T09:02:51.000Z',
        color: {
          id: 1,
          name: 'Đen',
          hex_code: '333333'
        },
        graphicsCard: {
          id: 2,
          name: 'VGA AMD'
        },
        images: [
          {
            url: 'https://picsum.photos/600/600'
          }
        ]
      },
      {
        id: 3,
        parentId: 1,
        name: '82SH002TVN - Bạc',
        price: 1000,
        inventory: 8,
        quantitySold: 0,
        weight: 1.05,
        description: 'description variant 2',
        createdAt: '2023-08-14T09:05:48.000Z',
        color: {
          id: 3,
          name: 'Bạc',
          hex_code: 'B0B0B0'
        },
        images: [
          {
            url: 'https://picsum.photos/600/600'
          }
        ]
      }
    ]
  }

  return {
    props: {
      product
    },
    revalidate: 60
  }
}

export default Show
