import { createSelector } from '@reduxjs/toolkit'

import { IRootState } from '..'

export const cartProductsSelector = (state: IRootState) => state.cart.products

export const totalProductsSelector = createSelector(
  cartProductsSelector,
  (products) => products.reduce((total, product) => total + product.quantity, 0)
)

export const totalAmountSelector = createSelector(
  cartProductsSelector,
  (products) =>
    products.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    )
)
