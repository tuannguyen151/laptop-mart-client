import { PRODUCT_DETAIL_API } from '@/constants'
import api from '@/lib/api'
import { IProduct } from '@/types/response/product'

export const fetchProduct = (id: number) =>
  api.get<IProduct>(PRODUCT_DETAIL_API(id)).then((res) => res.data)
