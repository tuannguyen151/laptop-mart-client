import useTranslation from 'next-translate/useTranslation'

import { useCallback } from 'react'
import { toast } from 'react-toastify'

import NoResultsFound from '@/components/atoms/NoResultsFound'
import MenuIcon from '@/components/atoms/icons/Menu'
import Pagination from '@/components/molecules/Pagination'
import ProductFilter from '@/components/organisms/Product/Filter'
import ProductList from '@/components/organisms/Product/List'

import { useListProduct } from '@/services/products/list'
import { IProductListRequest } from '@/types/request/product'
import { IProductList } from '@/types/response/product'

const List = (props: IProductList) => {
  const { t } = useTranslation()

  const { data, payload, setPayload, isLoading, isValidating, error } =
    useListProduct(props)

  const onFilterChange = useCallback(
    (payload: IProductListRequest) => {
      setPayload((prev) => ({ ...prev, page: 1, ...payload }))
    },
    [setPayload]
  )

  if (error) toast.error(t('errors:load_page_error') as string)

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

        <ProductList products={data?.rows || []} />

        {data?.count === 0 && !isLoading && <NoResultsFound />}

        {data?.count !== 0 && !isValidating && (
          <div className='flex justify-center items-center mt-6'>
            <Pagination
              page={payload?.page as number}
              limit={payload?.pageSize as number}
              total={data?.count as number}
              setPage={(page) => setPayload((prev) => ({ ...prev, page }))}
            />
          </div>
        )}
      </div>

      <div className='drawer-side z-50'>
        <label htmlFor='product-list-drawer' className='drawer-overlay'></label>

        <ProductFilter onChange={onFilterChange} />
      </div>
    </div>
  )
}

export default List
