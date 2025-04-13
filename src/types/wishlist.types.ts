import { IBase } from "./base.types"

export enum EnumAccessLevel {
  PRIVATE = "PRIVATE",
  PUBLIC = "PUBLIC",
  INVITE = "INVITE"
}

export interface IWishlistResponse extends IBase {
  deletedAt?: string
  userID: string
  title: string
  description?: string
  isGroupList: boolean
  accessLevel: EnumAccessLevel
}

export type TypeWishlistFormState = Partial<
  Omit<IWishlistResponse, "id" | "updatedAt" | "deletedAt">
>
