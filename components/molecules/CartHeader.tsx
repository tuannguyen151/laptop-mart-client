import useTranslation from 'next-translate/useTranslation'

const CartHeader = () => {
  const { t } = useTranslation()

  return (
    <>
      <h4 className='text-2xl divider'>{t('cart_items')}</h4>
    </>
  )
}

export default CartHeader
