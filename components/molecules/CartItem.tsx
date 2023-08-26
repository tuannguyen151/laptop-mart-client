import Image from 'next/image'

import { useEffect, useState } from 'react'

import ProductQuantitySelector from './ProductQuantitySelector'

import useCart from '@/hooks/useCart'

import { IProductCart } from '@/store/cart/cart.slice'

import { formatPriceToVND } from '@/lib/utils'

interface IProps {
  product: IProductCart
}

const CartItem = ({ product }: IProps) => {
  const { updateProductQuantity, removeFromCart } = useCart()

  const [quantity, setQuantity] = useState(product.quantity)

  const handleChangeQuantity = (quantity: number) => {
    setQuantity(quantity)
    updateProductQuantity(product.id, quantity)
  }

  const handleRemoveProduct = () => {
    removeFromCart(product.id)
  }

  useEffect(() => {
    setQuantity(product.quantity)
  }, [product.quantity])

  return (
    <div className='relative grid grid-cols-3 bg-base-100 shadow-xl rounded-xl'>
      <div
        className='absolute -top-3 -right-3 tooltip tooltip-bottom'
        data-tip='Xóa'
      >
        <button
          className='btn btn-error btn-sm btn-circle text-white'
          onClick={handleRemoveProduct}
        >
          ⤫
        </button>
      </div>

      <div className='col-span-1'>
        <Image
          src={product.image}
          alt={product.name}
          width={200}
          height={300}
          className='rounded-l-xl w-full h-full object-cover'
        />
      </div>

      <div className='col-span-2 p-2 flex flex-col gap-2'>
        <h6 className='text-lg font-semibold leading-none flex-1'>
          {product.name}
        </h6>

        <h6 className='text-lg font-semibold text-error leading-none'>
          {formatPriceToVND(product.price)}
        </h6>

        <ProductQuantitySelector
          quantity={quantity}
          inventory={product.inventory}
          onChange={handleChangeQuantity}
        />
      </div>
    </div>
  )
}

export default CartItem
