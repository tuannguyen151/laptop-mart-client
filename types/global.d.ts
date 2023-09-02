declare global {
  interface IBaseProps {
    className?: string
  }

  interface IColor {
    id: number
    name: string
    hexCode: string
  }

  interface IDisplay {
    id: number
    size: number
  }

  interface IGraphicsCard {
    id: number
    name: string
  }

  interface IManufacturer {
    id: number
    name: string
  }

  interface IOperatingSystem {
    id: number
    name: string
  }

  interface IProcessor {
    id: number
    name: string
  }

  interface IRam {
    id: number
    size: number
  }

  interface IRefreshRate {
    id: number
    rate: number
  }

  interface IResolution {
    id: number
    name: string
  }

  interface IStorage {
    id: number
    type: string
    size: number
  }

  interface IAttributes {
    color: IColor
    display: IDisplay
    graphicsCard: IGraphicsCard
    manufacturer: IManufacturer
    operatingSystem: IOperatingSystem
    processor: IProcessor
    ram: IRam
    refreshRate: IRefreshRate
    resolution: IResolution
    storage: IStorage
  }

  interface IProvince {
    id: number
    code: string
    name: string
  }

  interface IDistrict {
    id: number
    name: string
    province_id: number
  }

  interface IWard {
    id: number
    name: string
    district_id: number
  }
}

export {}
