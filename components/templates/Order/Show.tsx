import useTranslation from 'next-translate/useTranslation'

import ListItems from '@/components/organisms/Order/ListItems'
import OrderDetail from '@/components/organisms/Order/OrderDetail'
import PaymentMethod from '@/components/organisms/Order/PaymentMethod'

import { IProductCart } from '@/store/cart/cart.slice'

import { ORDER } from '@/constants/master_data'
import { IOrderResponse } from '@/types/response/order'

const ShowTemplate = () => {
  const { t } = useTranslation()
  // TODO: Get order from orders service API
  const order: IOrderResponse = {
    id: 1,
    recipientName: 'Nguyen Van A',
    recipientPhone: '0123456789',
    status: 0,
    totalAmount: 300000,
    shippingAddress: '219 Trung Kinh, Yen Hoa, Cau Giay, Ha Noi',
    note: 'Giao hang nhanh',
    orderItems: [
      {
        id: 1,
        orderId: 1,
        productId: 1,
        quantity: 4,
        price: 50000
      },
      {
        id: 2,
        orderId: 1,
        productId: 2,
        quantity: 1,
        price: 100000
      }
    ],
    orderPayment: {
      id: 1,
      orderId: 1,
      status: 0,
      method: 2,
      createdAt: '2021-08-01T00:00:00.000Z'
    },
    createdAt: '2021-08-01T00:00:00.000Z'
  }

  // TODO: Get products from products service API
  const products = [
    {
      id: 1,
      name: 'Product 1',
      price: 50000,
      inventory: 10,
      images: [{ url: 'https://picsum.photos/300/300' }]
    },
    {
      id: 2,
      name: 'Product 2',
      price: 100000,
      inventory: 10,
      images: [{ url: 'https://picsum.photos/300/300' }]
    }
  ]

  const cartProducts: IProductCart[] = order.orderItems.map((item) => {
    const product = products.find((product) => product.id === item.productId)

    return {
      id: product?.id || 0,
      name: product?.name || '',
      price: item.price,
      inventory: product?.inventory || 0,
      image: product?.images[0].url || '',
      quantity: item.quantity
    }
  })

  return (
    <div className='my-4 grid lg:grid-cols-2 gap-x-10 gap-y-4'>
      <div className='overflow-x-auto max-lg:order-2'>
        <h5 className='text-xl font-semibold'>{t('product_list')}</h5>

        <div className='overflow-x-auto'>
          <ListItems products={cartProducts} />
        </div>
      </div>

      <div>
        <h5 className='text-xl font-semibold mb-2'>{t('order_detail')}</h5>

        <OrderDetail order={order} />

        {ORDER.STATUS[order.status] === 'waiting_for_payment' && (
          <div className='mt-2 text-right'>
            <button className='btn btn-neutral'>{t('cancel_order')}</button>
          </div>
        )}

        {ORDER.STATUS[order.status] === 'waiting_for_payment' && (
          <div className='mt-4'>
            <h5 className='text-xl font-semibold mb-2'>
              {t('payment_method_title')}
            </h5>

            <PaymentMethod
              onPayment={(method) => console.log('method', method)}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default ShowTemplate
