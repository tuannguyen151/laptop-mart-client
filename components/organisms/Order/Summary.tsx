import useTranslation from 'next-translate/useTranslation'

import useCart from '@/hooks/useCart'

import { formatPriceToVND } from '@/lib/utils'

const OrderSummary = () => {
  const { t } = useTranslation()
  const { totalAmount } = useCart()

  return (
    <div className='border rounded-lg shadow-md p-4 sticky top-2 flex flex-col gap-1'>
      <div>
        <span>{t('subtotal')}</span>
        <span className='float-right font-semibold'>
          {formatPriceToVND(totalAmount)}
        </span>
      </div>

      <div>
        <span>{t('transport_fee')}</span>
        <span className='float-right font-semibold'>?</span>
      </div>

      <div>
        <span>{t('taxes')}</span>
        <span className='float-right font-semibold'>{formatPriceToVND(0)}</span>
      </div>

      <div className='text-xl font-semibold '>
        <span>{t('total')}</span>
        <span className='float-right text-error'>
          {formatPriceToVND(totalAmount)}
        </span>
      </div>

      <div className='text-sm text-gray-500 self-end italic'>
        <span>({t('shipping_fee_is_calculated_receipt')})</span>
      </div>
    </div>
  )
}

export default OrderSummary
