import { IProduct } from '../response/product'

import { ORDER } from '@/constants/master_data'

export interface IOrderShippingAddressRequest {
  provinceId?: IProvince['id']
  districtId?: IDistrict['id']
  wardId?: IWard['id']
  address?: string
}

export interface IOrderRequest {
  recipientName: string
  recipientPhone: string
  shippingAddress: string
  note?: string
  orderItems: {
    productId: IProduct['id']
    quantity: number
  }[]
}

export interface IOrderUpdateRequest
  extends Partial<Omit<IOrderRequest, 'orderItems'>> {
  status?: keyof typeof ORDER.STATUS
}
