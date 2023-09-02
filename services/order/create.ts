import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'

import usePostMethod from '../postAPI'

import { clearCart } from '@/store/cart/cart.slice'

import { CREATE_ORDER_API } from '@/constants'
import { ORDERS } from '@/constants/routes'
import { replaceValuesInUrl } from '@/lib/utils'
import { IOrderRequest } from '@/types/request/order'
import { IOrderCreateResponse } from '@/types/response/order'

export function useCreateOrder() {
  const dispatch = useDispatch()
  const { t } = useTranslation()
  const router = useRouter()

  const { isLoading, error, executeApi } = usePostMethod<
    IOrderRequest,
    IOrderCreateResponse
  >(CREATE_ORDER_API)

  useEffect(() => {
    if (!error) return

    switch (error.type) {
      default:
        toast.error(t('errors:server_error') as string)
        break
    }
  }, [error, t])

  const createOrder = async (payload: IOrderRequest) => {
    const response = await executeApi(payload)

    if (!response) return

    dispatch(clearCart())
    router.push(
      replaceValuesInUrl(ORDERS.SHOW, {
        id: response.id
      })
    )
    toast(t('common:create_order_success') as string)
  }
  return { createOrder, isLoading }
}
