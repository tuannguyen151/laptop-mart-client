import useTranslation from 'next-translate/useTranslation'

import { useEffect } from 'react'
import { useForm } from 'react-hook-form'

import { PHONE_REGEX } from '@/constants/regex'
import { useCreateOrder } from '@/services/order/create'
import { useListDistrict } from '@/services/shippings/districts/list'
import { useListProvince } from '@/services/shippings/provinces/list'
import { useListWard } from '@/services/shippings/wards/list'
import {
  IOrderRequest,
  IOrderShippingAddressRequest
} from '@/types/request/order'

function useValidateOrderForm(defaultValues: {
  orderItems: IOrderRequest['orderItems']
}) {
  const { t } = useTranslation('errors')

  const { register, handleSubmit, formState, setValue, watch } = useForm<
    IOrderRequest & IOrderShippingAddressRequest
  >({
    mode: 'onBlur',
    delayError: 200,
    defaultValues
  })

  const recipientNameRegister = register('recipientName', {
    setValueAs: (value) => value || null,
    required: t('required'),
    maxLength: {
      value: 100,
      message: t('max_length', { max: 100 })
    }
  })

  const recipientPhoneRegister = register('recipientPhone', {
    required: t('required'),
    pattern: {
      value: PHONE_REGEX,
      message: t('invalid_format')
    }
  })

  // set value when submit
  const shippingAddressRegister = register('shippingAddress', {
    maxLength: {
      value: 255,
      message: t('max_length', { max: 100 })
    }
  })

  const noteRegister = register('note', {
    maxLength: {
      value: 10000,
      message: t('max_length', { max: 10000 })
    }
  })

  const provinceIdRegister = register('provinceId', {
    required: t('required')
  })

  const districtIdRegister = register('districtId', {
    required: t('required')
  })

  const wardIdRegister = register('wardId', {
    required: t('required')
  })

  const addressRegister = register('address', {
    required: t('required'),
    maxLength: {
      value: 255,
      message: t('max_length', { max: 255 })
    }
  })

  return {
    register: {
      recipientName: recipientNameRegister,
      recipientPhone: recipientPhoneRegister,
      shippingAddress: shippingAddressRegister,
      note: noteRegister,
      provinceId: provinceIdRegister,
      districtId: districtIdRegister,
      wardId: wardIdRegister,
      address: addressRegister
    },
    handleSubmit,
    formState,
    setValue,
    watch
  }
}

export default function useOrderForm(defaultValues: {
  orderItems: IOrderRequest['orderItems']
}) {
  const { createOrder, isLoading } = useCreateOrder()
  const { register, handleSubmit, formState, setValue, watch } =
    useValidateOrderForm(defaultValues)

  const provinceId = watch('provinceId')
  const districtId = watch('districtId')
  const wardId = watch('wardId')
  const address = watch('address')

  const { data: provinces } = useListProvince()
  const { data: districts } = useListDistrict(provinceId)
  const { data: wards } = useListWard(districtId)

  useEffect(() => {
    setValue('districtId', undefined)
  }, [provinceId, setValue])

  useEffect(() => {
    setValue('wardId', undefined)
  }, [districtId, setValue])

  const onSubmit = async (
    data: IOrderRequest & IOrderShippingAddressRequest
  ) => {
    const {
      provinceId: _provinceId,
      districtId: _districtId,
      wardId: _wardId,
      address: _address,
      shippingAddress: _shippingAddress,
      ...payload
    } = data
    const shippingAddress = [
      address,
      wards.find((ward) => ward.id === Number(wardId))?.name,
      districts.find((district) => district.id === Number(districtId))?.name,
      provinces.find((province) => province.id === Number(provinceId))?.name
    ].join(', ')

    await createOrder({ ...payload, shippingAddress })
  }

  return {
    register,
    formState,
    setValue,
    watch,
    isLoading,
    onSubmit: handleSubmit(onSubmit)
  }
}
