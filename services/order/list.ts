import useSWR from 'swr'

import { LIST_ORDERS_API } from '@/constants'
import api from '@/lib/api'
import { IOrderListItem } from '@/types/response/order'

export const fetchAllOrder = () =>
  api.get<IOrderListItem[]>(LIST_ORDERS_API).then((res) => res.data)

export const useAllOrder = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    LIST_ORDERS_API,
    fetchAllOrder
  )

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}
