import useTranslation from 'next-translate/useTranslation'

import { UseFormRegisterReturn } from 'react-hook-form'

import { useListWard } from '@/services/shippings/wards/list'

interface IProps {
  districtId?: IDistrict['id']
  register?: UseFormRegisterReturn
  errorMessage?: string
  isAllowEmpty?: boolean
  selectProps?: React.SelectHTMLAttributes<HTMLSelectElement>
}

const WardFormField = ({
  districtId,
  register,
  errorMessage,
  isAllowEmpty,
  selectProps
}: IProps) => {
  const { t } = useTranslation()
  const { data, isLoading } = useListWard(districtId)

  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{t('shipping_address.ward')}</span>
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
            {t('shipping_address.type_ward')}
          </option>

          {data?.map((ward) => (
            <option key={ward.id} value={ward.id}>
              {ward.name}
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

export default WardFormField
