export interface IAuthForm {
  email: string
  password: string
}

export interface IUser {
  id: string
  email: string
  name: string

  bio?: string
  tags: string[]

  shirtSizes: string[]
  shoeSizes: string[]
  ringSizes: string[]
  braceletSizes: string[]
  necklaceSizes: string[]
}

export interface IAuthResponse {
  accessToken: string
  user: IUser
}

export type TypeUserForm = Omit<IUser, "id"> & { password?: string }
