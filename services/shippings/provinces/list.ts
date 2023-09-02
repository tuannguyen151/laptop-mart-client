import useSWR from 'swr'

import { LIST_PROVINCES_API } from '@/constants'
import api from '@/lib/api'

export const fetchAllProvinces = () =>
  api.get<IProvince[]>(LIST_PROVINCES_API).then((res) => res.data)

export const useListProvince = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    LIST_PROVINCES_API,
    fetchAllProvinces,
    {
      revalidateOnFocus: false
    }
  )

  return {
    data: data || [],
    error,
    isLoading,
    isValidating
  }
}
