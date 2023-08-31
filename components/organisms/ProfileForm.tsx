import useTranslation from 'next-translate/useTranslation'

import useProfileForm from '@/hooks/useProfileForm.hook'

import { useAuth } from '@/contexts/auth'

const ProfileForm = () => {
  const { t } = useTranslation()
  const { user } = useAuth()
  const {
    register,
    formState: { errors },
    isLoading,
    onSubmit
  } = useProfileForm()

  return (
    <form onSubmit={onSubmit}>
      <div className='grid md:grid-cols-2 gap-x-4'>
        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>{t('last_name')}</span>
          </label>
          <input
            type='text'
            placeholder={t('type_your_last_name')}
            className={`input input-bordered ${
              errors.lastName ? 'input-error' : ''
            }`}
            {...register.lastName}
          />
          <label className='label'>
            <span className='label-text-alt text-error'>
              {errors.lastName?.message}
            </span>
          </label>
        </div>

        <div className='form-control'>
          <label className='label'>
            <span className='label-text'>{t('first_name')}</span>
          </label>
          <input
            type='text'
            placeholder={t('type_your_first_name')}
            className={`input input-bordered ${
              errors.firstName ? 'input-error' : ''
            }`}
            {...register.firstName}
          />
          <label className='label'>
            <span className='label-text-alt text-error'>
              {errors.firstName?.message}
            </span>
          </label>
        </div>
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('email')}</span>
        </label>
        <input
          type='text'
          placeholder={t('type_your_email')}
          value={user?.email}
          disabled
          className={`input input-bordered`}
        />
      </div>

      <div className='form-control'>
        <label className='label'>
          <span className='label-text'>{t('phone')}</span>
        </label>
        <input
          type='text'
          placeholder={t('type_your_phone')}
          value={user?.phone}
          disabled
          className={`input input-bordered`}
        />
      </div>

      <div className='mt-6 text-right'>
        <button
          className={`btn btn-neutral ${
            Object.keys(errors).length !== 0 || isLoading
              ? 'opacity-20 pointer-events-none'
              : ''
          }`}
        >
          {t('update')}
        </button>
      </div>
    </form>
  )
}

export default ProfileForm
