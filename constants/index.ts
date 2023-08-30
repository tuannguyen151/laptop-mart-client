export const ATTRIBUTE_CONFIGS: {
  key: keyof IAttributes
  accessor: (attr: any) => string
}[] = [
  { key: 'manufacturer', accessor: (attr: IManufacturer) => attr.name },
  { key: 'processor', accessor: (attr: IProcessor) => attr.name },
  { key: 'ram', accessor: (attr: IRam) => `${attr.size} GB` },
  {
    key: 'storage',
    accessor: (attr: IStorage) => `${attr.type} ${attr.size} GB`
  },
  { key: 'graphicsCard', accessor: (attr: IGraphicsCard) => attr.name },
  { key: 'display', accessor: (attr: IDisplay) => `${attr.size} inch` },
  { key: 'resolution', accessor: (attr: IResolution) => attr.name },
  { key: 'refreshRate', accessor: (attr: IRefreshRate) => `${attr.rate} Hz` },
  { key: 'color', accessor: (attr: IColor) => attr.name },
  { key: 'operatingSystem', accessor: (attr: IOperatingSystem) => attr.name }
]

export * from './api'
export * as API_ERROR_TYPE from './api_error_type'
