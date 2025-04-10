import { PriceRange, PriorityLevel } from "./ItemTag/itemTag.types"

export interface ListItemCardProps {
  listItem: {
    title: string
    description?: string
    link?: string
    priority: PriorityLevel
    priceRange: PriceRange
  }
  isCompleted?: boolean
}
