export interface IProductFilterRequest {
  name?: string
  manufacturerIds?: number[]
  colorIds?: number[]
  processorIds?: number[]
  ramIds?: number[]
  storageIds?: number[]
  displayIds?: number[]
  refreshRateIds?: number[]
  resolutionIds?: number[]
  graphicsCardIds?: number[]
  operatingSystemIds?: number[]
}

export interface IProductListRequest extends IProductFilterRequest {
  isParent?: boolean
  ids?: string // comma separated
  sort?: string
  pageSize?: number
  page?: number
}
