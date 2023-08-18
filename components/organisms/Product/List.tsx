import Pagination from '@/components/molecules/Pagination'
import ProductCard, {
  IProps as IProductCart
} from '@/components/molecules/ProductCard'

const ProductList = () => {
  // TODO: Fetch data from API
  const data: IProductCart[] = [
    {
      name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 1',
      img: 'https://picsum.photos/600/600',
      inventory: 10,
      price: 99999999
    },
    {
      name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 2',
      img: 'https://picsum.photos/600/600',
      inventory: 10,
      price: 99999999,
      isNew: true
    },
    {
      name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 3',
      img: 'https://picsum.photos/600/600',
      inventory: 0,
      price: 99999999
    },
    {
      name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 4',
      img: 'https://picsum.photos/600/600',
      inventory: 10,
      price: 99999999
    },
    {
      name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 5',
      img: 'https://picsum.photos/600/600',
      inventory: 10,
      price: 99999999,
      isNew: true
    },
    {
      name: 'Laptop Lenovo IdeaPad Slim 5 Pro 14IAP7 (82SH002TVN) 6',
      img: 'https://picsum.photos/600/600',
      inventory: 0,
      price: 99999999
    }
  ]

  return (
    <>
      <div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-x-4 gap-y-6'>
        {data.map((productCard) => (
          <ProductCard
            key={productCard.name}
            name={productCard.name}
            img={productCard.img}
            inventory={productCard.inventory}
            price={productCard.price}
            isNew={productCard.isNew}
          />
        ))}
      </div>

      <div className='flex justify-center items-center mt-6'>
        <Pagination page={2} limit={24} total={56} setPage={() => undefined} />
      </div>
    </>
  )
}

export default ProductList
