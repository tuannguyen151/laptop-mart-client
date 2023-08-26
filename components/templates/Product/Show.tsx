import { useState } from 'react'

import Gallery from '@/components/molecules/Gallery'
import ProductAttributes from '@/components/molecules/ProductAttributes'
import ProductDescription from '@/components/molecules/ProductDescription'
import ProductPrice from '@/components/molecules/ProductPrice'
import BuySection from '@/components/organisms/Product/BuySection'
import OptionRadioGroup from '@/components/organisms/Product/OptionRadioGroup'

import { IProduct } from '@/types/response/product'

interface IProps {
  product: IProduct
}
const ShowTemplate = ({ product }: IProps) => {
  const [variantSelected, setVariantSelected] = useState<number>()

  const variant = variantSelected
    ? product.variants?.find((variant) => variant.id === variantSelected)
    : null

  const displayedProduct = { ...product, ...variant }

  return (
    <div className='py-4'>
      <h4 className='text-2xl font-bold'>{product.name}</h4>

      <div className='divider' />

      <div className='grid lg:grid-cols-5 md:grid-cols-2 gap-x-8 gap-y-4 grid-cols-1'>
        <div className='lg:col-span-2'>
          <Gallery images={displayedProduct.images.map((image) => image.url)} />
        </div>

        <div className='lg:col-span-3 space-y-4'>
          <ProductAttributes {...displayedProduct} />

          <OptionRadioGroup
            product={product}
            onChange={(productId) => setVariantSelected(productId)}
          />

          <ProductPrice price={displayedProduct.price} />

          <BuySection product={displayedProduct} />
        </div>
      </div>

      {product.description && (
        <ProductDescription description={product.description} />
      )}
    </div>
  )
}

export default ShowTemplate
