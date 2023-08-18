import useTranslation from 'next-translate/useTranslation'

import MenuIcon from '@/components/atoms/icons/Menu'
import ProductFilter from '@/components/organisms/Product/Filter'
import ProductList from '@/components/organisms/Product/List'

const List = () => {
  const { t } = useTranslation()

  return (
    <div className='drawer lg:drawer-open'>
      <input
        id='product-list-drawer'
        type='checkbox'
        className='drawer-toggle'
      />

      <div className='drawer-content py-4'>
        <div className='lg:mb-0 mb-2'>
          <label
            htmlFor='product-list-drawer'
            className='btn btn-neutral btn-sm btn-outline drawer-button lg:hidden'
          >
            <MenuIcon className='h-5 w-5' />
            {t('open_filter')}
          </label>
        </div>

        <ProductList />
      </div>

      <div className='drawer-side z-50'>
        <label htmlFor='product-list-drawer' className='drawer-overlay'></label>

        <div className='w-60 h-fit max-lg:bg-base-200 max-lg:text-base-content px-2 flex flex-col gap-4 py-4'>
          <ProductFilter />
        </div>
      </div>
    </div>
  )
}

export default List
