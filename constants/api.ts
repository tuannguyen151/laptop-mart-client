export const LOGIN_API = '/users/auth/login'
export const REGISTER_API = '/users/auth/register'
export const PROFILE_UPDATE_API = '/users/profile/update'
export const PROFILE_API = '/users/profile'
export const LIST_PRODUCTS_API = '/products'
export const PRODUCT_MASTER_DATA_API = '/products/master-data'
export const PRODUCT_DETAIL_API = (id: number) => `/products/${id}`
export const LIST_PROVINCES_API = '/shippings/provinces'
export const LIST_DISTRICTS_API = (provinceId: number) =>
  `/shippings/provinces/${provinceId}/districts`
export const LIST_WARDS_API = (districtId: number) =>
  `/shippings/districts/${districtId}/wards`
export const CREATE_ORDER_API = '/orders'
export const LIST_ORDERS_API = '/orders'
export const ORDER_DETAIL_API = (id: number) => `/orders/${id}`
export const UPDATE_ORDER_API = (id: number) => `/orders/${id}`
export const CREATE_PAYMENT_API = (orderId: number) =>
  `/orders/${orderId}/payments`
