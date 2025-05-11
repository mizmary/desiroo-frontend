import { ACCESS_LEVEL, PRICE_RANGE, PRIORITY } from "./constants"

export type TAccessLevel = (typeof ACCESS_LEVEL)[keyof typeof ACCESS_LEVEL]
export type TPriceRange = (typeof PRICE_RANGE)[keyof typeof PRICE_RANGE]
export type TPriority = (typeof PRIORITY)[keyof typeof PRIORITY]

export type TWishlist = {
  id: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string

  user: string
  title: string
  description?: string
  isGroupList: boolean
  accessLevel: TAccessLevel
  items: TWishlistItem[]
}

export type TWishlistForm = Partial<Omit<TWishlist, "id" | "createdAt" | "updatedAt" | "deletedAt">>

export type TWishlistItem = {
  id: string
  createdAt?: string
  updatedAt?: string
  deletedAt?: string

  wishlist: string
  title: string
  description?: string
  link?: string
  priceRange: TPriceRange
  priority: TPriority
  isCompleted: boolean
  imagesURL: string
  isReserved: boolean
  reserveUserId?: string
}

export type TWishlistItemForm = Partial<
  Omit<TWishlistItem, "id" | "createdAt" | "updatedAt" | "deletedAt">
>

export type TModalBaseProps = {
  isOpen: boolean
  onClose: () => void
}
