import Layout from '../Layout'

export default function Loading() {
  return (
    <Layout>
      <div className='my-4 flex-1 flex justify-center items-center bg-slate-100 dark:bg-slate-800 animate-pulse rounded-box'>
        <span className='loading loading-dots w-16' />
      </div>
    </Layout>
  )
}
