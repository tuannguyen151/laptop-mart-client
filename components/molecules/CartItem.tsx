import Image from 'next/image'
import Link from 'next/link'

import ProductQuantitySelector from './ProductQuantitySelector'

import useCart from '@/hooks/useCart'

import { IProductCart } from '@/store/cart/cart.slice'

import { PRODUCTS } from '@/constants/routes'
import { formatPriceToVND, replaceValuesInUrl } from '@/lib/utils'

interface IProps {
  product: IProductCart
}

const CartItem = ({ product }: IProps) => {
  const { updateProductQuantity, removeFromCart } = useCart()

  const handleChangeQuantity = (newQuantity: number) => {
    updateProductQuantity(product.id, newQuantity)
  }

  const handleRemoveProduct = () => {
    removeFromCart(product.id)
  }

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
        <div className='flex-1'>
          <Link
            href={replaceValuesInUrl(PRODUCTS.SHOW, {
              id: product.id
            })}
            className='link link-hover text-lg font-semibold leading-none'
          >
            {product.name}
          </Link>
        </div>

        <h6 className='text-lg font-semibold text-error leading-none'>
          {formatPriceToVND(product.price)}
        </h6>

        <ProductQuantitySelector
          quantity={product.quantity}
          inventory={product.inventory}
          onChange={handleChangeQuantity}
        />
      </div>
    </div>
  )
}

export default CartItem
