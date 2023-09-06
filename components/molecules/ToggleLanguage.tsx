import Link from 'next/link'
import { useRouter } from 'next/router'

import LanguageIcon from '../atoms/icons/Language'
import UnitedKingdomIcon from '../atoms/icons/UnitedKingdom'
import VietnamIcon from '../atoms/icons/Vietnam'

const ToggleLanguage = () => {
  const router = useRouter()

  return (
    <div className='relative group'>
      <button className='flex h-10 w-10 items-center justify-center rounded-full bg-gray-dark text-white hover:text-primary'>
        <LanguageIcon className='w-5 h-5 text-white' />
      </button>

      <div className='absolute z-50 mt-6 group-hover:mt-1 top-full ltr:lg:right-full rtl:lg:left-full ltr:right-0 rtl:left-0 invisible shadow-lg opacity-0 p-3 text-sm font-medium text-black transition-all delay-75 group-hover:visible group-hover:opacity-100 flex justify-center gap-3 rounded-lg dark:text-white bg-white/90 dark:bg-gray-dark ltr:translate-x-10 rtl:-translate-x-10 w-28'>
        <Link
          href={router.asPath}
          locale={false}
          className={
            router.locale === 'vi'
              ? 'pointer-events-none opacity-30'
              : undefined
          }
        >
          <VietnamIcon className='w-9 h-9' />
        </Link>

        <Link
          href={router.asPath}
          locale='en'
          className={
            router.locale === 'en'
              ? 'pointer-events-none opacity-30'
              : undefined
          }
        >
          <UnitedKingdomIcon className='w-9 h-9' />
        </Link>
      </div>
    </div>
  )
}

export default ToggleLanguage
