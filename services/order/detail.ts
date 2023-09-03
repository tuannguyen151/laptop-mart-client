import useSWR from 'swr'

import { ORDER_DETAIL_API } from '@/constants'
import api from '@/lib/api'
import { IOrderResponse } from '@/types/response/order'

export const fetchOrder = (url: string) =>
  api.get<IOrderResponse>(url).then((res) => res.data)

export const useFetchOrder = (id?: number) => {
  const { data, error, isLoading, isValidating } = useSWR(
    id ? ORDER_DETAIL_API(id) : null,
    fetchOrder
  )

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}
