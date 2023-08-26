import Image from 'next/image'

import NoAccount from '@/components/atoms/NoAccount'
import LoginBanner from '@/components/organisms/LoginBanner'
import LoginForm from '@/components/organisms/LoginForm'

import logoImage from '@/public/images/logo.png'

const LoginTemplate = () => {
  return (
    <section className='flex-1 py-4 lg:flex lg:flex-wrap items-center justify-center'>
      <div className='lg:flex lg:flex-wrap rounded-box shadow-lg dark:bg-base-200'>
        <div className='p-4 md:px-0 lg:w-6/12'>
          <div className='md:mx-6 md:p-12'>
            <div className='text-center'>
              <Image
                src={logoImage}
                alt='logo'
                width={256}
                height={256}
                className='mx-auto w-48 rounded-lg'
              />

              <h4 className='mb-12 mt-1 pb-1 text-2xl font-semibold'>
                LAPTOP MART
              </h4>
            </div>

            <LoginForm />

            <div className='mt-2'>
              <NoAccount />
            </div>
          </div>
        </div>

        <LoginBanner />
      </div>
    </section>
  )
}

export default LoginTemplate
