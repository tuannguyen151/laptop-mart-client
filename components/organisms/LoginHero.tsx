import useTranslation from 'next-translate/useTranslation'
import Link from 'next/link'

import LoginForm from './LoginForm'

import { useAuth } from '@/contexts/auth'

import { REGISTER } from '@/constants/routes'

const LoginHero = () => {
  const { isLoggedIn, isLoading } = useAuth()
  const { t } = useTranslation()

  if (isLoading)
    return (
      <div className='min-h-[25rem] rounded-box bg-slate-100 dark:bg-slate-800 animate-pulse' />
    )

  if (isLoggedIn) return null

  return (
    <div
      className='hero min-h-[25rem] rounded-box'
      style={{
        backgroundImage: 'url(https://picsum.photos/1920/1080)'
      }}
    >
      <div className='hero-overlay bg-opacity-60 rounded-box' />

      <div className='hero-content flex-col lg:flex-row-reverse'>
        <div className='text-center lg:text-left text-neutral-content'>
          <h1 className='text-5xl font-bold'>{t('login_now')}</h1>
          <p className='pt-6 pb-3'>{t('login_description')}</p>
          <Link href={REGISTER} className='btn btn-outline btn-info'>
            {t('register')}
          </Link>
        </div>

        <div className='card max-sm:card-compact flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100'>
          <div className='card-body'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginHero
