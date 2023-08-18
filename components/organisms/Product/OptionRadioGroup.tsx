import useTranslation from 'next-translate/useTranslation'

import { Fragment, useState } from 'react'

import { RadioGroup } from '@headlessui/react'

import CheckIcon from '../../atoms/icons/Check'

import { ATTRIBUTE_CONFIGS } from '@/constants'
import { IProduct, IProductVariant } from '@/types/response/product'

export const extractProductAttributes = (
  product: IProduct | IProductVariant
): string[] => {
  const result: string[] = []

  ATTRIBUTE_CONFIGS.forEach(({ key, accessor }) => {
    const attribute = product[key]

    if (attribute) result.push(accessor(attribute))
  })

  return result
}

interface IProps {
  product: IProduct
  onChange?: (productId: IProduct['id']) => void
}

const OptionRadioGroup = ({ product, onChange }: IProps) => {
  const { t } = useTranslation()
  const [selected, setSelected] = useState(product)
  const products = [product, ...(product?.variants ?? [])]

  const handleChange = (product: IProduct) => {
    setSelected(product)
    onChange?.(product.id)
  }

  return (
    <div>
      <h5 className='text-xl font-semibold mb-2'>{t('options')}</h5>

      <RadioGroup value={selected} onChange={handleChange} className='w-fit'>
        <RadioGroup.Label className='sr-only'>Server size</RadioGroup.Label>

        <div className='flex flex-col gap-2'>
          {products.map((item) => (
            <RadioGroup.Option
              key={item.name}
              value={item}
              className={({ checked }) =>
                `btn !normal-case !h-auto relative flex cursor-pointer rounded-lg px-3 py-2 shadow-md focus:outline-none dark:border dark:border-base-200 ${
                  checked ? 'btn-info' : 'btn-ghost'
                }`
              }
            >
              {({ checked }) => (
                <div className='flex w-full items-center justify-between gap-2'>
                  <div className='flex flex-col gap-1'>
                    <RadioGroup.Label
                      as='p'
                      className={`font-semibold text-left ${
                        checked ? 'text-white' : ''
                      }`}
                    >
                      {product.id !== item.id ? item.name : 'Default'}
                    </RadioGroup.Label>

                    {product.id !== item.id && (
                      <RadioGroup.Description
                        as='span'
                        className={`font-normal flex flex-wrap gap-1 opacity-80 ${
                          checked ? 'text-white' : ''
                        }`}
                      >
                        {extractProductAttributes(item).map(
                          (attribute, index) => (
                            <Fragment key={attribute}>
                              {index !== 0 && (
                                <span aria-hidden='true'>&middot;</span>
                              )}
                              <span>{attribute}</span>
                            </Fragment>
                          )
                        )}
                      </RadioGroup.Description>
                    )}
                  </div>

                  <div
                    className={`shrink-0 text-white ${
                      checked ? 'opacity-100' : 'opacity-0'
                    }`}
                  >
                    <CheckIcon className='h-6 w-6' />
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>
    </div>
  )
}

export default OptionRadioGroup
