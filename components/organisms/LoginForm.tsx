import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import useLoginForm from '@/hooks/auth/useLoginForm.hook'

import { FORGOT_PASSWORD } from '@/constants/routes'

const LoginForm = () => {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
    onSubmit
  } = useLoginForm()

  return (
    <form onSubmit={onSubmit}>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('account')}</span>
        </label>
        <input
          type='text'
          placeholder={t('type_your_account')}
          className={`input input-bordered ${
            errors.username ? 'input-error' : ''
          }`}
          {...register.username}
        />
        <label className='label'>
          <span className='label-text-alt text-error'>
            {errors.username?.message}
          </span>
        </label>
      </div>
      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('password')}</span>
        </label>
        <input
          type='password'
          placeholder={t('type_your_password')}
          className={`input input-bordered ${
            errors.password ? 'input-error' : ''
          }`}
          {...register.password}
        />
        <label className='label'>
          <span className='label-text-alt text-error'>
            {errors.password?.message}
          </span>
          <Link
            href={FORGOT_PASSWORD}
            className='label-text-alt link link-hover'
          >
            {t('forgot_password')}
          </Link>
        </label>
      </div>
      <div className='form-control mt-6'>
        <button
          className={`btn btn-primary ${
            Object.keys(errors).length !== 0
              ? 'opacity-20 pointer-events-none'
              : ''
          }`}
        >
          {t('login')}
        </button>
      </div>
    </form>
  )
}

export default LoginForm
