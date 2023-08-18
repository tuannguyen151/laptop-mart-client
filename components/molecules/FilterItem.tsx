export interface IProps {
  title: string
  data: {
    id: number
    name: string
  }[]
}

const FilterItem = ({ title, data }: IProps) => {
  return (
    <>
      <h6 className='border-b pb-1 text-lg font-bold uppercase'>{title}</h6>

      {data.map((item) => (
        <label
          key={item.id}
          className='label cursor-pointer justify-start gap-2'
        >
          <input
            type='checkbox'
            className='checkbox checkbox-sm'
            value={item.id}
          />
          <span className='label-text'>{item.name}</span>
        </label>
      ))}
    </>
  )
}

export default FilterItem
