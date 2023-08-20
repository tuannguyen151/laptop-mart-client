import Image from 'next/image'

import LoveIconImage from '@/public/images/icons/love.png'

const LoveIcon = ({ className }: IBaseProps) => {
  return (
    <Image
      src={LoveIconImage}
      alt='love-icon'
      width={56}
      height={56}
      className={className}
    />
  )
}

export default LoveIcon
