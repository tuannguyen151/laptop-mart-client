import useTranslation from 'next-translate/useTranslation'
import dynamic from 'next/dynamic'

import CartDrawer from '../CartDrawer'

import ButtonOpenCartDrawer from '@/components/atoms/ButtonOpenCartDrawer'
import CartEmpty from '@/components/atoms/CartEmpty'

import useCart from '@/hooks/useCart'

import { formatPriceToVND } from '@/lib/utils'

const CardHeader = () => {
  const { t } = useTranslation()
  const { totalQuantity, totalAmount } = useCart()

  return (
    <div className='dropdown dropdown-end'>
      <label tabIndex={0} className='btn btn-ghost btn-circle'>
        <div className='indicator'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-5 w-5'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth='2'
              d='M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z'
            />
          </svg>
          <span className='badge badge-sm indicator-item'>{totalQuantity}</span>
        </div>
      </label>
      <div
        tabIndex={0}
        className='mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow border border-base-200 text-base-content'
      >
        <div className='card-body'>
          {totalAmount === 0 ? (
            <CartEmpty />
          ) : (
            <>
              <span className='font-bold text-lg'>
                {totalQuantity} {t('items')}
              </span>
              <span className='text-accent'>
                {t('total')}: {formatPriceToVND(totalAmount)}
              </span>
              <div className='card-actions'>
                <ButtonOpenCartDrawer />
              </div>
            </>
          )}
        </div>
      </div>

      <CartDrawer />
    </div>
  )
}

// Disable server-side rendering
export default dynamic(() => Promise.resolve(CardHeader), {
  ssr: false
})
