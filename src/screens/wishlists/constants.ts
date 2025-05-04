export const ACCESS_LEVEL = {
  private: "PRIVATE",
  public: "PUBLIC",
  invite: "INVITE"
} as const

export const ACCESS_OPTIONS = [
  {
    value: ACCESS_LEVEL.public,
    label: "Публичный список"
  },
  {
    value: ACCESS_LEVEL.private,
    label: "Приватный список"
  }
]

export const PRICE_RANGE = {
  UpTo1000: "UpTo1000",
  From1000To5000: "From1000To5000",
  From5000To10000: "From5000To10000",
  From10000To50000: "From10000To50000",
  Over50000: "Over50000"
} as const

export const PRIORITY = {
  low: "LOW",
  medium: "MEDIUM",
  high: "HIGH"
} as const
