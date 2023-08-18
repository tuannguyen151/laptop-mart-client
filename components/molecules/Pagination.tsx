interface IProps {
  total: number
  limit: number
  page: number
  setPage: (page: number) => void
}

const buttonDisableClass = 'opacity-30 pointer-events-none'

const Pagination = ({ total, limit, page, setPage }: IProps) => {
  const totalPage = Math.ceil(total / limit)

  return (
    <div className='join'>
      <button
        className={`join-item btn btn-outline ${
          page === 1 ? buttonDisableClass : ''
        }`}
        onClick={() => setPage(1)}
      >
        «
      </button>

      <button
        className={`join-item btn btn-outline ${
          page === 1 ? buttonDisableClass : ''
        }`}
        onClick={() => setPage(page - 1)}
      >
        ‹
      </button>

      {page - 1 > 0 && (
        <button
          className='join-item btn btn-outline'
          onClick={() => setPage(page - 1)}
        >
          {page - 1}
        </button>
      )}

      <button className='join-item btn btn-outline btn-active pointer-events-none'>
        {page}
      </button>

      {page + 1 <= totalPage && (
        <button
          className='join-item btn btn-outline'
          onClick={() => setPage(page + 1)}
        >
          {page + 1}
        </button>
      )}

      <button
        className={`join-item btn btn-outline ${
          page === totalPage ? buttonDisableClass : ''
        }`}
        onClick={() => setPage(page + 1)}
      >
        ›
      </button>

      <button
        className={`join-item btn btn-outline ${
          page === totalPage ? buttonDisableClass : ''
        }`}
        onClick={() => setPage(totalPage)}
      >
        »
      </button>
    </div>
  )
}

export default Pagination
