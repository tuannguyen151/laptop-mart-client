import useTranslation from 'next-translate/useTranslation'
import Image, { StaticImageData } from 'next/image'

import { useState } from 'react'

import { RadioGroup } from '@headlessui/react'

import { PAYMENT } from '@/constants/master_data'

import logoCashOnDeliveryImage from '@/public/images/logo-cash-on-delivery.png'
import logoMomoImage from '@/public/images/logo-momo.png'

interface IPaymentMethod {
  value: keyof typeof PAYMENT.METHOD
  image: StaticImageData
}

const PAYMENT_METHODS: IPaymentMethod[] = [
  {
    value: 2,
    image: logoMomoImage
  },
  {
    value: 5,
    image: logoCashOnDeliveryImage
  }
]

interface IProps {
  onPayment?: (method: keyof typeof PAYMENT.METHOD) => void
}

export default function PaymentMethod({ onPayment }: IProps) {
  const [selected, setSelected] = useState(PAYMENT_METHODS[0])
  const { t } = useTranslation()

  const handleClick = () => {
    onPayment?.(selected.value)
  }

  return (
    <div className='w-full'>
      <RadioGroup value={selected} onChange={setSelected}>
        <div className='flex flex-row flex-wrap gap-4'>
          {PAYMENT_METHODS.map((paymentMethod) => (
            <RadioGroup.Option
              key={paymentMethod.value}
              value={paymentMethod}
              className={({ checked }) =>
                `btn !normal-case h-32 w-32 relative inline-flex cursor-pointer rounded-box px-3 py-2 shadow-md focus:outline-none dark:border dark:border-base-200 ${
                  checked ? 'btn-neutral pointer-events-none' : 'btn-ghost'
                }`
              }
            >
              {({ checked }) => (
                <div className='flex w-full items-center justify-between gap-2'>
                  <div className=' w-full flex flex-col gap-2 items-center'>
                    <Image
                      src={paymentMethod.image}
                      alt={paymentMethod.image.src}
                      width={56}
                      height={56}
                    />

                    <RadioGroup.Label
                      as='p'
                      className={`font-semibold text-left ${
                        checked ? 'text-white' : ''
                      }`}
                    >
                      {t(
                        'payment_method.' + PAYMENT.METHOD[paymentMethod.value]
                      )}
                    </RadioGroup.Label>
                  </div>
                </div>
              )}
            </RadioGroup.Option>
          ))}
        </div>
      </RadioGroup>

      <button className='btn btn-neutral mt-4' onClick={handleClick}>
        {t('checkout')}
      </button>
    </div>
  )
}
