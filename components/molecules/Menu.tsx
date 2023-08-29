import useTranslation from 'next-translate/useTranslation'

import MenuLink from '../atoms/MenuLink'

import { ORDERS, PRODUCTS } from '@/constants/routes'

interface IProps {
  isDesktop?: boolean
}

const Menu = ({ isDesktop }: IProps) => {
  const { t } = useTranslation()

  return (
    <ul
      tabIndex={0}
      className={
        isDesktop
          ? 'menu menu-horizontal px-1'
          : 'menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-base-content border border-base-200'
      }
    >
      <li>
        <MenuLink href={PRODUCTS.INDEX} name={t('products_list')} />
      </li>
      <li tabIndex={0}>
        <details>
          <summary>{t('category')}</summary>
          <ul
            className={`p-2 w-32 text-base-content z-[9999] ${
              isDesktop ? 'border border-base-200' : ''
            }`}
          >
            <li>
              <a>Apple</a>
            </li>
            <li>
              <a>Samsung</a>
            </li>
          </ul>
        </details>
      </li>
      <li>
        {/* TODO: Check auth */}
        <MenuLink href={ORDERS.INDEX} name={t('order_list')} />
      </li>
    </ul>
  )
}

export default Menu
