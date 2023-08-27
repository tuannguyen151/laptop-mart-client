import useTranslation from 'next-translate/useTranslation'

const RegisterForm = () => {
  const { t } = useTranslation()

  return (
    <form>
      <div className='grid md:grid-cols-2 gap-x-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>{t('last_name')}</span>
          </label>
          <input
            type='text'
            placeholder={t('type_your_last_name')}
            className='input input-bordered'
          />
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>{t('first_name')}</span>
          </label>
          <input
            type='text'
            placeholder={t('type_your_first_name')}
            className='input input-bordered'
          />
        </div>
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('account')}</span>
        </label>
        <input
          type='text'
          placeholder={t('type_your_account')}
          required
          className='input input-bordered'
        />
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('email')}</span>
        </label>
        <input
          type='email'
          placeholder={t('type_your_email')}
          className='input input-bordered'
        />
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('phone')}</span>
        </label>
        <input
          type='email'
          placeholder={t('type_your_phone')}
          className='input input-bordered'
        />
      </div>

      <div className='grid md:grid-cols-2 gap-x-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>{t('password')}</span>
          </label>
          <input
            type='password'
            required
            placeholder={t('type_your_password')}
            className='input input-bordered'
          />
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>{t('confirm_password')}</span>
          </label>
          <input
            type='password'
            required
            placeholder={t('type_your_confirm_password')}
            className='input input-bordered'
          />
        </div>
      </div>

      <div className='form-control mt-6'>
        <button className='btn btn-accent'>{t('register')}</button>
      </div>
    </form>
  )
}

export default RegisterForm
