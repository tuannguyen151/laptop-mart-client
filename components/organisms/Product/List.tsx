import ProductCard from '@/components/molecules/ProductCard'

import { IProductListItem } from '@/types/response/product'

interface IProps {
  products: IProductListItem[]
}

const ProductList = ({ products }: IProps) => {
  return (
    <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6'>
      {products.map((productCard) => (
        <ProductCard
          id={productCard.id}
          key={productCard.name}
          name={productCard.name}
          img={productCard.images[0].url}
          inventory={productCard.inventory}
          price={productCard.price}
        />
      ))}
    </div>
  )
}

export default ProductList
