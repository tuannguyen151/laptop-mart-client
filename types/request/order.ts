import { IProduct } from '../response/product'

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
