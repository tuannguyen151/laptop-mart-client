import useTranslation from 'next-translate/useTranslation'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

import { mutate } from 'swr'

import { CREATE_PAYMENT_API, ORDER_DETAIL_API } from '@/constants'
import { NOT_IMPLEMENTED } from '@/constants/api_error_type'
import usePostMethod from '@/services/postAPI'
import { IPaymentRequest } from '@/types/request/payment'
import { IResponsePostMethod } from '@/types/response'
import { IOrderResponse } from '@/types/response/order'

export function useCreatePayment(orderId: IOrderResponse['id']) {
  const { t } = useTranslation()

  const { isLoading, error, executeApi } = usePostMethod<
    IPaymentRequest,
    IResponsePostMethod
  >(CREATE_PAYMENT_API(orderId))

  useEffect(() => {
    if (!error) return

    switch (error.type) {
      case NOT_IMPLEMENTED:
        toast.info(t('errors:payment_not_implemented') as string)
        break
      default:
        toast.error(t('errors:server_error') as string)
        break
    }
  }, [error, t])

  const createPayment = async (payload: IPaymentRequest) => {
    const response = await executeApi(payload)

    if (!response) return

    mutate(ORDER_DETAIL_API(orderId))
    toast.success(t('common:create_payment_success') as string)
  }

  return {
    createPayment,
    isLoading
  }
}
