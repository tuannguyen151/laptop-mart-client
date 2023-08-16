import Logo from '@/components/atoms/Logo'
import MenuIcon from '@/components/atoms/icons/Menu'
import Menu from '@/components/molecules/Menu'
import ToggleTheme from '@/components/molecules/ToggleTheme'
import CardHeader from '@/components/organisms/Header/Card'
import ProfileHeader from '@/components/organisms/Header/Profile'

const Header = () => {
  return (
    <div className='navbar bg-neutral text-neutral-content shadow-xl rounded-box'>
      <div className='navbar-start'>
        <Logo />
      </div>

      <div className='navbar-center hidden lg:flex'>
        <Menu isDesktop />
      </div>

      <div className='navbar-end gap-2'>
        <ToggleTheme />

        <CardHeader />

        <ProfileHeader />

        <div className='dropdown dropdown-bottom dropdown-end lg:hidden'>
          <label tabIndex={0} className='btn btn-ghost btn-circle'>
            <MenuIcon className='h-5 w-5' />
          </label>

          <Menu />
        </div>
      </div>
    </div>
  )
}

export default Header
