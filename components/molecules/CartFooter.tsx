import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import useCart from '@/hooks/useCart'

import { formatPriceToVND } from '@/lib/utils'

const CartFooter = () => {
  const { t } = useTranslation()
  const { totalAmount } = useCart()

  return (
    <div className='bg-base-200 px-4 -mx-4 py-4 sticky bottom-0 border-t border-gray-300'>
      <div className='flex justify-between'>
        <h6 className='text-lg font-semibold'>{t('subtotal')}</h6>

        <h6 className='text-lg font-semibold text-error'>
          {formatPriceToVND(totalAmount)}
        </h6>
      </div>

      <p className='mt-0.5 text-sm text-gray-500'>
        {t('shipping_calculated_at_checkout')}
      </p>

      <div className='mt-4'>
        <Link href='#' className='btn btn-primary btn-block text-white'>
          {t('checkout')}
        </Link>
      </div>
    </div>
  )
}

export default CartFooter
