export type PriceRange =
  | "UpTo1000"
  | "From1000To5000"
  | "From5000To10000"
  | "From10000To50000"
  | "Over50000"

export type PriorityLevel = "LOW" | "MEDIUM" | "HIGH"

type PriceTagProps = {
  type: "price"
  value: PriceRange
}

type PriorityTagProps = {
  type: "priority"
  value: PriorityLevel
}

export type ItemTagProps = PriceTagProps | PriorityTagProps
