import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { IProductVariant } from '@/types/response/product'

export interface IProductCart {
  id: IProductVariant['id']
  name: IProductVariant['name']
  price: IProductVariant['price']
  inventory: IProductVariant['inventory']
  image: IProductVariant['images'][0]['url']
  quantity: number
}

interface ICartState {
  products: IProductCart[]
}

const initialState: ICartState = { products: [] }

if (typeof window !== 'undefined' && localStorage.getItem('cart')) {
  const savedCart = JSON.parse(localStorage.getItem('cart') ?? '')
  if (savedCart && savedCart.products)
    initialState.products = savedCart.products
}

const cartSlice = createSlice({
  name: 'cart',
  initialState: initialState,
  reducers: {
    addProduct: (state, { payload }: PayloadAction<IProductCart>) => {
      const existingProduct = state.products.find(
        (product) => product.id === payload.id
      )

      if (existingProduct) existingProduct.quantity += payload.quantity
      else state.products.push(payload)

      localStorage.setItem('cart', JSON.stringify(state))
    },

    removeProduct: (
      state,
      { payload: { id } }: PayloadAction<Pick<IProductCart, 'id'>>
    ) => {
      state.products = state.products.filter((product) => product.id !== id)

      localStorage.setItem('cart', JSON.stringify(state))
    },

    updateQuantity: (
      state,
      {
        payload: { id, quantity }
      }: PayloadAction<Pick<IProductCart, 'id' | 'quantity'>>
    ) => {
      const product = state.products.find((product) => product.id === id)

      if (product) {
        product.quantity = quantity

        localStorage.setItem('cart', JSON.stringify(state))
      }
    }
  }
})

export const { addProduct, removeProduct, updateQuantity } = cartSlice.actions
export default cartSlice
