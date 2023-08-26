import { PropsWithChildren } from 'react'

import Footer from './organisms/Footer'
import Header from './organisms/Header'

export default function Layout({ children }: PropsWithChildren) {
  return (
    <div className='min-h-screen flex flex-col'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8 py-1 flex-1 flex flex-col'>
        <Header />

        {children}
      </div>

      <Footer />
    </div>
  )
}
