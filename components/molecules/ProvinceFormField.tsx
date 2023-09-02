import useTranslation from 'next-translate/useTranslation'

import { UseFormRegisterReturn } from 'react-hook-form'

import { useListProvince } from '@/services/shippings/provinces/list'

interface IProps {
  register?: UseFormRegisterReturn
  errorMessage?: string
  isAllowEmpty?: boolean
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>
}

const ProvinceFormField = ({
  register,
  errorMessage,
  isAllowEmpty,
  selectProps
}: IProps) => {
  const { t } = useTranslation()
  const { data, isLoading } = useListProvince()

  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{t('shipping_address.city')}</span>
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
            {t('shipping_address.type_city')}
          </option>

          {data?.map((province) => (
            <option key={province.id} value={province.id}>
              {province.name}
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

export default ProvinceFormField
