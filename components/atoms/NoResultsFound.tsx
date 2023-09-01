import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'

import NoResultsFoundImage from '@/public/images/no-results-found.png'

const NoResultsFound = () => {
  const { t } = useTranslation()

  return (
    <div className='flex flex-col items-center justify-center'>
      <Image
        src={NoResultsFoundImage}
        width={500}
        height={500}
        alt='no-results-found'
      />

      <span className='font-bold'>{t('no_results_found')}</span>
    </div>
  )
}

export default NoResultsFound
