import ProfileForm from '../organisms/ProfileForm'

const ProfileTemplate = () => {
  return (
    <div className='my-4'>
      <div className='grid md:grid-cols-2'>
        <div className='rounded-box shadow-xl dark:border dark:border-base-200 p-4'>
          <ProfileForm />
        </div>
      </div>
    </div>
  )
}

export default ProfileTemplate
