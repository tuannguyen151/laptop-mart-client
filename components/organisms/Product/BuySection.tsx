import useTranslation from 'next-translate/useTranslation'

import AddToCartIcon from '@/components/atoms/icons/AddToCart'
import ProductQuantitySelector from '@/components/molecules/ProductQuantitySelector'

interface IProps {
  inventory: number
}

const BuySection = ({ inventory }: IProps) => {
  const { t } = useTranslation()

  if (inventory > 0)
    return (
      <div>
        <p>
          <span className='font-semibold mb-2'>{t('quantity_in_stock')}: </span>
          <span className='font-bold text-error'>{inventory}</span>
        </p>

        <div className='mt-2 flex gap-x-8 gap-y-2 max-lg:flex-col'>
          <ProductQuantitySelector inventory={inventory} />

          <button className='btn btn-sm btn-info text-white max-lg:self-start'>
            <AddToCartIcon className='w-6 h-6' />
            {t('add_to_cart')}
          </button>
        </div>
      </div>
    )

  return (
    <div>
      <p className='font-semibold mb-2'>{t('out_of_stock')}</p>
      <button className='btn btn-sm btn-outline btn-success'>
        {t('contact')}
      </button>
    </div>
  )
}

export default BuySection
