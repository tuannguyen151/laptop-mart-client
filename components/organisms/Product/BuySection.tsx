import useTranslation from 'next-translate/useTranslation'

import { useState } from 'react'

import AddToCartIcon from '@/components/atoms/icons/AddToCart'
import ProductQuantitySelector from '@/components/molecules/ProductQuantitySelector'

import useCart from '@/hooks/useCart'

import { IProduct, IProductVariant } from '@/types/response/product'

interface IProps {
  product: IProduct | IProductVariant
}

const BuySection = ({ product }: IProps) => {
  const { t } = useTranslation()
  const { addToCart } = useCart()

  const [quantity, setQuantity] = useState(1)

  const handleAddToCart = () => {
    addToCart({ ...product, image: product.images[0].url }, quantity)
  }

  if (product.inventory > 0)
    return (
      <div>
        <p>
          <span className='font-semibold mb-2'>{t('quantity_in_stock')}: </span>
          <span className='font-bold text-error'>{product.inventory}</span>
        </p>

        <div className='mt-2 flex gap-x-8 gap-y-2 max-lg:flex-col'>
          <ProductQuantitySelector
            quantity={quantity}
            inventory={product.inventory}
            onChange={setQuantity}
          />

          <button
            className='btn btn-sm btn-info text-white max-lg:self-start'
            onClick={handleAddToCart}
          >
            <AddToCartIcon className='w-6 h-6' />
            {t('add_to_cart')}
          </button>
        </div>
      </div>
    )

  return (
    <div>
      <p className='font-semibold mb-2'>{t('out_of_stock')}</p>
      <button className='btn btn-sm btn-outline btn-success'>
        {t('contact')}
      </button>
    </div>
  )
}

export default BuySection
