import useTranslation from 'next-translate/useTranslation'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { mutate } from 'swr'

import usePatchMethod from '../patchAPI'

import { ORDER_DETAIL_API, UPDATE_ORDER_API } from '@/constants'
import { ORDER } from '@/constants/master_data'
import { IOrderUpdateRequest } from '@/types/request/order'
import { IResponsePatchMethod } from '@/types/response'
import { IOrderResponse } from '@/types/response/order'

export function useUpdateOrder(id: IOrderResponse['id']) {
  const { t } = useTranslation()

  const { isLoading, error, executeApi } = usePatchMethod<
    IOrderUpdateRequest,
    IResponsePatchMethod
  >(UPDATE_ORDER_API(id))

  useEffect(() => {
    if (!error) return

    switch (error.type) {
      default:
        toast.error(t('errors:server_error') as string)
        break
    }
  }, [error, t])

  const updateOrder = async (payload: IOrderUpdateRequest) => {
    const response = await executeApi(payload)

    if (!response) return

    mutate(ORDER_DETAIL_API(id))

    if (payload?.status && ORDER.STATUS[payload.status] === 'cancelled')
      toast(t('common:cancel_order_success') as string)
  }

  return {
    updateOrder,
    isLoading
  }
}
