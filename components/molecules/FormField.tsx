import { UseFormRegisterReturn } from 'react-hook-form'

interface IProps {
  label: string
  register?: UseFormRegisterReturn
  errorMessage?: string
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>
}

const FormField = ({ label, register, errorMessage, inputProps }: IProps) => {
  return (
    <div className='form-control'>
      <label className='label'>
        <span className='label-text'>{label}</span>
      </label>
      <input
        type='text'
        {...inputProps}
        className={`input input-bordered ${errorMessage ? 'input-error' : ''}`}
        {...register}
      />
      <label className='label'>
        <span className='label-text-alt text-error'>{errorMessage}</span>
      </label>
    </div>
  )
}

export default FormField
