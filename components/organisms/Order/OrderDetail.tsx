import useTranslation from 'next-translate/useTranslation'

import OrderStatus from '@/components/atoms/OrderStatus'

import {
  formatPriceToVND,
  formatTimeUTCStringToLocaleString
} from '@/lib/utils'
import { IOrderResponse } from '@/types/response/order'

interface IProps {
  order: IOrderResponse
}

const OrderDetail = ({ order }: IProps) => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col'>
      <div>
        <span>{t('order_datetime')}</span>
        <span className='float-right font-semibold'>
          {formatTimeUTCStringToLocaleString(order.createdAt, {
            lang: 'vi'
          })}
        </span>
      </div>

      <div>
        <span>{t('recipient_name')}</span>
        <span className='float-right font-semibold'>{order.recipientName}</span>
      </div>

      <div>
        <span>{t('recipient_phone')}</span>
        <span className='float-right font-semibold'>
          {order.recipientPhone}
        </span>
      </div>

      <div>
        <span>{t('shipping_address_text')}</span>
        <span className='float-right font-semibold'>
          {order.shippingAddress}
        </span>
      </div>

      <div>
        <span>{t('note')}</span>
        <span className='float-right font-semibold'>{order.note}</span>
      </div>

      <hr className='my-2' />

      <div>
        <span>{t('order_status_text')}</span>
        <span className='float-right font-semibold text-error'>
          <OrderStatus status={order.status} />
        </span>
      </div>

      <div>
        <span>{t('total')}</span>
        <span className='float-right font-semibold text-error'>
          {formatPriceToVND(order.totalAmount)}
        </span>
      </div>
    </div>
  )
}

export default OrderDetail
