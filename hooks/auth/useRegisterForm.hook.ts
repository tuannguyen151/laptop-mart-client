import useTranslation from 'next-translate/useTranslation'

import { useCallback, useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { EMAIL_REGEX, PHONE_REGEX, USERNAME_REGEX } from '@/constants/regex'
import { useRegister } from '@/services/auth/register'
import { IRegisterRequest } from '@/types/request/register'

function useValidateRegisterForm() {
  const { t } = useTranslation('errors')

  const { register, handleSubmit, formState, watch, getValues, trigger } =
    useForm<
      IRegisterRequest & { confirmPassword: IRegisterRequest['password'] }
    >({
      mode: 'onBlur',
      delayError: 200
    })

  const password = watch('password')

  const usernameRegister = register('username', {
    setValueAs: (value) => value || null,
    required: t('required'),
    maxLength: {
      value: 50,
      message: t('max_length', { max: 50 })
    },
    pattern: {
      value: USERNAME_REGEX,
      message: t('invalid_format')
    }
  })

  const passwordRegister = register('password', {
    required: t('required'),
    minLength: {
      value: 6,
      message: t('min_length', { min: 6 })
    }
  })

  const confirmPasswordRegister = register('confirmPassword', {
    validate: (value) =>
      value === getValues('password') || t('not_matching_password')
  })

  const firstNameRegister = register('firstName', {
    maxLength: {
      value: 50,
      message: t('max_length', { max: 50 })
    }
  })

  const lastNameRegister = register('lastName', {
    maxLength: {
      value: 50,
      message: t('max_length', { max: 50 })
    }
  })

  const emailRegister = register('email', {
    setValueAs: (value) => value || null,
    pattern: {
      value: EMAIL_REGEX,
      message: t('invalid_format')
    }
  })

  const phoneRegister = register('phone', {
    setValueAs: (value) => value || null,
    pattern: {
      value: PHONE_REGEX,
      message: t('invalid_format')
    }
  })

  useEffect(() => {
    if (getValues('confirmPassword')) trigger('confirmPassword')
  }, [getValues, password, trigger])

  return {
    register: {
      username: usernameRegister,
      password: passwordRegister,
      confirmPassword: confirmPasswordRegister,
      firstName: firstNameRegister,
      lastName: lastNameRegister,
      email: emailRegister,
      phone: phoneRegister
    },
    handleSubmit,
    formState
  }
}

export default function useRegisterForm() {
  const { register, formState, handleSubmit } = useValidateRegisterForm()
  const { register: executeRegister, isLoading } = useRegister()

  const onSubmit = useCallback(
    async (
      data: IRegisterRequest & { confirmPassword: IRegisterRequest['password'] }
    ) => {
      const { confirmPassword: _confirmPassword, ...payload } = data

      await executeRegister(payload)
    },
    [executeRegister]
  )

  return {
    register,
    formState,
    isLoading,
    onSubmit: handleSubmit(onSubmit)
  }
}
