import { ReactNode } from 'react'

import LoveIcon from './icons/Love'

interface IProps {
  name: string | ReactNode
  value: string | ReactNode
}

const ProductAttribute = ({ name, value }: IProps) => {
  return (
    <li className='flex items-center'>
      <span>
        <LoveIcon className='w-4 h-4 mr-2' />
      </span>
      <span className='text-sm mr-1'>{name}:</span>
      <span className='font-semibold'>{value}</span>
    </li>
  )
}

export default ProductAttribute
