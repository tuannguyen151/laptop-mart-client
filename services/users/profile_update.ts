import useTranslation from 'next-translate/useTranslation'

import { useEffect } from 'react'
import { toast } from 'react-toastify'

import usePatchMethod from '../patchAPI'

import { useAuth } from '@/contexts/auth'

import { PROFILE_UPDATE_API } from '@/constants'
import { IProfileRequest } from '@/types/request/profile'
import { IResponsePatchMethod } from '@/types/response'

function useUpdateProfile() {
  const { t } = useTranslation()
  const { updateUser } = useAuth()

  const { isLoading, error, executeApi } = usePatchMethod<
    IProfileRequest,
    IResponsePatchMethod
  >(PROFILE_UPDATE_API)

  useEffect(() => {
    if (!error) return

    switch (error.type) {
      default:
        toast.error(t('errors:server_error') as string)
        break
    }
  }, [error, t])

  const updateProfile = async (
    payload: IProfileRequest,
    urlKeyValueOptions?: {
      [urlKey: string]: string | number
    }
  ) => {
    const response = await executeApi(payload, urlKeyValueOptions)

    if (!response) return

    updateUser()
    toast(t('common:update_profile_success') as string)
  }

  return { updateProfile, isLoading }
}

export { useUpdateProfile }
