import useTranslation from 'next-translate/useTranslation'

import { memo, useEffect, useState } from 'react'

import FilterItem from '@/components/molecules/FilterItem'

import useFilterForm from '@/hooks/product/useFilterForm.hook'

import { useProductMasterData } from '@/services/products/master_data'
import { IProductFilterRequest } from '@/types/request/product'

interface IProps {
  onChange?: (payload: IProductFilterRequest) => void
}

const ProductFilter = ({ onChange }: IProps) => {
  const { t } = useTranslation()
  const [initialChange, setInitialChange] = useState(false)

  const { data } = useProductMasterData()

  const { register, getValues, watchAllFields } = useFilterForm()

  useEffect(() => {
    if (!initialChange) {
      setInitialChange(true)
      return
    }

    const dataForm = getValues()
    onChange?.(dataForm)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watchAllFields])

  if (!data)
    return (
      <div className='w-60 h-full px-2 py-4'>
        <div className='h-full w-full rounded-box bg-slate-100 dark:bg-slate-800 animate-pulse' />
      </div>
    )

  return (
    <div className='w-60 h-full max-lg:bg-base-200 max-lg:text-base-content px-2 flex flex-col gap-4 py-4'>
      <div>
        <h6 className='text-lg font-bold uppercase'>{t('search_by_name')}</h6>
        <input
          type='text'
          placeholder={t('enter_product_name')}
          className='input input-bordered w-full max-w-xs input-sm'
          {...register.name}
        />
      </div>

      <FilterItem
        title={t('product_attributes.manufacturer')}
        data={data.manufacturers}
        register={register.manufacturers}
      />
      <FilterItem
        title={t('product_attributes.color')}
        data={data.colors}
        register={register.colors}
      />
      <FilterItem
        title={t('product_attributes.processor')}
        data={data.processors}
        register={register.processors}
      />
      <FilterItem
        title={t('product_attributes.ram')}
        data={data.rams}
        type='rams'
        register={register.rams}
      />
      <FilterItem
        title={t('product_attributes.storage')}
        data={data.storages}
        type='storages'
        register={register.storages}
      />
      <FilterItem
        title={t('product_attributes.display')}
        data={data.displays}
        type='displays'
        register={register.displays}
      />
      <FilterItem
        title={t('product_attributes.refresh_rate')}
        data={data.refreshRates}
        register={register.refreshRates}
      />
      <FilterItem
        title={t('product_attributes.resolution')}
        data={data.resolutions}
        register={register.resolutions}
      />
      <FilterItem
        title={t('product_attributes.graphics_card')}
        data={data.graphicsCards}
        register={register.graphicsCards}
      />
      <FilterItem
        title={t('product_attributes.operating_system')}
        data={data.operatingSystems}
        register={register.operatingSystems}
      />
    </div>
  )
}

export default memo(ProductFilter)
