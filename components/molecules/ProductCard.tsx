import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

import AddToCartIcon from '../atoms/icons/AddToCart'

import { PRODUCTS } from '@/constants/routes'
import { formatPriceToVND, replaceValuesInUrl } from '@/lib/utils'

export interface IProps {
  id: number
  name: string
  img: string
  price: number
  inventory: number
  isNew?: boolean
}

const ProductCard = ({ id, name, img, price, inventory, isNew }: IProps) => {
  const { t } = useTranslation()

  return (
    <div className='card card-compact w-full min-h-full bg-base-100 border border-base-200 shadow-xl'>
      <figure>
        <Image
          src={img}
          alt={name}
          className='h-64 w-full object-cover'
          height={256}
          width={256}
        />
      </figure>

      <div className='card-body'>
        <Link
          href={replaceValuesInUrl(PRODUCTS.SHOW, {
            id
          })}
        >
          <h2 className='card-title leading-5 text-base'>
            {name}
            {isNew && <div className='badge badge-primary'>{t('new')}</div>}
          </h2>
        </Link>

        <div className='mt-auto flex flex-col gap-2'>
          <div className='card-actions justify-end font-bold text-lg'>
            {formatPriceToVND(price)}
          </div>

          <div className='card-actions justify-end'>
            {inventory > 0 ? (
              <button className='btn btn-sm btn-circle btn-outline btn-info'>
                <AddToCartIcon className='w-6 h-6' />
              </button>
            ) : (
              <button className='btn btn-sm btn-outline btn-success'>
                {t('contact')}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductCard
