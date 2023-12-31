import useTranslation from 'next-translate/useTranslation'
import Image from 'next/image'
import Link from 'next/link'

import SignInIcon from '@/components/atoms/icons/SignIn'

import { useAuth } from '@/contexts/auth'

import { LOGIN, PROFILE } from '@/constants/routes'

const ProfileHeader = () => {
  const { isLoading, isLoggedIn, logout } = useAuth()
  const { t } = useTranslation()

  if (isLoading)
    return (
      <div className='btn btn-ghost btn-circle animate-pulse bg-gray-dark rounded-full'></div>
    )

  if (!isLoggedIn)
    return (
      <Link href={LOGIN} className='btn btn-ghost btn-circle'>
        <SignInIcon />
      </Link>
    )

  return (
    <div className='dropdown dropdown-end text-base-content'>
      <label tabIndex={0} className='btn btn-ghost btn-circle avatar'>
        <div className='w-10 rounded-full'>
          <Image
            src='https://picsum.photos/300/300'
            alt='avatar'
            height={256}
            width={256}
          />
        </div>
      </label>
      <ul
        tabIndex={0}
        className='mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 border border-base-200'
      >
        <li>
          <Link href={PROFILE} className='justify-between'>
            {t('profile')}
            <span className='badge'>{t('new')}</span>
          </Link>
        </li>
        <li>
          <button onClick={logout}>{t('logout')}</button>
        </li>
      </ul>
    </div>
  )
}

export default ProfileHeader
