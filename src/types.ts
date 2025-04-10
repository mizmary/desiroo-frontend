export type TPriorityLevel = "LOW" | "MEDIUM" | "HIGH"

export type TPriceRange =
  | "UpTo1000"
  | "From1000To5000"
  | "From5000To10000"
  | "From10000To50000"
  | "Over50000"

export type TListItem = {
  title: string
  description?: string
  link?: string
  priority: TPriorityLevel
  priceRange: TPriceRange
}

export type TWishlist = {
  title: string
  itemCount: string
  averageBudget: string
  acquiredPercentage: number
}

export type TSize = "small" | "medium" | "large"

export type TVariant = "primary" | "secondary" | "tertiary"

export type TColor = "purple" | "peach" | "pink" | "danger"
