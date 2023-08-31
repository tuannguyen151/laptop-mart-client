export interface IResponsePostMethod {
  message: string
}

export interface IResponsePatchMethod {
  message: string
}

export interface IResponseDeleteMethod {
  message: string
}

export interface IResponseError {
  success: false
  code: number
  error: {
    type: string
    description: string
  }
}

export * from './login'
export * from './user'
