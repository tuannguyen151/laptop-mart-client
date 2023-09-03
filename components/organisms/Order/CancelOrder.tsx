import useTranslation from 'next-translate/useTranslation'

import { ORDER } from '@/constants/master_data'
import { useUpdateOrder } from '@/services/order/update'
import { IOrderResponse } from '@/types/response/order'

interface IProps {
  id: IOrderResponse['id']
}

const CancelOrder = ({ id }: IProps) => {
  const { t } = useTranslation()

  const { updateOrder, isLoading: isLoadingUpdateOrder } = useUpdateOrder(id)

  const handleCancelOrder = () => {
    const cancelStatus = Object.keys(ORDER.STATUS).find(
      (key: string) =>
        ORDER.STATUS[Number(key) as keyof typeof ORDER.STATUS] === 'cancelled'
    )

    updateOrder({
      status: Number(cancelStatus) as keyof typeof ORDER.STATUS
    })
  }
  return (
    <button
      className={`btn btn-neutral ${
        isLoadingUpdateOrder ? 'opacity-20 pointer-events-none' : ''
      }`}
      onClick={handleCancelOrder}
    >
      {t('cancel_order')}
    </button>
  )
}

export default CancelOrder
