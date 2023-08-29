import useTranslation from 'next-translate/useTranslation'

import { ORDER } from '@/constants/master_data'

interface IProps {
  status: keyof typeof ORDER.STATUS
}

const OrderStatus = ({ status }: IProps) => {
  const { t } = useTranslation()

  return <span>{t('order_status.' + ORDER.STATUS[status])}</span>
}

export default OrderStatus
