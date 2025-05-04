import { ACCESS_LEVEL, PRICE_RANGE, PRIORITY } from "./constants"

export type AccessLevel = (typeof ACCESS_LEVEL)[keyof typeof ACCESS_LEVEL]
export type PriceRange = (typeof PRICE_RANGE)[keyof typeof PRICE_RANGE]
export type Priority = (typeof PRIORITY)[keyof typeof PRIORITY]

export type TWishlist = {
  id: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string

  user: string
  title: string
  description?: string
  isGroupList: boolean
  accessLevel: AccessLevel
  items: TWishlistItem[]
}

export type TWishlistForm = Partial<Omit<TWishlist, "id" | "createdAt" | "updatedAt" | "deletedAt">>

export type TWishlistItem = {
  id: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string

  wishlistID: string
  title: string
  description?: string
  link?: string
  priceRange: PriceRange
  priority: Priority
  isCompleted: boolean
  imagesURL: string[]
  isReserved: boolean
  reserveUserID?: string
}

export type TWishlistItemForm = Partial<
  Omit<TWishlist, "id" | "createdAt" | "updatedAt" | "deletedAt">
>
