import { IBase } from "./base.types"

export enum EnumPriceRange {
  UpTo1000 = "UpTo1000",
  From1000To5000 = "From1000To5000",
  From5000To10000 = "From5000To10000",
  From10000To50000 = "From10000To50000",
  Over50000 = "Over50000"
}

export enum EnumPriority {
  LOW = "LOW",
  MEDIUM = "MEDIUM",
  HIGH = "HIGH"
}

export interface IWishlistItemResponse extends IBase {
  title: string
  description?: string
  link?: string

  deletedAt?: string
}

export type TypeWishlistItemFormState = Partial<Omit<IWishlistItemResponse, "id" | "updatedAt">>
