import useSWR from 'swr'

import { LIST_DISTRICTS_API } from '@/constants'
import api from '@/lib/api'

export const fetchAllDistricts = (url: string) =>
  api.get<IDistrict[]>(url).then((res) => res.data)

export const useListDistrict = (provinceId?: IProvince['id']) => {
  const { data, error, isLoading, isValidating } = useSWR(
    provinceId ? LIST_DISTRICTS_API(provinceId) : null,
    fetchAllDistricts,
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
