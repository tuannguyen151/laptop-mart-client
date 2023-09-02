import useSWR from 'swr'

import { LIST_WARDS_API } from '@/constants'
import api from '@/lib/api'

export const fetchAllWards = (url: string) =>
  api.get<IWard[]>(url).then((res) => res.data)

export const useListWard = (districtId?: IDistrict['id']) => {
  const { data, error, isLoading, isValidating } = useSWR(
    districtId ? LIST_WARDS_API(districtId) : null,
    fetchAllWards,
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
