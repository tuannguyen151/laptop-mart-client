import useTranslation from 'next-translate/useTranslation'

interface IProps {
  description: string
}

const ProductDescription = ({ description }: IProps) => {
  const { t } = useTranslation()

  return (
    <div>
      <div className='divider'>
        <h5 className='text-xl font-semibold'>{t('description')}</h5>
      </div>

      <div
        className='prose max-w-full'
        dangerouslySetInnerHTML={{ __html: description }}
      />
    </div>
  )
}

export default ProductDescription
