import { useState } from 'react'

import useSWR from 'swr'

import { LIST_PRODUCTS_API } from '@/constants'
import api from '@/lib/api'
import { IProductListRequest } from '@/types/request/product'
import { IProductList, IProductListItem } from '@/types/response/product'

const initPayloadListProduct: IProductListRequest = {
  page: 1,
  pageSize: 24,
  sort: 'createdAt:desc'
}

export const fetchAllProduct = () =>
  api.get<IProductListItem[]>(LIST_PRODUCTS_API).then((res) => res.data)

export const fetcherListProduct = (payload?: IProductListRequest) =>
  api
    .get<IProductList>(LIST_PRODUCTS_API, {
      params: {
        ...payload,
        sort: payload?.sort || initPayloadListProduct.sort,
        page: payload?.page || initPayloadListProduct.page,
        pageSize: payload?.pageSize || initPayloadListProduct.pageSize
      }
    })
    .then((res) => res.data)

export const useListProduct = (fallback?: IProductList) => {
  const [payload, setPayload] = useState<IProductListRequest>(
    initPayloadListProduct
  )

  const { data, error, isLoading, isValidating } = useSWR(
    [LIST_PRODUCTS_API, payload],
    ([, payload]) => fetcherListProduct(payload),
    {
      fallbackData: fallback,
      revalidateOnFocus: false
    }
  )

  return {
    setPayload,
    payload,
    data,
    error,
    isLoading,
    isValidating
  }
}
