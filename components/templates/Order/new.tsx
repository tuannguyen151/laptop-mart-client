import useTranslation from 'next-translate/useTranslation'

import { useSelector } from 'react-redux'

import OrderForm from '@/components/organisms/Order/Form'
import ListItems from '@/components/organisms/Order/ListItems'
import OrderSummary from '@/components/organisms/Order/Summary'

import { cartProductsSelector } from '@/store/cart/cart.selector'

const NewTemplate = () => {
  const { t } = useTranslation()
  const cartProducts = useSelector(cartProductsSelector)

  return (
    <div className='my-4 grid lg:grid-cols-3 lg:grid-flow-col gap-x-10 gap-y-4'>
      <div className='lg:col-span-2 overflow-x-auto max-lg:order-1'>
        <h5 className='text-xl font-semibold'>{t('product_list')}</h5>

        <div className='overflow-x-auto'>
          <ListItems products={cartProducts} />
        </div>
      </div>

      <div className='lg:col-span-2 max-lg:order-3'>
        <h5 className='text-xl font-semibold'>{t('shipping_address.title')}</h5>

        <OrderForm />
      </div>

      <div className='lg:col-span-1 lg:row-span-2 max-lg:order-2'>
        <h5 className='text-xl font-semibold mb-2'>{t('order')}</h5>

        <OrderSummary />
      </div>
    </div>
  )
}

export default NewTemplate
