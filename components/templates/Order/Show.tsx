import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import CancelOrder from '@/components/organisms/Order/CancelOrder'
import ListItems from '@/components/organisms/Order/ListItems'
import OrderDetail from '@/components/organisms/Order/OrderDetail'
import PaymentMethod from '@/components/organisms/Order/PaymentMethod'

import { IProductCart } from '@/store/cart/cart.slice'

import { ORDER } from '@/constants/master_data'
import { useFetchOrder } from '@/services/order/detail'
import { useFetchAllProductByIds } from '@/services/products/list'

const ShowTemplate = () => {
  const router = useRouter()
  const { id } = router.query
  const { t } = useTranslation()

  const { data: order } = useFetchOrder(Number(id as string))
  const { data: products } = useFetchAllProductByIds(
    order?.orderItems?.map((item) => item.productId).join(',')
  )

  const cartProducts: IProductCart[] | undefined =
    products.length === 0
      ? []
      : order?.orderItems?.map((item) => {
          const product = products?.find(
            (product) => product.id === item.productId
          )

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
          {cartProducts && <ListItems products={cartProducts} />}
        </div>
      </div>

      <div>
        <h5 className='text-xl font-semibold mb-2'>{t('order_detail')}</h5>

        {order && (
          <>
            <OrderDetail order={order} />

            {ORDER.STATUS[order.status] === 'waiting_for_payment' && (
              <div className='mt-2 text-right'>
                <CancelOrder id={order.id} />
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
          </>
        )}
      </div>
    </div>
  )
}

export default ShowTemplate
