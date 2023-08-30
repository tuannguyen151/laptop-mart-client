import useTranslation from 'next-translate/useTranslation'
import { useRouter } from 'next/router'

import { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useAuth } from '@/contexts/auth'

import { API_ERROR_TYPE } from '@/constants'
import { ILoginRequest } from '@/types/request'

function useValidateLoginForm() {
  const { t } = useTranslation('errors')

  const { register, handleSubmit, formState } = useForm<ILoginRequest>({
    mode: 'onBlur',
    delayError: 200
  })

  const usernameRegister = register('username', {
    required: t('required')
  })

  const passwordRegister = register('password', {
    required: t('required')
  })

  return {
    register: {
      username: usernameRegister,
      password: passwordRegister
    },
    handleSubmit,
    formState
  }
}

export default function useLoginForm() {
  const router = useRouter()
  const { t } = useTranslation('errors')
  const { register, formState, handleSubmit } = useValidateLoginForm()
  const { login } = useAuth()

  const onSubmit = useCallback(async (data: ILoginRequest) => {
    try {
      await login(data)
      router.push('/')
      toast.success(t('common:login_success') as string)
    } catch (error: any) {
      switch (error?.error?.type) {
        case API_ERROR_TYPE.USERNAME_NOT_FOUND:
          toast.error(t('invalid_email_or_phone') as string)
          break
        case API_ERROR_TYPE.PASSWORD_INCORRECT:
          toast.error(t('invalid_password') as string)
          break
        default:
          toast.error(t('server_error') as string)
          break
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return {
    register,
    formState,
    onSubmit: handleSubmit(onSubmit)
  }
}
