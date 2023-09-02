import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

import usePostMethod from '../postAPI'

import { REGISTER_API } from '@/constants'
import {
  EMAIL_EXISTS,
  PHONE_EXISTS,
  USERNAME_EXISTS
} from '@/constants/api_error_type'
import { LOGIN } from '@/constants/routes'
import { IRegisterRequest } from '@/types/request/register'
import { IResponsePostMethod } from '@/types/response'

export const useRegister = () => {
  const { t } = useTranslation()
  const router = useRouter()

  const { executeApi, isLoading, error } = usePostMethod<
    IRegisterRequest,
    IResponsePostMethod
  >(REGISTER_API)

  useEffect(() => {
    if (!error) return

    switch (error.type) {
      case USERNAME_EXISTS:
        toast.error(t('errors:username_exists') as string)
        break

      case PHONE_EXISTS:
        toast.error(t('errors:phone_exists') as string)
        break

      case EMAIL_EXISTS:
        toast.error(t('errors:email_exists') as string)
        break

      default:
        toast.error(t('errors:server_error') as string)
        break
    }
  }, [error, t])

  const register = async (payload: IRegisterRequest) => {
    const response = await executeApi(payload)

    if (!response?.message) return

    toast(t('common:register_success') as string)
    router.push(LOGIN)
  }

  return { register, isLoading }
}
