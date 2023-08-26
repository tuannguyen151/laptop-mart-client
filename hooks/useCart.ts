import { useDispatch, useSelector } from 'react-redux'

import {
  totalAmountSelector,
  totalProductsSelector
} from '@/store/cart/cart.selector'
import {
  addProduct,
  removeProduct,
  updateQuantity
} from '@/store/cart/cart.slice'

import { IProduct } from '@/types/response/product'

const useCart = () => {
  const dispatch = useDispatch()

  const totalQuantity = useSelector(totalProductsSelector)

  const totalAmount = useSelector(totalAmountSelector)

  const addToCart = (
    product: Pick<IProduct, 'id' | 'name' | 'price' | 'inventory'> & {
      image: IProduct['images'][0]['url']
    },
    quantity: number
  ) => {
    dispatch(
      addProduct({
        id: product.id,
        name: product.name,
        price: product.price,
        inventory: product.inventory,
        image: product.image,
        quantity
      })
    )
  }

  const updateProductQuantity = (
    productId: IProduct['id'],
    quantity: number
  ) => {
    dispatch(updateQuantity({ id: productId, quantity }))
  }

  const removeFromCart = (productId: IProduct['id']) => {
    dispatch(removeProduct({ id: productId }))
  }

  return {
    totalQuantity,
    totalAmount,
    addToCart,
    updateProductQuantity,
    removeFromCart
  }
}

export default useCart
