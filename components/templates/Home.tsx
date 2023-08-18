import Banner from '../organisms/Home/Banner'
import LoginHero from '../organisms/LoginHero'
import BestSellerCarousel from '../organisms/Product/BestSellerCarousel'
import NewProductCarousel from '../organisms/Product/NewProductCarousel'

const HomeTemplate = () => {
  return (
    <>
      <div className='mt-4'>
        <Banner />
      </div>

      <div className='mt-4'>
        <LoginHero />
      </div>

      <div className='mt-4'>
        <BestSellerCarousel />
      </div>

      <div className='mt-4'>
        <NewProductCarousel />
      </div>
    </>
  )
}

export default HomeTemplate
