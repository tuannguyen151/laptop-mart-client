import useSWR from 'swr'

import { PRODUCT_MASTER_DATA_API } from '@/constants'
import api from '@/lib/api'
import { IProductMasterData } from '@/types/response/product'

export const fetcherProductMasterData = () =>
  api.get<IProductMasterData>(PRODUCT_MASTER_DATA_API).then((res) => res.data)

export const useProductMasterData = () => {
  const { data, error, isLoading, isValidating } = useSWR(
    [PRODUCT_MASTER_DATA_API],
    fetcherProductMasterData,
    {
      revalidateIfStale: false,
      revalidateOnFocus: false
    }
  )

  return {
    data,
    error,
    isLoading,
    isValidating
  }
}
