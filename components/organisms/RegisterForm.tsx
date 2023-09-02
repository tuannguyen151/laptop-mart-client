import useTranslation from 'next-translate/useTranslation'

import FormField from '../molecules/FormField'

import useRegisterForm from '@/hooks/auth/useRegisterForm.hook'

const RegisterForm = () => {
  const { t } = useTranslation()
  const {
    register,
    formState: { errors },
    isLoading,
    onSubmit
  } = useRegisterForm()

  return (
    <form onSubmit={onSubmit}>
      <div className='grid md:grid-cols-2 gap-x-4'>
        <FormField
          label={t('last_name')}
          register={register.lastName}
          errorMessage={errors.lastName?.message}
          inputProps={{ placeholder: t('type_your_last_name') }}
        />

        <FormField
          label={t('first_name')}
          register={register.firstName}
          errorMessage={errors.firstName?.message}
          inputProps={{ placeholder: t('type_your_first_name') }}
        />
      </div>

      <FormField
        label={t('account')}
        register={register.username}
        errorMessage={errors.username?.message}
        inputProps={{ placeholder: t('type_your_account') }}
      />

      <FormField
        label={t('email')}
        register={register.email}
        errorMessage={errors.email?.message}
        inputProps={{ type: 'email', placeholder: t('type_your_email') }}
      />

      <FormField
        label={t('phone')}
        register={register.phone}
        errorMessage={errors.phone?.message}
        inputProps={{ placeholder: t('type_your_phone') }}
      />

      <div className='grid md:grid-cols-2 gap-x-4'>
        <FormField
          label={t('password')}
          register={register.password}
          errorMessage={errors.password?.message}
          inputProps={{
            type: 'password',
            placeholder: t('type_your_password')
          }}
        />

        <FormField
          label={t('confirm_password')}
          register={register.confirmPassword}
          errorMessage={errors.confirmPassword?.message}
          inputProps={{
            type: 'password',
            placeholder: t('type_your_confirm_password')
          }}
        />
      </div>

      <div className='form-control mt-6'>
        <button
          type='submit'
          className={`btn btn-accent ${
            Object.keys(errors).length !== 0 || isLoading
              ? 'opacity-20 pointer-events-none'
              : ''
          }`}
        >
          {t('register')}
        </button>
      </div>
    </form>
  )
}

export default RegisterForm
