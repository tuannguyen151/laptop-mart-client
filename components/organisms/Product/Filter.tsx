import useTranslation from 'next-translate/useTranslation'

import ProductFilterItem, {
  IProps as IProductFilterItem
} from '@/components/molecules/FilterItem'

const ProductFilter = () => {
  const { t } = useTranslation()

  // TODO: Fetch data from API
  const data: IProductFilterItem[] = [
    {
      title: 'Hãng sản xuất',
      data: [
        {
          id: 1,
          name: 'Apple'
        },
        {
          id: 2,
          name: 'Samsung'
        },
        {
          id: 3,
          name: 'Asus'
        }
      ]
    },
    {
      title: 'Màu sắc',
      data: [
        {
          id: 1,
          name: 'Đen'
        },
        {
          id: 2,
          name: 'Trắng'
        },
        {
          id: 3,
          name: 'Xanh'
        }
      ]
    },
    {
      title: 'CPU',
      data: [
        {
          id: 1,
          name: 'Intel Core i3'
        },
        {
          id: 2,
          name: 'Intel Core i5'
        },
        {
          id: 3,
          name: 'Intel Core i7'
        }
      ]
    },
    {
      title: 'RAM',
      data: [
        {
          id: 1,
          name: '4 GB'
        },
        {
          id: 2,
          name: '8 GB'
        },
        {
          id: 3,
          name: '16 GB'
        }
      ]
    },
    {
      title: 'Ổ cứng',
      data: [
        {
          id: 1,
          name: '128 GB'
        },
        {
          id: 2,
          name: '256 GB'
        },
        {
          id: 3,
          name: '512 GB'
        }
      ]
    },
    {
      title: 'Kích thước màn hình',
      data: [
        {
          id: 1,
          name: '13 inch'
        },
        {
          id: 2,
          name: '14 inch'
        },
        {
          id: 3,
          name: '15 inch'
        }
      ]
    },
    {
      title: 'Độ phân giải',
      data: [
        {
          id: 1,
          name: 'HD'
        },
        {
          id: 2,
          name: 'Full HD'
        },
        {
          id: 3,
          name: '2K'
        }
      ]
    },
    {
      title: 'Card đồ họa',
      data: [
        {
          id: 1,
          name: 'Intel UHD Graphics'
        },
        {
          id: 2,
          name: 'NVIDIA GeForce MX350'
        },
        {
          id: 3,
          name: 'NVIDIA GeForce GTX 1650'
        }
      ]
    },
    {
      title: 'Hệ điều hành',
      data: [
        {
          id: 1,
          name: 'Windows'
        },
        {
          id: 2,
          name: 'MacOS'
        },
        {
          id: 3,
          name: 'Linux'
        }
      ]
    }
  ]

  return (
    <>
      <div>
        <h6 className='text-lg font-bold uppercase'>{t('search_by_name')}</h6>
        <input
          type='text'
          placeholder={t('enter_product_name')}
          className='input input-bordered w-full max-w-xs input-sm'
        />
      </div>

      {data.map((item) => (
        <div key={item.title}>
          <ProductFilterItem {...item} />
        </div>
      ))}
    </>
  )
}

export default ProductFilter
