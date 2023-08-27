import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { LOGIN } from '@/constants/routes'

const ExistsAccount = () => {
  const { t } = useTranslation()

  return (
    <span className='text-sm'>
      {t('exists_account')}{' '}
      <Link href={LOGIN} className='link link-primary'>
        {t('login_now')}
      </Link>
    </span>
  )
}

export default ExistsAccount
