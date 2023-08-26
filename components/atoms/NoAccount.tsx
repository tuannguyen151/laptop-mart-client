import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { REGISTER } from '@/constants/routes'

const NoAccount = () => {
  const { t } = useTranslation()

  return (
    <span className='text-sm'>
      {t('no_account')}{' '}
      <Link href={REGISTER} className='link link-accent'>
        {t('register_now')}
      </Link>
    </span>
  )
}

export default NoAccount
