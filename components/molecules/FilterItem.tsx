import { UseFormRegisterReturn } from 'react-hook-form'

import { IProductMasterData } from '@/types/response/product'

export interface IProps {
  title: string
  data: IProductMasterData[keyof IProductMasterData]
  type?: keyof IProductMasterData
  register?: UseFormRegisterReturn
}

const itemLabel = (item: IProps['data'][0], type: IProps['type']) => {
  let labelContent = ''

  if ('name' in item) labelContent += item.name

  if ('type' in item) labelContent += ` ${item.type}`

  if ('size' in item) labelContent += ` ${item.size}`

  if ('rate' in item) labelContent += ` ${item.rate} Hz`

  if (type === 'displays') labelContent += '"'

  if (['rams', 'storages'].includes(type || '')) labelContent += ' GB'

  return labelContent
}

const FilterItem = ({ title, data, type, register }: IProps) => {
  return (
    <div>
      <h6 className='border-b pb-1 text-lg font-bold uppercase'>{title}</h6>

      {data.map((item) => (
        <label
          key={item.id}
          className='label cursor-pointer justify-start gap-2'
        >
          <input
            type='checkbox'
            className='checkbox checkbox-sm'
            value={item.id}
            {...register}
          />
          <span className='label-text'>{itemLabel(item, type)}</span>
          {'hexCode' in item && (
            <span
              className='w-5 h-5'
              style={{ backgroundColor: `#${item.hexCode}` }}
            />
          )}
        </label>
      ))}
    </div>
  )
}

export default FilterItem
