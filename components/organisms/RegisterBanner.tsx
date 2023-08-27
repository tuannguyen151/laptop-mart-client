import useTranslation from 'next-translate/useTranslation'

const RegisterBanner = () => {
  const { t } = useTranslation()

  return (
    <div className='hidden lg:flex bg-gradient-to-r from-accent/60 to-accent items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none'>
      <div className='px-4 py-6 text-white md:mx-6 md:p-12'>
        <h5 className='mb-6 text-xl font-semibold'>{t('register')}</h5>

        <p className='text-sm'>{t('register_description')}</p>
      </div>
    </div>
  )
}

export default RegisterBanner
