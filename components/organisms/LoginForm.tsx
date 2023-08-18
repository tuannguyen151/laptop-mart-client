import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import { FORGOT_PASSWORD } from '@/constants/routes'

const LoginForm = () => {
  const { t } = useTranslation()

  return (
    <form>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('account')}</span>
        </label>
        <input
          type='text'
          placeholder={t('type_your_account')}
          className='input input-bordered'
        />
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('password')}</span>
        </label>
        <input
          type='password'
          placeholder={t('type_your_password')}
          className='input input-bordered'
        />
        <label className='label'>
          <Link
            href={FORGOT_PASSWORD}
            className='label-text-alt link link-hover'
          >
            {t('forgot_password')}
          </Link>
        </label>
      </div>
      <div className='form-control mt-6'>
        <button className='btn btn-primary'>{t('login')}</button>
      </div>
    </form>
  )
}

export default LoginForm
