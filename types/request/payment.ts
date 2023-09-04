import { PAYMENT } from '@/constants/master_data'

export interface IPaymentRequest {
  method: keyof typeof PAYMENT.METHOD
}
