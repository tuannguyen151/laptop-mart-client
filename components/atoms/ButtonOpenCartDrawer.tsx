import useTranslation from 'next-translate/useTranslation'

const ButtonOpenCartDrawer = () => {
  const { t } = useTranslation()

  return (
    <label htmlFor='cart-drawer' className='btn btn-primary btn-block'>
      {t('view_cart')}
    </label>
  )
}

export default ButtonOpenCartDrawer
