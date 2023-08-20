import useTranslation from 'next-translate/useTranslation'

import ProductAttribute from '../atoms/ProductAttribute'

const ProductAttributes = (attributes: IAttributes) => {
  const { t } = useTranslation()

  return (
    <div>
      <h5 className='text-xl font-semibold mb-2'>
        {t('product_specifications')}
      </h5>

      <ul className='list-none list-inside'>
        <ProductAttribute
          name={t('product_attributes.manufacturer')}
          value={attributes.manufacturer.name}
        />

        <ProductAttribute
          name={t('product_attributes.processor')}
          value={attributes.processor.name}
        />

        <ProductAttribute
          name={t('product_attributes.ram')}
          value={attributes.ram.size + ' GB'}
        />

        <ProductAttribute
          name={t('product_attributes.storage')}
          value={
            attributes.storage.type + ' ' + attributes.storage.size + ' GB'
          }
        />

        <ProductAttribute
          name={t('product_attributes.graphics_card')}
          value={attributes.graphicsCard.name}
        />

        <ProductAttribute
          name={t('product_attributes.display')}
          value={attributes.display.size + ' inch'}
        />

        <ProductAttribute
          name={t('product_attributes.resolution')}
          value={attributes.resolution.name}
        />

        <ProductAttribute
          name={t('product_attributes.refresh_rate')}
          value={attributes.refreshRate.rate + ' Hz'}
        />

        <ProductAttribute
          name={t('product_attributes.color')}
          value={attributes.color.name}
        />

        <ProductAttribute
          name={t('product_attributes.operating_system')}
          value={attributes.operatingSystem.name}
        />
      </ul>
    </div>
  )
}

export default ProductAttributes
