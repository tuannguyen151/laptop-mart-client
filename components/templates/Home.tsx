import useTranslation from 'next-translate/useTranslation'

import ProductCarousel from '../molecules/ProductCarousel'
import Banner from '../organisms/Home/Banner'
import LoginHero from '../organisms/LoginHero'

import { IProductListItem } from '@/types/response/product'

interface IProps {
  listNewProducts: IProductListItem[]
  listBestSellerProducts: IProductListItem[]
}

const HomeTemplate = ({ listBestSellerProducts, listNewProducts }: IProps) => {
  const { t } = useTranslation()

  return (
    <div className='mt-4 space-y-4'>
      <div>
        <Banner />
      </div>
      <div>
        <LoginHero />
      </div>

      <div>
        <ProductCarousel
          label={t('best_seller')}
          products={listBestSellerProducts.map((product) => ({
            ...product,
            img: product.images[0]?.url
          }))}
        />
      </div>

      <div>
        <ProductCarousel
          label={t('new_product')}
          products={listNewProducts.map((product) => ({
            ...product,
            img: product.images[0]?.url
          }))}
        />
      </div>
    </div>
  )
}

export default HomeTemplate
