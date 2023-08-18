import { ReactNode } from 'react'

import { Splide, SplideSlide, SplideTrack } from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

import { IProps as IProductCartProps } from './ProductCard'
import ProductCard from './ProductCard'

interface IProps {
  label: string | ReactNode
  products: IProductCartProps[]
}

const ProductCarousel = ({ label, products }: IProps) => {
  return (
    <>
      <h3 className='text-2xl font-bold mb-2'>{label}</h3>

      <Splide
        options={{
          rewind: true,
          autoplay: true,
          interval: 5000,
          arrows: false,
          perPage: 4,
          gap: '1rem',
          breakpoints: {
            640: {
              perPage: 1
            },
            1024: {
              perPage: 2
            },
            1280: {
              perPage: 3
            }
          }
        }}
        hasTrack={false}
      >
        <SplideTrack className='pb-8'>
          {products.map((product) => (
            <SplideSlide key={product.name}>
              <ProductCard
                name={product.name}
                img={product.img}
                price={product.price}
                inventory={product.inventory}
                isNew={product.isNew}
              />
            </SplideSlide>
          ))}
        </SplideTrack>
      </Splide>
    </>
  )
}

export default ProductCarousel
