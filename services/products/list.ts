import { LIST_PRODUCTS_API } from '@/constants'
import api from '@/lib/api'
import { IProductListRequest } from '@/types/request/product'
import { IProductList } from '@/types/response/product'

export const fetcherListProduct = (payload?: IProductListRequest) =>
  api
    .get<IProductList>(LIST_PRODUCTS_API, {
      params: {
        ...payload,
        page: payload?.page || 1,
        pageSize: payload?.pageSize || 8
      }
    })
    .then((res) => res.data)
