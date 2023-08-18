import useTranslation from 'next-translate/useTranslation'

import { formatPriceToVND } from '@/lib/utils'

interface IProps {
  price: number
}

const ProductPrice = ({ price }: IProps) => {
  const { t } = useTranslation()

  return (
    <div>
      <h5 className='text-xl font-semibold'>{t('price')}</h5>

      <h3 className='text-3xl font-bold text-error'>
        {formatPriceToVND(price)}
      </h3>
    </div>
  )
}

export default ProductPrice
