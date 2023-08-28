import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

import { IProductCart } from '@/store/cart/cart.slice'

import { PRODUCTS } from '@/constants/routes'
import { formatPriceToVND, replaceValuesInUrl } from '@/lib/utils'

interface IProps {
  products: IProductCart[]
}

const ListItems = ({ products }: IProps) => {
  const { t } = useTranslation()

  return (
    <div className='max-w-full'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>{t('product_name')}</th>
            <th>{t('product_image')}</th>
            <th>{t('product_price')}</th>
            <th>{t('quantity_order')}</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product, index) => (
            <tr key={product.id}>
              <td>{index + 1}</td>
              <td>
                <Link
                  href={replaceValuesInUrl(PRODUCTS.SHOW, {
                    id: product.id
                  })}
                  className='link link-hover'
                >
                  {product.name}
                </Link>
              </td>
              <td>
                <Image
                  src={product.image}
                  alt={product.name}
                  width={300}
                  height={300}
                  className='w-20 object-cover rounded-md'
                />
              </td>
              <td>{formatPriceToVND(product.price)}</td>
              <td>{product.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ListItems
