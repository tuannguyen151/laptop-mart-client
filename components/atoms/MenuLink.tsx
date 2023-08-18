import Link from 'next/link'
import { useRouter } from 'next/router'

interface IProps {
  href: string
  name: string
}

const linkActiveClass = 'font-bold text-success pointer-events-none'

const MenuLink = ({ href, name }: IProps) => {
  const router = useRouter()

  return (
    <Link
      href={href}
      className={router.pathname === href ? linkActiveClass : ''}
    >
      {name}
    </Link>
  )
}

export default MenuLink
