import { useEffect } from 'react'

interface IProps {
  inventory: number
  quantity?: number
  onChange?: (quantity: number) => void
}

const ProductQuantitySelector = ({
  quantity = 1,
  inventory,
  onChange
}: IProps) => {
  useEffect(() => {
    const clampedQuantity = Math.min(Math.max(1, quantity || 1), inventory)
    if (quantity !== clampedQuantity) {
      onChange?.(clampedQuantity)
    }
  }, [inventory, quantity, onChange])

  const handleDecrease = () => {
    handleChange(quantity - 1)
  }

  const handleIncrease = () => {
    handleChange(quantity + 1)
  }

  const handleChange = (newQuantity: number) => {
    const clampedQuantity = Math.min(Math.max(1, newQuantity), inventory)
    onChange?.(clampedQuantity)
  }

  return (
    <div className='flex gap-2 items-center'>
      <button
        className='btn btn-circle btn-xs btn-info text-white'
        onClick={handleDecrease}
        disabled={quantity === 1}
      >
        -
      </button>

      <input
        type='number'
        min={1}
        max={inventory}
        value={quantity}
        className='input input-sm input-bordered focus:outline-none !pl-4 !pr-0 font-bold w-16 text-lg text-center'
        onChange={(e) => {
          handleChange(Number(e.target.value))
        }}
      />

      <button
        className='btn btn-circle btn-xs btn-info text-white'
        onClick={handleIncrease}
        disabled={quantity === inventory}
      >
        +
      </button>
    </div>
  )
}

export default ProductQuantitySelector
