export interface IProductListRequest {
  isParent?: boolean
  ids?: number[]
  sort?: string
  pageSize?: number
  page?: number
}
