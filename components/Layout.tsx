import { PropsWithChildren } from 'react'

import Footer from './organisms/Footer'
import Header from './organisms/Header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen relative'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-1'>
        <Header />

        {children}
      </div>

      <Footer />
    </div>
  )
}
