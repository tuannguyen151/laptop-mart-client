export interface IProductVariant extends Partial<IAttributes> {
  id: number
  parentId: number
  name: string
  price: number
  inventory: number
  quantitySold: number
  weight: number
  description?: string
  createdAt: string // ISO 8601
  images: {
    url: string
  }[]
}

export interface IProduct extends IAttributes {
  id: number
  parentId?: null
  name: string
  price: number
  inventory: number
  quantitySold: number
  weight: number
  description?: string
  createdAt: string // ISO 8601
  images: {
    url: string
  }[]
  variants?: IProductVariant[]
}
