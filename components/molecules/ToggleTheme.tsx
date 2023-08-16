import { useEffect, useState } from 'react'

import MoonIcon from '../atoms/icons/Moon'
import SunIcon from '../atoms/icons/Sun'

type ITheme = 'night' | 'winter'

const ToggleTheme = () => {
  const [theme, setTheme] = useState<ITheme>('winter')

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') ?? 'winter'

    setTheme(storedTheme as ITheme)
    document.querySelector('html')?.setAttribute('data-theme', storedTheme)
  }, [])

  const handleChangeTheme = () => {
    const newTheme = theme === 'night' ? 'winter' : 'night'
    setTheme(newTheme)

    localStorage.setItem('theme', newTheme)
    document.querySelector('html')?.setAttribute('data-theme', newTheme)
  }

  return (
    <button className='btn btn-ghost btn-circle' onClick={handleChangeTheme}>
      {theme === 'night' ? (
        <MoonIcon className='w-5 h-5' />
      ) : (
        <SunIcon className='w-5 h-5' />
      )}
    </button>
  )
}

export default ToggleTheme
