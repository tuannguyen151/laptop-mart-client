import Image from 'next/image'

import unitedKingdomIcon from '@/public/images/icons/united-kingdom.png'

const UnitedKingdomIcon = ({ className }: IBaseProps) => {
  return (
    <Image
      src={unitedKingdomIcon}
      alt='English'
      width={200}
      className={className}
    />
  )
}

export default UnitedKingdomIcon
