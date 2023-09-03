import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import NoResultsFound from '@/components/atoms/NoResultsFound'
import OrderStatus from '@/components/atoms/OrderStatus'

import { ORDERS } from '@/constants/routes'
import {
  formatPriceToVND,
  formatTimeUTCStringToLocaleString,
  replaceValuesInUrl
} from '@/lib/utils'
import { useAllOrder } from '@/services/order/list'

const ListOrderItems = () => {
  const { t } = useTranslation()

  const { data, isLoading } = useAllOrder()

  return (
    <div className='overflow-x-auto max-w-full'>
      <table className='table'>
        <thead>
          <tr>
            <th></th>
            <th>{t('order_created_at')}</th>
            <th>{t('order_status_text')}</th>
            <th>{t('total_amount')}</th>
            <th>{t('shipping_address_text')}</th>
            <th>{t('shipping_address.recipient_name')}</th>
            <th>{t('shipping_address.recipient_phone')}</th>
          </tr>
        </thead>

        <tbody>
          {data?.length === 0 && (
            <tr>
              <td colSpan={7}>
                <NoResultsFound />
              </td>
            </tr>
          )}

          {isLoading ? (
            <tr>
              <td
                colSpan={7}
                className='h-11 bg-slate-100 dark:bg-slate-800 animate-pulse'
              ></td>
            </tr>
          ) : (
            data?.map((order) => (
              <tr key={order.id}>
                <td>
                  <Link
                    href={replaceValuesInUrl(ORDERS.SHOW, { id: order.id })}
                    className='link link-hover link-success'
                  >
                    {t('order_detail')}
                  </Link>
                </td>
                <td>{formatTimeUTCStringToLocaleString(order.createdAt)}</td>
                <td>
                  <OrderStatus status={order.status} />
                </td>
                <td>{formatPriceToVND(order.totalAmount)}</td>
                <td>{order.shippingAddress}</td>
                <td>{order.recipientName}</td>
                <td>{order.recipientPhone}</td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  )
}

export default ListOrderItems
