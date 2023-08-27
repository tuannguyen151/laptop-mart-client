import useTranslation from 'next-translate/useTranslation'

const ShippingAddressForm = () => {
  const { t } = useTranslation()

  return (
    <form>
      <div className='grid md:grid-cols-2 gap-x-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>
              {t('shipping_address.recipient_name')}
            </span>
          </label>
          <input
            type='text'
            placeholder={t('shipping_address.type_recipient_name')}
            required
            className='input input-bordered'
          />
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>
              {t('shipping_address.recipient_phone')}
            </span>
          </label>
          <input
            type='text'
            placeholder={t('shipping_address.type_recipient_phone')}
            required
            className='input input-bordered'
          />
        </div>
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('shipping_address.city')}</span>
        </label>
        <select className='select select-bordered w-full' defaultValue=''>
          <option disabled value=''>
            {t('shipping_address.type_city')}
          </option>
          <option>Lorem 1</option>
          <option>Lorem 2</option>
        </select>
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('shipping_address.district')}</span>
        </label>
        <select className='select select-bordered w-full' defaultValue=''>
          <option disabled value=''>
            {t('shipping_address.type_district')}
          </option>
          <option>Lorem 1</option>
          <option>Lorem 2</option>
        </select>
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('shipping_address.ward')}</span>
        </label>
        <select className='select select-bordered w-full' defaultValue=''>
          <option disabled value=''>
            {t('shipping_address.type_ward')}
          </option>
          <option>Lorem 1</option>
          <option>Lorem 2</option>
        </select>
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('shipping_address.address')}</span>
        </label>
        <input
          type='text'
          placeholder={t('shipping_address.type_address')}
          required
          className='input input-bordered'
        />
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('shipping_address.note')}</span>
        </label>
        <textarea
          className='textarea textarea-bordered'
          placeholder={t('shipping_address.type_note')}
        ></textarea>
      </div>
    </form>
  )
}

export default ShippingAddressForm
