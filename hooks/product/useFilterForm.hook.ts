import { useForm, useWatch } from 'react-hook-form'

import { IProductFilterRequest } from '@/types/request/product'

function useValidateFilterForm() {
  const { register, formState, control, getValues } =
    useForm<IProductFilterRequest>({
      mode: 'onBlur',
      delayError: 200,
      defaultValues: {
        name: '',
        manufacturerIds: [],
        colorIds: [],
        processorIds: [],
        ramIds: [],
        storageIds: [],
        displayIds: [],
        refreshRateIds: [],
        resolutionIds: [],
        graphicsCardIds: [],
        operatingSystemIds: []
      }
    })

  const nameRegister = register('name', {
    setValueAs: (value) => value || null
  })
  const manufacturersRegister = register('manufacturerIds')
  const colorsRegister = register('colorIds')
  const processorsRegister = register('processorIds')
  const ramsRegister = register('ramIds')
  const storagesRegister = register('storageIds')
  const displaysRegister = register('displayIds')
  const refreshRatesRegister = register('refreshRateIds')
  const resolutionsRegister = register('resolutionIds')
  const graphicsCardsRegister = register('graphicsCardIds')
  const operatingSystemsRegister = register('operatingSystemIds')

  return {
    register: {
      name: nameRegister,
      manufacturers: manufacturersRegister,
      colors: colorsRegister,
      processors: processorsRegister,
      rams: ramsRegister,
      storages: storagesRegister,
      displays: displaysRegister,
      refreshRates: refreshRatesRegister,
      resolutions: resolutionsRegister,
      graphicsCards: graphicsCardsRegister,
      operatingSystems: operatingSystemsRegister
    },
    control,
    getValues,
    formState
  }
}

export default function useFilterForm() {
  const { register, formState, control, getValues } = useValidateFilterForm()

  const watchAllFields = useWatch({ control })

  return {
    register,
    formState,
    watchAllFields,
    getValues
  }
}
