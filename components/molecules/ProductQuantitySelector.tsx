import { useEffect, useState } from 'react'

interface IProps {
  inventory: number
  quantity?: number
  onChange?: (quantity: number) => void
}

const ProductQuantitySelector = ({ quantity, inventory, onChange }: IProps) => {
  const [quantityState, setQuantityState] = useState(quantity || 1)

  useEffect(() => {
    if (inventory < quantityState) {
      setQuantityState(inventory)
    }
  }, [inventory, quantityState])

  const handleChange = (quantity: number) => {
    setQuantityState(quantity)
    onChange?.(quantity)
  }

  return (
    <div className='flex gap-2 items-center'>
      <button
        className='btn btn-circle btn-xs btn-info text-white'
        onClick={() => {
          if (quantityState > 1) handleChange(quantityState - 1)
        }}
      >
        -
      </button>

      <input
        type='number'
        min={0}
        max={inventory}
        value={quantityState}
        className='input input-sm input-bordered focus:outline-none !pl-4 !pr-0 font-bold w-16 text-lg text-center'
        onChange={(e) => {
          handleChange(Number(e.target.value))
        }}
      />

      <button
        className='btn btn-circle btn-xs btn-info text-white'
        onClick={() => {
          if (quantityState < inventory) handleChange(quantityState + 1)
        }}
      >
        +
      </button>
    </div>
  )
}

export default ProductQuantitySelector
