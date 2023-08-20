import useTranslation from 'next-translate/useTranslation'

import ProductCarousel from '@/components/molecules/ProductCarousel'

const NewProductCarousel = () => {
  const { t } = useTranslation()

  return (
    <ProductCarousel
      label={t('new_product')}
      products={[
        {
          id: 1,
          name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 1',
          img: 'https://picsum.photos/600/600',
          price: 99999999,
          inventory: 0
        },
        {
          id: 2,
          name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 2',
          img: 'https://picsum.photos/600/600',
          price: 99999999,
          inventory: 10,
          isNew: true
        },
        {
          id: 3,
          name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 3',
          img: 'https://picsum.photos/600/600',
          price: 99999999,
          inventory: 0
        },
        {
          id: 4,
          name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 4',
          img: 'https://picsum.photos/600/600',
          price: 99999999,
          inventory: 10,
          isNew: true
        },
        {
          id: 5,
          name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 5',
          img: 'https://picsum.photos/600/600',
          price: 99999999,
          inventory: 0
        },
        {
          id: 6,
          name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 6',
          img: 'https://picsum.photos/600/600',
          price: 99999999,
          inventory: 10,
          isNew: true
        }
      ]}
    />
  )
}

export default NewProductCarousel
