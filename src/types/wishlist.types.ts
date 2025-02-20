import { IBase } from "./base.types"

export enum EnumAccessLevel {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  INVITE = "INVITE"
}

export interface IWishlistResponse extends IBase {
  title: string
  description?: string
  isGroupList: boolean
  accessLevel: EnumAccessLevel

  deletedAt?: string
}

export type TypeWishlistFormState = Partial<Omit<IWishlistResponse, "id" | "updatedAt">>
