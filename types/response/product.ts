export interface IProductMasterData {
  colors: IColor[]
  displays: IDisplay[]
  graphicsCards: IGraphicsCard[]
  manufacturers: IManufacturer[]
  operatingSystems: IOperatingSystem[]
  processors: IProcessor[]
  rams: IRam[]
  refreshRates: IRefreshRate[]
  resolutions: IResolution[]
  storages: IStorage[]
}

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

export interface IProductListItem {
  id: number
  parentId?: number
  name: string
  price: number
  inventory: number
  quantitySold: number
  weight: number
  images: {
    url: string
  }[]
  description?: string
  createdAt: string // ISO 8601
}

export interface IProductList {
  count: number
  rows: IProductListItem[]
}
