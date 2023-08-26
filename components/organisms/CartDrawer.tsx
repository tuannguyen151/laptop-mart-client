import useTranslation from 'next-translate/useTranslation'

import { useSelector } from 'react-redux'

import CartEmpty from '../atoms/CartEmpty'
import CartFooter from '../molecules/CartFooter'
import CartHeader from '../molecules/CartHeader'
import CartItem from '../molecules/CartItem'

import { cartProductsSelector } from '@/store/cart/cart.selector'

const CartDrawer = () => {
  const { t } = useTranslation()
  const cartProducts = useSelector(cartProductsSelector)

  return (
    <div className='drawer drawer-end'>
      <input id='cart-drawer' type='checkbox' className='drawer-toggle' />

      <div className='drawer-side z-50'>
        <label htmlFor='cart-drawer' className='drawer-overlay'></label>

        <div className='px-4 w-80 lg:w-96 min-h-full h-fit flex flex-col bg-base-200 text-base-content'>
          <CartHeader />

          <div className='flex flex-col gap-4 flex-1 pb-4'>
            {cartProducts.length === 0 && (
              <div className='flex items-center justify-center h-96'>
                <CartEmpty />
              </div>
            )}
            {cartProducts.map((product) => (
              <CartItem key={product.id} product={product} />
            ))}
          </div>

          {cartProducts.length !== 0 && <CartFooter />}
        </div>
      </div>
    </div>
  )
}

export default CartDrawer
