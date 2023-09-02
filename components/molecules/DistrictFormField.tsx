import useTranslation from 'next-translate/useTranslation'

import { UseFormRegisterReturn } from 'react-hook-form'

import { useListDistrict } from '@/services/shippings/districts/list'

interface IProps {
  provinceId?: IProvince['id']
  register?: UseFormRegisterReturn
  errorMessage?: string
  isAllowEmpty?: boolean
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>
}

const DistrictFormField = ({
  provinceId,
  register,
  errorMessage,
  isAllowEmpty,
  selectProps
}: IProps) => {
  const { t } = useTranslation()
  const { data, isLoading } = useListDistrict(provinceId)

  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{t('shipping_address.district')}</span>
      </label>

      {isLoading ? (
        <div className='h-12 w-full rounded-md bg-slate-100 dark:bg-slate-800 animate-pulse' />
      ) : (
        <select
          defaultValue=''
          className={`select select-bordered w-full ${
            errorMessage ? 'select-error' : ''
          }`}
          {...selectProps}
          {...register}
        >
          <option
            {...(isAllowEmpty ? { disabled: false } : { disabled: true })}
            value=''
          >
            {t('shipping_address.type_district')}
          </option>

          {data?.map((district) => (
            <option key={district.id} value={district.id}>
              {district.name}
            </option>
          ))}
        </select>
      )}

      <label className='label'>
        <span className='label-text-alt text-error'>{errorMessage}</span>
      </label>
    </div>
  )
}

export default DistrictFormField
