import Image from 'next/image'

import vietnamIcon from '@/public/images/icons/vietnam.png'

const VietnamIcon = ({ className }: IBaseProps) => {
  return (
    <Image src={vietnamIcon} alt='Việt Nam' width={200} className={className} />
  )
}

export default VietnamIcon
