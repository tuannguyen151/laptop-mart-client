import useTranslation from 'next-translate/useTranslation'

const CartEmpty = () => {
  const { t } = useTranslation()

  return <span className='text-sm font-medium'>{t('cart_is_empty')}</span>
}

export default CartEmpty
