import useTranslation from 'next-translate/useTranslation'

import { useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

import { useAuth } from '@/contexts/auth'

import { getChangedKeysAndValues } from '@/lib/utils'
import { useUpdateProfile } from '@/services/users/profile_update'
import { IProfileRequest } from '@/types/request/profile'

function useValidateProfileForm() {
  const { t } = useTranslation('errors')
  const { user } = useAuth()

  const { register, handleSubmit, formState } = useForm<IProfileRequest>({
    mode: 'onBlur',
    delayError: 200,
    defaultValues: {
      firstName: user?.firstName,
      lastName: user?.lastName
    }
  })

  const firstNameRegister = register('firstName', {
    required: t('required'),
    maxLength: {
      value: 50,
      message: t('max_length', { max: 50 })
    }
  })

  const lastNameRegister = register('lastName', {
    required: t('required'),
    maxLength: {
      value: 50,
      message: t('max_length', { max: 50 })
    }
  })

  return {
    register: {
      firstName: firstNameRegister,
      lastName: lastNameRegister
    },
    handleSubmit,
    formState
  }
}

export default function useProfileForm() {
  const { t } = useTranslation()
  const { user } = useAuth()
  const { register, handleSubmit, formState } = useValidateProfileForm()
  const { updateProfile, isLoading } = useUpdateProfile()

  const onSubmit = async (data: IProfileRequest) => {
    const changedData = getChangedKeysAndValues(data, user || {})

    if (Object.keys(changedData).length === 0) {
      toast.info(t('no_change_made') as string)
      return
    }

    await updateProfile(changedData)
  }

  return {
    register,
    formState,
    isLoading,
    onSubmit: handleSubmit(onSubmit)
  }
}
