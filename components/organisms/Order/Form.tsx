import useTranslation from 'next-translate/useTranslation'

import { useSelector } from 'react-redux'

import DistrictFormField from '@/components/molecules/DistrictFormField'
import FormField from '@/components/molecules/FormField'
import ProvinceFormField from '@/components/molecules/ProvinceFormField'
import WardFormField from '@/components/molecules/WardFormField'

import useOrderForm from '@/hooks/order/useOrderForm.hook'

import { cartProductsSelector } from '@/store/cart/cart.selector'

const OrderForm = () => {
  const { t } = useTranslation()
  const cartProducts = useSelector(cartProductsSelector)

  const {
    register,
    formState: { errors },
    onSubmit,
    isLoading,
    watch
  } = useOrderForm({
    orderItems: cartProducts.map((product) => ({
      productId: product.id,
      quantity: product.quantity
    }))
  })

  return (
    <form onSubmit={onSubmit}>
      <div className='grid md:grid-cols-2 gap-x-4'>
        <FormField
          label={t('shipping_address.recipient_name')}
          inputProps={{
            placeholder: t('shipping_address.type_recipient_name')
          }}
          register={register.recipientName}
          errorMessage={errors.recipientName?.message}
        />

        <FormField
          label={t('shipping_address.recipient_phone')}
          inputProps={{
            placeholder: t('shipping_address.type_recipient_phone')
          }}
          register={register.recipientPhone}
          errorMessage={errors.recipientPhone?.message}
        />
      </div>

      <ProvinceFormField
        register={register.provinceId}
        errorMessage={errors.provinceId?.message}
      />

      <DistrictFormField
        provinceId={watch('provinceId')}
        register={register.districtId}
        errorMessage={errors.districtId?.message}
      />

      <WardFormField
        districtId={watch('districtId')}
        register={register.wardId}
        errorMessage={errors.wardId?.message}
      />

      <FormField
        label={t('shipping_address.address')}
        inputProps={{
          placeholder: t('shipping_address.type_address')
        }}
        register={register.address}
        errorMessage={errors.address?.message}
      />

      <FormField
        label={t('shipping_address.note')}
        inputProps={{
          placeholder: t('shipping_address.type_note')
        }}
        register={register.note}
        errorMessage={errors.note?.message}
      />

      <button
        className={`btn btn-neutral ${
          Object.keys(errors).length !== 0 || isLoading
            ? 'opacity-20 pointer-events-none'
            : ''
        }`}
      >
        {t('place_order')}
      </button>
    </form>
  )
}

export default OrderForm
