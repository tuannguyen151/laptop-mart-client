import useTranslation from 'next-translate/useTranslation'

const Banner = () => {
  const { t } = useTranslation()

  return (
    <div
      className='hero min-h-[30rem] rounded-box'
      style={{
        backgroundImage:
          'url(https://fastly.picsum.photos/id/2/5000/3333.jpg?hmac=_KDkqQVttXw_nM-RyJfLImIbafFrqLsuGO5YuHqD-qQ)'
      }}
    >
      <div className='hero-overlay bg-opacity-60 rounded-box'></div>

      <div className='hero-content text-center text-neutral-content'>
        <div className='max-w-md'>
          <h1 className='mb-5 text-5xl font-bold'>LAPTOP MART</h1>
          <p className='mb-5'>{t('home_banner_description')}</p>
        </div>
      </div>
    </div>
  )
}

export default Banner
