import { IProduct } from './product'

import { ORDER } from '@/constants/master_data'

export interface IOrderCreateResponse {
  id: number
}

export interface IOrderItemResponse {
  id: number
  orderId: number
  productId: IProduct['id']
  quantity: number
  price: number
}

export interface IOrderPaymentResponse {
  id: number
  orderId: number
  status: number
  method: number
  createdAt: string // ISO 8601
}

export interface IOrderResponse {
  id: number
  recipientName: string
  recipientPhone: string
  status: keyof typeof ORDER.STATUS
  totalAmount: number
  shippingAddress: string
  note?: string
  orderItems: IOrderItemResponse[]
  orderPayment: IOrderPaymentResponse
  createdAt: string // ISO 8601
}

export interface IOrderListItem {
  id: number
  status: keyof typeof ORDER.STATUS
  recipientName: string
  recipientPhone: string
  totalAmount: number
  shippingAddress: string
  note?: string
  createdAt: string // ISO 8601
  orderItems: IOrderItemResponse[]
  orderPayment?: IOrderPaymentResponse
}
